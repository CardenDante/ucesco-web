import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "@/components/ui/rating-stars";
import { CheckCircle, Star, Heart, Users, Home, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer with UCESCO Africa | Make a Difference",
  description: "Join our community of volunteers and create lasting impact in Kenya and Uganda. Medical, education, and community development opportunities available.",
};

const opportunities = [
  {
    title: "Medical Volunteer",
    location: "Various locations",
    duration: "2-4 weeks",
    description: "Support our medical camps by providing healthcare services to underserved communities.",
    requirements: "Medical degree or nursing certification",
  },
  {
    title: "Education Volunteer",
    location: "Mathare, Kibera",
    duration: "4-12 weeks",
    description: "Teach and mentor children in our education programs, help with homework and activities.",
    requirements: "Teaching experience or education background preferred",
  },
  {
    title: "Youth Development Volunteer",
    location: "Samburu, Busia",
    duration: "4-8 weeks",
    description: "Coach sports, lead youth programs, and mentor young people in life skills.",
    requirements: "Experience working with youth, sports coaching skills a plus",
  },
  {
    title: "Women Empowerment Volunteer",
    location: "Various locations",
    duration: "6-12 weeks",
    description: "Support women's groups, teach business skills, and assist with microenterprise programs.",
    requirements: "Business or entrepreneurship experience",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Education Volunteer, USA",
    rating: 5,
    content: "Volunteering with UCESCO was life-changing. The warmth and resilience of the community inspired me daily. I came to give but received so much more.",
  },
  {
    name: "Dr. James Omondi",
    role: "Medical Volunteer, Kenya",
    rating: 5,
    content: "The impact we make during medical camps is incredible. Seeing patients receive care they couldn't otherwise access makes all the effort worthwhile.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <Hero
        title="Volunteer with UCESCO Africa"
        description="Share your skills, time, and passion to create lasting change in communities across East Africa"
        size="md"
      />

      {/* Trust & Ratings Banner - VolunteerWorld Style */}
      <Section className="border-b bg-muted/30 py-8">
        <Container>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <RatingStars rating={4.8} size="lg" showNumber />
                <span className="text-sm text-muted-foreground">(1,200+ volunteer reviews)</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-secondary">Top Rated Volunteer Program in East Africa</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge variant="outline" className="gap-2 px-4 py-2">
                <Award className="h-4 w-4" />
                Quality Checked
              </Badge>
              <Badge variant="outline" className="gap-2 px-4 py-2">
                <Shield className="h-4 w-4" />
                Verified NGO
              </Badge>
              <Badge variant="outline" className="gap-2 px-4 py-2">
                <CheckCircle className="h-4 w-4" />
                Safe & Supported
              </Badge>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Volunteer */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Volunteer with Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join a community of changemakers making real, sustainable impact
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Make Real Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Work directly with communities on projects that create lasting change
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Cultural Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Immerse yourself in local culture and build meaningful connections
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Full Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive support including accommodation, meals, and 24/7 assistance
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Volunteer Opportunities */}
      <Section className="bg-muted/50">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Current Opportunities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {opportunities.map((opp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{opp.title}</CardTitle>
                      <CardDescription className="mt-2">{opp.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="secondary">{opp.location}</Badge>
                    <Badge variant="outline">{opp.duration}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Requirements:</strong> {opp.requirements}
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/volunteer/apply">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">What's Included</h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Airport pickup and drop-off",
                  "Shared accommodation in volunteer house",
                  "Three meals daily (breakfast, lunch, dinner)",
                  "Orientation and ongoing support",
                  "24/7 emergency contact",
                  "Cultural activities and excursions",
                  "Certificate of completion",
                  "Pre-departure information pack",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Program Fees</h2>
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>2 weeks:</span>
                      <span className="font-semibold">$600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4 weeks:</span>
                      <span className="font-semibold">$1,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>8 weeks:</span>
                      <span className="font-semibold">$1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>12 weeks:</span>
                      <span className="font-semibold">$2,500</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Fees cover accommodation, meals, support, and directly fund our community programs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <h2 className="text-center text-3xl font-bold">What Volunteers Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <RatingStars rating={testimonial.rating} className="[&>svg]:text-yellow-400" />
                  </div>
                  <p className="text-primary-foreground/90">{testimonial.content}</p>
                  <div className="mt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary-foreground/70">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Make a Difference?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our volunteer community and create lasting impact
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/volunteer/apply">Apply to Volunteer</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
