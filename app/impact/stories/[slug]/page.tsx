import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MapPin, ArrowLeft } from "lucide-react";

async function getStoryBySlug(slug: string) {
  return {
    title: "From Patient to Community Health Champion",
    slug: slug,
    story: `
      <p>When Maria first attended one of our medical camps in Samburu, she was seeking treatment for a chronic condition. Little did she know that this visit would change not just her health, but her entire community's wellbeing.</p>

      <p>After receiving treatment and health education, Maria became passionate about sharing what she learned. She started organizing health awareness sessions in her village, teaching neighbors about disease prevention, nutrition, and hygiene.</p>

      <p>"The medical camp didn't just heal my body—it opened my eyes to how I could help others," Maria explains. "I realized that knowledge is as powerful as medicine."</p>

      <p>Today, Maria serves as a Community Health Volunteer, the bridge between UCESCO's medical team and her community. She conducts health screenings, provides basic first aid, and ensures that community members attend medical camps.</p>

      <p>Her impact is measurable: in the past year, preventable diseases in her village have decreased by 40%, and attendance at medical camps has tripled. But for Maria, the greatest reward is seeing her neighbors healthy and empowered with knowledge.</p>

      <p>"UCESCO gave me a second chance at health and purpose," she says. "Now I'm giving that gift to others."</p>
    `,
    location: "Samburu, Kenya",
    programCategory: "Medical",
    coverImage: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_1843.JPG",
    date: "2025-12-15",
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const story = await getStoryBySlug(params.slug);
  return {
    title: `${story.title} | Impact Stories | UCESCO Africa`,
    description: story.story.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default async function ImpactStoryPage({ params }: { params: { slug: string } }) {
  const story = await getStoryBySlug(params.slug);

  return (
    <>
      <Section className="pt-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Impact", href: "/impact" },
                { label: "Stories", href: "/impact#stories" },
                { label: story.title }
              ]}
              className="mb-8"
            />

            <div className="mb-4 flex items-center gap-2">
              <Badge>{story.programCategory}</Badge>
              <span className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {story.location}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {story.title}
            </h1>

            <div className="relative mt-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src={story.coverImage}
                alt={story.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              className="prose prose-lg mt-8 max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: story.story }}
            />

            <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Be Part of More Stories Like This</h3>
              <p className="text-muted-foreground mb-6">
                Your support creates lasting change in communities across East Africa
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/donate">Make a Donation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/sponsor">Sponsor a Child</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
