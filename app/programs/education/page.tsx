import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Book, Users, School } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Education & Child Support | UCESCO Africa",
  description: "Supporting learners from primary school through higher education with scholarships, school infrastructure, and comprehensive education support.",
};

const supportLevels = [
  {
    icon: Book,
    title: "Early Childhood Education",
    description: "ECD programs providing foundational learning for the youngest learners",
  },
  {
    icon: School,
    title: "Primary & Secondary Education",
    description: "Full scholarships covering school fees, uniforms, and learning materials",
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "University and college scholarships for exceptional students",
  },
];

const programs = [
  "Full scholarship packages (fees, uniforms, materials)",
  "School infrastructure improvements",
  "Learning materials and textbooks",
  "Nutritional support (meals)",
  "Mentorship and counseling",
  "After-school tutoring programs",
  "Career guidance and skills development",
  "Parent and community engagement",
];

export default function EducationPage() {
  return (
    <>
      <Hero
        title="Education & Child Support / Scholarships"
        description="Supporting learners from primary school through higher education based on need and available opportunities"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/IMG_8085.jpg"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section className="py-4">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "Education" }
            ]}
          />
        </Container>
      </Section>

      {/* Program Overview */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <GraduationCap className="h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Program Overview</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Education is the foundation for breaking the cycle of poverty. Our comprehensive education
                scholarships support learners from primary school through higher education, providing full
                scholarship packages that include school fees, uniforms, learning materials, and comprehensive
                support based on need and available opportunities.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                We create lasting relationships between sponsors and students, ensuring consistent support
                throughout their education journey. Beyond academics, we provide mentorship, counseling,
                and skills development to help students succeed.
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

      {/* Support Levels */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Education Support Levels</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              From early childhood through university - comprehensive support at every stage
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {supportLevels.map((level, index) => {
              const IconComponent = level.icon;
              return (
                <div key={index} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
                  <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">{level.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{level.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Impact Statistics */}
      <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary" />
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">Education Sponsorships Awarded (2022-2025)</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
              Supporting learners at all levels based on need and available opportunities
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">27</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2022</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">17</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2023</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">36</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2024</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">90</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2025</div>
              </div>
            </div>
            <div className="mt-8 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 max-w-md mx-auto">
              <div className="text-xs sm:text-sm uppercase tracking-wide text-white/90">Total Students Sponsored (2022-2025)</div>
              <div className="mt-1 text-3xl sm:text-4xl font-bold text-white">170 Students</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How Sponsorships Work */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 sm:mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">How Education Sponsorships Work</h2>

            <div className="space-y-5 sm:space-y-6">
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Need-Based Selection</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Students are selected based on demonstrated financial need, academic potential, and family
                  circumstances. We prioritize children from the most vulnerable households who would otherwise
                  be unable to access education.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Comprehensive Support</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Our scholarships cover all education-related costs including school fees, uniforms, learning
                  materials, examination fees, and where possible, nutritional support. Students also receive
                  mentorship, counseling, and career guidance.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Long-Term Commitment</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  We are committed to supporting sponsored students throughout their education journey, from
                  primary school through secondary and in exceptional cases, higher education. This continuity
                  ensures students can complete their education without interruption.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Change a Child's Future Through Education</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Your support can give a child the gift of education and unlock their full potential
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
