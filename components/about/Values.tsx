"use client";

import * as React from "react";
import { Handshake, Target, TrendingUp, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

export type ValueItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const VALUES: ValueItem[] = [
  {
    icon: Target,
    title: "Excellence",
    description: "We deliver top-tier talent and consistent results.",
  },
  {
    icon: Users,
    title: "Reliability",
    description: "A dependable team and process you can trust.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We're committed to helping your business scale efficiently.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Your success is our success.",
  },
] as const;

export default function Values() {
  return (
    <section className="bg-white pb-14 md:pb-20">
      <Container>
        <p className="mb-10 md:mb-14 text-center text-sm md:text-base font-semibold uppercase tracking-widest text-primary">
          OUR VALUES
        </p>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className="flex h-full flex-col">
                <div className="flex flex-1 flex-col items-center rounded-2xl border border-line-soft bg-gradient-to-br from-white to-brand-tint px-6 py-7 text-center shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="size-12 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-4 text-lg md:text-xl font-semibold text-text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-body">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
