import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NewsletterSignup } from "@/components/ui/newsletter-signup";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      {/* Newsletter Section */}
      <div className="border-b bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">Get the latest updates on our programs and impact</p>
            </div>
            <div className="w-full md:w-auto md:min-w-[400px]">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo-300x236.png"
                alt="UCESCO Africa"
                width={40}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-primary">UCESCO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building futures and transforming lives through sustainable community development in Kenya and Uganda.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-muted-foreground transition-colors hover:text-primary">
                  Sponsor a Child
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground transition-colors hover:text-primary">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Get Involved</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/donate" className="text-muted-foreground transition-colors hover:text-primary">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground transition-colors hover:text-primary">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/meaningful-travel" className="text-muted-foreground transition-colors hover:text-primary">
                  Meaningful Travel
                </Link>
              </li>
              <li>
                <Link href="/apply-medic" className="text-muted-foreground transition-colors hover:text-primary">
                  Apply as a Medic
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-muted-foreground transition-colors hover:text-primary">
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Kenya & Uganda</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@ucesco.org" className="hover:text-primary">
                  info@ucesco.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+254123456789" className="hover:text-primary">
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-muted-foreground sm:flex-row sm:space-y-0">
            <p>&copy; {new Date().getFullYear()} UCESCO Africa. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/impact/reports" className="hover:text-primary">
                Reports & Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
