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
    <Section className="py-12 sm:py-16 bg-white border-y border-slate-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Our Partners
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Trusted by Communities & Organizations
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Working together to create lasting impact across East Africa
          </p>
        </div>

        {loading ? (
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 w-32 sm:h-20 sm:w-40 animate-pulse rounded bg-slate-100" />
            ))}
          </div>
        ) : displayPartners ? (
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {displayPartners.map((partner) => (
              <div
                key={partner.id}
                className="relative h-16 w-32 sm:h-20 sm:w-40 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {partner.attributes.logo?.data && (
                  <Image
                    src={getStrapiMediaUrl(partner.attributes.logo.data.attributes.url)}
                    alt={partner.attributes.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {fallbackPartners.map((partner, index) => (
              <div
                key={index}
                className="relative h-16 w-32 sm:h-20 sm:w-40 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
