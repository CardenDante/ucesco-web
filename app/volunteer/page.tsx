import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, GraduationCap, Heart, Users, Home, Shield, Award, Stethoscope, Hammer, Briefcase, Sparkles, Globe, ArrowRight } from "lucide-react";
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
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        name: "Dr. James Omondi",
        role: "Medical Volunteer, Kenya",
        rating: 5,
        content: "The impact we make during medical camps is incredible. Seeing patients receive care they couldn't otherwise access makes all the effort worthwhile.",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Emma van der Berg",
        role: "Construction Volunteer, Netherlands",
        rating: 5,
        content: "Building classrooms alongside the community was incredibly rewarding. You can see the direct impact of your work and know these facilities will serve generations of children.",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
    ];
  }
  return (
    <>
      <Hero
        title="Volunteer with UCESCO Africa"
        description="Share your skills, time, and passion to create lasting change in communities across East Africa"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Volunteer-/IMG_0329.JPG"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      {/* Search/Filter Section */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Find Your Opportunity</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Search for volunteer opportunities that match your interests and availability
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:items-end">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Where</label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-slate-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Search destinations</option>
                  <option value="nairobi">Nairobi, Kenya</option>
                  <option value="samburu">Samburu, Kenya</option>
                  <option value="mombasa">Mombasa, Kenya</option>
                  <option value="uganda">Uganda</option>
                  <option value="remote">Remote/Online</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">When</label>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-slate-200 text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">What</label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-slate-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Add category</option>
                  <option value="education">Education & Child Development</option>
                  <option value="healthcare">Healthcare & Medical</option>
                  <option value="construction">Construction & Infrastructure</option>
                  <option value="women">Women Empowerment</option>
                  <option value="youth">Youth & Sports</option>
                  <option value="ngo">NGO Management</option>
                </select>
              </div>

              <div className="flex-shrink-0">
                <Button className="w-full md:w-auto md:min-w-[180px] h-[42px] sm:h-[46px]">Search Opportunities</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Volunteer */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Why Volunteer with Us</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Join a community of changemakers making real, sustainable impact
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Make Real Impact</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Work directly with communities on projects that create lasting change
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Cultural Exchange</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Immerse yourself in local culture and build meaningful connections
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Full Support</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Comprehensive support including accommodation, meals, and 24/7 assistance
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Volunteer Testimonials */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Volunteer Stories</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Real stories from volunteers who have experienced the UCESCO journey
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <img
                  src={testimonial.photo || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"}
                  alt={testimonial.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover mb-4"
                />
                <p className="text-sm sm:text-base text-slate-600 italic mb-4">"{testimonial.content}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-semibold text-sm sm:text-base text-slate-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Volunteer Role Categories */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Volunteer Roles & Opportunities</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from 6 categories based on your skills, interests, and passion
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roleCategories.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <div key={index} className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">{role.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">{role.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-3">Sample Activities:</p>
                    <ul className="space-y-2">
                      {role.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" strokeWidth={1.5} />
                          <span className="text-sm text-slate-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Duration & Requirements */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-slate-900">Duration Options</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Choose a timeframe that works for you. We offer flexible volunteer durations to accommodate different schedules and commitments.
              </p>
              <div className="mt-6 sm:mt-8 space-y-4">
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900 text-base sm:text-lg">Short-term</p>
                      <p className="text-sm text-slate-600 mt-1">1-2 weeks</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">Popular</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900 text-base sm:text-lg">Medium-term</p>
                      <p className="text-sm text-slate-600 mt-1">1-3 months</p>
                    </div>
                    <Badge variant="outline" className="text-xs">Most Impact</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900 text-base sm:text-lg">Long-term</p>
                      <p className="text-sm text-slate-600 mt-1">3-6 months</p>
                    </div>
                    <Badge variant="outline" className="text-xs">Deep Immersion</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-slate-900">Requirements & Options</h2>
              <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    Age Requirements
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Volunteers aged <strong>14-67 years</strong> are welcome. Minors (under 18) must be accompanied by a parent/guardian or have written consent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    On-Site Volunteering
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Live and work in our communities in Kenya and Uganda. Includes accommodation, meals, and full cultural immersion.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    Online/Remote Volunteering
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Contribute remotely in areas like communications, fundraising, research, curriculum development, and administrative support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Volunteers Gain */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">What You'll Gain</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Volunteering is a two-way exchange. Here's what our volunteers take away from the experience.
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Hands-On Experience</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Practical skills in education, healthcare, construction, or community development
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Cultural Understanding</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Deep immersion in Kenyan and Ugandan cultures, traditions, and daily life
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Certificate & References</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Official certificate of completion and reference letter for future opportunities
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
              <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Global Network</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Join a worldwide community of changemakers and lifelong connections
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-slate-900">What's Included</h2>
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
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
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.5} />
                    <span className="text-sm sm:text-base text-slate-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-slate-900">Program Fees</h2>
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-sm sm:text-base text-slate-900">2 weeks:</span>
                    <span className="font-semibold text-base sm:text-lg text-slate-900">$600</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-sm sm:text-base text-slate-900">4 weeks:</span>
                    <span className="font-semibold text-base sm:text-lg text-slate-900">$1,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-sm sm:text-base text-slate-900">8 weeks:</span>
                    <span className="font-semibold text-base sm:text-lg text-slate-900">$1,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-900">12 weeks:</span>
                    <span className="font-semibold text-base sm:text-lg text-slate-900">$2,500</span>
                  </div>
                </div>
                <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fees cover accommodation, meals, support, and directly fund our community programs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section with Background Image */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Volunteer-/IMG_6861.JPG"
                alt="Volunteer with UCESCO"
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
                Join our volunteer community and create lasting impact across East Africa. Share your skills, passion, and time to transform lives.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <Button size="lg" asChild variant="secondary" className="w-full sm:w-auto">
                  <Link href="/volunteer/apply">
                    Apply to Volunteer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="w-full sm:w-auto border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
