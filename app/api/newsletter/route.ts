import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail, sendAdminAlert } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.status === 'unsubscribed') {
        // Reactivate subscription
        await prisma.newsletter.update({
          where: { email },
          data: { status: 'active' },
        });
        return NextResponse.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
        });
      }
      return NextResponse.json({
        success: true,
        message: 'You are already subscribed to our newsletter.',
      });
    }

    // Create newsletter subscription
    const subscription = await prisma.newsletter.create({
      data: {
        email,
        name,
        source: source || 'website',
        status: 'active',
      },
    });

    // Send welcome email
    await sendEmail({
      to: email,
      subject: 'Welcome to UCESCO Africa Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #62C3D9; color: white; padding: 20px; text-align: center;">
            <h1>Welcome to UCESCO Africa!</h1>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p>Dear ${name || 'Friend'},</p>
            <p>Thank you for subscribing to our newsletter! You'll now receive:</p>
            <ul>
              <li>Impact stories from our communities</li>
              <li>Updates on our programs and initiatives</li>
              <li>Ways to get involved and make a difference</li>
              <li>Exclusive opportunities for supporters</li>
            </ul>
            <p>We're excited to keep you connected to the lives you're helping transform.</p>
            <p>With gratitude,<br>The UCESCO Africa Team</p>
          </div>
          <div style="text-align: center; padding: 20px; font-size: 12px; color: #666;">
            <p>© ${new Date().getFullYear()} UCESCO Africa. All rights reserved.</p>
          </div>
        </div>
      `,
      text: `Dear ${name || 'Friend'},\n\nThank you for subscribing to UCESCO Africa newsletter!\n\nWith gratitude,\nThe UCESCO Africa Team`,
    });

    // Send admin alert
    await sendAdminAlert(
      'New Newsletter Subscription',
      'New Newsletter Subscriber',
      `${email}${name ? ` (${name})` : ''} subscribed to the newsletter`,
      { source }
    );

    return NextResponse.json({
      success: true,
      subscriptionId: subscription.id,
      message: 'Thank you for subscribing! Check your email for confirmation.',
    });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
