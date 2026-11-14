"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

const faqs = [
  {
    q: "What is a seat fee?",
    a:
      "The seat fee is a flat monthly charge that covers hiring, onboarding, and ongoing support for one offshore assistant. You pay this in addition to the assistant&apos;s salary, which you agree on directly. It keeps pricing simple with no hidden markups.",
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
      "We do. We manage onboarding, payroll, taxes, and compliance so you can focus on growing your business instead of paperwork. You simply pay the seat fee and the assistant&apos;s salary.",
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
  return (
    <section className="bg-[#F5F8FF] py-12 md:py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              FAQ
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
              Questions about seats and hiring
            </h2>
          </Reveal>

          <Accordion
            className="max-w-3xl mx-auto"
            defaultValue={[faqs[0].q]}
          >
            {faqs.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.05}>
                <AccordionItem
                  className="rounded-2xl border border-slate-100 bg-white shadow-[2px_4px_12px_#00000014] mb-4"
                  value={faq.q}
                >
                  <AccordionTrigger
                    className="flex items-start justify-between gap-4 px-6 py-4 text-base md:text-lg font-medium text-foreground"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {(index + 1).toString().padStart(2, "0")}
                      </Badge>
                      <span>{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-6 pb-6 text-base leading-relaxed text-slate-600"
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
