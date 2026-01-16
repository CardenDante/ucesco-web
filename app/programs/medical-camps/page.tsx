import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Impact</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              <div>
                <div className="text-4xl font-bold text-primary">150+</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">Medical Camps</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">25,000+</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">Patients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">Medical Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">Partner Hospitals</div>
              </div>
            </div>
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
