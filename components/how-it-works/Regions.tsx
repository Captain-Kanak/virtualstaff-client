"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const regions = [
  {
    name: "Asia",
    text: "VAs in the Philippines and India ready for your US shift.",
  },
  {
    name: "Africa",
    text: "English-speaking talent across Nigeria, Kenya and South Africa.",
  },
  {
    name: "Latin America",
    text: "Nearshore assistants in Mexico, Colombia and Brazil.",
  },
  {
    name: "Eastern Europe",
    text: "Skilled professionals in Poland, Romania and Ukraine.",
  },
];

export default function Regions() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              GLOBAL TALENT
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
              Talent from four regions, working your hours
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {regions.map((region) => (
            <Reveal key={region.name}>
              <Card className="rounded-2xl border border-slate-100 p-6 shadow-[2px_4px_12px_#00000014]">
                <div className="w-10 h-10 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-primary mb-4">
                  <Globe className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {region.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {region.text}
                </p>
                <Badge variant="outline" className="text-xs">
                  US-hours overlap
                </Badge>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
