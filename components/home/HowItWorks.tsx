"use client";

import * as React from "react";
import { Plus, UserCheck, Users, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const howItWorks = [
  {
    number: "01",
    title: "Add a seat",
    text: "Tell us the role, skills, and hours you need. We match you with pre-vetted offshore virtual assistants.",
    icon: <Plus className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Choose your hire",
    text: "Review profiles and interview candidates. Hire only when you are confident it is the right fit.",
    icon: <UserCheck className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Integrate them into your team",
    text: "Your VA starts within 48 hours. We handle onboarding, time tracking, and ongoing support.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "We stay with you",
    text: "Dedicated account management, SLA-backed response times, and volume pricing as you grow.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

export default function HowItWorks() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
            How Seats Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {howItWorks.map((step) => (
              <Card
                key={step.title}
                className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F1F9FC] flex items-center justify-center text-[#2563eb] mb-4">
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#F5F8FF] flex items-center justify-center text-[#2563eb] mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
