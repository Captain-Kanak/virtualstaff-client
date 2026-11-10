"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Operations Manager",
    company: "HealthBridge Clinic",
    quote: "Finding a reliable VA used to take weeks. Now we hire in 48 hours and the quality is outstanding.",
    logo: "HC",
  },
  {
    name: "Marcus Reed",
    title: "Founder",
    company: "SwiftLogistics",
    quote: "Our logistics VA handles dispatch and tracking flawlessly. We've added two more seats this year.",
    logo: "SL",
  },
  {
    name: "Elena Torres",
    title: "Office Manager",
    company: "Prime Realty Group",
    quote: "The back-office support has been a game-changer for our closings. Highly recommended.",
    logo: "PR",
  },
  {
    name: "David Kim",
    title: "Practice Administrator",
    company: "Cedarwood Medical",
    quote: "HIPAA-trained virtual assistants who actually understand healthcare billing. Worth every penny.",
    logo: "CM",
  },
  {
    name: "Jessica Moore",
    title: "Owner",
    company: "Main Street Accounting",
    quote: "Bookkeeping support that's responsive and affordable. No long-term contracts needed.",
    logo: "MA",
  },
  {
    name: "Robert Liang",
    title: "COO",
    company: "Nexus Ecommerce",
    quote: "Customer support coverage across time zones has let us scale without burning out our local team.",
    logo: "NE",
  },
];

export default function Testimonials() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
            What our clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-full bg-[#F1F9FC] flex items-center justify-center text-[#2563eb] font-bold mb-4">
                  {t.logo}
                </div>
                <p className="text-muted leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <h3 className="font-bold text-foreground">{t.name}</h3>
                  <p className="text-sm text-muted">{t.title}</p>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">{t.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
