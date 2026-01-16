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
    title: "Compassion",
    description: "We approach every community with empathy, dignity, and respect, putting people at the heart of everything we do.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description: "We focus on long-term, sustainable solutions that empower communities to thrive independently.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We operate with complete transparency, ensuring accountability to the communities we serve and our supporters.",
  },
  {
    icon: MapPin,
    title: "Community-Led",
    description: "We work alongside communities, listening to their needs and empowering local leadership.",
  },
];

const regions = [
  {
    name: "Samburu, Kenya",
    description: "Supporting nomadic communities with healthcare, education, and livelihood programs in Northern Kenya.",
  },
  {
    name: "Mathare, Nairobi",
    description: "Providing education, child sponsorship, and youth development programs in one of Nairobi's largest informal settlements.",
  },
  {
    name: "Kibera, Nairobi",
    description: "Empowering women and children through education, healthcare, and economic opportunity programs.",
  },
  {
    name: "Busia, Kenya",
    description: "Supporting border communities with medical camps, agricultural training, and food security initiatives.",
  },
  {
    name: "Uganda",
    description: "Expanding our healthcare and education programs to underserved communities across Uganda.",
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
                To empower underserved communities across Kenya and Uganda through sustainable programs in healthcare,
                education, women empowerment, youth development, and livelihood support. We believe in creating
                lasting change by working alongside communities to build their capacity for self-sufficiency.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A thriving East Africa where every individual has access to quality healthcare, education, and
                economic opportunities. We envision communities that are resilient, self-reliant, and empowered to
                create their own sustainable futures.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>
            <div className="mt-8 space-y-4 text-left text-lg leading-relaxed text-muted-foreground">
              <p>
                UCESCO Africa was founded with a simple but powerful vision: to transform lives through sustainable
                community development. What started as a small initiative to provide medical care to underserved
                communities has grown into a comprehensive organization addressing multiple facets of community wellbeing.
              </p>
              <p>
                Over the years, we've expanded our programs to include education support, women empowerment initiatives,
                youth development, and food security projects. Our holistic approach recognizes that true transformation
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
