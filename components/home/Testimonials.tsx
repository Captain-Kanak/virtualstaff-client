"use client";

// PLACEHOLDER testimonials - replace with real client testimonials before launch
import * as React from "react";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Operations Manager",
    company: "HealthBridge Clinic",
    initials: "SC",
    quote: "Finding a reliable VA used to take weeks. Now we hire in 48 hours and the quality is outstanding.",
  },
  {
    name: "Marcus Reed",
    title: "Founder",
    company: "SwiftLogistics",
    initials: "MR",
    quote: "Our logistics VA handles dispatch and tracking flawlessly. We've added two more seats this year.",
  },
  {
    name: "Elena Torres",
    title: "Office Manager",
    company: "Prime Realty Group",
    initials: "ET",
    quote: "The back-office support has been a game-changer for our closings. Highly recommended.",
  },
  {
    name: "David Kim",
    title: "Practice Administrator",
    company: "Cedarwood Medical",
    initials: "DK",
    quote: "HIPAA-trained virtual assistants who actually understand healthcare billing. Worth every penny.",
  },
  {
    name: "Jessica Moore",
    title: "Owner",
    company: "Main Street Accounting",
    initials: "JM",
    quote: "Bookkeeping support that's responsive and affordable. No long-term contracts needed.",
  },
  {
    name: "Robert Liang",
    title: "COO",
    company: "Nexus Ecommerce",
    initials: "RL",
    quote: "Customer support coverage across time zones has let us scale without burning out our local team.",
  },
];

export default function Testimonials() {
  return (
    <Reveal>
      <section className="bg-[#F5F8FF] py-12 md:py-16 overflow-hidden">
        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-2">
              What our clients say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Hear from teams that scaled with RemoteStaff365.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <Card
                  className="flex flex-col h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[2px_4px_12px_#00000014] hover:-translate-y-1 hover:shadow-lg transition duration-300"
                >
                  <Quote className="h-7 w-7 text-primary/30 mb-4" />
                  <p className="text-base leading-relaxed text-slate-700 mt-4 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-slate-100 pt-5 mt-6 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-white">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-sm text-slate-600">{t.title}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
