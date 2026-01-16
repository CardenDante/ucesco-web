import axios from 'axios';

interface EmailParams {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  cc?: string[];
  bcc?: string[];
}

interface TemplateEmailParams extends Omit<EmailParams, 'html' | 'text'> {
  template: 'sponsorship-confirmation' | 'donation-receipt' | 'contact-confirmation' | 'admin-alert';
  templateData: Record<string, any>;
}

const ZEPTOMAIL_API_URL = 'https://api.zeptomail.com/v1.1/email';

/**
 * Send a transactional email using Zeptomail
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  cc,
  bcc,
}: EmailParams): Promise<boolean> {
  try {
    const apiKey = process.env.ZEPTOMAIL_API_KEY;
    const fromEmail = process.env.ZEPTOMAIL_FROM_EMAIL || 'info@ucesco.org';
    const fromName = process.env.ZEPTOMAIL_FROM_NAME || 'UCESCO Africa';
    const bounceAddress = process.env.ZEPTOMAIL_BOUNCE_ADDRESS || 'noreply@ucesco.org';

    if (!apiKey) {
      console.error('ZEPTOMAIL_API_KEY is not configured');
      return false;
    }

    const recipients = Array.isArray(to)
      ? to.map((email) => ({ email_address: { address: email } }))
      : [{ email_address: { address: to } }];

    const payload = {
      bounce_address: bounceAddress,
      from: {
        address: fromEmail,
        name: fromName,
      },
      to: recipients,
      subject,
      htmlbody: html,
      textbody: text,
      ...(cc && cc.length > 0
        ? { cc: cc.map((email) => ({ email_address: { address: email } })) }
        : {}),
      ...(bcc && bcc.length > 0
        ? { bcc: bcc.map((email) => ({ email_address: { address: email } })) }
        : {}),
    };

    const response = await axios.post(ZEPTOMAIL_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Zoho-enczapikey ${apiKey}`,
      },
      timeout: 10000,
    });

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

/**
 * Send a templated email
 */
export async function sendTemplateEmail({
  to,
  template,
  templateData,
  subject,
  cc,
  bcc,
}: TemplateEmailParams): Promise<boolean> {
  const { html, text } = getEmailTemplate(template, templateData);
  return sendEmail({ to, subject, html, text, cc, bcc });
}

/**
 * Get email template HTML and text
 */
