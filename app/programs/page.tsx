import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    color: "text-primary",
    bgColor: "bg-primary/10",
    impact: "34,540+ patients treated (2022-2025)",
  },
  {
    title: "Women Empowerment & Microbusiness Support",
    slug: "women-empowerment",
    description: "Training women in vocational, entrepreneurship, and skills-based programs across Nairobi, Samburu, and Mombasa. We enable sustainable livelihoods and household stability through MVETI training programs.",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    impact: "808 women empowered (2022-2025)",
  },
  {
    title: "Education & Child Support / Scholarships",
    slug: "education",
    description: "Supporting learners from primary school through higher education with scholarships, school infrastructure, learning materials, and comprehensive education support based on need.",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    impact: "170 students sponsored (2022-2025)",
  },
  {
    title: "Youth Sports, Skills & Talent Development",
    slug: "youth-development",
    description: "Nurturing young talent through sports coaching, creative arts programs (Mdundo Dance Crew), mentorship, and leadership development initiatives that foster self-expression and teamwork.",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    impact: "800+ youth engaged annually",
  },
  {
    title: "Food Security & Livelihood Support",
    slug: "food-security",
    description: "Sustainable agriculture training, school feeding programs, annual Christmas food drives, and community food support initiatives for long-term household and community resilience.",
    icon: Wheat,
    color: "text-primary",
    bgColor: "bg-primary/10",
    impact: "300+ families supported annually",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Our Programs"
        description="Transforming lives through comprehensive community development initiatives"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/IMG_2723.jpg"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              UCESCO Africa implements holistic programs that address the interconnected challenges facing underserved
              communities. Our sustainable approach empowers communities to build their own brighter futures.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Link
                key={index}
                href={`/programs/${program.slug}`}
                className="group"
              >
                <div className="relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <program.icon className={`h-10 w-10 sm:h-12 sm:w-12 ${program.color} mb-4 sm:mb-5`} strokeWidth={1.5} />

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-primary mb-3">
                    {program.impact}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-5">
                    {program.description}
                  </p>

                  {/* Link indicator */}
                  <div className="flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7270.JPG"
            alt="Support our programs"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95" />
        </div>

        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
              Want to Support Our Programs?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto">
              Your support helps us expand our reach and deepen our impact in communities across East Africa.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button size="lg" asChild className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary">
                <Link href="/sponsor">Sponsor a Child</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
