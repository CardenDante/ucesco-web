import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, HandHeart, Building2, Gift, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved | UCESCO Africa",
  description: "Discover all the ways you can support UCESCO Africa's mission and make a difference in communities across East Africa.",
};

const ways = [
  {
    title: "Sponsor a Child",
    description: "Transform a child's life through education, healthcare, and comprehensive support. Monthly sponsorships create lasting impact.",
    icon: Heart,
    href: "/sponsor",
    cta: "Start Sponsoring",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Make a Donation",
    description: "Support our programs with a one-time or recurring donation. Every contribution directly funds community development.",
    icon: Gift,
    href: "/donate",
    cta: "Donate Now",
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Volunteer",
    description: "Share your time and skills with communities in need. We have opportunities in education, healthcare, youth development, and more.",
    icon: Users,
    href: "/volunteer",
    cta: "Explore Opportunities",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Medical Volunteering",
    description: "Healthcare professionals can join our medical camps to provide essential services to underserved communities.",
    icon: HandHeart,
    href: "/apply-medic",
    cta: "Apply as a Medic",
    color: "bg-red-500/10 text-red-600",
  },
  {
    title: "Meaningful Travel",
    description: "Experience authentic East African culture while contributing to community development through our travel programs.",
    icon: Calendar,
    href: "/meaningful-travel",
    cta: "Explore Experiences",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Partner with Us",
    description: "Organizations can partner with UCESCO for corporate social responsibility, grants, or collaborative programs.",
    icon: Building2,
    href: "/contact",
    cta: "Start Partnership",
    color: "bg-orange-500/10 text-orange-600",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Hero
        title="Get Involved"
        description="Join us in transforming lives across East Africa. Every action creates impact."
        size="md"
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Whether you want to sponsor a child, volunteer your time, make a donation, or partner with us,
              there are many ways to support our mission and create lasting change in communities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ways.map((way, index) => (
              <Card key={index} className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${way.color}`}>
                    <way.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{way.title}</CardTitle>
                  <CardDescription className="text-base">
                    {way.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={way.href}>{way.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact Stats */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Your Impact Matters</h2>
            <p className="text-lg text-primary-foreground/90 mb-12">
              See the difference our community of supporters is making
            </p>
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="text-5xl font-bold">25,000+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Lives Impacted</div>
              </div>
              <div>
                <div className="text-5xl font-bold">1,000+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Children Sponsored</div>
              </div>
              <div>
                <div className="text-5xl font-bold">1,200+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Volunteers</div>
              </div>
              <div>
                <div className="text-5xl font-bold">25+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Communities Served</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Can I visit the communities you work with?</h3>
                <p className="text-muted-foreground">
                  Yes! Our Meaningful Travel program offers opportunities to visit and engage with communities
                  while supporting our work. You can also arrange visits through our volunteer program.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Are donations tax-deductible?</h3>
                <p className="text-muted-foreground">
                  Yes, UCESCO Africa is a registered charity and all donations are tax-deductible. You'll receive
                  a receipt for tax purposes.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">How can I track the impact of my contribution?</h3>
                <p className="text-muted-foreground">
                  We provide regular updates through email newsletters, impact reports, and our website. Child sponsors
                  receive personalized updates and letters from their sponsored children.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Can companies or organizations partner with UCESCO?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We welcome partnerships with corporations, foundations, and other organizations.
                  Please contact us to discuss how we can work together.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
