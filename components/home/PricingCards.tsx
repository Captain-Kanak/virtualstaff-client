"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

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

export default function PricingCards() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
            What it costs by role
          </h2>
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
                    width="400"
                    height="300"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.role}</h3>
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
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="text-[#2563eb] font-medium hover:underline">
              See all staff costs
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
