import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Sponsorship | UCESCO Africa",
  description: "Complete your child sponsorship application",
};

export default function CheckoutPage({
  params,
  searchParams,
}: {
  params: { code: string };
  searchParams: { plan?: string };
}) {
  const plan = searchParams.plan || "monthly";
  const amount = plan === "yearly" ? "$480" : "$40";
  const frequency = plan === "yearly" ? "per year" : "per month";

  return (
    <Section className="pt-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Complete Your Sponsorship</h1>
            <p className="mt-2 text-muted-foreground">
              You're about to transform a child's life
            </p>
          </div>

          <Alert className="mt-8">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Payment Integration Coming Soon:</strong> We're currently integrating DPO payment gateway.
              In the meantime, please complete this form and our team will contact you with payment details.
            </AlertDescription>
          </Alert>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Sponsorship Details</CardTitle>
              <CardDescription>
                Child Code: {params.code} • {amount} {frequency}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message to Child (Optional)</Label>
                <Input id="message" placeholder="Write a short message to your sponsored child" />
              </div>

              <div className="pt-4">
                <Button className="w-full" size="lg">
                  Submit Sponsorship Application
                </Button>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Our team will contact you within 24 hours with payment instructions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
