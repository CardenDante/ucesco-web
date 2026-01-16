import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "@/components/ui/rating-stars";
import { CheckCircle, GraduationCap, Heart, Users, Home, Shield, Award, Stethoscope, Hammer, Briefcase, Sparkles, Globe } from "lucide-react";
import { getTestimonials } from "@/lib/strapi/api";
import { getStrapiMediaUrl } from "@/lib/strapi/api";

export const metadata: Metadata = {
  title: "Volunteer with UCESCO Africa | Make a Difference",
  description: "Join our community of volunteers and create lasting impact in Kenya and Uganda. Medical, education, and community development opportunities available.",
};

const roleCategories = [
  {
    icon: GraduationCap,
    title: "Education & Child Development",
    description: "Teach, tutor, and mentor children in schools and child development programs. Support literacy, numeracy, and creative learning activities.",
    activities: ["Classroom teaching", "Homework assistance", "Life skills mentorship", "Early childhood education"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Medical Outreach",
    description: "Support medical camps and health programs. Assist doctors, nurses, and community health workers in delivering care to underserved populations.",
    activities: ["Medical camp support", "Health education", "Patient registration", "Pharmacy assistance"],
  },
  {
    icon: Hammer,
    title: "Construction & Infrastructure Development",
    description: "Build classrooms, water systems, and community facilities. Help create safe, functional spaces for education and community activities.",
    activities: ["Building classrooms", "Renovations", "Water system installation", "Sanitation projects"],
  },
  {
    icon: Users,
    title: "Women Empowerment & Micro-Enterprise Support",
    description: "Train women in vocational skills, business management, and entrepreneurship. Support women's groups and income-generating projects.",
    activities: ["Business training", "Skills development", "Microfinance support", "Women's group facilitation"],
  },
  {
    icon: Sparkles,
    title: "Youth Talent, Sports & Creative Arts",
    description: "Coach sports, lead arts programs, and mentor youth in talent development. Foster creativity, teamwork, and self-expression.",
    activities: ["Sports coaching", "Dance & music programs", "Drama & theater", "Talent mentorship"],
  },
  {
    icon: Briefcase,
    title: "NGO Management, Administration & Fundraising",
    description: "Support organizational operations, program management, communications, and fundraising efforts. Help build sustainable systems.",
    activities: ["Program coordination", "Communications & social media", "Grant writing", "Data management"],
  },
];

export default async function VolunteerPage() {
  // Fetch volunteer testimonials from Strapi
  let testimonials = [];
  try {
    const response = await getTestimonials({
      filters: { category: "Volunteer" },
      sort: ["createdAt:desc"],
      pagination: { pageSize: 6 },
    });
    testimonials = response.data.map((testimonial) => ({
      name: testimonial.attributes.name,
      role: testimonial.attributes.role,
      rating: testimonial.attributes.rating,
      content: testimonial.attributes.content,
      photo: testimonial.attributes.photo
        ? getStrapiMediaUrl(testimonial.attributes.photo.data?.attributes.url || "")
        : null,
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    // Fallback testimonials if Strapi is not available
    testimonials = [
      {
        name: "Sarah Mitchell",
        role: "Education Volunteer, USA",
        rating: 5,
        content: "Volunteering with UCESCO was life-changing. The warmth and resilience of the community inspired me daily. I came to give but received so much more.",
        photo: null,
      },
      {
        name: "Dr. James Omondi",
        role: "Medical Volunteer, Kenya",
        rating: 5,
        content: "The impact we make during medical camps is incredible. Seeing patients receive care they couldn't otherwise access makes all the effort worthwhile.",
        photo: null,
      },
    ];
  }
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

      {/* Volunteer Role Categories */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Volunteer Roles & Opportunities</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose from 6 categories based on your skills, interests, and passion
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roleCategories.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <Card key={index} className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <CardDescription className="mt-2">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">Sample Activities:</p>
                      <ul className="space-y-1">
                        {role.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Duration & Requirements */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Duration Options</h2>
              <p className="mt-4 text-muted-foreground">
                Choose a timeframe that works for you. We offer flexible volunteer durations to accommodate different schedules and commitments.
              </p>
              <div className="mt-6 space-y-4">
                <Card>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold">Short-term</p>
                      <p className="text-sm text-muted-foreground">1-2 weeks</p>
                    </div>
                    <Badge variant="secondary">Popular</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold">Medium-term</p>
                      <p className="text-sm text-muted-foreground">1-3 months</p>
                    </div>
                    <Badge variant="outline">Most Impact</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold">Long-term</p>
                      <p className="text-sm text-muted-foreground">3-6 months</p>
                    </div>
                    <Badge variant="outline">Deep Immersion</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold">Requirements & Options</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Age Requirements
                  </h3>
                  <p className="text-muted-foreground">
                    Volunteers aged <strong>14-67 years</strong> are welcome. Minors (under 18) must be accompanied by a parent/guardian or have written consent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    On-Site Volunteering
                  </h3>
                  <p className="text-muted-foreground">
                    Live and work in our communities in Kenya and Uganda. Includes accommodation, meals, and full cultural immersion.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Online/Remote Volunteering
                  </h3>
                  <p className="text-muted-foreground">
                    Contribute remotely in areas like communications, fundraising, research, curriculum development, and administrative support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Volunteers Gain */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">What You'll Gain</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Volunteering is a two-way exchange. Here's what our volunteers take away from the experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Hands-On Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Practical skills in education, healthcare, construction, or community development
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Cultural Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Deep immersion in Kenyan and Ugandan cultures, traditions, and daily life
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Certificate & References</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Official certificate of completion and reference letter for future opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Join a worldwide community of changemakers and lifelong connections
                </p>
              </CardContent>
            </Card>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">What Volunteers Say</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Real stories from volunteers who have experienced the UCESCO journey
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <RatingStars rating={testimonial.rating} className="[&>svg]:text-yellow-400" />
                  </div>
                  <p className="text-primary-foreground/90 italic">"{testimonial.content}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    {testimonial.photo && (
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-primary-foreground/70">{testimonial.role}</div>
                    </div>
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
