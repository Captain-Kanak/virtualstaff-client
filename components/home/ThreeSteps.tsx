"use client";

import * as React from "react";
import { ArrowRight, ClipboardList, Rocket, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

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

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:mt-14 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-x-4">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <Reveal key={`${step.number}-card`} className="flex h-full flex-col">
                <div className="flex flex-1 flex-col rounded-2xl border border-line-soft bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <div className="grid size-14 place-items-center rounded-2xl bg-brand-soft">
                    <step.Icon className="size-7 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg md:text-xl font-semibold text-text-heading">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-body">
                    {step.description}
                  </p>
                </div>
              </Reveal>

              {i < steps.length - 1 && (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowRight className="size-6 text-primary" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
