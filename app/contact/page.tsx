"use client";

import { useState } from "react";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
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
                      <h3 className="font-semibold">Main Office – Nairobi (Kenya)</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Kibera Plaza, Kibera, Nairobi, Kenya
                      </p>
                      <p className="mt-2 text-sm font-semibold">Other Offices:</p>
                      <p className="text-sm text-muted-foreground">
                        • Samburu: Ichingei Village, Samburu, Kenya
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Mombasa: Makupa, Mombasa, Kenya
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Uganda: Ggaba, Kampala, Uganda
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
                        <strong>General:</strong> info@ucesco.org
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Partnerships:</strong> partnerships@ucesco.org
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Programs:</strong> programs@ucesco.org
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Development:</strong> development@ucesco.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone / WhatsApp</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <strong>Nairobi:</strong> +254 110 547 515
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Samburu:</strong> +254 741 388 516
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Mombasa:</strong> +254 718 611 095
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Uganda:</strong> +256 777 520 585 / +256 754 854 965
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
