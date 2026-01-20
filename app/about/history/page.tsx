import type { Metadata } from "next";
import Image from "next/image";
import { Hero, Section, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Heart, Users, TrendingUp, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Our History | UCESCO Africa",
  description: "Discover the journey and inspiration behind UCESCO Africa, founded by Kingsley Nyandika in 2010.",
};

export default function HistoryPage() {
  return (
    <>
      <Hero
        title="Our History"
        description="The journey that transformed one act of kindness into a movement of hope"
        backgroundImage="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Homepage-/Hero%20image.JPG"
        overlay={true}
        overlayColor="primary"
        size="md"
      />

      {/* The Beginning */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
                The Beginning of a Movement
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
                How a simple act of compassion sparked lasting change
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7270.JPG"
                  alt="UCESCO Africa founder helping communities"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed">
                    In 2010, Kingsley Nyandika founded UCESCO Africa in the Gisagara District of Rwanda's southern province,
                    motivated by the significant impact of a small intervention that supported a vulnerable family. This experience
                    demonstrated that empowering marginalized women and children in slums and underserved rural areas could lead to
                    sustainable economic and social transformation, rather than merely providing aid.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    At that time, Kingsley Nyandika was volunteering as an English teacher at the National University of Rwanda
                    through a club associated with the organization he was part of. One day, Miss Umutoniwase, one of his students,
                    invited him to her family's home, which was a cramped mud house borrowed from her mother's friend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Story of Transformation */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 mb-8 text-center">
              A Story of Transformation
            </h2>

            <div className="space-y-6 prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                After her father's passing, their in-laws had expelled them, leaving them internally displaced with five
                children to care for. Driven by a desire to help the less fortunate, particularly women, Mr. Kingsley
                successfully raised $1,000 with the assistance of friends and other kind-hearted individuals he had previously
                collaborated with.
              </p>

              <p className="text-slate-700 leading-relaxed">
                He used these funds to rent a more appropriate home for Umutoniwase's family for three months near Kigali Town
                in Nyamirambo, as well as to provide them with food and clothing, and to establish a small hotel business to
                ensure their ongoing support.
              </p>

              <div className="relative my-8 p-8 bg-white rounded-2xl shadow-lg border-l-4 border-primary">
                <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                <p className="text-lg italic text-slate-700 leading-relaxed mb-4">
                  "Three months later, Umutoniwase's business was flourishing, and her siblings had returned to school.
                  From this experience, Kingsley realized that what he had considered a minor act of kindness had created
                  a significant social and economic impact, not just for one family but resonating throughout the entire community."
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 my-8">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Impact-/IMG_7395.JPG"
                    alt="Community transformation through UCESCO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Homepage-/Hero%20image.JPG"
                    alt="UCESCO Africa impact"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                This revelation led to the establishment of an organization dedicated to empowering vulnerable women and
                children living in slums and marginalized rural areas, which ultimately evolved into what we now know as
                UCESCO Africa, as the demand continued to increase daily, and Kingsley Nyandika found fulfillment in
                making a difference in lives.
              </p>
            </div>

            <div className="mt-10 p-8 bg-primary/10 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-slate-900 leading-relaxed">
                    "When someone approaches and expresses gratitude for your support, it is the most rewarding feeling
                    one can experience, surpassing even the possession of great wealth in this world. It is truly a unique sentiment."
                  </p>
                  <p className="mt-3 text-sm font-semibold text-primary">— Kingsley Nyandika, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Inspirations */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
                Key Inspirations
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
                The principles that shaped our mission
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">A Successful Personal Intervention</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        After obtaining funds to support Umutoniwase and her family by providing housing, food, and starting
                        a small business, Kingsley observed the family's swift transformation, with the business thriving and
                        siblings resuming their education.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">A Passion for Social Change</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        A deep commitment to addressing the extreme poverty, educational gaps, and poor health conditions
                        faced by vulnerable populations in slums and marginalized rural villages in Africa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">The "Ripple Effect" Principle</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Recognizing that targeted, small-scale efforts to empower women and children can result in lasting,
                        positive changes that benefit the entire family and community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Focus on Empowerment</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        A commitment to going beyond simple charity by providing communities with the necessary tools, skills,
                        and support for micro-businesses, thereby enabling them to achieve sustainable and independent futures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Expansion */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-6">
              Growing Our Impact
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-white/95 mb-8">
              UCESCO Africa was originally established to address these needs in Rwanda. The organization later broadened
              its mission to the USA for fundraising efforts and is currently helping thousands of individuals in need in
              Kenya and Uganda.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">2010</div>
                <div className="text-sm uppercase tracking-wide text-white/90">Founded in Rwanda</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">2014</div>
                <div className="text-sm uppercase tracking-wide text-white/90">Registered as 501(c)3</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">Today</div>
                <div className="text-sm uppercase tracking-wide text-white/90">Serving Kenya & Uganda</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
