"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section, Container } from "@/components/layout";
import { getFeaturedPartners, getStrapiMediaUrl, type Partner } from "@/lib/strapi";

export function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPartners() {
      try {
        const data = await getFeaturedPartners();
        setPartners(data);
      } catch (error) {
        console.error("Failed to load partners:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPartners();
  }, []);

  // Fallback partner logos from local assets
  const fallbackPartners = [
    { name: "MVETI", logo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/05_Branding_Assets-/MVETI LOGO.jpg" },
    { name: "Meaningful Travel", logo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/05_Branding_Assets-/Meaningful travel.jpg" },
    { name: "Peggy Lucas", logo: "/UCESCO_WEBSITE_CONTENT_2026-01-01/05_Branding_Assets-/Peggy Lucas logo.jpg" },
  ];

  const displayPartners = partners.length > 0 ? partners : null;

  return (
    <Section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Header - Left Side */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              Our Partners
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
              Collaborating with organizations worldwide to maximize our impact
            </p>
          </div>

          {/* Partners Logos - Right Side */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Vertical Separator - Hidden on mobile */}
            <div className="hidden lg:block h-32 w-0.5 bg-slate-300 flex-shrink-0"></div>

            {loading ? (
              <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 flex-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-14 w-20 sm:h-20 sm:w-36 lg:h-24 lg:w-44 animate-pulse bg-slate-200" />
                ))}
              </div>
            ) : displayPartners ? (
              <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 flex-1">
                {displayPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="group relative h-14 w-20 sm:h-20 sm:w-36 lg:h-24 lg:w-44 flex-shrink-0"
                  >
                    {partner.attributes.logo?.data && (
                      <Image
                        src={getStrapiMediaUrl(partner.attributes.logo.data.attributes.url)}
                        alt={partner.attributes.name}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 flex-1">
                {fallbackPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="group relative h-14 w-20 sm:h-20 sm:w-36 lg:h-24 lg:w-44 flex-shrink-0"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}