function getEmailTemplate(
  template: TemplateEmailParams['template'],
  data: Record<string, any>
): { html: string; text: string } {
  switch (template) {
    case 'sponsorship-confirmation':
      return {
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #62C3D9; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .button { display: inline-block; padding: 12px 24px; background-color: #38A654; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Thank You for Sponsoring ${data.childName}!</h1>
                </div>
                <div class="content">
                  <p>Dear ${data.sponsorName},</p>
                  <p>Thank you for choosing to sponsor <strong>${data.childName}</strong> (${data.childCode}). Your generosity will make a profound difference in this child's life.</p>
                  <h3>Sponsorship Details:</h3>
                  <ul>
                    <li><strong>Child:</strong> ${data.childName} (${data.childCode})</li>
                    <li><strong>Amount:</strong> $${data.amount} ${data.frequency}</li>
                    <li><strong>Next Billing Date:</strong> ${data.nextBillingDate}</li>
                  </ul>
                  <p>You will receive regular updates, photos, and letters from your sponsored child. You can also write to them through your sponsor dashboard.</p>
                  <p>Your sponsorship provides:</p>
                  <ul>
                    <li>School fees, uniforms, and learning materials</li>
                    <li>Healthcare and medical check-ups</li>
                    <li>Nutritional support</li>
                    <li>Mentorship and counseling</li>
                  </ul>
                  <p>If you have any questions, please don't hesitate to contact us at info@ucesco.org</p>
                  <p>With gratitude,<br>The UCESCO Africa Team</p>
                </div>
                <div class="footer">
                  <p>UCESCO Africa | Building Futures, Transforming Lives</p>
                  <p>© ${new Date().getFullYear()} UCESCO Africa. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Dear ${data.sponsorName},\n\nThank you for sponsoring ${data.childName} (${data.childCode})!\n\nSponsorship Details:\n- Child: ${data.childName} (${data.childCode})\n- Amount: $${data.amount} ${data.frequency}\n- Next Billing Date: ${data.nextBillingDate}\n\nYou will receive regular updates from your sponsored child.\n\nWith gratitude,\nThe UCESCO Africa Team`,
      };

    case 'donation-receipt':
      return {
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #62C3D9; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Thank You for Your Donation!</h1>
                </div>
                <div class="content">
                  <p>Dear ${data.donorName},</p>
                  <p>Thank you for your generous donation of <strong>$${data.amount}</strong> to UCESCO Africa.</p>
                  ${data.purpose ? `<p><strong>Purpose:</strong> ${data.purpose}</p>` : ''}
                  <p>Your contribution helps us continue our vital work in communities across Kenya and Uganda. Together, we are building futures and transforming lives.</p>
                  <h3>Donation Details:</h3>
                  <ul>
                    <li><strong>Amount:</strong> $${data.amount}</li>
                    <li><strong>Transaction ID:</strong> ${data.transactionId}</li>
                    <li><strong>Date:</strong> ${new Date().toLocaleDateString()}</li>
                  </ul>
                  <p>This receipt is for your tax records. UCESCO Africa is a registered charity.</p>
                  <p>With gratitude,<br>The UCESCO Africa Team</p>
                </div>
                <div class="footer">
                  <p>UCESCO Africa | Building Futures, Transforming Lives</p>
                  <p>© ${new Date().getFullYear()} UCESCO Africa. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Dear ${data.donorName},\n\nThank you for your donation of $${data.amount} to UCESCO Africa.\n\nTransaction ID: ${data.transactionId}\nDate: ${new Date().toLocaleDateString()}\n\nYour contribution makes a real difference.\n\nWith gratitude,\nThe UCESCO Africa Team`,
      };

    case 'contact-confirmation':
      return {
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #62C3D9; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>We Received Your Message</h1>
                </div>
                <div class="content">
                  <p>Dear ${data.name},</p>
                  <p>Thank you for contacting UCESCO Africa. We have received your message and will respond within 24-48 hours.</p>
                  <h3>Your Message:</h3>
                  <p><em>"${data.message}"</em></p>
                  <p>If you need immediate assistance, please call us at +254 XXX XXX XXX.</p>
                  <p>Best regards,<br>The UCESCO Africa Team</p>
                </div>
                <div class="footer">
                  <p>UCESCO Africa | Building Futures, Transforming Lives</p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Dear ${data.name},\n\nThank you for contacting UCESCO Africa. We will respond within 24-48 hours.\n\nBest regards,\nThe UCESCO Africa Team`,
      };

    case 'admin-alert':
      return {
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #38A654; color: white; padding: 20px; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .alert { background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin: 16px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>${data.alertType} Alert</h2>
                </div>
                <div class="content">
                  <div class="alert">
                    <strong>${data.title}</strong>
                  </div>
                  <p>${data.message}</p>
                  ${data.details ? `<pre>${JSON.stringify(data.details, null, 2)}</pre>` : ''}
                  <p><small>Time: ${new Date().toLocaleString()}</small></p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `${data.alertType} Alert\n\n${data.title}\n\n${data.message}\n\nTime: ${new Date().toLocaleString()}`,
      };

    default:
      return { html: '', text: '' };
  }
}

/**
 * Send admin alert email
 */
export async function sendAdminAlert(
  alertType: string,
  title: string,
  message: string,
  details?: any
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@ucesco.org';
  return sendTemplateEmail({
    to: adminEmail,
    template: 'admin-alert',
    subject: `[UCESCO Alert] ${title}`,
    templateData: { alertType, title, message, details },
  });
}
