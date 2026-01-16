import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CheckCircle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Medical Camps & Healthcare | UCESCO Africa",
  description: "Providing essential healthcare services to underserved communities through free medical camps across Kenya and Uganda.",
};

const services = [
  "General medical consultations",
  "Pediatric care",
  "Maternal health services",
  "Dental services",
  "Eye screening and glasses provision",
  "Chronic disease management",
  "Health education and awareness",
  "Free medication distribution",
];

const activities = [
  {
    title: "Community Health Outreach",
    description: "Regular medical camps in remote and underserved areas providing comprehensive healthcare services.",
  },
  {
    title: "Health Education",
    description: "Workshops and training on disease prevention, hygiene, nutrition, and maternal health.",
  },
  {
    title: "Medical Partnerships",
    description: "Collaborations with healthcare professionals and medical institutions for specialized care.",
  },
  {
    title: "Emergency Response",
    description: "Rapid response to health emergencies and disease outbreaks in vulnerable communities.",
  },
];

export default function MedicalCampsPage() {
  return (
    <>
      <Hero
        title="Free Medical Camps & Healthcare"
        description="Bringing quality healthcare to underserved communities across East Africa"
        size="md"
        className="bg-red-500/10"
      />

      <Section className="py-4">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "Medical Camps" }
            ]}
          />
        </Container>
      </Section>

      {/* Program Overview */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold">Program Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Access to healthcare remains a critical challenge for many communities in Kenya and Uganda.
                Our Free Medical Camps program addresses this gap by bringing quality healthcare services
                directly to communities that need them most.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Through partnerships with medical professionals, healthcare institutions, and volunteers,
                we organize regular medical camps that provide comprehensive healthcare services completely
                free of charge.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Services Provided</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Activities */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Key Activities</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive healthcare initiatives for sustainable community health
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="mt-2 text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact & Statistics */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Impact (2022-2025)</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive healthcare data from our annual and mini medical camps
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
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

      {/* Mini Medical Camps */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold">Pilot Mini Medical Camps</h2>
            <Card>
              <CardHeader>
                <CardTitle>Samburu Mini Medical Camps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In 2024, UCESCO launched pilot mini medical camps in Samburu County's Ichingei Village,
                  reaching 366 patients in remote, underserved communities. These smaller, targeted camps
                  bring healthcare to areas with limited access to medical facilities, providing consultations,
                  diagnostics, medication, and health education.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The success of this pilot program demonstrates the effectiveness of decentralized healthcare
                  delivery in reaching the most vulnerable populations. We plan to expand mini medical camps
                  to more remote areas across Kenya and Uganda.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Support Our Healthcare Programs</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Help us bring quality healthcare to more communities in need
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild variant="secondary">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                <Link href="/apply-medic">Volunteer as a Medic</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
