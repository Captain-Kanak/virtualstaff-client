"use client";

import * as React from "react";
import { Plus, User, Users, CircleCheck } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

const youChecks = [
  "Describe the role you need",
  "Choose your assistant",
  "Agree the salary",
  "Manage daily work",
  "Set your standards",
];

const remoteStaffChecks = [
  "Supply vetted candidates",
  "Handle contracts and onboarding",
  "Process payroll",
  "Track attendance and hours",
  "Provide ongoing support",
];

function ImagePanel({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative shrink-0 w-full h-64 md:h-auto md:w-[38%] rounded-2xl overflow-hidden isolate transform-gpu">
      <Image
        fill
        src={src}
        alt={alt}
        sizes="(min-width: 768px) 20vw, 90vw"
        className="object-cover object-center transition-transform duration-500 ease-out transform-gpu group-hover:scale-[1.03]"
      />
    </div>
  );
}

export default function Partnership() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-brand-tint via-brand-tint to-brand-wash py-14 md:py-20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1150px] h-[1150px] rounded-full border border-white/60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/60 pointer-events-none" />

      <Container>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            WHO DOES WHAT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            You lead the work. We run the back end.
          </h2>
          <p className="text-base md:text-lg text-text-body max-w-3xl mx-auto">
            Split the work so you stay focused on growing while we handle the
            employment side.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-stretch gap-4 lg:gap-6">
          {/* Card 1: You */}
          <Reveal delay={0}>
            <Card
              className="rounded-[2rem] bg-white p-3 md:p-4 shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-primary)_10%,transparent)] group border border-transparent hover:-translate-y-1 hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-stretch gap-4 md:min-h-[420px] h-full"
            >
              <ImagePanel
                src="/images/me.webp"
                alt="Business owner working on a laptop"
              />
              <div className="flex-1 p-3 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
                    <User className="size-28 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-wide text-foreground uppercase">
                      YOU
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3.5 mt-6">
                  {youChecks.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base md:text-lg font-medium text-text-heading leading-snug">
                      <CircleCheck className="size-6 shrink-0 fill-primary text-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          {/* Plus circle */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="size-14 rounded-full bg-gradient-to-b from-brand-primary to-brand-primary-light text-white ring-4 ring-white/70 shadow-[0_8px_18px_color-mix(in_srgb,var(--brand-primary)_35%,transparent)] z-10 flex items-center justify-center"
            >
              <Plus strokeWidth={3} size={28} />
            </div>
          </div>

          {/* Card 2: RemoteStaff365 */}
          <Reveal delay={0.15}>
            <Card
              className="rounded-[2rem] bg-white p-3 md:p-4 shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-primary)_10%,transparent)] group border border-transparent hover:-translate-y-1 hover:shadow-lg transition duration-300 flex flex-col md:flex-row-reverse items-stretch gap-4 md:min-h-[420px] h-full"
            >
              <ImagePanel
                src="/images/va.webp"
                alt="Offshore virtual assistant working on a laptop"
              />
              <div className="flex-1 p-3 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
                    <Users className="size-28 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-wide text-foreground uppercase">
                      REMOTESTAFF365
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3.5 mt-6">
                  {remoteStaffChecks.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base md:text-lg font-medium text-text-heading leading-snug">
                      <CircleCheck className="size-6 shrink-0 fill-primary text-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
