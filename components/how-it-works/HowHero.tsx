"use client";

import * as React from "react";
import { ArrowRight, Briefcase, Calculator, Headphones } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

const proofInitials = ["R", "S", "3"];

const roleCards = [
  { role: "Virtual Assistant", icon: <Briefcase className="size-5" /> },
  { role: "Bookkeeper", icon: <Calculator className="size-5" /> },
  { role: "Customer Support", icon: <Headphones className="size-5" /> },
];

export default function HowHero() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F1F9FC] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div className="space-y-8">
            <Reveal>
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                HOW REMOTESTAFF365 WORKS
              </p>
            </Reveal>

            <Reveal>
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                One seat adds one{" "}
                <span className="text-primary">dedicated offshore assistant</span>{" "}
                to your team
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-lg">
                Flat monthly seat fee plus the assistant&apos;s salary. You
                choose the person.
              </p>
            </Reveal>

            <Reveal>
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
            </Reveal>

            <Reveal>
              <div className="relative flex items-center mt-8">
                <div className="w-16">
                  {proofInitials.map((initials, i) => (
                    <div
                      key={initials}
                      className="absolute w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold"
                      style={{ left: i * 16, zIndex: 3 - i }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-base text-foreground ml-3">
                  Hiring from 4 regions worldwide
                </span>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal>
              <div className="rounded-3xl bg-[#E8F0FE] p-6">
                <div className="flex gap-4">
                  {roleCards.map((card) => (
                    <Card
                      key={card.role}
                      className="rounded-2xl border border-slate-100 p-4 shadow-[2px_4px_12px_#00000014]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white mb-3">
                        {card.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {card.role}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        1 seat
                      </Badge>
                    </Card>
                  ))}
                </div>
                <div className="w-full h-px bg-slate-200 mt-6 mb-4" />
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-slate-200 shadow-[2px_4px_12px_#00000014]">
                  <span className="text-sm font-medium text-foreground">
                    3 team members = 3 seats
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
