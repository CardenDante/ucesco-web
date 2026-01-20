"use client";

import Image from "next/image";
import { Section } from "@/components/layout";

const partners = [
  "Bank_of_America-Logo.wine.png",
  "Global Giving.png",
  "Go-Overseas.png",
  "KEMRI.jpg",
  "Kenya Forest Service.png",
  "Kenyatta University.png",
  "Kisii University.jpg",
  "Laboratory & Allied Ltd.png",
  "Ministry of Health.png",
  "Mount Kenya University.png",
  "NITA-Logo.png",
  "Rangechem Pharmaceuticals Limited.png",
  "Rift Valley College.png",
  "Stop the Bleed.png",
  "The Scientific Group Kenya.png",
  "The_Citadel_seal.svg.png",
  "Volunteer World.png",
  "equity-bank-logo.png",
  "nairobi-city-county-city-council-of-nairobi-logo.png",
];

export function PartnersSection() {
  const half = Math.ceil(partners.length / 2);
  const row1 = partners.slice(0, half);
  const row2 = partners.slice(half);

  return (
    <Section className="bg-white py-12 sm:py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl font-display">
            Our Trusted Partners
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Collaborating with leading organizations to maximize our impact.
          </p>
        </div>

        <div className="relative flex flex-col gap-6 sm:gap-10">
          
          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* ROW 1: Slides Left */}
          {/* Mobile: gap-4 | Desktop: gap-10 */}
          <div className="flex w-full overflow-hidden whitespace-nowrap mask-gradient pause-on-hover group">
            <div className="flex min-w-full shrink-0 animate-scroll-left items-center justify-around gap-4 pr-4 sm:gap-10 sm:pr-10">
              {row1.map((logo, index) => (
                <LogoCard key={`r1-a-${index}`} logo={logo} />
              ))}
            </div>
            <div className="flex min-w-full shrink-0 animate-scroll-left items-center justify-around gap-4 pr-4 sm:gap-10 sm:pr-10">
              {row1.map((logo, index) => (
                <LogoCard key={`r1-b-${index}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* ROW 2: Slides Right */}
          <div className="flex w-full overflow-hidden whitespace-nowrap mask-gradient pause-on-hover group">
            <div className="flex min-w-full shrink-0 animate-scroll-right items-center justify-around gap-4 pr-4 sm:gap-10 sm:pr-10">
              {row2.map((logo, index) => (
                <LogoCard key={`r2-a-${index}`} logo={logo} />
              ))}
            </div>
            <div className="flex min-w-full shrink-0 animate-scroll-right items-center justify-around gap-4 pr-4 sm:gap-10 sm:pr-10">
              {row2.map((logo, index) => (
                <LogoCard key={`r2-b-${index}`} logo={logo} />
              ))}
            </div>
          </div>

        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm text-slate-500 font-medium">
            Proudly partnering with <span className="text-primary font-bold">{partners.length}+</span> organizations
          </p>
        </div>
      </div>
    </Section>
  );
}

// LogoCard Component
// Mobile: h-12 w-24 (Smaller)
// Desktop: h-20 w-40 (Larger)
function LogoCard({ logo }: { logo: string }) {
  return (
    <div className="relative h-12 w-24 sm:h-20 sm:w-40 shrink-0 flex items-center justify-center p-2 group/card">
      <Image
        src={`/ucesco-partners/${encodeURIComponent(logo)}`}
        alt={logo.replace(/\.(png|jpg|svg)$/, "")}
        fill
        className="object-contain grayscale opacity-60 transition-all duration-300 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-110"
        sizes="(max-width: 640px) 96px, 160px"
      />
    </div>
  );
}