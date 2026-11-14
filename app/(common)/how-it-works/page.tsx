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
import { Users, CheckCircle, Globe, Shield } from "lucide-react";

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
      "Tell us the role, skills, and hours you need. We match you with pre-vetted offshore virtual assistants who fit your business.",
    icon: <Users className="size-6 text-blue-600" />,
  },
  {
    number: "02",
    title: "Choose your hire",
    text:
      "Review profiles and interview candidates. Hire only when you are confident it is the right fit for your team.",
    icon: <CheckCircle className="size-6 text-blue-600" />,
  },
  {
    number: "03",
    title: "Integrate them into your team",
    text:
      "Your VA starts within 48 hours. We handle onboarding, time tracking, and ongoing support so you can focus on growing your business.",
    icon: <Globe className="size-6 text-blue-600" />,
  },
  {
    number: "04",
    title: "We stay with you",
    text:
      "Dedicated account management, SLA-backed response times, and volume pricing as your team grows.",
    icon: <Shield className="size-6 text-blue-600" />,
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
      "You pay one flat seat fee per month plus your assistant's salary. There are no markups, no long-term contracts, and you can cancel anytime.",
  },
  {
    q: "Can my VA work in my time zone?",
    a:
      "Yes. We match you with assistants who overlap your business hours, including US time zones, so collaboration stays seamless.",
  },
  {
    q: "Who handles payroll and compliance?",
    a:
      "We do. We manage onboarding, payroll, and compliance so you can focus on growing your business instead of paperwork.",
  },
  {
    q: "What if my assistant isn't the right fit?",
    a:
      "We'll replace your assistant at no extra cost. You only pay when you are confident it's the right fit for your team.",
  },
  {
    q: "Is there a guarantee?",
    a:
      "Yes. Try any seat risk-free for 30 days with a full refund if you're not satisfied. We stand behind every match we make.",
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
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4">
                From zero to a full team
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
                Four simple steps to add offshore talent to your team.
              </p>
            </div>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-11 top-0 bottom-0 w-px bg-slate-200" />
              {steps.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 0.1}
                  className="flex items-start gap-4 mb-12 md:mb-16"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-[linear,180deg,_#4289e0,_#2563eb] flex items-center justify-center text-white font-semibold text-sm md:text-base">
                      {step.number}
                    </div>
                  </div>
                  <Card className="rounded-2xl border border-slate-100 p-6 shadow-[2px_4px_12px_#00000014] flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-[#F5F8FF] py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="rounded-2xl border border-slate-100 bg-white p-2 md:p-4 shadow-[2px_4px_12px_#00000014]">
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
