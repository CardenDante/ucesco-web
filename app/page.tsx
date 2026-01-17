import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/layout";
import { StatsSection } from "@/components/home/stats-section";
import { ProgramHighlights } from "@/components/home/program-highlights";
import { LatestNews } from "@/components/home/latest-news";
import { FeaturedStories } from "@/components/home/featured-stories";
import { HowYouCanHelp } from "@/components/home/how-you-can-help";
import { PartnersSection } from "@/components/home/partners-section";
import { TrustSection } from "@/components/layout/trust-section";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <Hero
        title="Building Futures, Transforming Lives"
        description="Empowering communities across Kenya and Uganda through sustainable development, healthcare, education, and opportunity."
        backgroundVideo="/Where Hope Takes Root I Education And Care For Communities.mp4"
        overlay={true}
        size="lg"
      >
        <div className="flex flex-row items-center justify-center gap-3">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-4 sm:px-6">
            <Link href="/sponsor">
              Sponsor a Child
              <ArrowRight className="ml-2 h-4 w-4 hidden sm:inline" />
            </Link>
          </Button>
          <Button size="lg" asChild variant="outline" className="border-white bg-white/10 text-white backdrop-blur hover:bg-white/20 text-sm sm:text-base px-4 sm:px-6">
            <Link href="/donate">Donate</Link>
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

      {/* Latest News & Events */}
      <LatestNews />

      {/* Featured Impact Stories */}
      <FeaturedStories />

      {/* How You Can Help */}
      <HowYouCanHelp />

      {/* Partners & Trust Badges */}
      <PartnersSection />

      {/* Trust & Transparency */}
      <TrustSection />

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7270.JPG"
                alt="Community impact"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-secondary/85" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
                Ready to Make a Difference?
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                Join thousands of supporters who are transforming lives across East Africa.
                Your contribution, big or small, creates lasting change.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <Button size="lg" asChild variant="secondary" className="w-full sm:w-auto">
                  <Link href="/get-involved">
                    Get Involved Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="w-full sm:w-auto border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
