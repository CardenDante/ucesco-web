import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get statistics
    const [
      totalSponsorships,
      activeSponsorships,
      totalDonations,
      completedDonations,
      totalContacts,
      newContacts,
      totalNewsletterSubscribers,
      totalTransactions,
      completedTransactions,
    ] = await Promise.all([
      prisma.sponsorship.count(),
      prisma.sponsorship.count({ where: { status: 'active' } }),
      prisma.donation.count(),
      prisma.donation.count({ where: { status: 'completed' } }),
      prisma.contact.count(),
      prisma.contact.count({ where: { status: 'new' } }),
      prisma.newsletter.count({ where: { status: 'active' } }),
      prisma.transaction.count(),
      prisma.transaction.count({ where: { status: 'completed' } }),
    ]);

    // Calculate total revenue
    const revenueData = await prisma.transaction.aggregate({
      where: { status: 'completed' },
      _sum: { amount: true },
    });

    const totalRevenue = revenueData._sum.amount || 0;

    // Get recent transactions
    const recentTransactions = await prisma.transaction.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        sponsorship: true,
        donation: true,
      },
    });

    // Get monthly revenue (last 12 months)
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const monthlyRevenue = await prisma.$queryRaw`
      SELECT
        DATE_TRUNC('month', "createdAt") as month,
        SUM(amount) as revenue,
        COUNT(*) as count
      FROM "Transaction"
      WHERE "createdAt" >= ${twelveMonthsAgo}
        AND status = 'completed'
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY month DESC
    `;

    return NextResponse.json({
      success: true,
      stats: {
        sponsorships: {
          total: totalSponsorships,
          active: activeSponsorships,
        },
        donations: {
          total: totalDonations,
          completed: completedDonations,
        },
        contacts: {
          total: totalContacts,
          new: newContacts,
        },
        newsletter: {
          total: totalNewsletterSubscribers,
        },
        transactions: {
          total: totalTransactions,
          completed: completedTransactions,
        },
        revenue: {
          total: totalRevenue,
          monthly: monthlyRevenue,
        },
      },
      recentTransactions,
    });
  } catch (error) {
    console.error('Admin stats API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
