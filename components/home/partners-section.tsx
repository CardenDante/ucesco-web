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
    <Section className="bg-muted/30 py-12">
      <Container>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-muted-foreground">
            Trusted by Communities & Partners
          </h3>
        </div>

        {loading ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 w-32 animate-pulse rounded bg-muted" />
            ))}
          </div>
        ) : displayPartners ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
            {displayPartners.map((partner) => (
              <div key={partner.id} className="relative h-16 w-32 grayscale transition-all hover:grayscale-0">
                {partner.attributes.logo?.data && (
                  <Image
                    src={getStrapiMediaUrl(partner.attributes.logo.data.attributes.url)}
                    alt={partner.attributes.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
            {fallbackPartners.map((partner, index) => (
              <div key={index} className="relative h-20 w-32 grayscale transition-all hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
