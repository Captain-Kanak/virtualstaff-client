"use client";

import * as React from "react";
import { CalendarCheck, TrendingUp, UserCheck, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const processSteps = [
  {
    number: "1",
    title: "Book a call",
    icon: <CalendarCheck className="size-5 text-[#2563eb]" />,
    text: "Tell us the role, hours and skills you need.",
  },
  {
    number: "2",
    title: "Meet matched candidates",
    icon: <Users className="size-5 text-[#2563eb]" />,
    text: "Get vetted profiles within 48 hours.",
  },
  {
    number: "3",
    title: "Choose and onboard",
    icon: <UserCheck className="size-5 text-[#2563eb]" />,
    text: "You pick the person and agree the salary, we handle contracts and setup.",
  },
  {
    number: "4",
    title: "Grow with support",
    icon: <TrendingUp className="size-5 text-[#2563eb]" />,
    text: "Add seats any time, our team stays on hand.",
  },
];

const connector = () => (
  <div
    className="h-3 w-px border-l border-dashed border-slate-300 mx-auto self-center lg:h-px lg:w-3 lg:border-t lg:border-l-0 lg:my-1"
  />
);

export default function ProcessSteps() {
  return (
    <section className="bg-[#F5F8FF] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              THE PROCESS
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
              From first call to first day in four steps
            </h2>
          </Reveal>
        </div>

        <div className="flex lg:flex-row flex-col items-start gap-8">
          {processSteps.map((step, i) => (
            <React.Fragment key={step.title}>
              <Reveal>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white font-semibold">
                    {step.number}
                  </div>
                  <Card className="rounded-2xl border border-slate-100 p-6 shadow-[2px_4px_12px_#00000014] w-full max-w-xs text-center">
                    <div className="mx-auto mb-3">{step.icon}</div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.text}
                    </p>
                  </Card>
                </div>
              </Reveal>
              {i < processSteps.length - 1 && <Reveal>{connector()}</Reveal>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
