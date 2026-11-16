"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import {
  Users,
  Calendar,
  User,
  Headset,
  RefreshCw,
  Coins,
  FileX,
  CalendarX,
  Settings,
  Laptop,
  ChevronDown,
} from "lucide-react";
import { FAQS } from "@/lib/faqs";
import Container from "@/components/Container";

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Users,
  Calendar,
  User,
  Headset,
  RefreshCw,
  Coins,
  FileX,
  CalendarX,
  Settings,
  Laptop,
};

export default function FaqList() {
  const [open, setOpen] = React.useState<string | null>(
    FAQS[0]?.question ?? null
  );

  return (
    <section id="faqs" className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-3">
            YOUR QUESTIONS, ANSWERED
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto leading-relaxed">
            Building your remote team should be simple. Here are answers to the
            most common questions about our services, pricing, and support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            className="space-y-3 md:space-y-4"
            value={open ? [open] : []}
            onValueChange={(value) => setOpen(value[0] ?? null)}
          >
            {FAQS.map((faq, index) => {
              const isOpen = open === faq.question;
              const Icon = ICON_MAP[faq.icon];

              return (
                <div key={faq.question} className="overflow-hidden">
                  <AccordionItem
                    className={cn(
                      "relative rounded-2xl border border-line p-6 bg-white shadow-sm overflow-hidden border-b-0 transition-all duration-300",
                      "hover:border-line-soft hover:shadow-md",
                      isOpen
                        ? "border-brand-primary ring-1 ring-brand-primary/20 shadow-lg"
                        : ""
                    )}
                    value={faq.question}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpen(
                          open === faq.question ? null : faq.question
                        )
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className={cn(
                        "w-full flex items-start justify-between gap-4 text-left p-0",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                      )}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-shrink-0 size-10 md:size-11 rounded-full bg-brand-tint flex items-center justify-center">
                          <Icon
                            strokeWidth={2}
                            className="text-primary shrink-0 size-4 md:size-5"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-text-heading text-base md:text-lg leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "shrink-0 transition-transform duration-300 size-5",
                          isOpen ? "rotate-180" : ""
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <AccordionContent className="overflow-hidden">
                      <div
                        className={cn(
                          "grid overflow-hidden pt-4 pb-6 border-t border-line-soft text-text-body text-base leading-relaxed",
                          "[grid-template-rows:0fr] transition-[grid-template-rows] duration-300 ease-out",
                          isOpen ? "[grid-template-rows:1fr]" : ""
                        )}
                      >
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
