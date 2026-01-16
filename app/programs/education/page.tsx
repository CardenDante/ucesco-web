import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Child Support | UCESCO Africa",
  description: "Comprehensive education support including ECD programs, scholarships, and learning materials for children in need.",
};

const programs = [
  "Early Childhood Development (ECD) programs",
  "Primary and secondary school scholarships",
  "School fees and uniform support",
  "Learning materials and textbooks",
  "School infrastructure improvement",
  "Teacher training and support",
  "After-school tutoring programs",
  "Educational technology and resources",
];

export default function EducationPage() {
  return (
    <>
      <Hero
        title="Education & Child Support"
        description="Unlocking potential through quality education and comprehensive child support"
        size="md"
        className="bg-blue-500/10"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                <GraduationCap className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold">Program Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Education is the foundation for breaking the cycle of poverty. Our comprehensive education
                programs ensure that children from underserved communities have access to quality education
                from early childhood through secondary school and beyond.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We provide holistic support that addresses not just school fees, but also uniforms, learning
                materials, nutrition, and a safe learning environment. Our child sponsorship program creates
                lasting relationships between sponsors and children, ensuring consistent support throughout
                their education journey.
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
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              <div>
                <div className="text-4xl font-bold">1,000+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Children Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Scholarships Awarded</div>
              </div>
              <div>
                <div className="text-4xl font-bold">20+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Schools Partnered</div>
              </div>
              <div>
                <div className="text-4xl font-bold">95%</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Retention Rate</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Change a Child's Future</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your support can give a child the gift of education and a brighter future
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/sponsor">Sponsor a Child</Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
