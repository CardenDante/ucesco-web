"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, CheckCircle, Gift, Mail, Calendar } from "lucide-react";

// Mock data for children (replace with Strapi data later)
const mockChildren = [
  {
    id: 1,
    code: "KE-SAM-001",
    firstName: "Loise",
    age: 8,
    gender: "Female",
    location: "Samburu",
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
    bio: "John is interested in agriculture and wants to help his community through sustainable farming.",
    needs: "Secondary school fees and vocational training",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_2437.JPG",
  },
];

export default function SponsorPage() {
  const [locationFilter, setLocationFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");

  const filteredChildren = mockChildren.filter((child) => {
    if (locationFilter !== "all" && child.location !== locationFilter) return false;
    if (ageFilter === "5-8" && (child.age < 5 || child.age > 8)) return false;
    if (ageFilter === "9-12" && (child.age < 9 || child.age > 12)) return false;
    if (ageFilter === "13-17" && (child.age < 13 || child.age > 17)) return false;
    return true;
  });

  return (
    <>
      <Hero
        title="Sponsor a Child"
        description="Transform a child's life through education, healthcare, and hope"
        size="md"
      />

      {/* How Sponsorship Works */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How Child Sponsorship Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your monthly support provides comprehensive care for a child in need
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Choose a Child</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse profiles and select a child whose story touches your heart
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Make an Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your support covers education, healthcare, nutrition, and care
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Stay Connected</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Receive updates, photos, and letters from your sponsored child
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Long-term Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Continue supporting until they complete their education
              </p>
            </div>
          </div>

          {/* What Sponsorship Covers */}
          <div className="mt-16 rounded-lg bg-muted/50 p-8">
            <h3 className="mb-6 text-center text-2xl font-bold">What Your Sponsorship Covers</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "School fees and exam fees",
                "Uniforms and school supplies",
                "Learning materials and textbooks",
                "Healthcare and medical check-ups",
                "Nutritional support",
                "Mentorship and counseling",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
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

      {/* Children Listing */}
      <Section className="bg-muted/30">
        <Container>
          <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h2 className="text-2xl font-bold">Meet the Children</h2>
            <div className="flex flex-wrap gap-4">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Samburu">Samburu</SelectItem>
                  <SelectItem value="Mathare">Mathare</SelectItem>
                  <SelectItem value="Kibera">Kibera</SelectItem>
                  <SelectItem value="Busia">Busia</SelectItem>
                  <SelectItem value="Uganda">Uganda</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ageFilter} onValueChange={setAgeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Age Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="5-8">5-8 years</SelectItem>
                  <SelectItem value="9-12">9-12 years</SelectItem>
                  <SelectItem value="13-17">13-17 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredChildren.map((child) => (
              <Card key={child.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={child.photo}
                    alt={child.firstName}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{child.firstName}</CardTitle>
                      <CardDescription>
                        {child.age} years • {child.gender}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{child.location}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{child.bio}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/sponsor/${child.code}`}>Sponsor {child.firstName}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
