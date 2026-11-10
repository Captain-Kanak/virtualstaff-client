"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function MidCTA() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Ready to start?
            </h2>
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
                  Get Your First Seat
                </a>
              }
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
