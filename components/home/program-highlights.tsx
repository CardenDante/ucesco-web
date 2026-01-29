import Link from "next/link";
import { Section, Container } from "@/components/layout";
import { ArrowRight } from "lucide-react";
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
    iconColor: "text-primary",
  },
  {
    title: "Women Empowerment",
    description: "Supporting women through skills training, microbusiness, and economic independence",
    icon: Users,
    href: "/programs/women-empowerment",
    iconColor: "text-primary",
  },
  {
    title: "Education & Child Support",
    description: "ECD programs, scholarships, and educational support for children in need",
    icon: GraduationCap,
    href: "/programs/education",
    iconColor: "text-primary",
  },
  {
    title: "Youth Development",
    description: "Nurturing talent through sports, skills training, and youth empowerment programs",
    icon: TrendingUp,
    href: "/programs/youth-development",
    iconColor: "text-primary",
  },
  {
    title: "Food Security",
    description: "Sustainable agriculture and livelihood programs for long-term community resilience",
    icon: Wheat,
    href: "/programs/food-security",
    iconColor: "text-primary",
  },
  {
    title: "Volunteer & Travel",
    description: "Make a difference through hands-on volunteering and meaningful travel experiences",
    icon: Plane,
    href: "/volunteer",
    iconColor: "text-primary",
  },
];

export function ProgramHighlights() {
  return (
    <Section className="py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
            Our Programs
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
            Transforming lives through sustainable community development
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={program.href}
              className="group"
            >
              <div className="relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 overflow-hidden">
                {/* Floating Icon */}
                <program.icon className={`absolute -top-4 -right-4 h-24 w-24 sm:h-32 sm:w-32 ${program.iconColor} opacity-10 group-hover:opacity-15 transition-opacity`} />

                {/* Content */}
                <div className="relative flex items-start gap-3 sm:gap-4">
                  <program.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${program.iconColor} group-hover:scale-110 transition-transform flex-shrink-0`} />

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Link indicator */}
                    <div className="mt-4 sm:mt-5 flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
