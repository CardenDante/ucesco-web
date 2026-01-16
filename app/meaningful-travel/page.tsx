import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Calendar, Users, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Meaningful Travel | UCESCO Africa",
  description: "Travel with purpose. Experience authentic East African culture while making a positive impact on local communities.",
};

const experiences = [
  {
    title: "Samburu Cultural Immersion",
    duration: "7 days",
    location: "Samburu, Northern Kenya",
    price: "$1,200",
    description: "Experience the rich culture of the Samburu people while supporting community development projects.",
    highlights: ["Traditional village visits", "Community project participation", "Wildlife safari", "Cultural performances"],
    image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Meaningful_Travel-/IMG_2409.JPG",
  },
  {
    title: "Urban Impact Journey",
    duration: "5 days",
    location: "Nairobi, Kenya",
    price: "$900",
    description: "Explore Nairobi's vibrant communities and contribute to education and youth development programs.",
    highlights: ["Community school visits", "Youth mentorship activities", "City culture tour", "Local market experience"],
    image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Meaningful_Travel-/IMG_1922.JPG",
  },
];

export default function MeaningfulTravelPage() {
  return (
    <>
      <Hero
        title="Meaningful Travel"
        description="Travel with purpose. Experience authentic culture while making positive impact."
        size="md"
      />

      {/* What is Meaningful Travel */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Travel That Transforms</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Meaningful Travel is not volunteering—it's a carefully crafted experience that combines authentic
              cultural immersion with positive community impact. Spend time with local communities, learn about
              their way of life, and contribute to sustainable development projects, all while exploring the
              beauty of East Africa.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Authentic Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Go beyond typical tourism to experience real culture and connect with local communities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your participation directly supports community projects and local economies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Guided & Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expertly guided experiences with full logistical support and safety measures
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Experiences */}
      <Section className="bg-muted/50">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Our Experiences</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl">{exp.title}</CardTitle>
                          <CardDescription className="mt-2">{exp.description}</CardDescription>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.duration}
                        </Badge>
                        <Badge variant="secondary">
                          <MapPin className="mr-1 h-3 w-3" />
                          {exp.location}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold">Experience Highlights:</h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="text-3xl font-bold text-primary">{exp.price}</div>
                          <div className="text-sm text-muted-foreground">per person</div>
                        </div>
                        <Button asChild>
                          <Link href="/meaningful-travel/enquire">Book Now</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold">What's Included</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Airport transfers",
                "All accommodation",
                "All meals",
                "Experienced local guides",
                "All activities and excursions",
                "Cultural performances and workshops",
                "Community project participation",
                "Travel insurance assistance",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready for a Meaningful Journey?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Book your transformative travel experience today
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/meaningful-travel/enquire">Make an Enquiry</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
