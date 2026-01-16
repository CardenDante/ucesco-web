import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, Users } from "lucide-react";

// Mock function - replace with Strapi data
async function getChildByCode(code: string) {
  return {
    code: code,
    firstName: "Loise",
    age: 8,
    gender: "Female",
    location: "Samburu",
    bio: `Loise is a bright and cheerful 8-year-old girl from Samburu County in Northern Kenya.
    She lives with her grandmother and two younger siblings in a small homestead. Despite facing
    many challenges, Loise maintains a positive attitude and dreams of becoming a teacher one day.

    Loise loves reading and often helps her younger siblings with their homework. She walks 5 kilometers
    to school every day and never misses a class. Her teachers describe her as hardworking, kind, and
    always willing to help others.

    Your sponsorship will ensure Loise can continue her education, receive regular medical check-ups,
    nutritious meals, and the support she needs to achieve her dreams.`,
    needs: "School fees, uniforms, learning materials, healthcare support, and nutritional assistance",
    photo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_2437.JPG",
    community: "Samburu community in Northern Kenya, a semi-arid region where families depend on livestock",
  };
}

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  const child = await getChildByCode(params.code);
  return {
    title: `Sponsor ${child.firstName} | UCESCO Africa`,
    description: `Help transform ${child.firstName}'s life through education and comprehensive support.`,
  };
}

export default async function ChildProfilePage({ params }: { params: { code: string } }) {
  const child = await getChildByCode(params.code);

  return (
    <>
      <Section className="pt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Child Photo */}
            <div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={child.photo}
                  alt={child.firstName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Child Info */}
            <div>
              <Badge className="mb-4">{child.location}</Badge>
              <h1 className="text-4xl font-bold">Meet {child.firstName}</h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{child.age} years old</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{child.gender}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{child.location}, Kenya</span>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-lg leading-relaxed">
                {child.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">{paragraph.trim()}</p>
                ))}
              </div>

              {/* Needs Card */}
              <Card className="mt-8">
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">What {child.firstName} Needs</h3>
                  <p className="text-sm text-muted-foreground">{child.needs}</p>
                </CardContent>
              </Card>

              {/* Sponsorship Options */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Sponsorship Options</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-2 border-primary">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-primary">$40</div>
                      <div className="mt-1 text-sm text-muted-foreground">per month</div>
                      <Button asChild className="mt-4 w-full" size="lg">
                        <Link href={`/sponsor/${child.code}/checkout?plan=monthly`}>
                          Sponsor Monthly
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold">$480</div>
                      <div className="mt-1 text-sm text-muted-foreground">per year</div>
                      <Button asChild className="mt-4 w-full" variant="outline" size="lg">
                        <Link href={`/sponsor/${child.code}/checkout?plan=yearly`}>
                          Sponsor Yearly
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Link href="/sponsor" className="text-sm text-muted-foreground hover:text-primary underline">
                    ← View other children
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Community Context */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">About {child.firstName}'s Community</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {child.community}
            </p>
          </div>
        </Container>
      </Section>

      {/* What Your Sponsorship Does */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">What Your Sponsorship Provides</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">Education Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  School fees, uniforms, books, and all learning materials
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">Healthcare</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Regular check-ups, medical care, and health education
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">Holistic Care</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nutrition, mentorship, and emotional support
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
