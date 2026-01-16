import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createPaymentToken, generateTransactionReference } from '@/lib/dpo';
import { sendAdminAlert } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { donorName, donorEmail, donorPhone, amount, purpose, message } = body;

    // Validate required fields
    if (!donorName || !donorEmail || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create donation record
    const donation = await prisma.donation.create({
      data: {
        donorName,
        donorEmail,
        donorPhone,
        amount: parseFloat(amount),
        purpose: purpose || 'General',
        message,
        status: 'pending',
      },
    });

    // Create transaction record
    const transactionRef = generateTransactionReference('DONATE');
    const transaction = await prisma.transaction.create({
      data: {
        type: 'donation',
        amount: parseFloat(amount),
        status: 'pending',
        dpoReference: transactionRef,
        donationId: donation.id,
      },
    });

    // Create DPO payment token
    const paymentResult = await createPaymentToken({
      amount: parseFloat(amount),
      reference: transactionRef,
      customerName: donorName,
      customerEmail: donorEmail,
      customerPhone: donorPhone || '',
      description: `Donation - ${purpose || 'General Support'}`,
      redirectUrl: `${process.env.NEXTAUTH_URL}/api/payment/verify?ref=${transactionRef}&type=donation`,
      backUrl: `${process.env.NEXTAUTH_URL}/donate`,
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

    // Send admin alert
    await sendAdminAlert(
      'New Donation',
      'New Donation Initiated',
      `${donorName} has initiated a donation of $${amount}`,
      { donorEmail, purpose, amount }
    );

    return NextResponse.json({
      success: true,
      donationId: donation.id,
      transactionId: transaction.id,
      paymentToken: paymentResult.transToken,
      paymentUrl: `${process.env.NEXT_PUBLIC_DPO_PAYMENT_URL}?ID=${paymentResult.transToken}`,
    });
  } catch (error) {
    console.error('Donation API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
