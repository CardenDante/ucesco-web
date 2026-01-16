"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout";

const stats = [
  { label: "Communities Served", value: 25, suffix: "+" },
  { label: "Children Sponsored", value: 500, suffix: "+" },
  { label: "Medical Camps Held", value: 150, suffix: "+" },
  { label: "Volunteers Hosted", value: 1200, suffix: "+" },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-primary">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <div className="relative z-30 -mt-12 sm:-mt-16 pb-6 sm:pb-8 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl ring-1 ring-black/5 p-4 sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center py-2 sm:py-0">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
