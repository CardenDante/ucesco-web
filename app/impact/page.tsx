import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, Stethoscope, FileText, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Impact | UCESCO Africa",
  description: "See the real impact of UCESCO Africa's work in communities across Kenya and Uganda.",
};

export default function ImpactPage() {
  return (
    <>
      <Hero
        title="Our Impact"
        description="Measuring the difference we make together"
        size="md"
      />

      {/* Impact Statistics */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-4 text-4xl font-bold">25,000+</div>
              <div className="mt-2 text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-4 text-4xl font-bold">1,000+</div>
              <div className="mt-2 text-sm text-muted-foreground">Children in School</div>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-4 text-4xl font-bold">150+</div>
              <div className="mt-2 text-sm text-muted-foreground">Medical Camps</div>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-4 text-4xl font-bold">25+</div>
              <div className="mt-2 text-sm text-muted-foreground">Communities Served</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Impact Areas */}
      <Section className="bg-muted/50">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">Impact by Program</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Stethoscope className="h-8 w-8 text-red-500" />
                <CardTitle className="mt-4">Healthcare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Medical camps conducted:</span>
                  <span className="font-semibold">150+</span>
                </div>
                <div className="flex justify-between">
                  <span>Patients served:</span>
                  <span className="font-semibold">25,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Medical professionals:</span>
                  <span className="font-semibold">500+</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-500" />
                <CardTitle className="mt-4">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Children supported:</span>
                  <span className="font-semibold">1,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Scholarships awarded:</span>
                  <span className="font-semibold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span>School partnerships:</span>
                  <span className="font-semibold">20+</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-purple-500" />
                <CardTitle className="mt-4">Women Empowerment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Women trained:</span>
                  <span className="font-semibold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span>Businesses started:</span>
                  <span className="font-semibold">300+</span>
                </div>
                <div className="flex justify-between">
                  <span>Success rate:</span>
                  <span className="font-semibold">85%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Reports & Documentation */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Reports & Policies</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in complete transparency. Access our annual reports, financial statements, and policies.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="outline">
                <Link href="/impact/reports">View Annual Reports</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/impact/policies">View Policies</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Awards & Recognition */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Awards & Recognition</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our work has been recognized by local and international organizations for its impact and sustainability.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Awards integration with Strapi CMS coming soon.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
