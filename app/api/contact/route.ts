import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendTemplateEmail, sendAdminAlert } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create contact record
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject: subject || 'General Inquiry',
        message,
        status: 'new',
      },
    });

    // Send confirmation email to user
    await sendTemplateEmail({
      to: email,
      template: 'contact-confirmation',
      subject: 'We Received Your Message - UCESCO Africa',
      templateData: { name, message },
    });

    // Send admin alert
    await sendAdminAlert(
      'New Contact Message',
      'New Contact Form Submission',
      `${name} (${email}) sent a message`,
      { subject, message, phone }
    );

    return NextResponse.json({
      success: true,
      contactId: contact.id,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
