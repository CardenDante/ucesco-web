import type { Metadata } from "next";
import Image from "next/image";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About UCESCO Africa | Our Mission & Vision",
  description: "Learn about UCESCO Africa's mission to transform lives through sustainable community development in Kenya and Uganda.",
};

const values = [
  {
    icon: Heart,
    title: "Dignity & Respect",
    description: "We uphold the inherent worth of every individual and community.",
  },
  {
    icon: MapPin,
    title: "Community-Centered Action",
    description: "We work alongside communities to co-create lasting solutions.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description: "We prioritize long-term impact over short-term relief.",
  },
  {
    icon: Eye,
    title: "Equity & Inclusion",
    description: "We serve without discrimination, ensuring access for the most marginalized.",
  },
  {
    icon: Heart,
    title: "Partnership & Accountability",
    description: "We value collaboration, transparency, and measurable impact.",
  },
];

const regions = [
  {
    name: "Nairobi County (Kibera, Mathare, Kayole, Kariobangi)",
    description: "Education support, early childhood development, secondary schooling, school feeding programs, youth empowerment initiatives, women's vocational training, rescue and child protection services, and annual and mini free medical camps.",
  },
  {
    name: "Samburu County (Ichingei Village)",
    description: "Access to education for pastoralist communities, women's empowerment groups, youth talent development, and community health outreach.",
  },
  {
    name: "Mombasa County",
    description: "Partner schools, women's empowerment initiatives, food security programs, marine conservation, mangrove restoration, and beach clean-up activities.",
  },
  {
    name: "Uganda (Ggaba and Wakiso)",
    description: "Early childhood education, women's vocational training, community health support, childcare programs, and youth mentorship initiatives delivered in partnership with local institutions.",
  },
  {
    name: "Other Counties",
    description: "Periodic outreach programs, medical camps, and environmental initiatives implemented in collaboration with local partners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About UCESCO Africa"
        description="Building futures and transforming lives through sustainable community development"
        size="md"
      />

      {/* Mission & Vision */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To empower vulnerable women, children, and underserved communities through education, healthcare,
                and economic opportunities that foster dignity, resilience, and sustainable development.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A just and inclusive society where every individual has access to quality education, essential
                health services, and opportunities to thrive.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Organizational Background</h2>
            <div className="mt-8 space-y-4 text-left text-lg leading-relaxed text-muted-foreground">
              <p>
                United Cultural Empowerment & Social Community Organization – Africa (UCESCO) is a 501(c)3 organization
                registered in Croydon, PA 19021, United States, committed to changing lives through education, health
                initiatives, empowerment, environmental care, and community development throughout East Africa.
              </p>
              <p>
                Established in 2014, UCESCO-Africa was created to address ongoing disparities in access to essential
                services for underserved communities. Since its inception, the organization has focused on working directly
                with communities in urban informal settlements, rural villages, and marginalized regions to deliver practical,
                people-centered solutions.
              </p>
              <p>
                UCESCO's approach emphasizes partnership, volunteerism, and locally informed programming to ensure interventions
                are relevant, inclusive, and sustainable. Today, UCESCO-Africa operates across Kenya and Uganda implementing
                integrated programs that address education, healthcare, women's economic empowerment, youth development, food
                security, and environmental conservation.
              </p>
              <p>
                Through collaboration with local institutions, international partners, and volunteers, the organization promotes
                dignity, opportunity, and long-term resilience within the communities it serves.
                requires addressing the interconnected challenges that communities face.
              </p>
              <p>
                Today, UCESCO Africa operates across multiple regions in Kenya and Uganda, serving over 25 communities
                and impacting thousands of lives. Our success is built on strong partnerships with local leaders,
                international volunteers, dedicated donors, and most importantly, the communities themselves.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Where We Work */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Where We Work</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Serving communities across Kenya and Uganda
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-2 flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{region.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Credentials & Registration */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Credentials & Registration</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              UCESCO Africa is a registered non-governmental organization operating in Kenya and Uganda,
              committed to transparency and accountability in all our operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-lg border bg-card p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground">Kenya NGO Board</p>
                <p className="mt-1 text-lg font-semibold">Registered</p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground">Uganda NGO Board</p>
                <p className="mt-1 text-lg font-semibold">Registered</p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground">Tax Compliant</p>
                <p className="mt-1 text-lg font-semibold">Certified</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
