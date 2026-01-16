import Link from "next/link";
import { Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export default function PaymentFailedPage({ searchParams }: { searchParams: { error?: string } }) {
  const { error } = searchParams;

  return (
    <Section className="py-24">
      <Container>
        <Card className="mx-auto max-w-2xl text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <XCircle className="h-10 w-10 text-destructive" />
            </div>
            <CardTitle className="text-3xl">Payment Failed</CardTitle>
            <CardDescription className="text-lg">
              Unfortunately, your payment could not be processed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <p className="text-sm text-destructive">Error: {error}</p>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-muted-foreground">
                Your payment was not completed. No charges have been made to your account.
              </p>
              <p className="text-sm text-muted-foreground">
                Common reasons for payment failure:
              </p>
              <ul className="list-inside list-disc text-left text-sm text-muted-foreground">
                <li>Payment was cancelled</li>
                <li>Insufficient funds</li>
                <li>Incorrect payment details</li>
                <li>Network or connection issues</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                If you continue to experience issues, please contact us at{" "}
                <a href="mailto:info@ucesco.org" className="text-primary underline">
                  info@ucesco.org
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/donate">Try Again</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
