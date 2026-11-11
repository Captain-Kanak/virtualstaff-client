"use client";

import * as React from "react";
import {
  Headphones,
  ClipboardList,
  Calculator,
  PhoneCall,
  Briefcase,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const pricingCards = [
  {
    role: "Customer Support",
    icon: <Headphones className="h-6 w-6 text-white" />,
    total: "$1,200 - $1,600",
    salary: "$1,000 - $1,400",
    seatFee: "$99",
  },
  {
    role: "Admin & Operations",
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    seatFee: "$99",
  },
  {
    role: "Bookkeeping",
    icon: <Calculator className="h-6 w-6 text-white" />,
    total: "$1,600 - $2,100",
    salary: "$1,400 - $1,900",
    seatFee: "$99",
  },
  {
    role: "Inbound Sales & CRM",
    icon: <PhoneCall className="h-6 w-6 text-white" />,
    total: "$1,500 - $2,000",
    salary: "$1,300 - $1,800",
    seatFee: "$99",
  },
  {
    role: "Back-Office",
    icon: <Briefcase className="h-6 w-6 text-white" />,
    total: "$1,300 - $1,700",
    salary: "$1,100 - $1,500",
    seatFee: "$99",
  },
  {
    role: "Social Media & Marketing",
    icon: <Megaphone className="h-6 w-6 text-white" />,
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    seatFee: "$99",
  },
];

export default function PricingCards() {
  return (
    <Reveal>
      <section className="bg-white py-12 md:py-16 overflow-hidden">
        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              PRICING
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-2">
              What it costs by role
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Transparent monthly pricing by role, with no long-term contracts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map((card, i) => (
              <Reveal key={card.role} delay={i * 0.1}>
                <Card
                  className="flex flex-col h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[2px_4px_12px_#00000014] hover:-translate-y-1 hover:shadow-lg transition duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#4289e0] to-[#2563eb] flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mt-4">
                    {card.role}
                  </h3>
                  <div className="rounded-xl bg-[#F5F8FF] p-4 mt-4">
                    <p className="text-sm text-slate-600">
                      Total per month
                    </p>
                    <p className="text-2xl font-bold text-primary mt-1">
                      {card.total}
                    </p>
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-slate-600">Staff salary</span>
                    <span className="text-foreground font-medium">
                      {card.salary}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-slate-600">Seat fee</span>
                    <span className="text-foreground font-medium">
                      {card.seatFee}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="xl"
                    className="w-full mt-auto pt-5 border-primary text-primary"
                    nativeButton={false}
                    render={
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hire this role
                      </a>
                    }
                  />
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="text-primary font-medium flex items-center gap-1.5 hover:underline"
            >
              See all staff costs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
