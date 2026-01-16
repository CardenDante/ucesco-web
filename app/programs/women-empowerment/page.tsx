import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Women Empowerment & Microbusiness | UCESCO Africa",
  description: "Supporting women through skills training, microbusiness development, and economic empowerment programs.",
};

const programs = [
  "Vocational skills training (tailoring, hairdressing, catering)",
  "Microbusiness development and management",
  "Financial literacy and savings groups",
  "Entrepreneurship mentorship",
  "Start-up capital support",
  "Marketing and business growth training",
  "Women's rights and health education",
  "Networking and peer support groups",
];

export default function WomenEmpowermentPage() {
  return (
    <>
      <Hero
        title="Women Empowerment & Microbusiness"
        description="Creating pathways to economic independence and self-sufficiency for women"
        size="md"
        className="bg-purple-500/10"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold">Program Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Economic empowerment is key to breaking the cycle of poverty. Our Women Empowerment program
                equips women with skills, knowledge, and resources to start and grow their own businesses,
                achieve financial independence, and become leaders in their communities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Through comprehensive training, mentorship, and ongoing support, we help women transform
                their lives and create lasting positive change for their families and communities.
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
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Women Trained</div>
              </div>
              <div>
                <div className="text-4xl font-bold">300+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Businesses Started</div>
              </div>
              <div>
                <div className="text-4xl font-bold">85%</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Support Women Empowerment</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Help us empower more women to achieve economic independence
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
