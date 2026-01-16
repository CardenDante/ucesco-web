"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Mail, MessageSquare, TrendingUp } from "lucide-react";

interface Stats {
  sponsorships: { total: number; active: number };
  donations: { total: number; completed: number };
  contacts: { total: number; new: number };
  newsletter: { total: number };
  transactions: { total: number; completed: number };
  revenue: { total: number };
}

interface Transaction {
  id: string;
  type: string;
  amount: number;
  status: string;
  createdAt: string;
  sponsorship?: { sponsorName: string; childName: string };
  donation?: { donorName: string; purpose?: string };
}

export default function AdminDashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchStats();
    }
  }, [status]);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats");
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
        setRecentTransactions(data.recentTransactions);
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {session.user?.name}</p>
          </div>
          <Button variant="outline" onClick={() => router.push("/")}>
            View Website
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats?.revenue.total.toLocaleString() || 0}</div>
              <p className="text-xs text-muted-foreground">
                {stats?.transactions.completed || 0} completed transactions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sponsorships</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.sponsorships.active || 0}</div>
              <p className="text-xs text-muted-foreground">
                {stats?.sponsorships.total || 0} total sponsorships
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Donations</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.donations.completed || 0}</div>
              <p className="text-xs text-muted-foreground">
                {stats?.donations.total || 0} total donations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.newsletter.total || 0}</div>
              <p className="text-xs text-muted-foreground">Active subscribers</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="transactions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages ({stats?.contacts.new || 0} new)</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="capitalize">{transaction.type}</TableCell>
                        <TableCell>
                          {transaction.type === "sponsorship" && transaction.sponsorship ? (
                            <div>
                              <p className="font-medium">{transaction.sponsorship.sponsorName}</p>
                              <p className="text-sm text-muted-foreground">
                                for {transaction.sponsorship.childName}
                              </p>
                            </div>
                          ) : transaction.type === "donation" && transaction.donation ? (
                            <div>
                              <p className="font-medium">{transaction.donation.donorName}</p>
                              <p className="text-sm text-muted-foreground">
                                {transaction.donation.purpose || "General"}
                              </p>
                            </div>
                          ) : (
                            "-"
                          )}
                        </TableCell>
                        <TableCell>${transaction.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              transaction.status === "completed"
                                ? "default"
                                : transaction.status === "pending"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {transaction.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(transaction.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>Recent contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View detailed contact messages in the Contacts section
                </p>
                <Button className="mt-4" onClick={() => router.push("/admin/dashboard/contacts")}>
                  View All Contacts
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Links */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => router.push("/admin/dashboard/sponsorships")}>
            <CardHeader>
              <CardTitle className="text-base">Manage Sponsorships</CardTitle>
              <CardDescription>View and manage child sponsorships</CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => router.push("/admin/dashboard/donations")}>
            <CardHeader>
              <CardTitle className="text-base">Manage Donations</CardTitle>
              <CardDescription>View donation records</CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => router.push("/admin/dashboard/newsletters")}>
            <CardHeader>
              <CardTitle className="text-base">Newsletter Subscribers</CardTitle>
              <CardDescription>View subscriber list</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
