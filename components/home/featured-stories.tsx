"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/layout";
import { getFeaturedImpactStories, getStrapiMediaUrl, type ImpactStory } from "@/lib/strapi";
import { ArrowRight, MapPin } from "lucide-react";

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

  // Fallback stories with real UCESCO images
  const fallbackStories = [
    {
      id: "healthcare-samburu",
      slug: "healthcare-samburu",
      title: "Transforming Healthcare in Samburu",
      excerpt: "Through our medical camps, we've provided free healthcare to over 5,000 community members in the past year, bringing hope and healing to remote communities.",
      image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Medical_Camps-/Free Medical Camps & Health Outreach.jpg",
      location: "Samburu, Kenya",
      category: "Medical Camps",
    },
    {
      id: "women-empowerment",
      slug: "women-empowerment",
      title: "Empowering Women Entrepreneurs",
      excerpt: "100+ women have started their own businesses through our microbusiness training and support programs, achieving financial independence.",
      image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/Women Empowerment & Micro-Enterprise Support(1).JPG",
      location: "Mathare, Kenya",
      category: "Women Empowerment",
    },
    {
      id: "education-scholarship",
      slug: "education-scholarship",
      title: "Education Changes Lives",
      excerpt: "Meet the children whose lives have been transformed through our scholarship programs, now pursuing their dreams with access to quality education.",
      image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Child_Sponsorship-/IMG_5346.JPG",
      location: "Kibera, Kenya",
      category: "Education",
    },
  ];

  const displayStories = stories.length > 0 ? stories : null;

  return (
    <Section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              Impact Stories
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Real stories of transformation and hope from our communities
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex border-slate-300 hover:bg-slate-100">
            <Link href="/impact">
              View All Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Stories Grid */}
        {loading ? (
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] animate-pulse bg-slate-200" />
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
                  <div className="h-6 animate-pulse rounded bg-slate-200" />
                  <div className="space-y-2">
                    <div className="h-4 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : displayStories ? (
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayStories.map((story) => (
              <Link
                key={story.id}
                href={`/impact/stories/${story.attributes.slug}`}
                className="group"
              >
                <article className="h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {story.attributes.coverImage?.data && (
                      <Image
                        src={getStrapiMediaUrl(story.attributes.coverImage.data.attributes.url)}
                        alt={story.attributes.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white/90 text-xs sm:text-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      {story.attributes.location}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
                      {story.attributes.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 line-clamp-3">
                      {story.attributes.story.substring(0, 150)}...
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      Read story
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fallbackStories.map((story) => (
              <Link
                key={story.id}
                href={`/impact/stories/${story.slug}`}
                className="group"
              >
                <article className="h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-700 backdrop-blur-sm">
                        {story.category}
                      </span>
                    </div>
                    {/* Location */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white/90 text-xs sm:text-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      {story.location}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 line-clamp-3">
                      {story.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      Read story
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" className="border-slate-300">
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
