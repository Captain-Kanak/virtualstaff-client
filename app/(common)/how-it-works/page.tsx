import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { CheckCircle, Shield, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works - Hire Offshore Virtual Assistants",
  description:
    "Hire dedicated virtual assistants in 48 hours. Four simple steps to add offshore talent to your team.",
};

const steps = [
  {
    number: "01",
    title: "Add a seat",
    text:
      "Tell us the role, skills, and hours you need. We match you with pre-vetted offshore virtual assistants.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Choose your hire",
    text:
      "Review profiles and interview candidates. Hire only when you are confident it is the right fit.",
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Integrate them into your team",
    text:
      "Your VA starts within 48 hours. We handle onboarding, time tracking, and ongoing support.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "We stay with you",
    text:
      "Dedicated account management, SLA-backed response times, and volume pricing as you grow.",
    icon: <Shield className="h-5 w-5" />,
  },
];

const faqs = [
  {
    q: "How quickly can I hire a virtual assistant?",
    a:
      "Most clients have a VA working within 48 hours. We match you with pre-vetted candidates so you can interview and hire fast.",
  },
  {
    q: "What does pricing look like?",
    a:
      "One flat $99 seat fee per month plus the assistant's salary. No markups, no long-term contracts, and you can cancel anytime.",
  },
  {
    q: "Can my VA work in my time zone?",
    a:
      "Yes. We match you with assistants who overlap your business hours, including US time zones, so collaboration is seamless.",
  },
  {
    q: "Who handles payroll and compliance?",
    a:
      "We do. We manage onboarding, payroll, and compliance so you can focus on growing your business.",
  },
  {
    q: "What if my assistant isn't the right fit?",
    a:
      "We'll replace your assistant at no extra cost. You only pay when you're confident it's the right fit.",
  },
  {
    q: "Is there a guarantee?",
    a:
      "Yes. Try any seat risk-free for 30 days with a full refund if you're not satisfied.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="How It Works"
        subtitle="Hire dedicated offshore virtual assistants in four simple steps."
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
              From zero to a full team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step) => (
                <Card
                  key={step.title}
                  className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F1F9FC] flex items-center justify-center text-[#2563eb] mb-4">
                    <span className="text-sm font-bold">{step.number}</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#F5F8FF] flex items-center justify-center text-[#2563eb] mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24 bg-[#F5F8FF]">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-10">
              Frequently asked questions
            </h2>
            <Accordion>
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

      <Reveal>
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to build your team?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
              Hire pre-vetted offshore virtual assistants in 48 hours. No login,
              no signup, no long-term contracts.
            </p>
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
                  Build Your Team
                </a>
              }
            />
          </div>
        </section>
      </Reveal>
    </div>
  );
}
