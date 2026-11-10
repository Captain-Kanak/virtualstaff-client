"use client";

import * as React from "react";
import { User, Settings, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const valueProps = [
  {
    icon: <User className="h-5 w-5" />,
    title: "You choose the person and set the salary",
    text:
      "Review pre-vetted virtual assistant profiles and interview candidates. Hire only when you are confident it is the right fit.",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "We handle the staffing structure",
    text:
      "We take care of onboarding, time tracking, payroll, and ongoing support so you can focus on growing your business.",
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "One clear fee: $99 per month per staff + salary, no markups",
    text:
      "Simple, transparent pricing with no long-term contracts. Upgrade or cancel anytime.",
  },
];

export default function ValueProps() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {valueProps.map((prop) => (
              <Card
                key={prop.title}
                className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F1F9FC] flex items-center justify-center text-[#2563eb] mb-4">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {prop.title}
                </h3>
                <p className="text-muted leading-relaxed">{prop.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
