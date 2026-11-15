"use client";

import * as React from "react";
import {
  Moon,
  Sunrise,
  Sun,
  CloudSun,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const regions = [
  {
    name: "Asia",
    icon: Moon,
    gradient: "from-brand-primary to-brand-primary-light",
    meterColor: "bg-brand-primary",
    utc: "UTC+5:30 to +8",
    countries: ["Philippines", "India"],
    text: "VAs ready for your US shift, including evenings and overnight coverage.",
    overlap: 2,
    overlapLabel: "US evenings and nights",
    regionParam: "Asia",
  },
  {
    name: "Africa",
    icon: Sunrise,
    gradient: "from-brand-success to-brand-primary",
    meterColor: "bg-brand-primary",
    utc: "UTC+1 to +3",
    countries: ["Nigeria", "Kenya", "South Africa"],
    text: "English-speaking talent that covers your US mornings.",
    overlap: 3,
    overlapLabel: "US mornings and midday",
    regionParam: "Africa",
  },
  {
    name: "Latin America",
    icon: Sun,
    gradient: "from-brand-primary to-brand-primary-light",
    meterColor: "bg-brand-primary",
    utc: "UTC-6 to -3",
    countries: ["Mexico", "Colombia", "Brazil"],
    text: "Nearshore assistants who work the same hours as your team.",
    overlap: 4,
    overlapLabel: "Full US business day",
    regionParam: "Latin America",
  },
  {
    name: "Eastern Europe",
    icon: CloudSun,
    gradient: "from-brand-primary to-brand-primary-light",
    meterColor: "bg-brand-primary",
    utc: "UTC+1 to +2",
    countries: ["Poland", "Romania", "Ukraine"],
    text: "Skilled professionals for your US mornings and early afternoons.",
    overlap: 3,
    overlapLabel: "US mornings and midday",
    regionParam: "Eastern Europe",
  },
  // placeholder overlap levels, confirm with client
];

export default function Regions() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="aria-hidden pointer-events-none absolute inset-0 z-0">
        <div className="section-dots absolute inset-0 opacity-60" />
        <div className="absolute -right-24 top-0 size-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="GLOBAL TALENT"
          title="Talent from four regions, working your hours"
          subtitle="Choose the region that fits your schedule and budget."
        />

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {regions.map((region) => (
            <Reveal key={region.name} delay={regions.indexOf(region) * 0.1} className="flex h-full flex-col">
              <Card
                className={`relative overflow-hidden rounded-3xl border border-line-soft bg-white p-6 flex flex-1 flex-col h-full shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-secondary)_6%,transparent)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg`}
              >
                {/* Top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${region.gradient}"
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  {/* TOP: icon + UTC badge, region title, country chips, description */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${region.gradient} flex items-center justify-center shrink-0`}>
                        <region.icon size={20} strokeWidth={2} className="text-white" />
                      </div>
                      <div className="rounded-full bg-line-soft px-2.5 py-1 text-xs font-semibold text-text-body">
                        {region.utc}
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                      {region.name}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2 min-h-6">
                      {region.countries.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-line-soft px-2.5 py-1 text-xs font-medium text-text-body"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-base leading-relaxed text-text-body min-h-[4.5rem] md:min-h-[5.25rem]">
                      {region.text}
                    </p>
                  </div>

                  {/* BOTTOM: overlap meter + footer link pinned to bottom */}
                  <div className="mt-auto pt-4">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-text-body mb-2">
                      US-hours overlap
                    </span>
                    <div className="flex gap-2 mb-2">
                      {[0, 1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className={`h-1.5 flex-1 rounded-full ${
                            i < region.overlap ? region.meterColor : "bg-line"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="min-h-[1.5rem] text-sm font-medium text-foreground">
                      {region.overlapLabel}
                    </p>
                    <div className="border-t border-line-soft mt-4 pt-4">
                      <Link
                        href={`/jobs?region=${encodeURIComponent(region.regionParam)}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-2 transition-all"
                      >
                        Browse {region.name} talent
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-body">
          Time zones are shown in standard time. Overlap varies by team.
        </p>
      </Container>
    </section>
  );
}
