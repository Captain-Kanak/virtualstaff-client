"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function BottomCTA() {
  return (
    <Reveal>
      <section className="py-14 md:py-20 bg-linear-to-r from-blue-600 to-blue-500 text-white">
        <Container className="text-center">
          <SectionHeading
            title="Start Building Your Team Today"
            subtitle="Hire pre-vetted offshore virtual assistants in 48 hours. No login, no signup, no long-term contracts."
            tone="light"
          />
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
