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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs | UCESCO Africa",
  description: "Discover how UCESCO Africa is transforming lives through healthcare, education, women empowerment, youth development, and food security programs.",
};

const programs = [
  {
    title: "Free Medical Camps & Healthcare",
    slug: "medical-camps",
    description: "Providing essential healthcare services to underserved communities across Kenya and Uganda. Our medical camps offer free consultations, treatment, medication, and health education.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    impact: "150+ medical camps conducted",
  },
  {
    title: "Women Empowerment & Microbusiness",
    slug: "women-empowerment",
    description: "Supporting women through skills training, microbusiness development, and economic empowerment programs that create lasting financial independence.",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    impact: "500+ women trained",
  },
  {
    title: "Education & Child Support",
    slug: "education",
    description: "Comprehensive education support including ECD programs, scholarships, school infrastructure, and learning materials for children in need.",
    icon: GraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    impact: "1,000+ children supported",
  },
  {
    title: "Youth Sports, Skills & Talent",
    slug: "youth-development",
    description: "Nurturing young talent through sports programs, vocational training, mentorship, and leadership development initiatives.",
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    impact: "800+ youth engaged",
  },
  {
    title: "Food Security & Livelihood",
    slug: "food-security",
    description: "Sustainable agriculture training, kitchen gardens, livestock support, and livelihood programs for long-term community resilience.",
    icon: Wheat,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    impact: "300+ families supported",
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
