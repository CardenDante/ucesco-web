import { Section, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const trustFactors = [
  {
    icon: Shield,
    title: "80% to Programs",
    description: "80% of all donations go directly to community programs. Only 20% for operations.",
  },
  {
    icon: Award,
    title: "Registered NGO",
    description: "Officially registered in Kenya & Uganda with full transparency and accountability.",
  },
  {
    icon: Users,
    title: "25,000+ Lives Impacted",
    description: "Over 25,000 individuals directly benefited from our programs since inception.",
  },
  {
    icon: TrendingUp,
    title: "95% Success Rate",
    description: "95% of sponsored children complete their education and break the cycle of poverty.",
  },
];

export function TrustSection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Trust UCESCO Africa</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparent, accountable, and committed to lasting impact
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustFactors.map((factor, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <factor.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{factor.title}</h3>
                <p className="text-sm text-muted-foreground">{factor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Tax ID:</strong> Available upon request •
            <strong className="ml-2">Audited Annually</strong> by independent firms •
            <strong className="ml-2">Child Safeguarding</strong> certified
          </p>
        </div>
      </Container>
    </Section>
  );
}
