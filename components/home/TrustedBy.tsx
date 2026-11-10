"use client";

import * as React from "react";
import Reveal from "@/components/Reveal";

const stats = [
  { number: "2,500+", label: "US businesses served" },
  { number: "30+", label: "countries with talent" },
  { number: "4.9/5", label: "average client rating" },
  { number: "30-day", label: "money-back guarantee" },
];

export default function TrustedBy() {
  return (
    <Reveal>
      <section className="bg-[#F5F8FF] py-12 md:py-14 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-8">
            <p className="text-base md:text-lg font-medium text-slate-600">
              Trusted by 2,500+ growing US businesses
            </p>
          </div>
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
        </div>
      </section>
    </Reveal>
  );
}
