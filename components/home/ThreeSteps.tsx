"use client";

import * as React from "react";
import { ArrowRight, ClipboardList, Rocket, Users } from "lucide-react";
import Container from "@/components/ui/Container";

type Step = {
  number: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    Icon: ClipboardList,
    title: "Share Your Needs",
    description:
      "Tell us your team requirements, workflows, and goals.",
  },
  {
    number: 2,
    Icon: Users,
    title: "Get Your Team",
    description:
      "We match you with qualified talent from our existing team of professionals.",
  },
  {
    number: 3,
    Icon: Rocket,
    title: "Get Started",
    description:
      "Your team is onboarded, managed, and supported by RemoteStaff365 from day one.",
  },
] as const;

export default function ThreeSteps() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="three-steps-heading">
      <Container>
        <div className="text-center mb-10 md:mb-12">
          <span
            className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-brand-primary block mb-3"
            id="three-steps-heading"
          >
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-text-heading">
            Build Your Remote Team in Three Simple Steps.
          </h2>
          <p className="text-base md:text-lg text-text-body mt-3 max-w-2xl mx-auto">
            A fast, seamless process to get the right support for your business.
          </p>
        </div>

        <ol className="space-y-8 md:space-y-0 lg:space-y-0">
          {/* Desktop: horizontal row with arrows */}
          <div
            className="hidden md:block lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8"
          >
            {steps.map((step, i) => (
              <React.Fragment key={step.number}>
                <div className="flex items-center gap-5">
                  <div
                    className="grid size-22 place-items-center rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_12%,_white)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--brand-primary)_30%,transparent)]"
                  >
                    <step.Icon
                      className="size-20 text-brand-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="max-w-[260px]">
                    <h3 className="text-lg md:text-xl font-bold text-text-heading">
                      {step.number}. {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-6 text-text-body">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="shrink-0" aria-hidden="true">
                    <ArrowRight
                      className="size-28 text-brand-primary stroke-[2]"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tablet: 3-column grid, no arrows */}
          <div className="hidden lg:hidden grid grid-cols-3 gap-6 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center gap-4"
              >
                <div
                  className="grid size-22 place-items-center rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_12%,_white)]"
                >
                  <step.Icon
                    className="size-20 text-brand-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center max-w-[260px]">
                  <h3 className="text-lg font-bold text-text-heading">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-6 text-text-body">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical list with connector */}
          <div className="flex flex-col gap-8 lg:hidden">
            {steps.map((step, i) => (
              <React.Fragment key={step.number}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 relative">
                    <div
                      className="grid size-16 place-items-center rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_12%,_white)]"
                    >
                      <step.Icon
                        className="size-14 text-brand-primary"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="absolute left-1/2 top-full -translate-x-1/2 h-3 w-0.5 bg-brand-soft"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="max-w-[260px]">
                    <h3 className="text-lg font-bold text-text-heading">
                      {step.number}. {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-6 text-text-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </ol>
      </Container>
    </section>
  );
}
