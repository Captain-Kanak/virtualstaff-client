"use client";

import * as React from "react";
import { ArrowRight, Briefcase, Clock, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/Container";

const avatarInitials = [
  { initials: "AK", gradient: "bg-gradient-to-br from-brand-primary to-brand-primary-light" },
  { initials: "MS", gradient: "bg-gradient-to-br from-brand-primary to-brand-success" },
  { initials: "JR", gradient: "bg-gradient-to-br from-brand-success to-brand-success" },
];

export default function HowHero() {
  return (
    <section className="hero-bg-alt hero-offset relative overflow-hidden pb-12 md:pb-16">
      <div className="aria-hidden pointer-events-none select-none absolute inset-0 z-0">
        <div className="hero-dots absolute inset-0" />
        <div
          className="absolute -top-1/4 left-[35%] h-[150%] w-24 rotate-[25deg] bg-gradient-to-b from-white/70 to-transparent blur-md hidden md:block"
        />
        <div className="absolute -right-20 top-10 size-72 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 size-80 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] relative size-4">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[8px] bg-primary/30" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-px bg-primary/30" />
        </div>
        <div className="absolute left-[46%] top-[12%] relative size-4">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[8px] bg-primary/30" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-px bg-primary/30" />
        </div>
        <div className="absolute right-[30%] bottom-[16%] relative size-4">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[8px] bg-primary/30" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-px bg-primary/30" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-brand-tint" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div className="lg:order-2 space-y-6">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              HOW REMOTESTAFF365 WORKS
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              One seat adds one{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-tag-blue bg-clip-text text-transparent">
                dedicated offshore assistant
              </span>{" "}
              to your team
            </h1>

            <p className="text-lg text-text-body max-w-xl">
              Flat monthly seat fee plus the assistant{"'"}s salary. You
              choose the person.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mt-6">
              <Button
                variant="brand"
                size="xl"
                nativeButton={false}
                render={
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a free call
                    <ArrowRight className="size-4 ml-2" />
                  </a>
                }
              />
              <Button
                variant="outline"
                size="xl"
                nativeButton={false}
                render={
                  <a
                    href="/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See pricing
                    <ArrowRight className="size-4 ml-2" />
                  </a>
                }
              />
            </div>

            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {avatarInitials.map((a) => (
                  <div
                    key={a.initials}
                    className={`size-9 shrink-0 rounded-full ring-2 ring-white flex items-center justify-center text-white font-semibold text-xs ${a.gradient}`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-text-body">
                Hiring from 4 regions worldwide
              </span>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:order-1 relative mt-10 lg:mt-0">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[60%] lg:h-[45%] rounded-full bg-brand-soft -z-10 blur-[60px]"
            />

            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 hidden lg:grid place-items-center"
              >
                <div className="col-start-1 row-start-1 aspect-square rounded-full w-[100%] border border-primary/15" />
                <div className="col-start-1 row-start-1 aspect-square rounded-full w-[122%] border-2 border-dotted border-primary/30 animate-orbit">
                  <div
                    className="absolute left-1/2 -top-1.5 size-3 -translate-x-1/2 rounded-full bg-brand-primary shadow-[0_0_14px_color-mix(in_srgb,var(--brand-primary)_80%,transparent)]"
                  />
                  <div
                    className="absolute bottom-[12%] left-[8%] size-2 rounded-full bg-brand-primary shadow-[0_0_12px_color-mix(in_srgb,var(--brand-primary)_80%,transparent)]"
                  />
                </div>
                <div className="col-start-1 row-start-1 aspect-square rounded-full w-[146%] border-2 border-transparent border-t-primary/30 border-r-brand-primary/30 animate-orbit-reverse" />
              </div>

              <div className="relative">
                <div
                  className="absolute z-0 bottom-0 left-1/2 -translate-x-1/2 aspect-square w-[85%] rounded-full bg-gradient-to-b from-brand-primary/15 to-brand-soft"
                />
                <Image
                  src="/images/va-banner-image.png"
                  alt="Offshore virtual assistant working with a US business"
                  width={645}
                  height={662}
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="relative z-10 h-auto w-full lg:max-h-[560px] object-contain object-bottom"
                />
              </div>

              {/* Floating card 1: Virtual Assistant */}
              <div
                className="animate-float-soft absolute z-20 bg-white/85 backdrop-blur-md rounded-2xl border border-white/70 ring-1 ring-text-heading/5 shadow-[0_12px_32px_color-mix(in_srgb,var(--brand-secondary)_12%,transparent)] p-3 pr-4 flex items-center gap-3 whitespace-nowrap left-2 top-[30%] md:-left-6"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-brand-primary to-brand-primary-light flex items-center justify-center text-white shrink-0">
                  <Briefcase className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    Virtual Assistant
                  </span>
                  <span className="text-xs text-text-body">
                    Dedicated - 1 seat
                  </span>
                </div>
              </div>

              {/* Floating card 2: Matched in 48 hours */}
              <div
                className="animate-float-soft absolute z-20 bg-white/85 backdrop-blur-md rounded-2xl border border-white/70 ring-1 ring-text-heading/5 shadow-[0_12px_32px_color-mix(in_srgb,var(--brand-secondary)_12%,transparent)] p-3 pr-4 flex items-center gap-3 whitespace-nowrap right-2 top-[14%]"
                style={{ animationDelay: "-2s" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-brand-primary to-brand-primary-light flex items-center justify-center text-white shrink-0">
                  <Clock className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    Matched in 48 hours
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-text-body">
                      Vetted candidates
                    </span>
                    <span
                      className="size-2 rounded-full bg-brand-success"
                      aria-label="Live"
                    />
                  </div>
                </div>
              </div>

              {/* Floating card 3: 3 team members */}
              <div
                className="animate-float-soft absolute z-20 bg-white/85 backdrop-blur-md rounded-2xl border border-white/70 ring-1 ring-text-heading/5 shadow-[0_12px_32px_color-mix(in_srgb,var(--brand-secondary)_12%,transparent)] p-3 pr-4 flex items-center gap-3 whitespace-nowrap left-2 bottom-[8%] md:-left-4"
                style={{ animationDelay: "-4s" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-brand-primary to-brand-primary-light flex items-center justify-center text-white shrink-0">
                  <Users className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    3 team members
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-text-body">= 3 seats</span>
                    <div className="flex gap-1">
                      <span className="size-1 rounded-full bg-brand-primary" />
                      <span className="size-1 rounded-full bg-brand-primary" />
                      <span className="size-1 rounded-full bg-brand-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
