import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPayment } from '@/lib/dpo';
import { sendTemplateEmail, sendAdminAlert } from '@/lib/email';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const ref = searchParams.get('ref');
    const type = searchParams.get('type'); // 'sponsorship' or 'donation'
    const transToken = searchParams.get('TransactionToken');

    if (!ref || !type) {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/payment/failed?error=missing_params`);
    }

    // Find transaction by reference
    const transaction = await prisma.transaction.findFirst({
      where: { dpoReference: ref },
      include: {
        sponsorship: true,
        donation: true,
      },
    });

    if (!transaction) {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/payment/failed?error=transaction_not_found`);
    }

    // Verify payment with DPO
    const dpoToken = transToken || transaction.dpoTransactionId;
    if (!dpoToken) {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/payment/failed?error=missing_token`);
    }

    const verificationResult = await verifyPayment(dpoToken);

    if (!verificationResult.success) {
      return NextResponse.redirect(
        `${process.env.NEXTAUTH_URL}/payment/failed?error=${verificationResult.error}`
      );
    }

    // Update transaction status
    await prisma.transaction.update({
      where: { id: transaction.id },
      data: {
        status: verificationResult.status === 'Paid' ? 'completed' : verificationResult.status?.toLowerCase(),
        metadata: {
          ...(transaction.metadata as object),
          verificationResult,
          verifiedAt: new Date().toISOString(),
        },
      },
    });

    if (verificationResult.status === 'Paid') {
      // Handle successful payment
      if (type === 'sponsorship' && transaction.sponsorship) {
        // Update sponsorship status
        await prisma.sponsorship.update({
          where: { id: transaction.sponsorshipId! },
          data: {
            status: 'active',
            nextBillingDate: calculateNextBillingDate(transaction.sponsorship.frequency),
          },
        });

        // Send confirmation email to sponsor
        await sendTemplateEmail({
          to: transaction.sponsorship.sponsorEmail,
          template: 'sponsorship-confirmation',
          subject: `Thank You for Sponsoring ${transaction.sponsorship.childName}!`,
          templateData: {
            sponsorName: transaction.sponsorship.sponsorName,
            childName: transaction.sponsorship.childName,
            childCode: transaction.sponsorship.childCode,
            amount: transaction.amount,
            frequency: transaction.sponsorship.frequency,
            nextBillingDate: calculateNextBillingDate(transaction.sponsorship.frequency),
          },
        });

        // Send admin alert
        await sendAdminAlert(
          'Sponsorship Completed',
          'Child Sponsorship Payment Completed',
          `${transaction.sponsorship.sponsorName} completed payment for ${transaction.sponsorship.childName}`,
          {
            amount: transaction.amount,
            transactionId: transaction.dpoTransactionId,
          }
        );

        return NextResponse.redirect(
          `${process.env.NEXTAUTH_URL}/payment/success?type=sponsorship&child=${transaction.sponsorship.childName}`
        );
      } else if (type === 'donation' && transaction.donation) {
        // Update donation status
        await prisma.donation.update({
          where: { id: transaction.donationId! },
          data: { status: 'completed' },
        });

        // Send receipt email to donor
        await sendTemplateEmail({
          to: transaction.donation.donorEmail,
          template: 'donation-receipt',
          subject: 'Thank You for Your Donation - UCESCO Africa',
          templateData: {
            donorName: transaction.donation.donorName,
            amount: transaction.amount,
            purpose: transaction.donation.purpose,
            transactionId: transaction.dpoTransactionId || transaction.id,
          },
        });

        // Send admin alert
        await sendAdminAlert(
          'Donation Completed',
          'Donation Payment Completed',
          `${transaction.donation.donorName} completed donation of $${transaction.amount}`,
          {
            purpose: transaction.donation.purpose,
            transactionId: transaction.dpoTransactionId,
          }
        );

        return NextResponse.redirect(
          `${process.env.NEXTAUTH_URL}/payment/success?type=donation&amount=${transaction.amount}`
        );
      }
    }

    // Payment not completed or pending
    return NextResponse.redirect(
      `${process.env.NEXTAUTH_URL}/payment/pending?status=${verificationResult.status}`
    );
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/payment/failed?error=verification_failed`);
  }
}

function calculateNextBillingDate(frequency: string): Date {
  const now = new Date();
  if (frequency === 'yearly') {
    return new Date(now.setFullYear(now.getFullYear() + 1));
  }
  // Default to monthly
  return new Date(now.setMonth(now.getMonth() + 1));
}
