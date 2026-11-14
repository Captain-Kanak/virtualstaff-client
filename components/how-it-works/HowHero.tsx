"use client";

import * as React from "react";
import { ArrowRight, Briefcase, Clock, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/Container";

const avatarInitials = [
  { initials: "AK", gradient: "bg-gradient-to-br from-[#4289e0] to-[#2563eb]" },
  { initials: "MS", gradient: "bg-gradient-to-br from-[#06b6d4] to-[#14b8a6]" },
  { initials: "JR", gradient: "bg-gradient-to-br from-[#22c55e] to-[#16a34a]" },
];

export default function HowHero() {
  return (
    <section
      className="relative overflow-x-clip bg-gradient-to-br from-[#F1F9FC] via-white to-[#E8F0FE] pt-8 md:pt-12 pb-12 md:pb-16"
    >
      <div className="absolute inset-0 opacity-60 pointer-events-none [background-image:radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] rounded-full bg-primary/20 blur-3xl -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              HOW REMOTESTAFF365 WORKS
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              One seat adds one{" "}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
                dedicated offshore assistant
              </span>{" "}
              to your team
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              Flat monthly seat fee plus the assistant&apos;s salary. You
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
              <span className="text-sm text-slate-600">
                Hiring from 4 regions worldwide
              </span>
            </div>
          </div>

          {/* Right column */}
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[60%] lg:h-[45%] rounded-full bg-[#E8F0FE] -z-10 blur-[60px]" />

            <div className="relative">
              <Image
                src="/images/career-hero.webp"
                alt="Offshore virtual assistant working with a US business"
                width={518}
                height={542}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="relative z-10 h-auto w-full lg:max-h-[560px] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(37,99,235,0.18)]"
              />

              {/* Floating card 1: Virtual Assistant */}
              <div
                className="animate-float-soft absolute z-20 bg-white/85 backdrop-blur-md rounded-2xl border border-white/70 ring-1 ring-slate-900/5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] p-3 pr-4 flex items-center gap-3 whitespace-nowrap left-2 top-[38%] md:-left-8"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white shrink-0">
                  <Briefcase className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    Virtual Assistant
                  </span>
                  <span className="text-xs text-slate-600">
                    Dedicated - 1 seat
                  </span>
                </div>
              </div>

              {/* Floating card 2: Matched in 48 hours */}
              <div
                className="animate-float-soft absolute z-20 bg-white/85 backdrop-blur-md rounded-2xl border border-white/70 ring-1 ring-slate-900/5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] p-3 pr-4 flex items-center gap-3 whitespace-nowrap right-2 top-[18%] md:-right-3"
                style={{ animationDelay: "-2s" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white shrink-0">
                  <Clock className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    Matched in 48 hours
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-600">
                      Vetted candidates
                    </span>
                    <span
                      className="size-2 rounded-full bg-green-500"
                      aria-label="Live"
                    />
                  </div>
                </div>
              </div>

              {/* Floating card 3: 3 team members */}
              <div
                className="animate-float-soft absolute z-20 bg-white/85 backdrop-blur-md rounded-2xl border border-white/70 ring-1 ring-slate-900/5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] p-3 pr-4 flex items-center gap-3 whitespace-nowrap left-2 bottom-[8%] md:-left-6"
                style={{ animationDelay: "-4s" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white shrink-0">
                  <Users className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    3 team members
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-600">= 3 seats</span>
                    <div className="flex gap-1">
                      <span className="size-1 rounded-full bg-[#2563eb]" />
                      <span className="size-1 rounded-full bg-[#2563eb]" />
                      <span className="size-1 rounded-full bg-[#2563eb]" />
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
