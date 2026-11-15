"use client";

import * as React from "react";
import { UserCheck, ShieldCheck, BadgeDollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

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

export default function WhyRemoteStaff() {
  return (
    <Reveal>
      <section className="bg-white py-14 md:py-20 overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="WHY REMOTESTAFF365"
            title="Hiring offshore talent, made simple"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, i) => (
              <Reveal key={prop.title} delay={i * 0.1}>
                <Card
                  className="rounded-2xl border border-line-soft bg-white p-6 shadow-card hover:-translate-y-1 hover:shadow-lg transition duration-300 h-full"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-brand-primary to-brand-primary-light flex items-center justify-center mb-4">
                    {prop.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mt-5">
                    {prop.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-body mt-2">
                    {prop.text}
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
