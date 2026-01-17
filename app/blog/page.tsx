import type { Metadata } from "next";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog & News | UCESCO Africa",
  description: "Stay updated with the latest news, stories, and insights from UCESCO Africa's work across East Africa.",
};

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog & News"
        description="Stories, updates, and insights from our work in communities"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Events-/Clean%20up%203.jpg"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section>
        <Container>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Blog integration with Strapi CMS coming soon. Check back for stories and updates from our programs.
            </p>
            <div className="mt-8">
              <Badge variant="secondary" className="text-sm">
                Content Management System Integration In Progress
              </Badge>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
