"use client";

import * as React from "react";
import { Building2, Check, Plus, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

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

export default function Partnership() {
  return (
    <section className="bg-gradient-to-b from-[#F5F8FF] to-[#E8F0FE] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              WHO DOES WHAT
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
              You lead the work. We run the back end.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Split the work so you stay focused on growing while we handle the
              employment side.
            </p>
          </div>
        </Reveal>

        <div className="flex lg:flex-row flex-col gap-8 items-start lg:items-center">
          <Reveal>
            <Card className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[2px_4px_12px_#00000014] flex-1 lg:flex-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white mb-4">
                <User className="size-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">You</h3>
              <ul className="space-y-3">
                {youChecks.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
                    <Check className="size-5 shrink-0 text-[#2563eb] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
              <Plus className="size-4" />
            </div>
          </Reveal>

          <Reveal>
            <Card className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[2px_4px_12px_#00000014] flex-1 lg:flex-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white mb-4">
                <Building2 className="size-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                RemoteStaff365
              </h3>
              <ul className="space-y-3">
                {remoteStaffChecks.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
                    <Check className="size-5 shrink-0 text-[#2563eb] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
