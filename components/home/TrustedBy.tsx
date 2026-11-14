"use client";

import * as React from "react";
import Reveal from "@/components/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { number: "2,500+", label: "US businesses served" },
  { number: "30+", label: "countries with talent" },
  { number: "4.9/5", label: "average client rating" },
  { number: "30-day", label: "money-back guarantee" },
];

export default function TrustedBy() {
  return (
    <Reveal>
      <section className="bg-[#F5F8FF] py-14 md:py-20 overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="TRUSTED BY"
            title="2,500+ growing US businesses"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x divide-slate-200">
            {stats.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
