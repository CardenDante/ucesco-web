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
        size="md"
        className="bg-purple-500/10"
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
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold">Affordable, Practical, Certified Training</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Most of our students are young women who never thought they could afford school. Through
                vocational, entrepreneurship, and skills-based programs across Nairobi, Samburu, and Mombasa,
                we enable sustainable livelihoods and household stability.
              </p>
              <p className="mt-4 text-lg font-semibold text-purple-600">
                "Toa Ndogo, Badilisha Maisha." <br/>
                <span className="text-base text-muted-foreground">Even a small gift can create a future. Be the Spark.</span>
              </p>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Training Areas</h3>
              <div className="space-y-4">
                {trainingAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                        <IconComponent className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{area.name}</h4>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
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
      <Section className="bg-purple-500/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Impact (2022-2025)</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empowering women through training and skills development
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">200</CardTitle>
                <p className="text-sm text-muted-foreground">2022</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">250</CardTitle>
                <p className="text-sm text-muted-foreground">2023</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">300</CardTitle>
                <p className="text-sm text-muted-foreground">2024</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">58</CardTitle>
                <p className="text-sm text-muted-foreground">2025</p>
              </CardHeader>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-purple-600">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Total Women Empowered</p>
                <p className="mt-1 text-3xl font-bold text-purple-600">808 Women</p>
              </div>
              <Users className="h-16 w-16 text-purple-600/20" />
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Program Locations */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Programs Across Kenya</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three locations serving women in different communities
            </p>
          </div>

          <div className="space-y-6">
            {locations.map((loc, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 mt-1 text-purple-500 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl">{loc.name}</CardTitle>
                      <CardDescription className="text-base">{loc.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{loc.description}</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {loc.focus.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to Help - Sponsorship Packages */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">How to Help</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a sponsorship package that fits your capacity to give
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sponsorshipPackages.map((pkg, index) => (
              <Card key={index} className="hover:border-purple-500 transition-colors">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{pkg.amount}</div>
                    <CardTitle className="mt-4 text-xl">{pkg.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="/donate">Sponsor Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Support Women Empowerment</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Help us empower more women to achieve economic independence and transform their communities
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild variant="secondary">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                <Link href="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
