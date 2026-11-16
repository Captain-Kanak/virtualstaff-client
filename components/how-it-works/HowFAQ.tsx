"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircleIcon, PlusIcon } from "lucide-react";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/Container";
import styles from "./HowFAQ.module.css";

const faqs = [
  {
    q: "What is a seat fee?",
    a:
      "The seat fee is a flat monthly charge that covers hiring, onboarding, and ongoing support for one offshore assistant. You pay this in addition to the assistant's salary, which you agree on directly. It keeps pricing simple with no hidden markups.",
  },
  {
    q: "How quickly can I hire an assistant?",
    a:
      "Most clients meet matched candidates within 48 hours of booking a call. You review profiles, interview, and hire only when you are confident it is the right fit. There is no long-term commitment required to get started.",
  },
  {
    q: "Can my assistant work US hours?",
    a:
      "Yes. We match you with assistants who overlap your business hours, including US time zones. Collaboration stays seamless because your assistant is online when your team is.",
  },
  {
    q: "Who handles payroll and compliance?",
    a:
      "We do. We manage onboarding, payroll, taxes, and compliance so you can focus on growing your business instead of paperwork. You simply pay the seat fee and the assistant's salary.",
  },
  {
    q: "What if my assistant is not the right fit?",
    a:
      "We will replace your assistant at no extra cost if they are not the right fit. You only pay when you are confident the match works for your team. There are no cancellation fees.",
  },
  {
    q: "Can I add more seats later?",
    a:
      "Yes. You can add seats any time as your team grows, and our support team stays on hand to help. Each new seat follows the same simple fee-plus-salary model.",
  },
];

export default function HowFAQ() {
  const [open, setOpen] = React.useState<string | null>(faqs[0]?.q ?? null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-soft/40 scroll-mt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
                Questions about seats and hiring
              </h2>
              <p className="text-text-body text-base leading-relaxed">
                Everything you need to know about seat fees, hiring timelines,
                US-hours coverage, payroll, replacements, and scaling your
                team.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-line p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 size-11 rounded-xl bg-brand-soft text-primary flex items-center justify-center">
                  <HelpCircleIcon size="5" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-semibold text-text-heading text-sm">
                    Still have questions?
                  </p>
                  <p className="text-sm text-text-body mt-1">
                    Not sure which seat fits your team? Let&rsquo;s talk.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Book a call <span className="text-xs">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-text-body hover:underline"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion
              type="multiple"
              className="space-y-3 md:space-y-4"
              value={open ? [open] : []}
              onValueChange={(value: string[]) => setOpen(value[0] ?? null)}
            >
              {faqs.map((faq, index) => {
                const isOpen = open === faq.q;

                return (
                  <div
                    key={faq.q}
                    className="faqItemFadeUp"
                    style={{ animationDelay: `${index * 0.08}s` }}
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
                      {isOpen && (
                        <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-brand-primary to-brand-tag-blue" />
                      )}
                      <AccordionTrigger
                        className={cn(
                          "flex items-center justify-between gap-4 px-5 md:px-7 py-5 text-base md:text-lg font-semibold",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                          styles.hideShadcnTriggerIcons,
                          isOpen ? "text-primary" : "text-text-heading"
                        )}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <span
                            className={cn(
                              "size-9 rounded-full flex items-center justify-center font-semibold text-sm",
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
                            "size-9 rounded-full flex items-center justify-center border transition-transform duration-200",
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
                      <AccordionContent
                        className="overflow-hidden"
                      >
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
        </div>
      </Container>

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
    </section>
  );
}
