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
        size="md"
        className="bg-blue-500/10"
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
                scholarships support learners from primary school through higher education, providing full
                scholarship packages that include school fees, uniforms, learning materials, and comprehensive
                support based on need and available opportunities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We create lasting relationships between sponsors and students, ensuring consistent support
                throughout their education journey. Beyond academics, we provide mentorship, counseling,
                and skills development to help students succeed.
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

      {/* Support Levels */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Education Support Levels</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From early childhood through university - comprehensive support at every stage
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {supportLevels.map((level, index) => {
              const IconComponent = level.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                      <IconComponent className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="mt-4">{level.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Impact Statistics */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Education Sponsorships Awarded (2022-2025)</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Supporting learners at all levels based on need and available opportunities
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">27</CardTitle>
                <p className="text-sm text-muted-foreground">2022</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">17</CardTitle>
                <p className="text-sm text-muted-foreground">2023</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">36</CardTitle>
                <p className="text-sm text-muted-foreground">2024</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">90</CardTitle>
                <p className="text-sm text-muted-foreground">2025</p>
              </CardHeader>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-blue-600">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Total Students Sponsored (2022-2025)</p>
                <p className="mt-1 text-3xl font-bold text-blue-600">170 Students</p>
              </div>
              <GraduationCap className="h-16 w-16 text-blue-600/20" />
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* How Sponsorships Work */}
      <Section className="bg-blue-500/10">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How Education Sponsorships Work</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Need-Based Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Students are selected based on demonstrated financial need, academic potential, and family
                    circumstances. We prioritize children from the most vulnerable households who would otherwise
                    be unable to access education.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our scholarships cover all education-related costs including school fees, uniforms, learning
                    materials, examination fees, and where possible, nutritional support. Students also receive
                    mentorship, counseling, and career guidance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Long-Term Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to supporting sponsored students throughout their education journey, from
                    primary school through secondary and in exceptional cases, higher education. This continuity
                    ensures students can complete their education without interruption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Change a Child's Future Through Education</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Your support can give a child the gift of education and unlock their full potential
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild variant="secondary">
                <Link href="/sponsor">Sponsor a Child</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
