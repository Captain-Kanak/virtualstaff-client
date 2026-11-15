"use client";

import * as React from "react";
import { Coins, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const WHY_CHOOSE_US_ITEMS = [
  {
    icon: Zap,
    title: "Fast Setup",
    description:
      "Get started quickly, often within 24–72 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Talent",
    description:
      "Skilled, experienced, and ready to support your business.",
  },
  {
    icon: Users,
    title: "Fully Managed",
    description:
      "We handle the team, operations, and ongoing support.",
  },
  {
    icon: Coins,
    title: "Cost-Effective",
    description:
      "Get the support you need at a fraction of local costs.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description:
      "Easily add more support as your business grows.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <p className="mb-10 md:mb-14 text-center text-sm md:text-base font-semibold uppercase tracking-widest text-primary">
          WHY BUSINESSES CHOOSE US
        </p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5 lg:gap-0">
          {WHY_CHOOSE_US_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div
                  className={`flex flex-col items-center px-2 text-center lg:px-6 ${
                    i === 4 ? "col-span-2 lg:col-span-1" : ""
                  } lg:border-l lg:border-line first:lg:border-l-0`}
                >
                  <div className="grid size-16 md:size-20 place-items-center rounded-full bg-brand-soft">
                    <Icon className="size-8 md:size-9 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg md:text-xl font-semibold text-text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-base leading-relaxed text-text-body">
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
