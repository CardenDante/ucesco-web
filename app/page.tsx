import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/layout";
import { StatsSection } from "@/components/home/stats-section";
import { ProgramHighlights } from "@/components/home/program-highlights";
import { FeaturedStories } from "@/components/home/featured-stories";
import { HowYouCanHelp } from "@/components/home/how-you-can-help";
import { PartnersSection } from "@/components/home/partners-section";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <Hero
        title="Building Futures, Transforming Lives"
        description="Empowering communities across Kenya and Uganda through sustainable development, healthcare, education, and opportunity."
        backgroundVideo="/Where Hope Takes Root I Education and Care for Communities.mp4"
        overlay={true}
        size="lg"
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/sponsor">
              Sponsor a Child
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" asChild variant="outline" className="border-white bg-white/10 text-white backdrop-blur hover:bg-white/20">
            <Link href="/donate">Make a Donation</Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
          <Link href="/volunteer" className="transition-colors hover:text-white underline underline-offset-4">
            Volunteer with Us
          </Link>
          <span className="text-white/50">•</span>
          <Link href="/apply-medic" className="transition-colors hover:text-white underline underline-offset-4">
            Apply as a Medic
          </Link>
        </div>
      </Hero>

      {/* Impact Stats */}
      <StatsSection />

      {/* Program Highlights */}
      <ProgramHighlights />

      {/* Featured Impact Stories */}
      <FeaturedStories />

      {/* How You Can Help */}
      <HowYouCanHelp />

      {/* Partners & Trust Badges */}
      <PartnersSection />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Make a Difference?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            Join thousands of supporters who are transforming lives across East Africa.
            Your contribution, big or small, creates lasting change.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild variant="secondary">
              <Link href="/get-involved">Get Involved Today</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
