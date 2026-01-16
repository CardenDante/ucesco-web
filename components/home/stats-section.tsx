import { Section, Container } from "@/components/layout";

const stats = [
  { label: "Communities Served", value: "25+" },
  { label: "Children Sponsored", value: "500+" },
  { label: "Medical Camps Held", value: "150+" },
  { label: "Volunteers Hosted", value: "1,200+" },
];

export function StatsSection() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider opacity-90 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
