import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, Container } from "@/components/layout";
import { Heart, HandHeart, DollarSign } from "lucide-react";

const ways = [
  {
    title: "Sponsor a Child",
    description: "Make a lasting impact by sponsoring a child's education, health, and well-being. Your monthly support transforms lives.",
    icon: Heart,
    href: "/sponsor",
    cta: "Start Sponsoring",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Volunteer with Us",
    description: "Join our community of changemakers. Share your skills and time to create meaningful impact in communities.",
    icon: HandHeart,
    href: "/volunteer",
    cta: "Explore Opportunities",
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Make a Donation",
    description: "Every contribution counts. Support our programs and help us reach more communities in need.",
    icon: DollarSign,
    href: "/donate",
    cta: "Donate Now",
    color: "bg-orange-500/10 text-orange-600",
  },
];

export function HowYouCanHelp() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How You Can Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Together, we can build a brighter future for communities across East Africa
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ways.map((way, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${way.color}`}>
                  <way.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {way.description}
                </CardDescription>
                <Button asChild className="w-full">
                  <Link href={way.href}>{way.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
