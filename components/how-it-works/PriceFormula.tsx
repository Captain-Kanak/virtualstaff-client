"use client";

import * as React from "react";
import { ArrowRight, Check, DollarSign, Globe } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const formulaCards = [
  {
    amount: "$99 / month",
    label: "Seat fee",
    text: "Flat monthly fee per seat, no surprises.",
    icon: <DollarSign className="size-5 text-[#2563eb]" />,
  },
  {
    amount: "Salary",
    label: "Assistant's salary",
    text: "Agreed directly by you and the assistant.",
    icon: <Globe className="size-5 text-[#2563eb]" />,
  },
  {
    amount: "Zero markup",
    label: "No markups",
    text: "You pay exactly what the assistant earns.",
    icon: <Check className="size-5 text-[#15803d]" />,
    green: true,
  },
];

const symbol = (sign: string) => {
  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#4289e0] to-[#2563eb] flex items-center justify-center text-white text-xs font-bold">
      {sign}
    </div>
  );
};

export default function PriceFormula() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              SIMPLE PRICING
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
              One seat fee. Plus the assistant&apos;s salary.
            </h2>
          </Reveal>
        </div>

        <div className="flex lg:flex-row flex-col gap-4 items-start">
          {formulaCards.map((card, i) => (
            <React.Fragment key={card.amount}>
              <Reveal>
                <Card
                  className={`
                    rounded-2xl border border-slate-100 p-6 shadow-[2px_4px_12px_#00000014] flex-1 ${card.green ? "bg-green-50" : "bg-white"}
                  `}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-primary mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {card.amount}
                  </h3>
                  <p className="text-sm font-medium text-foreground mb-2">
                    {card.label}
                  </p>
                  <p className="text-sm text-slate-600">{card.text}</p>
                </Card>
              </Reveal>
              {i < formulaCards.length - 1 && (
                <Reveal>{symbol(i === 0 ? "+" : "=")}</Reveal>
              )}
            </React.Fragment>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 md:mt-16 text-center">
            <Link
              href="/pricing"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              See example roles and rates <ArrowRight className="size-3.5 ml-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
