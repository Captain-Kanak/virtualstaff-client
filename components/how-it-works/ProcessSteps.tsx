"use client";

import * as React from "react";
import { CalendarCheck, TrendingUp, UserCheck, Users, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const processSteps = [
  {
    number: "1",
    title: "Book a call",
    icon: CalendarCheck,
    text: "Tell us the role, hours and skills you need.",
    timing: "Day 1",
  },
  {
    number: "2",
    title: "Meet matched candidates",
    icon: Users,
    text: "Get vetted profiles within 48 hours.",
    timing: "Within 48 hours",
  },
  {
    number: "3",
    title: "Choose and onboard",
    icon: UserCheck,
    text: "You pick the person and agree the salary, we handle contracts and setup.",
    timing: "Days 3-5",
  },
  {
    number: "4",
    title: "Grow with support",
    icon: TrendingUp,
    text: "Add seats any time, our team stays on hand.",
    timing: "Ongoing",
  },
  // placeholder timings, confirm with client
];

const isGoal = (i: number) => i === 3;

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-brand-tint py-14 md:py-20">
      <div className="aria-hidden pointer-events-none absolute inset-0 z-0">
        <div className="section-dots absolute inset-0" />
        <div className="absolute -left-20 top-10 size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 size-72 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE PROCESS"
          title="From first call to first day in four steps"
          subtitle="Four simple steps to add offshore talent to your team."
        />

        <ol className="relative grid items-stretch gap-6 lg:grid-cols-4">
          {/* Desktop connector line passing behind badge centers */}
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-7 h-0.5 lg:block bg-gradient-to-r from-primary/20 via-primary/50 to-brand-primary/40"
          />
          {/* Mobile vertical timeline line (shown below lg only) */}
          <div
            aria-hidden
            className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-brand-primary/40 lg:hidden"
          />

          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex h-full flex-col pl-20 lg:pl-0"
            >
              <Reveal delay={i * 0.1} className="flex flex-1 flex-col">
                {/* Badge: centered above card on desktop; absolute on line on mobile */}
                <span
                  className={`z-10 grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-b from-brand-primary to-brand-primary-light text-lg font-bold text-white ring-8 ring-brand-tint shadow-[0_8px_20px_color-mix(in_srgb,var(--brand-primary)_35%,transparent)] mb-6 absolute left-0 top-0 lg:relative lg:mx-auto lg:left-auto lg:top-auto`}
                >
                  {step.number}
                </span>

                {/* Short stem under badge (desktop only) */}
                <span
                  aria-hidden
                  className="mx-auto hidden h-6 w-px bg-primary/30 lg:block mb-6"
                />

                <Card
                  className={`h-full relative flex-1 flex flex-col overflow-hidden rounded-3xl border border-line-soft bg-white p-6 text-left shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-secondary)_6%,transparent)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg ${isGoal(i) ? "bg-gradient-to-br from-brand-primary to-brand-primary-light border-transparent text-white hover:shadow-[0_14px_32px_color-mix(in_srgb,var(--brand-primary)_35%,transparent)]" : ""}`}
                >
                  {/* Icon tile */}
                  <div className={`grid size-12 place-items-center rounded-2xl ${isGoal(i) ? "bg-white/15 text-white" : "bg-brand-soft text-primary"}`}>
                    <step.icon className="size-6" />
                  </div>

                  <h3 className={`mt-5 text-lg md:text-xl font-semibold ${isGoal(i) ? "text-white" : "text-foreground"}`}>
                    {step.title}
                  </h3>
                  <p className={`mt-2 text-base leading-relaxed ${isGoal(i) ? "text-white/90" : "text-text-body"}`}>
                    {step.text}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${isGoal(i) ? "bg-white/15 text-white" : "bg-brand-soft text-primary"}`}>
                      <Clock className={`size-3.5 ${isGoal(i) ? "text-white" : "text-primary"}`} />
                      <span>{step.timing}</span>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button
            variant="brand"
            size="xl"
            nativeButton={false}
            render={
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free call
                <ArrowRight className="size-4 ml-2" />
              </a>
            }
          />
          <p className="mt-4 text-sm text-text-body">
            No login or signup, just pick a time that suits you.
          </p>
        </div>
      </Container>
    </section>
  );
}
