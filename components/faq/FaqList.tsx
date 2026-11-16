"use client";

import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
            type="single"
            collapsible
            defaultValue={FAQS[0]?.question}
            className="space-y-3 md:space-y-4"
          >
            {FAQS.map((faq) => {
              const Icon = ICON_MAP[faq.icon];

              return (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className={cn(
                    "relative rounded-2xl border border-line p-0 bg-white shadow-sm overflow-hidden transition-all duration-300",
                    "hover:border-line-soft hover:shadow-md"
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "flex items-start justify-between gap-4 w-full px-5 md:px-7 py-5 text-left",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                    )}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-shrink-0 size-9 md:size-10 rounded-full bg-brand-tint flex items-center justify-center">
                        <Icon strokeWidth={2} className="text-primary shrink-0 size-5 md:size-6" />
                      </div>
                      <h3 className="font-bold text-text-heading text-base md:text-lg leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "pt-0 pb-4 border-t border-line-soft text-text-body text-base leading-relaxed",
                      "pl-[calc(1.25rem+36px+1rem)] md:pl-[calc(1.75rem+40px+1rem)]"
                    )}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
