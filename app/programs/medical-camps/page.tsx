import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CheckCircle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Medical Camps & Healthcare | UCESCO Africa",
  description: "Providing essential healthcare services to underserved communities through free medical camps across Kenya and Uganda.",
};

const services = [
  "General medical consultations",
  "Pediatric care",
  "Maternal health services",
  "Dental services",
  "Eye screening and glasses provision",
  "Chronic disease management",
  "Health education and awareness",
  "Free medication distribution",
];

const activities = [
  {
    title: "Community Health Outreach",
    description: "Regular medical camps in remote and underserved areas providing comprehensive healthcare services.",
  },
  {
    title: "Health Education",
    description: "Workshops and training on disease prevention, hygiene, nutrition, and maternal health.",
  },
  {
    title: "Medical Partnerships",
    description: "Collaborations with healthcare professionals and medical institutions for specialized care.",
  },
  {
    title: "Emergency Response",
    description: "Rapid response to health emergencies and disease outbreaks in vulnerable communities.",
  },
];

export default function MedicalCampsPage() {
  return (
    <>
      <Hero
        title="Free Medical Camps & Healthcare"
        description="Bringing quality healthcare to underserved communities across East Africa"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Medical_Camps-/IMG_9007.JPG"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Heart className="h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Program Overview</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Access to healthcare remains a critical challenge for many communities in Kenya and Uganda.
                Our Free Medical Camps program addresses this gap by bringing quality healthcare services
                directly to communities that need them most.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Through partnerships with medical professionals, healthcare institutions, and volunteers,
                we organize regular medical camps that provide comprehensive healthcare services completely
                free of charge.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg sm:text-xl font-semibold text-slate-900">Services Provided</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm sm:text-base text-slate-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Activities */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Key Activities</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Comprehensive healthcare initiatives for sustainable community health
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
            {activities.map((activity, index) => (
              <div key={index} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{activity.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact & Statistics */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Our Impact (2022-2025)</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Comprehensive healthcare data from our annual and mini medical camps
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-3 text-left text-sm sm:text-base font-semibold text-slate-900">Type of Camp</th>
                      <th className="pb-3 text-left text-sm sm:text-base font-semibold text-slate-900">Location</th>
                      <th className="pb-3 text-right text-sm sm:text-base font-semibold text-slate-900">Patients Treated</th>
                      <th className="pb-3 text-right text-sm sm:text-base font-semibold text-slate-900">Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Annual Medical Camp</td>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Nairobi</td>
                      <td className="py-3 text-right text-sm sm:text-base font-semibold text-slate-900">3,847</td>
                      <td className="py-3 text-right text-xs sm:text-sm text-slate-500">2022</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Annual Medical Camp</td>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Nairobi</td>
                      <td className="py-3 text-right text-sm sm:text-base font-semibold text-slate-900">5,493</td>
                      <td className="py-3 text-right text-xs sm:text-sm text-slate-500">2023</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Annual Medical Camp</td>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Nairobi</td>
                      <td className="py-3 text-right text-sm sm:text-base font-semibold text-slate-900">10,906</td>
                      <td className="py-3 text-right text-xs sm:text-sm text-slate-500">2024</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Mini Medical Camp</td>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Samburu (Ichingei Village)</td>
                      <td className="py-3 text-right text-sm sm:text-base font-semibold text-slate-900">366</td>
                      <td className="py-3 text-right text-xs sm:text-sm text-slate-500">2024</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Annual Medical Camp</td>
                      <td className="py-3 text-xs sm:text-sm text-slate-600">Nairobi</td>
                      <td className="py-3 text-right text-sm sm:text-base font-semibold text-slate-900">13,928</td>
                      <td className="py-3 text-right text-xs sm:text-sm text-slate-500">2025</td>
                    </tr>
                    <tr className="border-t-2 border-primary/20 bg-primary/5">
                      <td className="py-3 text-xs sm:text-sm font-bold text-slate-900" colSpan={2}>Total (2022–2025)</td>
                      <td className="py-3 text-right text-lg sm:text-xl font-bold text-primary">34,540</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mini Medical Camps */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl sm:text-2xl font-bold text-slate-900">Pilot Mini Medical Camps</h2>
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Samburu Mini Medical Camps</h3>
              <p className="text-sm sm:text-base text-slate-600">
                In 2024, UCESCO launched pilot mini medical camps in Samburu County's Ichingei Village,
                reaching 366 patients in remote, underserved communities. These smaller, targeted camps
                bring healthcare to areas with limited access to medical facilities, providing consultations,
                diagnostics, medication, and health education.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                The success of this pilot program demonstrates the effectiveness of decentralized healthcare
                delivery in reaching the most vulnerable populations. We plan to expand mini medical camps
                to more remote areas across Kenya and Uganda.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">Support Our Healthcare Programs</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Help us bring quality healthcare to more communities in need
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <Link href="/volunteer">Volunteer as a Medic</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
