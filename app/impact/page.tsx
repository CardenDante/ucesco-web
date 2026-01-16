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
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Annual Impact Highlights</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              UCESCO–Africa measures success by lives reached, opportunities created, and communities strengthened.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-4 text-5xl font-bold text-primary">34,540</div>
              <div className="mt-2 text-sm font-semibold">Patients Treated</div>
              <div className="mt-1 text-xs text-muted-foreground">Through Medical Camps (2022-2025)</div>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div className="mt-4 text-5xl font-bold text-secondary">808</div>
              <div className="mt-2 text-sm font-semibold">Women Empowered</div>
              <div className="mt-1 text-xs text-muted-foreground">Through Training Programs (2022-2025)</div>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-4 text-5xl font-bold text-primary">170</div>
              <div className="mt-2 text-sm font-semibold">Students Sponsored</div>
              <div className="mt-1 text-xs text-muted-foreground">Education Scholarships (2022-2025)</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Medical Camps Detailed Statistics */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Free Medical Camps – Patients Served</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Medical camps provide free consultations, diagnostics, medication, referrals, and counseling,
              prioritizing underserved communities.
            </p>

            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-3 text-left font-semibold">Type of Camp</th>
                        <th className="pb-3 text-left font-semibold">Location</th>
                        <th className="pb-3 text-right font-semibold">Patients Treated</th>
                        <th className="pb-3 text-right font-semibold">Year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 text-sm">Annual Medical Camp</td>
                        <td className="py-3 text-sm">Nairobi</td>
                        <td className="py-3 text-right font-semibold">3,847</td>
                        <td className="py-3 text-right text-sm text-muted-foreground">2022</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm">Annual Medical Camp</td>
                        <td className="py-3 text-sm">Nairobi</td>
                        <td className="py-3 text-right font-semibold">5,493</td>
                        <td className="py-3 text-right text-sm text-muted-foreground">2023</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm">Annual Medical Camp</td>
                        <td className="py-3 text-sm">Nairobi</td>
                        <td className="py-3 text-right font-semibold">10,906</td>
                        <td className="py-3 text-right text-sm text-muted-foreground">2024</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm">Mini Medical Camp</td>
                        <td className="py-3 text-sm">Samburu (Ichingei Village)</td>
                        <td className="py-3 text-right font-semibold">366</td>
                        <td className="py-3 text-right text-sm text-muted-foreground">2024</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm">Annual Medical Camp</td>
                        <td className="py-3 text-sm">Nairobi</td>
                        <td className="py-3 text-right font-semibold">13,928</td>
                        <td className="py-3 text-right text-sm text-muted-foreground">2025</td>
                      </tr>
                      <tr className="border-t-2 border-primary/20 bg-primary/5">
                        <td className="py-3 text-sm font-bold" colSpan={2}>Total (2022–2025)</td>
                        <td className="py-3 text-right text-xl font-bold text-primary">34,540</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Women Empowerment Statistics */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Women Trained Through Empowerment Programs</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Women trained through vocational, entrepreneurship, and skills-based programs across Nairobi,
              Samburu, and Mombasa, enabling sustainable livelihoods and household stability.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">200</CardTitle>
                  <p className="text-sm text-muted-foreground">2022</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">250</CardTitle>
                  <p className="text-sm text-muted-foreground">2023</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">300</CardTitle>
                  <p className="text-sm text-muted-foreground">2024</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">58</CardTitle>
                  <p className="text-sm text-muted-foreground">2025</p>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-6 border-2 border-secondary">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Total Women Empowered</p>
                  <p className="mt-1 text-3xl font-bold text-secondary">808 Women</p>
                </div>
                <Users className="h-16 w-16 text-secondary/20" />
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Education Sponsorships */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Education Sponsorships Awarded</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Sponsorships support learners from primary school to higher education, based on need and available opportunities.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">27</CardTitle>
                  <p className="text-sm text-muted-foreground">2022</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">17</CardTitle>
                  <p className="text-sm text-muted-foreground">2023</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">36</CardTitle>
                  <p className="text-sm text-muted-foreground">2024</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">90</CardTitle>
                  <p className="text-sm text-muted-foreground">2025</p>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-6 border-2 border-primary">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Total Students Sponsored (2022-2025)</p>
                  <p className="mt-1 text-3xl font-bold text-primary">170 Students</p>
                </div>
                <GraduationCap className="h-16 w-16 text-primary/20" />
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
