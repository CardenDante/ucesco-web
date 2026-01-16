import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Volunteer Application | UCESCO Africa",
  description: "Apply to volunteer with UCESCO Africa and make a difference in communities across Kenya and Uganda.",
};

export default function VolunteerApplyPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Volunteer Application</h1>
            <p className="mt-2 text-muted-foreground">
              Start your journey to making a difference
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
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

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input id="country" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input id="age" type="number" min="18" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Program Interest *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education Volunteer</SelectItem>
                      <SelectItem value="youth">Youth Development</SelectItem>
                      <SelectItem value="women">Women Empowerment</SelectItem>
                      <SelectItem value="general">General Volunteer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="samburu">Samburu</SelectItem>
                      <SelectItem value="mathare">Mathare, Nairobi</SelectItem>
                      <SelectItem value="kibera">Kibera, Nairobi</SelectItem>
                      <SelectItem value="busia">Busia</SelectItem>
                      <SelectItem value="uganda">Uganda</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 weeks</SelectItem>
                      <SelectItem value="4">4 weeks</SelectItem>
                      <SelectItem value="8">8 weeks</SelectItem>
                      <SelectItem value="12">12 weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Preferred Start Date *</Label>
                  <Input id="startDate" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Relevant Skills & Experience *</Label>
                  <Textarea id="skills" rows={4} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to volunteer with UCESCO? *</Label>
                  <Textarea id="motivation" rows={4} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectations">What are your expectations? *</Label>
                  <Textarea id="expectations" rows={3} required />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    We'll review your application and contact you within 5-7 business days
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
