import Link from "next/link";
import { Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { type?: string; child?: string; amount?: string };
}) {
  const { type, child, amount } = searchParams;

  return (
    <Section className="py-24">
      <Container>
        <Card className="mx-auto max-w-2xl text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <CheckCircle className="h-10 w-10 text-secondary" />
            </div>
            <CardTitle className="text-3xl">Payment Successful!</CardTitle>
            <CardDescription className="text-lg">
              Thank you for your generous {type === "sponsorship" ? "sponsorship" : "donation"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {type === "sponsorship" && child && (
              <div className="rounded-lg bg-muted/50 p-6">
                <h3 className="mb-2 text-xl font-semibold">Sponsorship Details</h3>
                <p className="text-muted-foreground">
                  You are now sponsoring <strong>{child}</strong>. You will receive regular updates, photos, and
                  letters from your sponsored child.
                </p>
              </div>
            )}

            {type === "donation" && amount && (
              <div className="rounded-lg bg-muted/50 p-6">
                <h3 className="mb-2 text-xl font-semibold">Donation Details</h3>
                <p className="text-muted-foreground">
                  Your donation of <strong>${amount}</strong> will make a real difference in the lives of children
                  and families across East Africa.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your email address with all the details and your receipt.
              </p>
              <p className="text-sm text-muted-foreground">
                If you have any questions, please contact us at <a href="mailto:info@ucesco.org" className="text-primary underline">info@ucesco.org</a>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/">Return to Homepage</Link>
              </Button>
              {type === "sponsorship" ? (
                <Button asChild variant="outline" size="lg">
                  <Link href="/sponsor">Sponsor Another Child</Link>
                </Button>
              ) : (
                <Button asChild variant="outline" size="lg">
                  <Link href="/donate">Make Another Donation</Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
