# UCESCO Web Application - Setup Guide

This guide will help you set up the UCESCO web application with DPO payment integration, Zeptomail email service, PostgreSQL database, and admin dashboard.

## Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose
- DPO Payment Gateway account
- Zeptomail account
- PostgreSQL (via Docker)

## 1. Environment Variables

Create or update your `.env.local` file with the following configuration:

```bash
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-api-token

# Database (PostgreSQL for application data)
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/ucesco?schema=public"

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production-min-32-chars

# DPO Payment Gateway
DPO_COMPANY_TOKEN=your-dpo-company-token
DPO_SERVICE_TYPE=your-dpo-service-type
DPO_API_URL=https://secure.3gdirectpay.com
NEXT_PUBLIC_DPO_PAYMENT_URL=https://secure.3gdirectpay.com/payv2.php

# Zeptomail Configuration
ZEPTOMAIL_API_KEY=your-zeptomail-api-key
ZEPTOMAIL_BOUNCE_ADDRESS=noreply@ucesco.org
ZEPTOMAIL_FROM_EMAIL=info@ucesco.org
ZEPTOMAIL_FROM_NAME=UCESCO Africa

# Admin Email (for notifications)
ADMIN_EMAIL=admin@ucesco.org
```

## 2. Database Setup

### Start PostgreSQL with Docker Compose

The project includes two PostgreSQL instances:
1. `postgres` - For Strapi CMS (port 5432)
2. `postgres-app` - For application data (port 5433)

```bash
# Start both PostgreSQL instances
docker-compose up -d postgres-app postgres
```

### Run Prisma Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Create database schema
npx prisma migrate dev --name init

# (Optional) Seed initial admin user
npx prisma db seed
```

## 3. Create Initial Admin User

You need to create an admin user to access the dashboard. Run this Node.js script:

```bash
node -e "
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createAdmin() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.admin.create({
    data: {
      email: 'admin@ucesco.org',
      name: 'Admin User',
      password: hashedPassword,
      role: 'admin',
    },
  });
  console.log('Admin user created:', admin.email);
  process.exit(0);
}

createAdmin();
"
```

**Default credentials:**
- Email: `admin@ucesco.org`
- Password: `admin123`

⚠️ **Change these credentials immediately after first login!**

## 4. DPO Payment Gateway Setup

### Get DPO Credentials

1. Sign up at [DPO Payment Gateway](https://directpay.online/)
2. Get your Company Token from the dashboard
3. Get your Service Type ID
4. Update `.env.local` with these values

### Test Mode

For testing, DPO provides a sandbox environment:
- API URL: `https://secure.3gdirectpay.com`
- Use test cards provided in DPO documentation

## 5. Zeptomail Email Service Setup

### Get Zeptomail API Key

1. Sign up at [Zeptomail](https://www.zoho.com/zeptomail/)
2. Verify your domain
3. Create an API key in Settings > API
4. Update `.env.local` with your API key

### Configure Sender Email

Ensure your FROM email (`ZEPTOMAIL_FROM_EMAIL`) is verified in Zeptomail.

## 6. Install Dependencies

```bash
npm install
```

## 7. Run the Application

### Development Mode

```bash
# Start Next.js development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 8. Access Admin Dashboard

1. Navigate to `http://localhost:3000/admin/login`
2. Login with your admin credentials
3. You'll be redirected to the dashboard at `/admin/dashboard`

### Admin Dashboard Features

- **Stats Overview**: Revenue, sponsorships, donations, newsletter subscribers
- **Sponsorships**: View and manage child sponsorships
- **Donations**: View donation records
- **Contacts**: View and respond to contact form submissions
- **Newsletters**: Manage newsletter subscribers
- **Real-time Alerts**: Email notifications for new activities

## 9. Payment Integration

### Sponsorship Flow

1. User selects a child from `/sponsor`
2. Fills out sponsorship form
3. API creates sponsorship record
4. DPO payment token is generated
5. User is redirected to DPO payment page
6. After payment, DPO redirects to verification endpoint
7. System verifies payment with DPO
8. Confirmation email sent to sponsor
9. Admin receives notification email

### Donation Flow

1. User visits `/donate`
2. Fills out donation form
3. API creates donation record
4. DPO payment token is generated
5. User completes payment
6. System verifies and confirms
7. Receipt email sent to donor
8. Admin receives notification

## 10. Email Notifications

The system sends automatic emails for:

- **Sponsorship Confirmation**: Sent to sponsor after successful payment
- **Donation Receipt**: Sent to donor after successful payment
- **Contact Confirmation**: Sent to user after submitting contact form
- **Newsletter Welcome**: Sent to new newsletter subscribers
- **Admin Alerts**: Sent to admin for all new activities

All email templates are customizable in `lib/email.ts`

## 11. Database Models

The application uses the following Prisma models:

- `Admin`: Admin users for dashboard access
- `Sponsorship`: Child sponsorship records
- `Donation`: One-time donation records
- `Transaction`: Payment transactions (linked to sponsorships/donations)
- `Contact`: Contact form submissions
- `Newsletter`: Newsletter subscriptions

View the full schema in `prisma/schema.prisma`

## 12. API Routes

### Public API Routes

- `POST /api/sponsorship` - Create new sponsorship
- `POST /api/donation` - Create new donation
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/payment/verify` - Verify payment status (DPO callback)

### Admin API Routes (Authentication Required)

- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/admin/sponsorships` - List sponsorships
- `GET /api/admin/donations` - List donations
- `GET /api/admin/contacts` - List contacts
- `PATCH /api/admin/contacts` - Update contact status
- `GET /api/admin/newsletters` - List newsletter subscribers

## 13. Testing

### Test Payments

1. Use DPO sandbox/test mode
2. Use test card numbers provided by DPO
3. Monitor transactions in admin dashboard
4. Check email delivery in Zeptomail dashboard

### Test Email Delivery

Zeptomail provides a testing environment to verify email templates and delivery.

## 14. Deployment

### Environment Variables in Production

Ensure all production environment variables are set:
- Use production DPO credentials
- Use production Zeptomail API key
- Set strong `NEXTAUTH_SECRET` (32+ characters)
- Update `NEXTAUTH_URL` to production URL
- Configure production database URL

### Database Migration in Production

```bash
npx prisma migrate deploy
```

## 15. Security Considerations

1. **Change default admin password immediately**
2. **Use strong NEXTAUTH_SECRET**
3. **Enable HTTPS in production**
4. **Regularly backup database**
5. **Monitor admin dashboard access logs**
6. **Keep dependencies updated**

## 16. Troubleshooting

### Database Connection Issues

```bash
# Check if PostgreSQL is running
docker ps

# Restart PostgreSQL
docker-compose restart postgres-app

# Check logs
docker-compose logs postgres-app
```

### Payment Verification Issues

- Check DPO credentials in `.env.local`
- Verify redirect URLs are accessible
- Check transaction status in DPO dashboard
- Review API logs for errors

### Email Delivery Issues

- Verify Zeptomail API key
- Check sender email is verified
- Review Zeptomail logs
- Check spam folder

## 17. Support

For issues or questions:
- Email: admin@ucesco.org
- Check application logs for errors
- Review Prisma documentation for database issues
- Consult DPO documentation for payment issues

## 18. Next Steps

1. Customize email templates in `lib/email.ts`
2. Add more admin dashboard features
3. Implement recurring billing for sponsorships
4. Add reporting and analytics
5. Create admin user management
6. Implement data export features
