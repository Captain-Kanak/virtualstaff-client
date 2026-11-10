"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function MidCTA() {
  return (
    <Reveal>
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div
            className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-10 md:px-12 md:py-12 text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold">
                Ready to start?
              </h2>
              <p className="text-white/90 text-base mt-2">
                Book a free consultation and get your first seat filled with a
                vetted offshore assistant from RemoteStaff365.
              </p>
            </div>
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
        </div>
      </section>
    </Reveal>
  );
}
