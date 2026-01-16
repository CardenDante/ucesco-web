import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createPaymentToken, generateTransactionReference } from '@/lib/dpo';
import { sendTemplateEmail, sendAdminAlert } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      sponsorName,
      sponsorEmail,
      sponsorPhone,
      childCode,
      childName,
      amount,
      frequency,
    } = body;

    // Validate required fields
    if (!sponsorName || !sponsorEmail || !childCode || !childName || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create sponsorship record
    const sponsorship = await prisma.sponsorship.create({
      data: {
        sponsorName,
        sponsorEmail,
        sponsorPhone,
        childCode,
        childName,
        amount: parseFloat(amount),
        frequency: frequency || 'monthly',
        status: 'pending',
        startDate: new Date(),
      },
    });

    // Create transaction record
    const transactionRef = generateTransactionReference('SPONSOR');
    const transaction = await prisma.transaction.create({
      data: {
        type: 'sponsorship',
        amount: parseFloat(amount),
        status: 'pending',
        dpoReference: transactionRef,
        sponsorshipId: sponsorship.id,
      },
    });

    // Create DPO payment token
    const paymentResult = await createPaymentToken({
      amount: parseFloat(amount),
      reference: transactionRef,
      customerName: sponsorName,
      customerEmail: sponsorEmail,
      customerPhone: sponsorPhone || '',
      description: `Child Sponsorship - ${childName} (${childCode})`,
      redirectUrl: `${process.env.NEXTAUTH_URL}/api/payment/verify?ref=${transactionRef}&type=sponsorship`,
      backUrl: `${process.env.NEXTAUTH_URL}/sponsor/${childCode}`,
    });

    if (!paymentResult.success || !paymentResult.transToken) {
      // Update transaction status to failed
      await prisma.transaction.update({
        where: { id: transaction.id },
        data: { status: 'failed' },
      });

      return NextResponse.json(
        { success: false, error: paymentResult.error || 'Payment initialization failed' },
        { status: 500 }
      );
    }

    // Update transaction with DPO token
    await prisma.transaction.update({
      where: { id: transaction.id },
      data: {
        dpoTransactionId: paymentResult.transToken,
        metadata: { transRef: paymentResult.transRef },
      },
    });

    // Update sponsorship with DPO token
    await prisma.sponsorship.update({
      where: { id: sponsorship.id },
      data: { dpoToken: paymentResult.transToken },
    });

    // Send admin alert
    await sendAdminAlert(
      'New Sponsorship',
      'New Child Sponsorship Initiated',
      `${sponsorName} has initiated sponsorship for ${childName} (${childCode})`,
      { sponsorEmail, amount, frequency }
    );

    return NextResponse.json({
      success: true,
      sponsorshipId: sponsorship.id,
      transactionId: transaction.id,
      paymentToken: paymentResult.transToken,
      paymentUrl: `${process.env.NEXT_PUBLIC_DPO_PAYMENT_URL}?ID=${paymentResult.transToken}`,
    });
  } catch (error) {
    console.error('Sponsorship API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
