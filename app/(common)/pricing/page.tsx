import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing - Hire Offshore Virtual Assistants",
  description:
    "Simple, transparent pricing for dedicated virtual assistants. $99 seat fee per month plus salary, no markups, no long-term contracts.",
};

const pricingCards = [
  {
    role: "Customer Support",
    total: "$1,200 - $1,600",
    salary: "$1,000 - $1,400",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Customer+Support",
  },
  {
    role: "Admin & Operations",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Admin+%26+Ops",
  },
  {
    role: "Bookkeeping",
    total: "$1,600 - $2,100",
    salary: "$1,400 - $1,900",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Bookkeeping",
  },
  {
    role: "Inbound Sales & CRM",
    total: "$1,500 - $2,000",
    salary: "$1,300 - $1,800",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sales+%26+CRM",
  },
  {
    role: "Back-Office",
    total: "$1,300 - $1,700",
    salary: "$1,100 - $1,500",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Back-Office",
  },
  {
    role: "Social Media & Marketing",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Social+Media",
  },
];

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
      "The $99 seat fee covers candidate matching, onboarding, payroll, compliance, time tracking, and a dedicated account manager.",
  },
  {
    q: "Can I change or cancel my plan?",
    a:
      "Yes. Upgrade, downgrade, or cancel anytime with no long-term contracts and no penalties.",
  },
  {
    q: "Do VAs work in my time zone?",
    a:
      "Yes. We match you with assistants who overlap your business hours, including US time zones.",
  },
  {
    q: "What if my assistant isn't the right fit?",
    a:
      "We'll replace your assistant at no extra cost. You only pay when you're confident it's the right fit.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="Simple, transparent pricing"
        subtitle="One flat seat fee per month plus the assistant's salary. No markups, no long-term contracts."
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {pricingCards.map((card) => (
                <Card
                  key={card.role}
                  className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full"
                >
                  <div className="h-32 rounded-xl bg-[#cbd5e1] mb-6">
                    <Image
                      src={card.image}
                      alt={card.role}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {card.role}
                  </h3>
                  <dl className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Total/month</span>
                      <span className="text-foreground">{card.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Salary</span>
                      <span className="text-foreground">{card.salary}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Seat fee</span>
                      <span className="text-foreground">$99</span>
                    </div>
                  </dl>
                  <Button
                    variant="brand"
                    size="xl"
                    className="w-full"
                    nativeButton={false}
                    render={
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hire {card.role} VA
                      </a>
                    }
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24 bg-[#F5F8FF]">
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                What&apos;s included
              </h2>
              <p className="text-muted text-lg">
                Everything you need to run your offshore team.
              </p>
            </div>
            <ul className="space-y-4 max-w-xl mx-auto">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-[#2563eb] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                Frequently asked questions
              </h2>
            </div>
            <Accordion className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-foreground font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </Reveal>

      <CTASection primaryHref={bookingUrl} />
    </div>
  );
}
