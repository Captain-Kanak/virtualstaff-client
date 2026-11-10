"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

const tiers = [
  {
    name: "Start",
    seats: "1 seat",
    text: "Perfect for trying out a virtual assistant part-time.",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Start",
  },
  {
    name: "Grow",
    seats: "3 seats",
    text: "Ideal for a small team that needs ongoing support.",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Grow",
  },
  {
    name: "Scale",
    seats: "5 seats",
    text: "Built for growing teams that want full-time coverage.",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Scale",
  },
];

export default function GrowthPath() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24 bg-[#F5F8FF]">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
            Start small, grow at your pace
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full"
              >
                <div className="h-32 rounded-xl bg-[#cbd5e1] flex items-center justify-center text-muted font-semibold mb-6">
                  {tier.name}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm font-medium text-[#2563eb] mb-3">{tier.seats}</p>
                <p className="text-muted leading-relaxed mb-6">{tier.text}</p>
                <Button
                  variant="brand"
                  size="xl"
                  className="w-full"
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
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
