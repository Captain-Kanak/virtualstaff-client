"use client";

import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";

export default function LargerTeamBar() {
  return (
    <section className="bg-white pt-10 md:pt-14">
      <Container>
        <section className="flex flex-col gap-5 rounded-2xl border border-line-soft bg-brand-soft p-5 shadow-card md:p-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8">
          <div className="flex items-center gap-4">
            <Layers className="size-10 shrink-0 text-primary" strokeWidth={1.75} />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-text-heading">
              Need a Larger Team?
            </h3>
          </div>
          <div className="hidden h-12 w-px bg-line lg:block" />
          <div className="flex-1 text-base leading-relaxed text-text-body">
            We can build a custom plan for multiple team members, departments, or long-term projects.
          </div>
          <Button
            variant="outline"
            nativeButton={false}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-brand-primary bg-white px-6 text-base font-semibold text-brand-primary transition-all duration-300 hover:bg-brand-soft"
            render={
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Talk to Our Team
                <ArrowRight className="size-4 group-hover:translate-x-1" />
              </a>
            }
          />
        </section>
      </Container>
    </section>
  );
}
