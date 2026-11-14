"use client";

import * as React from "react";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const guaranteeBullets = [
  {
    icon: <CheckCircle2 className="size-6 text-blue-600" />,
    text: "Try any seat risk-free for 30 days.",
  },
  {
    icon: <ShieldCheck className="size-6 text-blue-600" />,
    text: "Full refund if you're not satisfied.",
  },
  {
    icon: <Clock className="size-6 text-blue-600" />,
    text: "Cancel anytime, no questions asked.",
  },
];

export default function Guarantee() {
  return (
    <Reveal>
      <section className="bg-white py-12 md:py-16 text-center">
        <Container className="max-w-6xl mx-auto px-5">
          <div className="rounded-3xl bg-gradient-[linear,180deg,_#4289e0,_#2563eb] border border-slate-100 px-6 py-10 md:px-12 md:py-14 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-[linear,180deg,_#4289e0,_#2563eb] flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="size-8 text-white" />
            </div>
            <p className="text-xs font-semibold tracking-wider text-primary mt-5">
              OUR PROMISE
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-2">
              30-day money-back guarantee
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto mt-4">
              Hire with confidence. If your first virtual assistant isn&rsquo;t
              the right fit, we&rsquo;ll make it right or refund your seat fee.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {guaranteeBullets.map((b) => (
                <div
                  key={b.text}
                  className="rounded-xl bg-white p-5 shadow-[2px_4px_12px_#00000014] text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    {b.icon}
                  </div>
                  <p className="text-base font-medium text-slate-800">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
            <Button
              variant="brand"
              size="xl"
              className="mt-8"
              nativeButton={false}
              render={
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Build Your Team
                </a>
              }
            />
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
