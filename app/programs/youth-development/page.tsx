import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Youth Development | UCESCO Africa",
  description: "Nurturing young talent through sports, vocational training, mentorship, and leadership development.",
};

const programs = [
  "Sports programs (football, athletics, netball)",
  "Vocational skills training",
  "Leadership and mentorship programs",
  "Talent identification and development",
  "Life skills and career guidance",
  "Youth entrepreneurship support",
  "Community service projects",
  "Peer education and advocacy",
];

export default function YouthDevelopmentPage() {
  return (
    <>
      <Hero
        title="Youth Sports, Skills & Talent"
        description="Empowering the next generation through sports, skills, and holistic development"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/IMG_8085.jpg"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <TrendingUp className="h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Program Overview</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Young people are the future of our communities. Our Youth Development program provides comprehensive
                support to help young people discover and develop their talents, build essential life skills, and
                become productive members of society.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Through sports, vocational training, mentorship, and leadership development, we create pathways
                for youth to realize their full potential and become agents of positive change in their communities.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg sm:text-xl font-semibold text-slate-900">Program Components</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm sm:text-base text-slate-600">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary" />
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">Our Impact</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">800+</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">Youth Engaged</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">Sports Teams</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">300+</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">Skills Certified</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Invest in Youth</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Help us nurture the next generation of leaders and changemakers
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <Link href="/volunteer">Become a Mentor</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
