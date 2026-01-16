"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/layout";
import { ArrowRight, Calendar, Clock } from "lucide-react";

// Mock news data - will be replaced with CMS data later
const mockNews = [
  {
    id: 1,
    slug: "community-cleanup-drive-2024",
    title: "Community Cleanup Drive: Making Kibera Cleaner & Greener",
    excerpt: "Over 200 volunteers joined us for our monthly community cleanup initiative, collecting over 2 tons of waste and planting 50 trees.",
    image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Events-/Clean up 3.jpg",
    category: "Community Service",
    date: "2024-12-15",
    readTime: "3 min read",
  },
  {
    id: 2,
    slug: "tree-planting-initiative",
    title: "Planting Hope: 500 Trees for a Sustainable Future",
    excerpt: "Our environmental conservation program reached a milestone as students and community members came together to plant 500 indigenous trees.",
    image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Events-/Tree 1.JPG",
    category: "Environment",
    date: "2024-12-10",
    readTime: "4 min read",
  },
  {
    id: 3,
    slug: "love-outreach-program",
    title: "We Give Love: Holiday Outreach Brings Joy to 300 Children",
    excerpt: "Our annual holiday outreach program distributed food, clothing, and educational materials to over 300 children in underserved communities.",
    image: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Events-/We give love 18.JPG",
    category: "Outreach",
    date: "2024-12-05",
    readTime: "5 min read",
  },
];

export function LatestNews() {
  const [news, setNews] = useState<typeof mockNews>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching from CMS
    async function loadNews() {
      try {
        // TODO: Replace with actual CMS fetch
        // const data = await fetchLatestNews(3);
        // setNews(data);

        // For now, use mock data
        setTimeout(() => {
          setNews(mockNews);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Failed to load news:", error);
        setNews(mockNews);
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  return (
    <Section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Latest Updates
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              News & Events
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Stay informed about our latest initiatives and community impact
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex border-slate-300 hover:bg-slate-100">
            <Link href="/blog">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="aspect-[16/10] animate-pulse bg-slate-200" />
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                  <div className="h-6 animate-pulse rounded bg-slate-200" />
                  <div className="space-y-2">
                    <div className="h-4 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <article className="h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-slate-200">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-slate-700 backdrop-blur-sm shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-slate-600 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-sm font-medium text-primary">
                      Read more
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
            <Link href="/blog">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
