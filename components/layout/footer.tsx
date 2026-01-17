import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Shield, Award, CheckCircle } from "lucide-react";
import { NewsletterSignup } from "@/components/ui/newsletter-signup";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      {/* Newsletter Section */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Stay Updated</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Get the latest updates on our programs and impact stories
              </p>
            </div>
            <div className="w-full md:w-auto md:min-w-[400px]">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex justify-start">
              <Image
                src="/footer-logo-vertical.svg"
                alt="UCESCO Africa"
                width={120}
                height={120}
                className="h-28 w-auto"
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Building futures and transforming lives through sustainable community development across Kenya and Uganda.
            </p>
            <div className="flex space-x-3 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-600 transition-colors hover:text-primary">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-slate-600 transition-colors hover:text-primary">
                  Sponsor a Child
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-slate-600 transition-colors hover:text-primary">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-slate-600 transition-colors hover:text-primary">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 transition-colors hover:text-primary">
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Get Involved
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/donate" className="text-slate-600 transition-colors hover:text-primary">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-slate-600 transition-colors hover:text-primary">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/meaningful-travel" className="text-slate-600 transition-colors hover:text-primary">
                  Meaningful Travel
                </Link>
              </li>
              <li>
                <Link href="/apply-medic" className="text-slate-600 transition-colors hover:text-primary">
                  Apply as a Medic
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-slate-600 transition-colors hover:text-primary">
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Kenya & Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@ucesco.org" className="hover:text-primary transition-colors">
                  info@ucesco.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+254123456789" className="hover:text-primary transition-colors">
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} UCESCO Africa. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/impact/reports" className="hover:text-primary transition-colors">
                Reports & Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
