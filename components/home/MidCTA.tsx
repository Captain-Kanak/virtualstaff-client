"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function MidCTA() {
  return (
    <Reveal>
      <section className="bg-white py-14 md:py-20">
        <Container>
          <div
            className="rounded-3xl bg-gradient-to-r from-brand-primary to-brand-primary-light px-6 py-10 md:px-12 md:py-12 text-white shadow-[0_12px_28px_color-mix(in_srgb,var(--brand-primary)_25%,transparent)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left"
          >
            <SectionHeading
              title="Ready to start?"
              subtitle="Book a free consultation and get your first seat filled with a vetted offshore assistant from RemoteStaff365."
              tone="light"
            />
            <Button
              variant="secondary"
              size="xl"
              nativeButton={false}
              className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-semibold"
              render={
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your First Seat <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              }
            />
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
