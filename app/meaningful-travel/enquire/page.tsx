import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meaningful Travel Enquiry | UCESCO Africa",
  description: "Enquire about our meaningful travel experiences and start planning your transformative journey.",
};

export default function MeaningfulTravelEnquirePage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Meaningful Travel Enquiry</h1>
            <p className="mt-2 text-muted-foreground">
              Let us help you plan your transformative travel experience
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

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Interested Experience *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="samburu">Samburu Cultural Immersion (7 days)</SelectItem>
                      <SelectItem value="urban">Urban Impact Journey (5 days)</SelectItem>
                      <SelectItem value="custom">Custom Experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers *</Label>
                    <Input id="travelers" type="number" min="1" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Travel Month *</Label>
                    <Input id="preferredDate" type="month" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Special Interests or Requirements</Label>
                  <Textarea
                    id="interests"
                    rows={3}
                    placeholder="e.g., dietary requirements, accessibility needs, specific interests"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (USD)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000-1500">$1,000 - $1,500</SelectItem>
                      <SelectItem value="1500-2000">$1,500 - $2,000</SelectItem>
                      <SelectItem value="2000+">$2,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full">
                    Submit Enquiry
                  </Button>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Our team will contact you within 24-48 hours to discuss your travel plans
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
