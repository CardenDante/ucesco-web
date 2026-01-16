import Link from "next/link";
import { Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function PaymentPendingPage({ searchParams }: { searchParams: { status?: string } }) {
  const { status } = searchParams;

  return (
    <Section className="py-24">
      <Container>
        <Card className="mx-auto max-w-2xl text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Clock className="h-10 w-10 text-secondary" />
            </div>
            <CardTitle className="text-3xl">Payment Pending</CardTitle>
            <CardDescription className="text-lg">
              Your payment is being processed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-muted/50 p-6">
              <p className="text-muted-foreground">
                Your payment is currently being processed. This may take a few minutes.
              </p>
              {status && (
                <p className="mt-2 text-sm text-muted-foreground">Status: {status}</p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                You will receive a confirmation email once your payment is complete.
              </p>
              <p className="text-sm text-muted-foreground">
                If you have any questions, please contact us at{" "}
                <a href="mailto:info@ucesco.org" className="text-primary underline">
                  info@ucesco.org
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
