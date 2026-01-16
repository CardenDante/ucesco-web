import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  GraduationCap,
  TrendingUp,
  Wheat,
  ArrowRight,
  HandHeart,
  Plane,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs | UCESCO Africa",
  description: "Discover how UCESCO Africa is transforming lives through healthcare, education, women empowerment, youth development, food security, volunteering, and meaningful travel programs.",
};

const programs = [
  {
    title: "Free Medical Camps & Healthcare Outreach",
    slug: "medical-camps",
    description: "Providing essential healthcare services to underserved communities across Kenya and Uganda. Our medical camps offer free consultations, diagnostics, medication, referrals, and health counseling.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    impact: "34,540+ patients treated (2022-2025)",
  },
  {
    title: "Women Empowerment & Microbusiness Support",
    slug: "women-empowerment",
    description: "Training women in vocational, entrepreneurship, and skills-based programs across Nairobi, Samburu, and Mombasa. We enable sustainable livelihoods and household stability through MVETI training programs.",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    impact: "808 women empowered (2022-2025)",
  },
  {
    title: "Education & Child Support / Scholarships",
    slug: "education",
    description: "Supporting learners from primary school through higher education with scholarships, school infrastructure, learning materials, and comprehensive education support based on need.",
    icon: GraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    impact: "170 students sponsored (2022-2025)",
  },
  {
    title: "Youth Sports, Skills & Talent Development",
    slug: "youth-development",
    description: "Nurturing young talent through sports coaching, creative arts programs (Mdundo Dance Crew), mentorship, and leadership development initiatives that foster self-expression and teamwork.",
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    impact: "800+ youth engaged annually",
  },
  {
    title: "Food Security & Livelihood Support",
    slug: "food-security",
    description: "Sustainable agriculture training, school feeding programs, annual Christmas food drives, and community food support initiatives for long-term household and community resilience.",
    icon: Wheat,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    impact: "300+ families supported annually",
  },
  {
    title: "Volunteer & Internship Programs",
    slug: "volunteer",
    description: "Opportunities for individuals to contribute skills and time across education, healthcare, construction, women empowerment, youth development, and NGO management. Open to ages 14-67, on-site and remote.",
    icon: HandHeart,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    impact: "200+ volunteers hosted annually",
  },
  {
    title: "Meaningful Travel Programmes",
    slug: "meaningful-travel",
    description: "Immersive cultural experiences combining community visits, cultural exchange, local immersion, and volunteer activities. Perfect for gap year students, professionals, retirees, and families seeking purposeful travel.",
    icon: Plane,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    impact: "Flexible durations & custom itineraries",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Our Programs"
        description="Transforming lives through comprehensive community development initiatives"
        size="md"
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              UCESCO Africa implements holistic programs that address the interconnected challenges facing underserved
              communities. Our sustainable approach empowers communities to build their own brighter futures.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className={`flex items-center justify-center p-12 ${program.bgColor}`}>
                    <program.icon className={`h-24 w-24 ${program.color}`} />
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.impact}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{program.description}</p>
                      <Button asChild>
                        <Link href={`/programs/${program.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Want to Support Our Programs?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Your support helps us expand our reach and deepen our impact in communities across East Africa.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild variant="secondary">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                <Link href="/sponsor">Sponsor a Child</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
