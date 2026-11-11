"use client";

import * as React from "react";
import { User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const tiers = [
  {
    name: "Start",
    seats: 1,
    seatsLabel: "1 seat",
    text: "Perfect for trying out a virtual assistant part-time.",
    checks: ["Choose your own hire", "Full-time or part-time", "Cancel anytime"],
  },
  {
    name: "Grow",
    seats: 3,
    seatsLabel: "3 seats",
    text: "Ideal for a small team that needs ongoing support.",
    checks: ["Build a small dedicated team", "Priority support", "Flexible scheduling"],
    featured: true,
  },
  {
    name: "Scale",
    seats: 5,
    seatsLabel: "5 seats",
    text: "Built for growing teams that want full-time coverage.",
    checks: ["Full-time team coverage", "Dedicated account manager", "Custom onboarding"],
  },
];

export default function GrowthPath() {
  return (
    <Reveal>
      <section className="bg-[#F5F8FF] py-12 md:py-16 overflow-hidden">
        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              GROWTH PATH
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-2">
              Start small, grow at your pace
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Pick the plan that fits your team and scale up as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <Card
                  className={`
                    flex flex-col h-full rounded-2xl border border-slate-100 bg-white p-6
                    shadow-[2px_4px_12px_#00000014] hover:-translate-y-1 transition duration-300
                    ${tier.featured ? "border-2 border-primary relative" : "relative"}
                  `}
                >
                  {tier.featured && (
                    <Badge
                      className="absolute top-2 right-2 bg-primary text-white"
                      variant="default"
                    >
                      Most popular
                    </Badge>
                  )}
                  <div className="h-32 rounded-xl bg-gradient-to-br from-[#E8F0FE] to-[#F1F9FC] flex items-center justify-center gap-2 mb-6">
                    {Array.from({ length: tier.seats }).map((_, j) => (
                      <div
                        key={j}
                        className="h-11 w-11 rounded-full bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center ring-2 ring-white"
                      >
                        <User className="h-5 w-5 text-white" />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <Badge
                    className="bg-blue-50 text-primary"
                    variant="default"
                  >
                    {tier.seatsLabel}
                  </Badge>
                  <p className="text-base leading-relaxed text-slate-600 mt-4">
                    {tier.text}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {tier.checks.map((check) => (
                      <li key={check} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-[#2563eb] shrink-0 mt-0.5" />
                        {check}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.featured ? "brand" : "outline"}
                    size="xl"
                    className={`w-full mt-auto ${!tier.featured ? "border-primary text-primary" : ""}`}
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
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
