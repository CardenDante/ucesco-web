"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/layout";
import { getFeaturedImpactStories, getStrapiMediaUrl, type ImpactStory } from "@/lib/strapi";
import { ArrowRight } from "lucide-react";

export function FeaturedStories() {
  const [stories, setStories] = useState<ImpactStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStories() {
      try {
        const data = await getFeaturedImpactStories(3);
        setStories(data);
      } catch (error) {
        console.error("Failed to load stories:", error);
      } finally {
        setLoading(false);
      }
    }
    loadStories();
  }, []);

  // Fallback stories if Strapi is not available
  const fallbackStories = [
    {
      title: "Transforming Healthcare in Samburu",
      excerpt: "Through our medical camps, we've provided free healthcare to over 5,000 community members in the past year.",
      image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Medical_Camps-/IMG_1819.JPG",
      location: "Samburu, Kenya",
    },
    {
      title: "Empowering Women Entrepreneurs",
      excerpt: "100+ women have started their own businesses through our microbusiness training and support programs.",
      image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/IMG_2449.JPG",
      location: "Mathare, Kenya",
    },
    {
      title: "Education Changes Lives",
      excerpt: "Meet Sarah, a scholarship recipient who is now pursuing her dream of becoming a teacher.",
      image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_2437.JPG",
      location: "Kibera, Kenya",
    },
  ];

  const displayStories = stories.length > 0 ? stories : null;

  return (
    <Section>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Impact Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories of transformation and hope
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link href="/impact">
              View All Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 animate-pulse bg-muted" />
                <CardHeader>
                  <div className="h-6 animate-pulse rounded bg-muted" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 animate-pulse rounded bg-muted" />
                    <div className="h-4 animate-pulse rounded bg-muted" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : displayStories ? (
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {displayStories.map((story) => (
              <Link key={story.id} href={`/impact/stories/${story.attributes.slug}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    {story.attributes.coverImage?.data && (
                      <Image
                        src={getStrapiMediaUrl(story.attributes.coverImage.data.attributes.url)}
                        alt={story.attributes.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{story.attributes.title}</CardTitle>
                    <CardDescription>{story.attributes.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {story.attributes.story.substring(0, 150)}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {fallbackStories.map((story, index) => (
              <Card key={index} className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{story.title}</CardTitle>
                  <CardDescription>{story.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{story.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link href="/impact">
              View All Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
