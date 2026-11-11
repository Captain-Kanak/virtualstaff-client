"use client";

import * as React from "react";
import { UserCheck, ShieldCheck, BadgeDollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const valueProps = [
  {
    icon: <UserCheck className="h-6 w-6 text-white" />,
    title: "You choose the person",
    text:
      "Review pre-vetted virtual assistant profiles and interview candidates. Hire only when you are confident it is the right fit.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "We handle the staffing structure",
    text:
      "We take care of onboarding, time tracking, payroll, and ongoing support so you can focus on growing your business.",
  },
  {
    icon: <BadgeDollarSign className="h-6 w-6 text-white" />,
    title: "One clear fee",
    text:
      "Simple, transparent pricing in USD with no long-term contracts. Upgrade or cancel anytime.",
  },
];

export default function ValueProps() {
  return (
    <Reveal>
      <section className="bg-white py-12 md:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              WHY REMOTESTAFF365
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-2">
              Hiring offshore talent, made simple
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, i) => (
              <Reveal key={prop.title} delay={i * 0.1}>
                <Card
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[2px_4px_12px_#00000014] hover:-translate-y-1 hover:shadow-lg transition duration-300 h-full"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center mb-4">
                    {prop.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mt-5">
                    {prop.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600 mt-2">
                    {prop.text}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
