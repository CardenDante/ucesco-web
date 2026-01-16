import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, Users, GraduationCap, Stethoscope, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | UCESCO Africa",
  description: "Support our mission to transform lives across East Africa. Your donation creates lasting impact in communities.",
};

const programs = [
  {
    title: "Where Most Needed",
    description: "Give us flexibility to direct funds where they're needed most",
    icon: Heart,
    suggested: "$50",
  },
  {
    title: "Education Fund",
    description: "Support scholarships, school fees, and learning materials",
    icon: GraduationCap,
    suggested: "$100",
  },
  {
    title: "Healthcare Support",
    description: "Fund medical camps and healthcare services",
    icon: Stethoscope,
    suggested: "$150",
  },
  {
    title: "Women Empowerment",
    description: "Support women's skills training and microbusiness programs",
    icon: Users,
    suggested: "$75",
  },
];

export default function DonatePage() {
  return (
    <>
      <Hero
        title="Make a Donation"
        description="Your generosity transforms lives and builds sustainable futures"
        size="md"
      />

      <Section>
        <Container>
          <Alert className="mb-12">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Payment Integration Coming Soon:</strong> We're currently integrating DPO payment gateway
              for secure online donations. In the meantime, you can donate via bank transfer or contact us for
              alternative payment methods.
            </AlertDescription>
          </Alert>

          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Choose Where to Direct Your Impact</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every donation, no matter the size, makes a real difference
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <Card key={index} className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Suggested</div>
                      <div className="text-2xl font-bold text-primary">{program.suggested}</div>
                    </div>
                  </div>
                  <CardTitle className="mt-4">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Donate Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact of Donations */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Your Impact</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-4xl font-bold text-primary">$40</div>
                <div className="mt-2 text-sm">Sponsors a child for one month</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">$100</div>
                <div className="mt-2 text-sm">Provides a family with a kitchen garden</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">$250</div>
                <div className="mt-2 text-sm">Funds a medical camp for 50+ patients</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Ways to Give */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Other Ways to Give</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bank Transfer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bank Name:</span>
                    <span className="font-medium">Equity Bank Kenya</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="font-medium">UCESCO Africa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-medium">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Swift Code:</span>
                    <span className="font-medium">EQBLKENA</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mobile Money (Kenya)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>M-Pesa Paybill: <span className="font-medium">123456</span></p>
                  <p className="mt-2 text-muted-foreground">
                    Use your name as the account number
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Corporate Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Interested in a corporate partnership or sponsorship? We'd love to discuss how we can work together.
                  </p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tax Information */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Tax-Deductible Donations</h2>
            <p className="mt-4 text-primary-foreground/90">
              UCESCO Africa is a registered charity. All donations are tax-deductible, and you will receive
              a receipt for tax purposes. 100% of your donation goes directly to programs—our administrative
              costs are covered by separate grants and partnerships.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
