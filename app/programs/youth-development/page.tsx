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
        size="md"
        className="bg-orange-500/10"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold">Program Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Young people are the future of our communities. Our Youth Development program provides comprehensive
                support to help young people discover and develop their talents, build essential life skills, and
                become productive members of society.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Through sports, vocational training, mentorship, and leadership development, we create pathways
                for youth to realize their full potential and become agents of positive change in their communities.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Program Components</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Impact</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-4xl font-bold">800+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Youth Engaged</div>
              </div>
              <div>
                <div className="text-4xl font-bold">50+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Sports Teams</div>
              </div>
              <div>
                <div className="text-4xl font-bold">300+</div>
                <div className="mt-2 text-sm uppercase tracking-wide opacity-90">Skills Certified</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Invest in Youth</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Help us nurture the next generation of leaders and changemakers
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
