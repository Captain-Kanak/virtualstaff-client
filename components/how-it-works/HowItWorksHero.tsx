"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/Container";

const HERO_HEADING_LINE_1 = "A Simple, Managed";
const HERO_HEADING_LINE_2 = "Process That Gets";
const HERO_HEADING_LINE_3 = "You the Right Support";

const HERO_EYEBROW = "HOW IT WORKS";

const HERO_PARAGRAPH =
  "Get skilled, reliable remote talent for your business without the hiring, training, or daily management headaches. We handle the process, so you can focus on growing your business.";

const stickers = [
  {
    number: "Managed",
    label: "END-TO-END PROCESS",
    bg: "bg-brand-tag-blue",
    text: "text-white",
    rotate: "-rotate-6",
    shadow: "shadow-[4px_4px_0_var(--text-heading)]",
    pos: "left-0 top-[16%] md:-left-4",
    delay: "0s",
  },
  {
    number: "Pre-vetted",
    label: "GLOBAL TALENT",
    bg: "bg-brand-accent",
    text: "text-text-heading",
    rotate: "rotate-3",
    shadow: "shadow-[4px_4px_0_var(--text-heading)]",
    pos: "right-0 top-[38%] md:-right-3",
    delay: "-2s",
  },
  {
    number: "3 Steps",
    label: "TO GET STARTED",
    bg: "bg-brand-secondary",
    text: "text-white",
    rotate: "-rotate-3",
    shadow: "shadow-[4px_4px_0_var(--brand-accent)]",
    pos: "right-4 bottom-[8%]",
    delay: "-4s",
  },
];

export default function HowItWorksHero() {
  return (
    <div className="hero-screen">
      <section className="relative overflow-hidden hero-pad hero-bg flex lg:flex items-center lg:items-center pb-4 lg:pb-4">
        <div className="hidden md:block aria-hidden pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
          <div className="hero-grid absolute inset-0" />
          <div className="absolute -left-24 top-24 size-72 rounded-full bg-brand-primary/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 size-96 rounded-full bg-brand-primary/15 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
          <div className="absolute -left-16 top-8 h-px w-[420px] origin-left rotate-[35deg] bg-gradient-to-r from-primary/30 to-transparent">
            <div className="absolute left-[55%] top-1/2 -translate-y-1/2 size-2 rounded-full bg-primary/50" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 size-8 rounded-full border border-primary/25" />
          </div>
          <div className="absolute -right-16 bottom-12 h-px w-[420px] origin-right -rotate-[35deg] bg-gradient-to-l from-primary/30 to-transparent">
            <div className="absolute left-[55%] top-1/2 -translate-y-1/2 size-2 rounded-full bg-primary/50" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 size-8 rounded-full border border-primary/25" />
          </div>
          <div className="absolute left-[8%] top-[12%] size-3 rounded-full border border-primary/25" />
          <div className="absolute right-[42%] top-[8%] size-5 rounded-full border border-primary/25" />
          <div className="absolute left-[46%] bottom-[10%] size-10 rounded-full border border-primary/25" />
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">

            {/* Left column */}
            <div className="space-y-4">
              <p className="text-[11px] md:text-sm font-semibold uppercase tracking-widest text-brand-primary">
                {HERO_EYEBROW}
              </p>

              <h1 className="text-4xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl font-extrabold tracking-tight leading-[1.05] text-text-heading max-w-[52ch]">
                <span className="block">{HERO_HEADING_LINE_1}</span>
                <span className="block">{HERO_HEADING_LINE_2}</span>
                <span className="block text-primary">{HERO_HEADING_LINE_3}</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-body">
                {HERO_PARAGRAPH}
              </p>

              <div className="flex flex-col lg:flex-row items-center gap-5 mt-6 lg:gap-4">
                <Button
                  variant="brand"
                  size="xl"
                  nativeButton={false}
                  className="w-full lg:w-auto"
                  render={
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarDays className="size-4 mr-2" />
                      Book a Free Consultation
                    </a>
                  }
                />
                <Button
                  variant="outline"
                  size="xl"
                  nativeButton={false}
                  className="w-full lg:w-auto border-2 border-brand-primary text-brand-primary font-semibold bg-white/70 hover:bg-brand-soft transition-all duration-300"
                  render={
                    <Link href="/services">
                      View Our Services
                      <ArrowRight
                        className="size-4 ml-2 group-hover:translate-x-1"
                      />
                    </Link>
                  }
                />
              </div>
            </div>

            {/* Right column */}
            <div className="relative self-start">
              <div className="hero-img-wrap" style={{ "--img-w": 724, "--img-h": 701 } as React.CSSProperties}>
                <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden lg:grid place-items-center">
                  <div className="col-start-1 row-start-1 aspect-square rounded-full w-[112%] border border-primary/15" />
                  <div className="col-start-1 row-start-1 aspect-square rounded-full w-[136%] border border-dashed border-primary/30 animate-orbit">
                    <div className="absolute left-1/2 -top-1.5 size-3 -translate-x-1/2 rounded-full bg-brand-accent shadow-[0_0_14px_color-mix(in_srgb,var(--brand-accent)_80%,transparent)]" />
                    <div className="absolute bottom-[14%] right-[6%] size-2 rounded-full bg-brand-primary shadow-[0_0_12px_color-mix(in_srgb,var(--brand-primary)_80%,transparent)]" />
                  </div>
                  <div className="col-start-1 row-start-1 aspect-square rounded-full w-[160%] border-2 border-dashed border-brand-primary/15 animate-orbit-reverse">
                    <div className="absolute left-[8%] top-[22%] size-2 rounded-full bg-brand-primary shadow-[0_0_12px_color-mix(in_srgb,var(--brand-primary)_70%,transparent)]" />
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-primary/15 blur-3xl -z-10"
                />
                <div className="absolute z-0 bottom-0 left-1/2 -translate-x-1/2 aspect-square w-[88%] rounded-full bg-gradient-to-b from-brand-primary/15 to-brand-soft" />
                <Image
                  src="/images/banner-2.png"
                  alt="Skilled virtual assistant working remotely at a laptop"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                  className="object-contain object-bottom z-10"
                />

                {stickers.map((s) => (
                  <div
                    key={s.number}
                    className={`animate-float-soft absolute z-20 rounded-xl border-2 border-text-heading px-3 py-2 2xl:px-4 2xl:py-3 whitespace-nowrap ${s.shadow} ${s.bg} ${s.text} ${s.rotate} ${s.pos}`}
                    style={{ animationDelay: s.delay }}
                  >
                    <span className={`text-[clamp(1.125rem,1.6vw,1.5rem)] font-extrabold leading-none ${s.text}`}>
                      {s.number}
                    </span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wide mt-1 block ${s.text}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
