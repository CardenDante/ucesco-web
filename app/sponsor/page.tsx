"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Heart, CheckCircle, Gift, Mail, Calendar, Search } from "lucide-react";

// Mock data for children (replace with Strapi data later)
const mockChildren = [
  {
    id: 1,
    code: "KE-SAM-001",
    firstName: "Loise",
    age: 8,
    gender: "Female",
    location: "Samburu",
    birthday: { month: 3, day: 15 },
    categories: ["Orphaned"],
    fundingGoal: 360, // Annual goal
    fundingReceived: 180,
    bio: "Loise dreams of becoming a teacher. She loves reading and helping her younger siblings with homework.",
    needs: "School fees, uniforms, and learning materials",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_2437.JPG",
  },
  {
    id: 2,
    code: "KE-MAT-002",
    firstName: "Brian",
    age: 10,
    gender: "Male",
    location: "Mathare",
    birthday: { month: 7, day: 22 },
    categories: [],
    fundingGoal: 360,
    fundingReceived: 90,
    bio: "Brian is passionate about football and wants to be a professional player. He's a bright student who needs support.",
    needs: "School fees, sports equipment, and nutritional support",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_1846.JPG",
  },
  {
    id: 3,
    code: "KE-KIB-003",
    firstName: "Faith",
    age: 7,
    gender: "Female",
    location: "Kibera",
    birthday: { month: 11, day: 8 },
    categories: ["Has Disabilities"],
    fundingGoal: 360,
    fundingReceived: 270,
    bio: "Faith is a cheerful girl who loves singing in the church choir. She's eager to learn and dreams big.",
    needs: "School fees, uniforms, and healthcare support",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_1798.JPG",
  },
  {
    id: 4,
    code: "KE-BUS-004",
    firstName: "John",
    age: 12,
    gender: "Male",
    location: "Busia",
    birthday: { month: 1, day: 30 },
    categories: ["Orphaned"],
    fundingGoal: 360,
    fundingReceived: 120,
    bio: "John is interested in agriculture and wants to help his community through sustainable farming.",
    needs: "Secondary school fees and vocational training",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_2437.JPG",
  },
  {
    id: 5,
    code: "UG-KAM-005",
    firstName: "Grace",
    age: 9,
    gender: "Female",
    location: "Kampala",
    birthday: { month: 5, day: 12 },
    categories: ["Single Parent"],
    fundingGoal: 360,
    fundingReceived: 0,
    bio: "Grace loves mathematics and wants to become an engineer to build schools in her community.",
    needs: "School fees, learning materials, and uniforms",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_2437.JPG",
  },
  {
    id: 6,
    code: "KE-SAM-006",
    firstName: "David",
    age: 14,
    gender: "Male",
    location: "Samburu",
    birthday: { month: 9, day: 5 },
    categories: ["Vulnerable Family"],
    fundingGoal: 360,
    fundingReceived: 240,
    bio: "David is a talented artist who dreams of studying design. He helps care for his younger siblings.",
    needs: "Secondary school fees and art materials",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_1846.JPG",
  },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function SponsorPage() {
  const [genderFilter, setGenderFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [birthdayMonthFilter, setBirthdayMonthFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChildren = mockChildren.filter((child) => {
    if (genderFilter !== "all" && child.gender !== genderFilter) return false;
    if (locationFilter !== "all" && child.location !== locationFilter) return false;
    if (ageFilter === "5-8" && (child.age < 5 || child.age > 8)) return false;
    if (ageFilter === "9-12" && (child.age < 9 || child.age > 12)) return false;
    if (ageFilter === "13-17" && (child.age < 13 || child.age > 17)) return false;
    if (birthdayMonthFilter !== "all" && child.birthday.month !== parseInt(birthdayMonthFilter)) return false;
    if (categoryFilter !== "all" && !child.categories.includes(categoryFilter)) return false;
    if (searchQuery && !child.firstName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Hero
        title="Sponsor a Child / Adopt a Child"
        description="Transform a child's life through needs-based support and sponsorship"
        size="md"
      />

      {/* How Sponsorship Works - Updated Content */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How Child Sponsorship Works</h2>
            <p className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
              Child sponsorship at UCESCO–Africa is a needs-based support program, not an automatic placement system.
              Sponsorship opportunities arise as needs are identified within our partner schools and community programs.
            </p>
          </div>

          <div className="mt-12 rounded-lg border bg-muted/30 p-8">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  When a suitable sponsorship opportunity becomes available, interested sponsors are contacted and guided
                  through the process. Sponsorship is not guaranteed immediately, and there is no fixed education level
                  attached. Our priority is matching available support with children who are most in need at any given time.
                </p>
                <p className="mt-2 text-muted-foreground">
                  This flexible approach allows us to respond responsibly, sustainably, and with dignity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Sponsorship Options</h3>
                <p className="text-muted-foreground mb-3">
                  Sponsors may choose the level and duration of support that works best for them:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm"><strong>Full or Partial Sponsorship</strong> – determined by the sponsor's preference</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm"><strong>Termly or Annual Support</strong> – based on school terms or yearly cycles</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  All sponsorship arrangements are discussed and agreed upon transparently before confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* What Sponsorship Supports */}
          <div className="mt-12">
            <h3 className="mb-6 text-center text-2xl font-bold">What Your Sponsorship Supports</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              A child sponsorship may contribute to:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "School fees and learning materials",
                "School meals and basic nutrition",
                "Uniforms and essential supplies",
                "Access to safe learning environments and mentorship",
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <CheckCircle className="mx-auto h-8 w-8 text-secondary mb-3" />
                    <p className="text-sm">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits to Sponsors */}
          <div className="mt-12 rounded-lg bg-primary/5 p-8">
            <h3 className="mb-6 text-center text-2xl font-bold">Benefits to Sponsors</h3>
            <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
              {[
                "A child profile once sponsorship is matched",
                "Periodic updates on progress and wellbeing (Sponsor's preference)",
                "Insight into how their support is making a real difference",
                "The assurance that their contribution is used responsibly and ethically",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Gift className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Statistics - Compassion-Style Trust Signals */}
      <Section className="bg-gradient-to-br from-primary/10 to-secondary/10">
        <Container>
          <div className="text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Proven Impact</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Real Results, Lasting Change</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our child sponsorship program transforms lives with measurable outcomes
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-primary">95%</div>
              <h3 className="text-xl font-semibold">Complete Education</h3>
              <p className="mt-2 text-muted-foreground">
                95% of sponsored children complete their full education cycle and break the poverty cycle
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-primary">92%</div>
              <h3 className="text-xl font-semibold">Gain Employment</h3>
              <p className="mt-2 text-muted-foreground">
                92% of graduates secure meaningful employment or start successful businesses
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-primary">25K+</div>
              <h3 className="text-xl font-semibold">Lives Transformed</h3>
              <p className="mt-2 text-muted-foreground">
                Over 25,000 children have benefited from our sponsorship program since inception
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-2 border-secondary/20 bg-background p-8 text-center">
            <div className="mx-auto flex max-w-2xl items-center justify-center gap-4">
              <CheckCircle className="h-12 w-12 flex-shrink-0 text-secondary" />
              <div className="text-left">
                <h3 className="text-xl font-bold">80% Directly to Programs</h3>
                <p className="text-muted-foreground">
                  80% of every sponsorship dollar goes directly to child support programs. Only 20% for operations.
                  Your impact is maximized.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sponsorship Packages */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Sponsorship Packages</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose to support a child for 1 month, 6 months, 1 year, or through a one-time donation.
              Every contribution becomes classrooms, meals, safety, and hope—real impact for real children.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Basic Package */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 text-4xl">🍀</div>
                <CardTitle className="text-2xl">BASIC PACKAGE</CardTitle>
                <CardDescription className="text-base">Essential support for education and nutrition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold">Per Month</span>
                    <span className="text-lg font-bold text-primary">$30 / €30 / £25</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold">6 Months</span>
                    <span className="text-lg font-bold text-primary">$180 / €180 / £150</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold">Per Year</span>
                    <span className="text-lg font-bold text-primary">$360 / €360 / £300</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {[
                      "Tuition fees",
                      "Uniforms",
                      "Books and stationery",
                      "Two balanced meals daily",
                      "Stability and motivation to stay in school",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Smile Package */}
            <Card className="border-2 border-secondary hover:border-secondary/70 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 text-4xl">😊</div>
                <CardTitle className="text-2xl">SMILE PACKAGE</CardTitle>
                <CardDescription className="text-base">Comprehensive care and enrichment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-secondary/10 p-4 rounded-lg text-center">
                  <p className="text-sm font-semibold text-secondary mb-1">Contact us for custom pricing</p>
                  <p className="text-xs text-muted-foreground">Tailored to your preferences and the child's needs</p>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {[
                      "Age-appropriate educational toys",
                      "Engaging reading and storytelling 📚 books",
                      "Nutritious daily meals for all 🍽️ children",
                      "Comprehensive learning ✏️ materials, tools, and supplies",
                      "Enhanced educational support and enrichment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Update Schedule */}
          <div className="mt-12 rounded-lg bg-primary/5 p-8 max-w-4xl mx-auto">
            <h3 className="font-semibold text-lg mb-4 text-center">Update Schedule</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="font-semibold text-primary mb-2">1 Year Sponsors</div>
                <p className="text-sm text-muted-foreground">Receive updates twice a year</p>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary mb-2">6 Month Sponsors</div>
                <p className="text-sm text-muted-foreground">Update at the end of sponsorship</p>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary mb-2">1 Month Sponsors</div>
                <p className="text-sm text-muted-foreground">Update upon payment</p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              <strong>Everybody receives</strong> a heartfelt thank-you letter upon payment with information about the student.
            </p>
          </div>
        </Container>
      </Section>

      {/* Children Listing */}
      <Section className="bg-muted/30">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Meet the Children</h2>

            {/* Search Bar */}
            <div className="mb-4 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Select value={genderFilter} onValueChange={setGenderFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genders</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Samburu">Samburu</SelectItem>
                  <SelectItem value="Mathare">Mathare</SelectItem>
                  <SelectItem value="Kibera">Kibera</SelectItem>
                  <SelectItem value="Busia">Busia</SelectItem>
                  <SelectItem value="Kampala">Kampala</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ageFilter} onValueChange={setAgeFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Age Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="5-8">5-8 years</SelectItem>
                  <SelectItem value="9-12">9-12 years</SelectItem>
                  <SelectItem value="13-17">13-17 years</SelectItem>
                </SelectContent>
              </Select>

              <Select value={birthdayMonthFilter} onValueChange={setBirthdayMonthFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Birthday Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  {months.map((month, index) => (
                    <SelectItem key={index} value={String(index + 1)}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Orphaned">Orphaned</SelectItem>
                  <SelectItem value="Has Disabilities">Has Disabilities</SelectItem>
                  <SelectItem value="Single Parent">Single Parent</SelectItem>
                  <SelectItem value="Vulnerable Family">Vulnerable Family</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              Showing {filteredChildren.length} of {mockChildren.length} children
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredChildren.map((child) => {
              const fundingPercentage = (child.fundingReceived / child.fundingGoal) * 100;
              const birthMonth = months[child.birthday.month - 1];

              return (
                <Card key={child.id} className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={child.photo}
                      alt={child.firstName}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {child.categories.length > 0 && (
                      <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                        {child.categories.map((category, index) => (
                          <Badge key={index} variant="default" className="bg-secondary text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{child.firstName}</CardTitle>
                        <CardDescription>
                          {child.age} years • {child.gender}
                        </CardDescription>
                        <p className="text-xs text-muted-foreground mt-1">
                          Birthday: {birthMonth} {child.birthday.day}
                        </p>
                      </div>
                      <Badge variant="secondary">{child.location}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="line-clamp-3 text-sm text-muted-foreground">{child.bio}</p>

                    {/* Progress Bar */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold">Funding Progress</span>
                        <span className="text-muted-foreground">
                          ${child.fundingReceived} of ${child.fundingGoal}
                        </span>
                      </div>
                      <Progress value={fundingPercentage} className="h-2" />
                      <p className="text-xs text-center text-muted-foreground">
                        {fundingPercentage.toFixed(0)}% funded
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/sponsor/${child.code}`}>Sponsor {child.firstName}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {filteredChildren.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No children match your current filters. Please try different criteria.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">How much does it cost to sponsor a child?</h3>
                <p className="text-muted-foreground">
                  Child sponsorship costs $40 per month (or $480 annually). This covers education, healthcare,
                  nutrition, and comprehensive support for your sponsored child.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Can I communicate with my sponsored child?</h3>
                <p className="text-muted-foreground">
                  Yes! You'll receive regular updates, photos, and progress reports. You can also write letters
                  to your sponsored child, and they can write back to you.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">How long does sponsorship last?</h3>
                <p className="text-muted-foreground">
                  Sponsorship typically continues until the child completes their secondary education or reaches
                  18 years of age. However, you can adjust your commitment based on your circumstances.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Is my contribution tax-deductible?</h3>
                <p className="text-muted-foreground">
                  Yes, UCESCO Africa is a registered charity, and your donations are tax-deductible.
                  You'll receive a receipt for tax purposes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Safeguarding Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Our Commitment to Safeguarding</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              UCESCO Africa is committed to the safety and protection of all children in our programs.
              We have strict safeguarding policies, regular monitoring, and transparent reporting to ensure
              every child's wellbeing and dignity are protected.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/impact/reports">View Our Safeguarding Policies</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
