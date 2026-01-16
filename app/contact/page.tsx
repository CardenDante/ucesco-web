import type { Metadata } from "next";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | UCESCO Africa",
  description: "Get in touch with UCESCO Africa. We're here to answer your questions about our programs, volunteering, sponsorship, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our team."
        size="sm"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={6} required />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about our programs, want to volunteer, or interested in partnering with us?
                  We're here to help. Reach out using the contact information below or fill out the form.
                </p>
              </div>

              <Card>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Locations</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Kenya: Nairobi, Samburu, Mathare, Kibera, Busia
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Uganda: Kampala and surrounding regions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        info@ucesco.org
                      </p>
                      <p className="text-sm text-muted-foreground">
                        volunteer@ucesco.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Kenya: +254 123 456 789
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Uganda: +256 987 654 321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM EAT
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Saturday: 9:00 AM - 1:00 PM EAT
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4 font-semibold">Follow Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay connected with our work and community on social media
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
