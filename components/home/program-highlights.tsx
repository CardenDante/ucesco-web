import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, Container } from "@/components/layout";
import {
  Heart,
  Users,
  GraduationCap,
  TrendingUp,
  Wheat,
  Plane,
} from "lucide-react";

const programs = [
  {
    title: "Free Medical Camps",
    description: "Providing essential healthcare services to underserved communities across Kenya and Uganda",
    icon: Heart,
    href: "/programs/medical-camps",
    color: "text-red-500",
  },
  {
    title: "Women Empowerment",
    description: "Supporting women through skills training, microbusiness, and economic independence",
    icon: Users,
    href: "/programs/women-empowerment",
    color: "text-purple-500",
  },
  {
    title: "Education & Child Support",
    description: "ECD programs, scholarships, and educational support for children in need",
    icon: GraduationCap,
    href: "/programs/education",
    color: "text-blue-500",
  },
  {
    title: "Youth Development",
    description: "Nurturing talent through sports, skills training, and youth empowerment programs",
    icon: TrendingUp,
    href: "/programs/youth-development",
    color: "text-orange-500",
  },
  {
    title: "Food Security",
    description: "Sustainable agriculture and livelihood programs for long-term community resilience",
    icon: Wheat,
    href: "/programs/food-security",
    color: "text-green-500",
  },
  {
    title: "Volunteer & Travel",
    description: "Make a difference through hands-on volunteering and meaningful travel experiences",
    icon: Plane,
    href: "/volunteer",
    color: "text-primary",
  },
];

export function ProgramHighlights() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transforming lives through sustainable community development
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Link key={index} href={program.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className={`mb-4 ${program.color}`}>
                    <program.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
