"use client";

import * as React from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

export type FeatureColumnItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export type FeatureColumnsProps = {
  eyebrow: string;
  items: readonly FeatureColumnItem[];
};

export default function FeatureColumns({ eyebrow, items }: FeatureColumnsProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <p className="mb-10 md:mb-14 text-center text-sm md:text-base font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5 lg:gap-0">
          {items.map((item, i) => {
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
