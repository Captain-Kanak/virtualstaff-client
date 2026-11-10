"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <Reveal>
      <section className="bg-[#F1F9FC] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge className="rounded-full bg-[#4289e0]/10 border border-[#4289e0]/20 px-4 py-2 text-xs font-semibold text-[#2563eb] uppercase tracking-wider">
                Global Offshore Talent
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Build Your Global Offshore Team, One Seat at a Time
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-lg">
                A better way for US companies to hire dedicated virtual
                assistants from around the world.
              </p>
              <ul className="space-y-3 py-2">
                {[
                  "You choose the person",
                  "We handle payroll and compliance",
                  "One flat monthly fee, no markups",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="h-5 w-5 text-[#2563eb]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                      Build Your Team
                    </a>
                  }
                />
                <Button variant="outline" size="xl" nativeButton={false} render={<Link href="/how-it-works">How It Works</Link>} />
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  "Professional staff",
                  "Full-time or part-time",
                  "Ongoing support",
                  "Transparent monthly costs",
                ].map((label) => (
                  <Badge
                    key={label}
                    className="rounded-lg bg-[#4289e0]/10 border border-[#4289e0]/20 px-4 py-2 text-xs font-medium text-[#2563eb]"
                  >
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 rounded-3xl bg-[#cbd5e1] blur-[40px]" />
              <Image
                src="/placeholder-hero.svg"
                alt="Hero illustration"
                width="600"
                height="450"
                className="max-w-full h-auto rounded-3xl border border-[#e2e8f0] bg-background shadow-xl z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
