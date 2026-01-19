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
    title: "Dignity & Respect",
    description: "We uphold the inherent worth of every individual and community.",
  },
  {
    icon: MapPin,
    title: "Community-Centered Action",
    description: "We work alongside communities to co-create lasting solutions.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description: "We prioritize long-term impact over short-term relief.",
  },
  {
    icon: Eye,
    title: "Equity & Inclusion",
    description: "We serve without discrimination, ensuring access for the most marginalized.",
  },
  {
    icon: Heart,
    title: "Partnership & Accountability",
    description: "We value collaboration, transparency, and measurable impact.",
  },
];

const regions = [
  {
    name: "Nairobi County (Kibera, Mathare, Kayole, Kariobangi)",
    description: "Education support, early childhood development, secondary schooling, school feeding programs, youth empowerment initiatives, women's vocational training, rescue and child protection services, and annual and mini free medical camps.",
  },
  {
    name: "Samburu County (Ichingei Village)",
    description: "Access to education for pastoralist communities, women's empowerment groups, youth talent development, and community health outreach.",
  },
  {
    name: "Mombasa County",
    description: "Partner schools, women's empowerment initiatives, food security programs, marine conservation, mangrove restoration, and beach clean-up activities.",
  },
  {
    name: "Uganda (Ggaba and Wakiso)",
    description: "Early childhood education, women's vocational training, community health support, childcare programs, and youth mentorship initiatives delivered in partnership with local institutions.",
  },
  {
    name: "Other Counties",
    description: "Periodic outreach programs, medical camps, and environmental initiatives implemented in collaboration with local partners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About UCESCO Africa"
        description="Building futures and transforming lives through sustainable community development"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Homepage-/Hero%20image.JPG"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      {/* Mission & Vision */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission Card */}
            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <Target className="h-10 w-10 text-primary mb-5" />
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To empower vulnerable women, children, and underserved communities through education, healthcare,
                and economic opportunities that foster dignity, resilience, and sustainable development.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <Eye className="h-10 w-10 text-primary mb-5" />
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A just and inclusive society where every individual has access to quality education, essential
                health services, and opportunities to thrive.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              Our Story
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Building sustainable futures since 2014
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            {/* Organizational Background */}
            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Organizational Background</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                United Cultural Empowerment & Social Community Organization – Africa (UCESCO) is a 501(c)3 organization
                registered in Croydon, PA 19021, United States, committed to changing lives through education, health
                initiatives, empowerment, environmental care, and community development throughout East Africa.
              </p>
            </div>

            {/* Our Journey */}
            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Our Journey</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Established in 2014, UCESCO-Africa was created to address ongoing disparities in access to essential
                services for underserved communities. Since its inception, the organization has focused on working directly
                with communities in urban informal settlements, rural villages, and marginalized regions to deliver practical,
                people-centered solutions.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">Our Approach</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                UCESCO's approach emphasizes partnership, volunteerism, and locally informed programming to ensure interventions
                are relevant, inclusive, and sustainable. Today, UCESCO-Africa operates across Kenya and Uganda implementing
                integrated programs that address education, healthcare, women's economic empowerment, youth development, food
                security, and environmental conservation.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Through collaboration with local institutions, international partners, and volunteers, the organization promotes
                dignity, opportunity, and long-term resilience within the communities it serves. Our success is built on strong
                partnerships with local leaders, international volunteers, dedicated donors, and most importantly, the communities
                themselves.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7270.JPG"
            alt="UCESCO values"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95" />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
              Our Values
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Where We Work */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              Where We Work
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Serving communities across Kenya and Uganda
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {regions.map((region, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{region.name}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{region.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Credentials & Registration */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              Credentials & Recognition
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Committed to transparency and accountability in all our operations
            </p>
          </div>

          {/* Pathway Certificate */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 sm:mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm max-w-4xl mx-auto">
            <Image
              src="/ucescoafricatrustbadges/Copy of Pathway_Certificate_2025.pdf.png"
              alt="GlobalGiving Pathway Certificate 2025"
              width={280}
              height={200}
              className="h-auto w-full max-w-[280px] rounded-lg shadow-md"
            />
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">GlobalGiving Pathway Partner</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                UCESCO Africa is a certified GlobalGiving Pathway Partner, recognized for meeting rigorous standards
                in organizational effectiveness, transparency, and impact. This certification validates our commitment
                to accountability and sustainable community development.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <Image
                  src="/ucescoafricatrustbadges/2025_Pathway Vetted Badge.png"
                  alt="Pathway Vetted 2025"
                  width={80}
                  height={80}
                  className="h-16 w-auto"
                />
                <Image
                  src="/ucescoafricatrustbadges/Category-Impact.png"
                  alt="Category Impact"
                  width={80}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-8">
            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-2">Kenya NGO Board</div>
              <div className="text-lg sm:text-xl font-semibold text-slate-900">Registered</div>
            </div>

            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-2">Uganda NGO Board</div>
              <div className="text-lg sm:text-xl font-semibold text-slate-900">Registered</div>
            </div>

            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-2">Tax Compliant</div>
              <div className="text-lg sm:text-xl font-semibold text-slate-900">Certified</div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-slate-600">
              UCESCO Africa is a registered 501(c)3 organization operating across Kenya and Uganda.
              We maintain full compliance with all regulatory requirements and uphold the highest standards
              of transparency in our operations.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
