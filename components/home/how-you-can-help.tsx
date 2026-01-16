import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/layout";
import { Heart, Users, DollarSign, ArrowRight } from "lucide-react";

const ways = [
  {
    title: "Sponsor a Child",
    description: "Transform a child's future through education, healthcare, and mentorship. Your monthly support creates lasting change.",
    icon: Heart,
    href: "/sponsor",
    cta: "Start Sponsoring",
  },
  {
    title: "Volunteer with Us",
    description: "Share your skills and passion. Join our community of changemakers making real impact across East Africa.",
    icon: Users,
    href: "/volunteer",
    cta: "Explore Opportunities",
  },
  {
    title: "Make a Donation",
    description: "Every contribution matters. Support our programs and help us reach more communities in need today.",
    icon: DollarSign,
    href: "/donate",
    cta: "Donate Now",
  },
];

export function HowYouCanHelp() {
  return (
    <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Volunteer-/IMG_0346.JPG"
          alt="Volunteers making impact"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
            How You Can Help
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90">
            Together, we can build a brighter future for communities across East Africa.
            Choose how you want to make a difference today.
          </p>
        </div>

        {/* Ways to Help Grid */}
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
          {ways.map((way, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-5">
                <way.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                {way.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                {way.description}
              </p>

              {/* CTA Button */}
              <Button
                asChild
                className="w-full group-hover:bg-primary/90 transition-colors"
              >
                <Link href={way.href} className="flex items-center justify-center gap-2">
                  {way.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Not sure where to start? <Link href="/get-involved" className="underline font-medium hover:text-white transition-colors">Explore all the ways</Link> you can support our mission.
          </p>
        </div>
      </Container>
    </Section>
  );
}
