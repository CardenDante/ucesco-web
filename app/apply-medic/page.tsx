import type { Metadata } from "next";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply as a Medical Volunteer | UCESCO Africa",
  description: "Join our medical camps and provide healthcare to underserved communities across Kenya and Uganda.",
};

const requirements = [
  "Valid medical degree or nursing certification",
  "Current medical license/practicing certificate",
  "Minimum 2 years of clinical experience",
  "Flexibility and adaptability to work in resource-limited settings",
  "Cultural sensitivity and respect for local communities",
  "Commitment to volunteer for minimum 2 weeks",
  "Proficiency in English (Swahili is a plus)",
  "Physical fitness for field work",
];

const responsibilities = [
  "Provide medical consultations and treatment",
  "Conduct health screenings and assessments",
  "Administer medications and basic procedures",
  "Educate patients on disease prevention",
  "Train and mentor community health workers",
  "Maintain accurate patient records",
  "Participate in camp setup and logistics",
  "Collaborate with local healthcare providers",
];

export default function ApplyMedicPage() {
  return (
    <>
      <Hero
        title="Apply as a Medical Volunteer"
        description="Use your medical skills to transform lives in underserved communities"
        size="md"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <Stethoscope className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold">Join Our Medical Team</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our medical camps provide essential healthcare services to thousands of people who otherwise
                have limited access to medical care. As a medical volunteer, you'll work alongside local
                healthcare providers to deliver quality care and make a lasting impact.
              </p>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">Requirements</h3>
                <ul className="space-y-2">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">Responsibilities</h3>
                <ul className="space-y-2">
                  {responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-6 text-xl font-semibold">Application Form</h3>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country of Residence *</Label>
                      <Input id="country" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profession">Medical Profession *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select profession" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="doctor">Medical Doctor</SelectItem>
                          <SelectItem value="nurse">Nurse</SelectItem>
                          <SelectItem value="dentist">Dentist</SelectItem>
                          <SelectItem value="pharmacist">Pharmacist</SelectItem>
                          <SelectItem value="optometrist">Optometrist</SelectItem>
                          <SelectItem value="other">Other Healthcare Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization/Area of Expertise</Label>
                      <Input id="specialization" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input id="experience" type="number" min="2" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability">Preferred Dates/Availability *</Label>
                      <Input id="availability" placeholder="e.g., June-August 2026" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (weeks) *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 weeks</SelectItem>
                          <SelectItem value="4">4 weeks</SelectItem>
                          <SelectItem value="6">6 weeks</SelectItem>
                          <SelectItem value="8">8+ weeks</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to volunteer? *</Label>
                      <Textarea id="motivation" rows={4} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience-desc">Relevant Experience</Label>
                      <Textarea id="experience-desc" rows={4} />
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full">
                        Submit Application
                      </Button>
                      <p className="mt-4 text-center text-sm text-muted-foreground">
                        Our team will review your application and contact you within 5-7 business days
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Provide */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">What We Provide</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Accommodation in volunteer house",
                "All meals during your stay",
                "Airport pickup and drop-off",
                "Medical supplies and equipment",
                "Local transportation to camp sites",
                "Orientation and ongoing support",
                "Certificate of participation",
                "24/7 emergency contact",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-left text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Note: Medical volunteers are expected to cover their own airfare and visa costs.
              Program fee of $400 per month covers accommodation, meals, and logistical support.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
