import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FolderKanban, Rocket, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects | UCESCO Africa",
  description: "Explore UCESCO Africa's community development projects. New initiatives coming soon to transform more lives across East Africa.",
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Our Projects"
        description="Community development initiatives transforming lives across East Africa"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7270.JPG"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-2xl bg-primary/10">
                <FolderKanban className="h-8 w-8 sm:h-10 sm:w-10 text-primary" strokeWidth={1.5} />
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Exciting Projects Coming Soon
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We're constantly developing new community development projects to expand our impact across Kenya and Uganda.
              Check back soon to discover our latest initiatives in healthcare, education, women empowerment, and youth development.
            </p>

            {/* Features */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 mb-10 max-w-2xl mx-auto">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 text-left">
                <Rocket className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">New Initiatives</h3>
                  <p className="text-sm text-slate-600">
                    Innovative projects addressing community needs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 text-left">
                <FolderKanban className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Strategic Focus</h3>
                  <p className="text-sm text-slate-600">
                    Data-driven projects for sustainable impact
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-200 my-10 max-w-xs mx-auto" />

            {/* CTA Text */}
            <p className="text-slate-700 mb-6">
              Meanwhile, explore our existing programs and see how you can get involved
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/programs" className="flex items-center gap-2">
                  View Our Programs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/IMG_2723.jpg"
            alt="Support our work"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95" />
        </div>

        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
              Want to Support Our Work?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto">
              Your support helps us launch new projects and expand our reach in communities across East Africa.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button size="lg" asChild className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary">
                <Link href="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
