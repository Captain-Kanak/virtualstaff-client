"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/Container";

const stickers = [
  // placeholder stats, confirm with client
  {
    number: "4-day",
    label: "SHORTLISTS",
    bg: "bg-brand-tag-blue",
    text: "text-white",
    rotate: "-rotate-6",
    shadow: "shadow-[4px_4px_0_var(--text-heading)]",
    pos: "left-0 top-[16%] md:-left-4",
    delay: "0s",
  },
  {
    number: "Top 5%",
    label: "SHORTLISTS",
    bg: "bg-brand-accent",
    text: "text-text-heading",
    rotate: "rotate-3",
    shadow: "shadow-[4px_4px_0_var(--text-heading)]",
    pos: "right-0 top-[38%] md:-right-3",
    delay: "-2s",
  },
  {
    number: "40-70%",
    label: "COST SAVINGS",
    bg: "bg-brand-secondary",
    text: "text-white",
    rotate: "-rotate-3",
    shadow: "shadow-[4px_4px_0_var(--brand-accent)]",
    pos: "right-4 bottom-[8%]",
    delay: "-4s",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-offset hero-bg pb-10 lg:pb-12">
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
            <h1 className="text-[clamp(2.5rem,4.6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] text-foreground">
              Global talent
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                partner.
              </span>
            </h1>

            <p className="text-[clamp(1rem,1.45vw,1.25rem)] text-text-body max-w-xl mt-4 lg:mt-5">
              Recruitment, EOR, BPO & HR outsourcing across Africa, Europe,
              America and the Middle East.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-6 lg:mt-7">
              <Button
                variant="brand"
                size="xl"
                nativeButton={false}
                render={
                  <Link href="/jobs">
                    Browse talent
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                }
              />
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
              >
                Book a 15-min call
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
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
                alt="Offshore virtual assistant working with a US business"
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
  );
}
