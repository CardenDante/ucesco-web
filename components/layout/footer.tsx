import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      {/* Trust Badges Section */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-8">
            {/* Title - Left Side */}
            <div className="text-center lg:text-left flex-shrink-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">Trusted & Recognized</h3>
              <p className="mt-1 text-sm text-slate-500">
                Verified for transparency & impact
              </p>
            </div>

            {/* Badges - Right Side with Separator */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
              {/* Vertical Separator - Hidden on mobile/tablet */}
              <div className="hidden lg:block h-20 w-px bg-slate-200"></div>

              {/* Volunteer World Badge */}
              <div className="w-full sm:w-auto overflow-x-auto">
                <iframe
                  src="https://www.volunteerworld.com/review-badge/large/ucesco-africa?transparent=true"
                  style={{ border: "none" }}
                  width="362"
                  height="116"
                  className="mx-auto sm:mx-0 max-w-full"
                  title="UCESCO Africa Reviews on Volunteer World"
                >
                  <p>View project reviews of UCESCO Africa on Volunteer World</p>
                </iframe>
              </div>

              {/* Other Badges Container */}
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                {/* Pathway Vetted Badge */}
                <Image
                  src="/ucescoafricatrustbadges/2025_Pathway Vetted Badge.png"
                  alt="GlobalGiving Pathway Vetted Organization 2025"
                  width={116}
                  height={116}
                  className="h-20 sm:h-24 lg:h-[116px] w-auto"
                />

                {/* Category Impact Badge */}
                <Image
                  src="/ucescoafricatrustbadges/Category-Impact.png"
                  alt="Top-Ranked Organization for Impact"
                  width={116}
                  height={116}
                  className="h-20 sm:h-24 lg:h-[116px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* About Column */}
          <div className="col-span-2 lg:col-span-1 space-y-4 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
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
            <div className="flex justify-center lg:justify-start space-x-3 pt-2">
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
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">X</span>
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

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-slate-600 transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-600 transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/impact/reports" className="text-slate-600 transition-colors hover:text-primary">
                  Reports & Policies
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
                  +254 110 547 515
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} UCESCO Africa. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Powered and maintained by</span>
              <Link
                href="https://www.chach-a.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src="https://www.chach-a.com/Logo.svg"
                  alt="Chacha Technologies"
                  width={100}
                  height={24}
                  className="h-5 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
