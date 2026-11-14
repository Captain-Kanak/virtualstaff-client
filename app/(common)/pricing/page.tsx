import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import RolePricingCard from "@/components/pricing/RolePricingCard";
import { roles } from "@/lib/pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing - Hire Offshore Virtual Assistants",
  description:
    "Simple, transparent pricing for dedicated virtual assistants. $99 seat fee per month plus salary, no markups, no long-term contracts.",
};

const included = [
  "Pre-vetted candidate profiles",
  "Dedicated account management",
  "Time tracking and reporting",
  "Payroll and compliance handled",
  "Replace anytime at no cost",
  "SLA-backed response times",
];

const faqs = [
  {
    q: "What's included in the seat fee?",
    a:
      "The $99 seat fee covers candidate matching, onboarding, payroll, compliance, time tracking, and a dedicated account manager. You can interview candidates before hiring to make sure it's the right fit.",
  },
  {
    q: "Can I change or cancel my plan?",
    a:
      "Yes. You can upgrade, downgrade, or cancel your plan anytime with no long-term contracts and no penalties. Your changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Do VAs work in my time zone?",
    a:
      "Yes. We match you with assistants who overlap your business hours, including US time zones. Collaboration stays seamless no matter where your VA is located.",
  },
  {
    q: "Who handles payroll and compliance?",
    a:
      "We do. We manage onboarding, payroll, and compliance so you can focus on growing your business instead of paperwork. Everything is handled on your behalf.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="PRICING"
        title="Simple, transparent pricing"
        subtitle="One flat seat fee per month plus the assistant's salary. No markups, no long-term contracts."
      />

      <Reveal>
        <section className="pt-8 md:pt-12 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <RolePricingCard key={role.role} role={role} />
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24 bg-[#F5F8FF]">
        <Container>
          <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                What{"'"}s included
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Everything you need to run your offshore team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {included.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-4 shadow-[2px_4px_12px_#00000014] text-left"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mb-2" />
                  <p className="text-base font-medium text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24">
        <Container>
          <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                Frequently asked questions
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-2 md:p-4 shadow-[2px_4px_12px_#00000014] max-w-3xl mx-auto">
              <Accordion defaultValue={[faqs[0].q]}>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.q} value={faq.q}>
                    <AccordionTrigger className="text-base md:text-lg font-medium text-foreground py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-slate-600 py-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>
      </Reveal>

      <CTASection
        primaryHref={bookingUrl}
        secondaryLabel="See how it works"
        secondaryHref="/how-it-works"
      />
    </div>
  );
}
