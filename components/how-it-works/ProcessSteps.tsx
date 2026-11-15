"use client";

import * as React from "react";
import { Calendar, Rocket, Users, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Tell Us What You Need",
    description:
      "Share your business goals, the type of support you're looking for, and your preferred schedule.",
    icon: Calendar,
  },
  {
    number: "2",
    title: "We Set Up Your Team",
    description:
      "We activate the right support from our ready-to-work team, configure their access, and get everything in place.",
    icon: Users,
  },
  {
    number: "3",
    title: "Start Working",
    description:
      "Your dedicated remote team gets to work, managed by RemoteStaff365 for ongoing performance, quality, and support.",
    icon: Rocket,
  },
] as const;

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="THE PROCESS"
          title="Get Started in 3 Simple Steps"
          subtitle="A fast, seamless, and fully managed process to get the support you need."
        />

        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.number}>
                <div className="relative flex-1 flex flex-col items-center text-center rounded-3xl border border-line-soft bg-white p-8 pt-16 shadow-card">
                  {/* Number badge overlapping top-left card edge */}
                  <span className="absolute -top-3 -left-3 z-20 size-8 shrink-0 rounded-full bg-brand-success text-white font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-card">
                    {step.number}
                  </span>

                  {/* Light-blue circle with icon */}
                  <div className="mb-6 size-20 rounded-full bg-brand-soft flex items-center justify-center">
                    <Icon className="size-10 text-brand-primary" strokeWidth={2} />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-text-heading">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-[28ch] text-sm md:text-base leading-relaxed text-text-body mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector between cards (desktop only) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center self-center">
                    <div className="size-6 rounded-full bg-brand-soft flex items-center justify-center">
                      <ArrowRight className="size-3.5 text-brand-primary" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
