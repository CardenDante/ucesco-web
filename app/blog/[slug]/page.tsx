import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Calendar, User, ArrowLeft } from "lucide-react";

// Mock function - replace with actual Strapi call
async function getPostBySlug(slug: string) {
  return {
    title: "Empowering Women Through Skills Training in Mathare",
    slug: slug,
    excerpt: "Learn how our women empowerment program is transforming lives in Mathare through vocational skills training.",
    content: `
      <p>In the heart of Mathare, one of Nairobi's largest informal settlements, a quiet revolution is taking place. Through UCESCO Africa's Women Empowerment Program, women are breaking the cycle of poverty and building sustainable futures for themselves and their families.</p>

      <h2>The Challenge</h2>
      <p>Many women in Mathare face significant barriers to economic independence. Limited access to education, training, and capital keeps them trapped in cycles of poverty. Traditional support systems often fail to reach these communities, leaving women with few options for advancement.</p>

      <h2>Our Approach</h2>
      <p>Our comprehensive program provides vocational skills training in tailoring, hairdressing, and catering. But we go beyond just teaching skills—we provide business mentorship, access to microfinance, and ongoing support to help women start and grow their own businesses.</p>

      <h2>Meet Grace</h2>
      <p>Grace is a 32-year-old mother of three who joined our program six months ago. "I never thought I could own my own business," she says. "But UCESCO believed in me when I didn't believe in myself." Today, Grace runs a successful tailoring business, employing two other women from her community.</p>

      <h2>Impact</h2>
      <p>Over the past year, we've trained 150 women in Mathare. Of these, 85% have started their own businesses, and many are now training others. The ripple effect is profound—these women are not just transforming their own lives, but lifting entire families and communities.</p>

      <h2>Looking Forward</h2>
      <p>We're expanding the program to reach 200 more women next year. With your support, we can help even more women discover their potential and build brighter futures.</p>
    `,
    coverImage: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Programs-/IMG_2449.JPG",
    category: "Story",
    publishedAt: "2026-01-10",
    author: "UCESCO Team",
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} | UCESCO Africa`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <>
      <Section className="pt-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title }
              ]}
              className="mb-8"
            />

            <Badge className="mb-4">{post.category}</Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>

            <div className="relative mt-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              className="prose prose-lg mt-8 max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 border-t pt-8">
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <p className="text-muted-foreground mb-4">
                Want to support programs like this? Your donation can help us reach more women and transform more lives.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/volunteer">Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
