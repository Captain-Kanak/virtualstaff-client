"use client";

import * as React from "react";
import Reveal from "@/components/Reveal";

const trustedBy = [
  { label: "Company A", color: "#cbd5e1" },
  { label: "Company B", color: "#cbd5e1" },
  { label: "Company C", color: "#cbd5e1" },
  { label: "Company D", color: "#cbd5e1" },
  { label: "Company E", color: "#cbd5e1" },
];

export default function TrustedBy() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-10">
            Trusted by 2,500+ growing US businesses
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {trustedBy.map((logo) => (
              <div
                key={logo.label}
                className="w-24 h-12 rounded-lg border border-solid border-[#e2e8f0] bg-[#F5F8FF] flex items-center justify-center text-xs font-medium text-muted opacity-60"
              >
                {logo.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
