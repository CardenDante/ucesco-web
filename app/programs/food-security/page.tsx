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
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/IMG_2723.jpg"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Wheat className="h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Program Overview</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Food security is fundamental to community wellbeing. Our Food Security & Livelihood program
                empowers families with knowledge, skills, and resources to produce their own food sustainably
                while creating income-generating opportunities.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Through training in sustainable agriculture, provision of seeds and livestock, and support
                for market access, we help communities build long-term resilience against hunger and poverty.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg sm:text-xl font-semibold text-slate-900">Program Components</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm sm:text-base text-slate-600">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary" />
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">Our Impact</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">300+</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">Families Supported</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">200+</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">Kitchen Gardens</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">Livestock Distributed</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Support Food Security</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Help us empower more families to achieve food security and economic stability
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
