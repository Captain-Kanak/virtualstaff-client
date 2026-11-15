"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import Container from "@/components/Container";

const faqs = [
  {
    q: "What's included in the seat fee?",
    a:
      "The $99 seat fee covers candidate matching, onboarding, payroll, compliance, time tracking, and a dedicated account manager. You can interview candidates before hiring to make sure it's the right fit.",
  },
  {
    q: "How is my total monthly cost calculated?",
    a:
      "Your total is the assistant's agreed salary plus the $99 seat fee per month, per seat. There are no markups or hidden fees — you pay the salary directly to your assistant.",
  },
  {
    q: "What does the assistant's salary cover?",
    a:
      "The salary is paid directly to your assistant for the hours they work. It's agreed between you and your assistant, and we never take a cut of it.",
  },
  {
    q: "Can I start with just one seat?",
    a:
      "Yes. You can start with a single seat and add more anytime as your team grows. Each new seat follows the same simple fee-plus-salary model.",
  },
  {
    q: "Can I change or cancel my plan?",
    a:
      "Yes. You can upgrade, downgrade, or cancel anytime with no long-term contracts and no penalties. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a money-back guarantee?",
    a:
      "Yes. Try any seat risk-free for 30 days. If your assistant isn't the right fit, we'll make it right or refund your seat fee.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = React.useState<string | null>(faqs[0]?.q ?? null);

  return (
    <section className="py-16 md:py-20 bg-brand-tint">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Everything you need to know about seat fees, salary, total cost,
            and getting started.
          </p>
        </div>

        <div className="rounded-2xl border border-line-soft bg-white p-2 md:p-4 shadow-card max-w-3xl mx-auto">
          <Accordion
            className="space-y-2 md:space-y-3"
            value={open ? [open] : []}
            onValueChange={(value) => setOpen(value[0] ?? null)}
          >
            {faqs.map((faq, index) => {
              const isOpen = open === faq.q;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <AccordionItem
                    className={cn(
                      "relative rounded-2xl border border-line-soft/80 bg-white shadow-sm overflow-hidden border-b-0 transition-all duration-300",
                      "hover:border-line hover:shadow-md",
                      isOpen
                        ? "border-line-soft ring-1 ring-brand-soft shadow-lg"
                        : ""
                    )}
                    value={faq.q}
                  >
                    <AccordionTrigger
                      className={cn(
                        "flex items-center justify-between gap-4 w-full px-5 md:px-7 py-4 text-base md:text-lg font-semibold text-left",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                        isOpen ? "text-primary" : "text-text-heading"
                      )}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <span
                          className={cn(
                            "size-9 rounded-full flex items-center justify-center font-semibold text-sm shrink-0",
                            isOpen
                              ? "bg-brand-primary text-white"
                              : "bg-brand-soft text-text-body"
                          )}
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <span>{faq.q}</span>
                      </div>
                      <div
                        className={cn(
                          "size-9 rounded-full flex items-center justify-center border transition-transform duration-200 shrink-0",
                          isOpen
                            ? "bg-brand-primary border-transparent text-white"
                            : "bg-brand-tint border-line-soft text-text-body"
                        )}
                      >
                        <PlusIcon
                          size="5"
                          className={cn(
                            "transition-transform duration-200",
                            isOpen ? "rotate-45" : ""
                          )}
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="overflow-hidden">
                      <div
                        className={cn(
                          "grid overflow-hidden pt-4 pb-6 pr-5 md:pr-7 border-t border-line-soft text-base leading-7 text-text-body",
                          "[grid-template-rows:0fr] transition-[grid-template-rows] duration-300 ease-out",
                          "pl-[calc(1.25rem+36px+1rem)] md:pl-[calc(1.75rem+36px+1rem)]",
                          isOpen ? "[grid-template-rows:1fr]" : ""
                        )}
                      >
                        {faq.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </Container>
    </section>
  );
}
