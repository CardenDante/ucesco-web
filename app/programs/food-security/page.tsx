import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Wheat } from "lucide-react";

export const metadata: Metadata = {
  title: "Food Security & Livelihood | UCESCO Africa",
  description: "Sustainable agriculture training, kitchen gardens, and livelihood programs for long-term community resilience.",
};

const programs = [
  "Sustainable agriculture training",
  "Kitchen garden establishment",
  "Livestock support (goats, chickens)",
  "Irrigation systems and water management",
  "Climate-smart farming techniques",
  "Food preservation and storage",
  "Market linkage and value addition",
  "Farmer cooperatives and savings groups",
];

export default function FoodSecurityPage() {
  return (
    <>
      <Hero
        title="Food Security & Livelihood"
        description="Building sustainable food systems and economic resilience in communities"
        size="md"
        className="bg-green-500/10"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                <Wheat className="h-6 w-6 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold">Program Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Food security is fundamental to community wellbeing. Our Food Security & Livelihood program
                empowers families with knowledge, skills, and resources to produce their own food sustainably
                while creating income-generating opportunities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Through training in sustainable agriculture, provision of seeds and livestock, and support
                for market access, we help communities build long-term resilience against hunger and poverty.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Program Components</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Impact</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-4xl font-bold">300+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Families Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold">200+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Kitchen Gardens</div>
              </div>
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Livestock Distributed</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Support Food Security</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Help us empower more families to achieve food security and economic stability
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <Link href="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
