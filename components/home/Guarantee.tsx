"use client";

import * as React from "react";
import { CheckCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const guaranteeBullets = [
  {
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Try any seat risk-free for 30 days.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    text: "Full refund if you're not satisfied.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: "Cancel anytime, no questions asked.",
  },
];

export default function Guarantee() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24 text-center">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
            30-day money-back guarantee
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-10">
            Hire with confidence. If your first virtual assistant isn&rsquo;t
            the right fit, we&rsquo;ll make it right or refund your seat fee.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            {guaranteeBullets.map((b) => (
              <div key={b.text} className="flex items-start gap-3 text-left">
                <div className="mt-1 text-[#2563eb]">{b.icon}</div>
                <span className="text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
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
                Build Your Team
              </a>
            }
          />
        </Container>
      </section>
    </Reveal>
  );
}
