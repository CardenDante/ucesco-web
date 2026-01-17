import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Users, Scissors, Laptop, Sparkles, MapPin, Heart } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Women Empowerment & Microbusiness | UCESCO Africa",
  description: "Supporting women through skills training, microbusiness development, and economic empowerment programs across Kenya.",
};

const trainingAreas = [
  { icon: Scissors, name: "Hairdressing & Beauty Therapy", description: "Professional styling and beauty care training" },
  { icon: Laptop, name: "Computer Packages", description: "Essential digital literacy and office skills" },
  { icon: Sparkles, name: "Media & Digital Marketing", description: "Modern marketing and social media skills" },
  { icon: Users, name: "Entrepreneurship", description: "Business planning and management training" },
  { icon: Heart, name: "Caregiving", description: "Professional caregiving and support skills" },
];

const locations = [
  {
    name: "Samburu Women Empowerment Group",
    location: "Ichingei Village, Samburu",
    description: "Supporting rural women with vocational training, microenterprise development, and income-generating activities tailored to pastoral communities.",
    focus: ["Tailoring & sewing", "Beadwork & crafts", "Small business management", "Savings groups"],
  },
  {
    name: "MVETI - Masayo Visionary Empowerment Training Institute",
    location: "Nairobi",
    description: "Our flagship training center offering certified courses in hairdressing, beauty therapy, computer packages, digital marketing, entrepreneurship, and caregiving.",
    focus: ["Certified vocational training", "Practical hands-on learning", "Job placement support", "Affordable tuition with meal support"],
  },
  {
    name: "Mombasa Women Empowerment Programs",
    location: "Makupa, Mombasa",
    description: "Coastal programs focusing on vocational skills, entrepreneurship, and microbusiness support for women in underserved coastal communities.",
    focus: ["Catering & hospitality", "Small business training", "Financial literacy", "Women's support groups"],
  },
];

const sponsorshipPackages = [
  {
    amount: "$20 / €18 per month",
    title: "Monthly Tuition & Lunch Sponsorship",
    benefits: [
      "Covers tuition + lunch for 1 student",
      "Quarterly progress updates",
      "Donor thank-you letter",
      "Digital recognition on website",
    ],
  },
  {
    amount: "$60 / €55 one-time",
    title: "Startup Kit Sponsorship",
    benefits: [
      "Buys a complete startup kit (sewing/hairdressing tools)",
      "Photo of recipient with their kit",
      "One meal provided to the student",
      "Thank-you message",
      "Digital recognition on website",
    ],
  },
  {
    amount: "$180 / €165",
    title: "Full Course Sponsorship",
    benefits: [
      "Complete course sponsorship for one student",
      "Student profile with photo",
      "Regular course updates",
      "One meal provided to the student",
      "Digital recognition on website",
      "Official donation receipt",
    ],
  },
];

export default function WomenEmpowermentPage() {
  return (
    <>
      <Hero
        title="Women Empowerment & Microbusiness Support"
        description="Creating pathways to economic independence and self-sufficiency for women across Kenya"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Women_Empowerment-/IMG_8086.jpg"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section className="py-4">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "Women Empowerment" }
            ]}
          />
        </Container>
      </Section>

      {/* Program Overview */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Users className="h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Affordable, Practical, Certified Training</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Most of our students are young women who never thought they could afford school. Through
                vocational, entrepreneurship, and skills-based programs across Nairobi, Samburu, and Mombasa,
                we enable sustainable livelihoods and household stability.
              </p>
              <p className="mt-4 text-sm sm:text-base font-semibold text-primary">
                "Toa Ndogo, Badilisha Maisha." <br/>
                <span className="text-sm sm:text-base font-normal text-slate-600">Even a small gift can create a future. Be the Spark.</span>
              </p>
            </div>
            <div>
              <h3 className="mb-6 text-lg sm:text-xl font-semibold text-slate-900">Training Areas</h3>
              <div className="space-y-4">
                {trainingAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900">{area.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-600">{area.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Impact Statistics */}
      <Section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary" />
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">Women Empowered (2022-2025)</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
              Empowering women through training and skills development
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">200</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2022</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">250</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2023</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">300</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2024</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">58</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/90">2025</div>
              </div>
            </div>
            <div className="mt-8 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 max-w-md mx-auto">
              <div className="text-xs sm:text-sm uppercase tracking-wide text-white/90">Total Women Empowered</div>
              <div className="mt-1 text-3xl sm:text-4xl font-bold text-white">808 Women</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Program Locations */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Our Programs Across Kenya</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Three locations serving women in different communities
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {locations.map((loc, index) => (
              <div key={index} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{loc.name}</h3>
                    <p className="text-sm sm:text-base text-primary">{loc.location}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-600 mb-4">{loc.description}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {loc.focus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to Help - Sponsorship Packages */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">How to Help</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Choose a sponsorship package that fits your capacity to give
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {sponsorshipPackages.map((pkg, index) => (
              <div key={index} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-center mb-5">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{pkg.amount}</div>
                  <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-slate-900">{pkg.title}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/donate">Sponsor Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Support Women Empowerment</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Help us empower more women to achieve economic independence and transform their communities
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <Link href="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
