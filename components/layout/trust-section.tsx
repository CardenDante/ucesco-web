import { Section, Container } from "@/components/layout";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const trustFactors = [
  {
    icon: Shield,
    title: "80% to Programs",
    description: "80% of all donations go directly to community programs. Only 20% for operations.",
  },
  {
    icon: Award,
    title: "Registered NGO",
    description: "Officially registered in Kenya & Uganda with full transparency and accountability.",
  },
  {
    icon: Users,
    title: "25,000+ Lives Impacted",
    description: "Over 25,000 individuals directly benefited from our programs since inception.",
  },
  {
    icon: TrendingUp,
    title: "95% Success Rate",
    description: "95% of sponsored children complete their education and break the cycle of poverty.",
  },
];

export function TrustSection() {
  return (
    <Section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
            Why Trust UCESCO Africa
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
            Transparent, accountable, and committed to creating lasting impact in every community we serve
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">
                <factor.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-slate-900 mb-2">
                {factor.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-900">Tax ID:</span>
              <span>Available upon request</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-semibold text-slate-900">Audited Annually</span>
            <span className="text-slate-300">•</span>
            <span className="font-semibold text-slate-900">Child Safeguarding Certified</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
