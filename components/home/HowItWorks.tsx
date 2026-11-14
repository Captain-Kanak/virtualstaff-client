"use client";

import * as React from "react";
import { Plus, UserCheck, Users, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const howItWorks = [
  {
    number: "01",
    title: "Add a seat",
    text: "Tell us the role, skills, and hours you need. We match you with pre-vetted offshore virtual assistants.",
    icon: <Plus className="h-6 w-6 text-white" />,
  },
  {
    number: "02",
    title: "Choose your hire",
    text: "Review profiles and interview candidates. Hire only when you are confident it is the right fit.",
    icon: <UserCheck className="h-6 w-6 text-white" />,
  },
  {
    number: "03",
    title: "Integrate them into your team",
    text: "Your VA starts within 48 hours. We handle onboarding, time tracking, and ongoing support.",
    icon: <Users className="h-6 w-6 text-white" />,
  },
  {
    number: "04",
    title: "We stay with you",
    text: "Dedicated account management, SLA-backed response times, and volume pricing as you grow.",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
  },
];

export default function HowItWorks() {
  return (
    <Reveal>
      <section className="bg-[#F5F8FF] py-14 md:py-20 overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="How seats work"
            subtitle="From selecting a seat to having your assistant start, here is how the process works step by step."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <Card
                  className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[2px_4px_12px_#00000014] hover:-translate-y-1 hover:shadow-lg transition duration-300 h-full"
                >
                  <span className="absolute right-5 top-4 text-4xl font-bold text-slate-200">
                    {step.number}
                  </span>
                  <div className="h-12 w-12 rounded-xl bg-linear-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mt-5">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600 mt-2">
                    {step.text}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
