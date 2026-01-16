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

    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status');

    const skip = (page - 1) * limit;

    const where = status ? { status } : {};

    const [sponsorships, total] = await Promise.all([
      prisma.sponsorship.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          transactions: {
            orderBy: { createdAt: 'desc' },
            take: 5,
          },
        },
      }),
      prisma.sponsorship.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      sponsorships,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Admin sponsorships API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
