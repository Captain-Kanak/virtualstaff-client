"use client";

import * as React from "react";
import { BadgeCheck, DollarSign, Equal, Plus, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

const formulaCards = [
  {
    icon: <DollarSign strokeWidth={2} className="size-7 text-white" />,
    iconGradient: "bg-gradient-to-b from-[#4289e0] to-[#2563eb]",
    outerRing: "bg-blue-100",
    value: "$99",
    label: "Seat fee",
    text: "One flat fee for each assistant you add.",
    chip: "Billed monthly, no contracts",
  },
  {
    icon: <Wallet strokeWidth={2} className="size-7 text-white" />,
    iconGradient: "bg-gradient-to-b from-emerald-400 to-emerald-600",
    outerRing: "bg-emerald-100",
    value: "Salary",
    label: "Agreed by you",
    text: "You and your assistant agree the pay directly.",
    chip: "Typical roles: $500 - $1,200 / mo",
  },
  {
    icon: <BadgeCheck strokeWidth={2} className="size-7 text-white" />,
    iconGradient: "bg-gradient-to-b from-green-400 to-green-600",
    outerRing: "bg-green-100",
    cardTint: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100",
    blobTint: "bg-green-500/10",
    value: "0%",
    label: "Markup",
    text: "Your assistant's full salary goes to them.",
    chip: "No hidden fees on salary",
  },
];

const Operator = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center">
    <span
      className="grid size-12 md:size-14 shrink-0 place-items-center rounded-full bg-gradient-to-b from-[#4289e0] to-[#2563eb] ring-4 ring-white shadow-[0_8px_18px_rgba(37,99,235,0.35)]"
    >
      {children}
    </span>
  </div>
);

export default function PriceFormula() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <Container>
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              SIMPLE PRICING
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              One seat fee. Plus the assistant{"'"}s salary.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flat monthly seat fee plus the assistant{"'"}s salary. You
              choose the person.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 lg:gap-5 mt-12">
          {formulaCards.map((card, i) => (
            <React.Fragment key={card.label}>
              <Reveal>
                <Card
                  className={`
                    relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 md:p-7 h-full shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${card.cardTint ?? "bg-white"}
                  `}
                >
                  <div className={`absolute -right-12 -top-12 size-32 rounded-full ${card.blobTint ?? "bg-primary/5"}`} />

                  <div className="flex-1 z-10">
                    <div className="flex gap-5 items-start">
                      <div className="grid size-20 shrink-0 place-items-center rounded-full ${card.outerRing}">
                        <div className={`grid size-14 place-items-center rounded-full ${card.iconGradient} shadow-[0_8px_20px_rgba(37,99,235,0.30)]`}>
                          {card.icon}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl md:text-4xl font-bold text-foreground leading-none">
                            {card.value}
                          </span>
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                          {card.label}
                        </span>
                        <p className="text-base text-slate-600 leading-relaxed mt-1">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 min-h-[52px] flex items-center rounded-xl bg-[#F5F8FF] px-4 py-3 text-sm font-medium text-slate-700">
                    {card.chip}
                  </div>
                </Card>
              </Reveal>
              {i < formulaCards.length - 1 && (
                <Operator>
                  {i === 0 ? <Plus className="size-6 text-white" strokeWidth={3} aria-hidden /> : <Equal className="size-6 text-white" strokeWidth={3} aria-hidden />}
                </Operator>
              )}
            </React.Fragment>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-2xl bg-slate-900 text-white px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Example
              </span>
              <p className="text-sm text-slate-300 mt-0.5">
                1 seat + a $800 salary
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
              <span className="px-3 py-1 rounded bg-slate-800">$99 seat fee</span>
              <span className="text-slate-500">+</span>
              <span className="px-3 py-1 rounded bg-slate-800">$800 salary</span>
              <span className="text-slate-500">=</span>
              <span className="bg-gradient-to-b from-[#4289e0] to-[#2563eb] px-3 py-1 rounded font-bold">
                $899 / month
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
