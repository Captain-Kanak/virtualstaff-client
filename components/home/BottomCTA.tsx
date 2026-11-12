"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

export default function BottomCTA() {
  return (
    <Reveal>
      <section className="py-16 lg:py-24 bg-linear-to-r from-blue-600 to-blue-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Start Building Your Team Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Hire pre-vetted offshore virtual assistants in 48 hours. No login,
            no signup, no long-term contracts.
          </p>
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
