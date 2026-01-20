import type { Metadata } from "next";
import Image from "next/image";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | UCESCO Africa",
  description: "Meet the dedicated team behind UCESCO Africa's mission to transform communities.",
};

// TODO: This will be replaced with data from Strapi CMS
// The structure below shows the expected data format
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email?: string;
  linkedin?: string;
  department?: string;
}

// Placeholder team members - will be replaced with Strapi data
const placeholderTeam: TeamMember[] = [
  {
    id: 1,
    name: "Team Member Name",
    role: "Position Title",
    bio: "This team member's bio will be loaded from Strapi CMS. It will include their background, experience, and passion for the work at UCESCO Africa.",
    imageUrl: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7270.JPG",
    email: "member@ucesco.org",
    linkedin: "#",
    department: "Leadership",
  },
  {
    id: 2,
    name: "Team Member Name",
    role: "Position Title",
    bio: "This team member's bio will be loaded from Strapi CMS. It will include their background, experience, and passion for the work at UCESCO Africa.",
    imageUrl: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7395.JPG",
    email: "member@ucesco.org",
    department: "Programs",
  },
  {
    id: 3,
    name: "Team Member Name",
    role: "Position Title",
    bio: "This team member's bio will be loaded from Strapi CMS. It will include their background, experience, and passion for the work at UCESCO Africa.",
    imageUrl: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Homepage-/Hero%20image.JPG",
    department: "Operations",
  },
  {
    id: 4,
    name: "Team Member Name",
    role: "Position Title",
    bio: "This team member's bio will be loaded from Strapi CMS. It will include their background, experience, and passion for the work at UCESCO Africa.",
    imageUrl: "/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7270.JPG",
    department: "Programs",
  },
];

export default async function TeamPage() {
  // TODO: Fetch team members from Strapi
  // const teamMembers = await fetchTeamFromStrapi();
  const teamMembers = placeholderTeam;

  // Group team members by department
  const departments = Array.from(new Set(teamMembers.map(member => member.department)));

  return (
    <>
      <Hero
        title="Our Team"
        description="Meet the passionate individuals driving change across communities"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7395.JPG"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      {/* Team Introduction */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900 mb-4">
              The Heart of UCESCO Africa
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our team is comprised of dedicated professionals, volunteers, and community leaders who share a common vision:
              to empower vulnerable communities through sustainable development. Together, we work tirelessly to transform
              lives across Kenya and Uganda.
            </p>
          </div>

          {/* Placeholder Notice */}
          <div className="mb-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Team Profiles Loading from CMS</h3>
                <p className="text-sm text-amber-800">
                  Our team member profiles are managed through Strapi CMS. The content displayed below represents
                  placeholder data. Live team information will be dynamically loaded from our content management system.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members by Department */}
          {departments.map((department) => (
            <div key={department} className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-primary/20">
                {department}
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers
                  .filter((member) => member.department === department)
                  .map((member) => (
                    <Card key={member.id} className="border-slate-200 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                      <div className="relative h-64 bg-slate-100 overflow-hidden">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="bg-white/90 text-slate-900 hover:bg-white">
                            {member.department}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                        <p className="text-primary font-medium mb-3">{member.role}</p>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>

                        {/* Contact Links */}
                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail className="h-4 w-4" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {/* Join Our Team CTA */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-white/95 mb-8">
              We're always looking for passionate individuals who want to make a difference. Whether as a volunteer,
              partner, or team member, there's a place for you at UCESCO Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-slate-100 transition-colors"
              >
                Become a Volunteer
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
