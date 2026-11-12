"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Headphones,
  ClipboardList,
  Calculator,
  PhoneCall,
  Briefcase,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const pricingCards = [
  {
    role: "Customer Support",
    icon: <Headphones className="h-6 w-6 text-white" />,
    image: "/images/user.jpg",
    total: "$1,200 - $1,600",
    salary: "$1,000 - $1,400",
    seatFee: "$99",
  },
  {
    role: "Admin & Operations",
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    image: "/images/user.jpg",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    seatFee: "$99",
  },
  {
    role: "Bookkeeping",
    icon: <Calculator className="h-6 w-6 text-white" />,
    image: "/images/user.jpg",
    total: "$1,600 - $2,100",
    salary: "$1,400 - $1,900",
    seatFee: "$99",
  },
  {
    role: "Inbound Sales & CRM",
    icon: <PhoneCall className="h-6 w-6 text-white" />,
    image: "/images/user.jpg",
    total: "$1,500 - $2,000",
    salary: "$1,300 - $1,800",
    seatFee: "$99",
  },
  {
    role: "Back-Office",
    icon: <Briefcase className="h-6 w-6 text-white" />,
    image: "/images/user.jpg",
    total: "$1,300 - $1,700",
    salary: "$1,100 - $1,500",
    seatFee: "$99",
  },
  {
    role: "Social Media & Marketing",
    icon: <Megaphone className="h-6 w-6 text-white" />,
    image: "/images/user.jpg",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    seatFee: "$99",
  },
];

export default function PricingCards() {
  return (
    <Reveal>
      <section className="bg-white py-16 md:py-20 overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pricingCards.map((card, i) => (
              <Reveal key={card.role} delay={i * 0.1}>
                <Card
                  className={`
                    flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-5
                    shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition duration-300
                  `}
                >
                  <div className="relative h-36 md:h-40 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      fill
                      src={card.image ?? "/images/user.jpg"}
                      alt={card.role}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center ring-2 ring-white shadow-md">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.role}
                  </h3>
                  <div className="rounded-xl bg-linear-to-b from-blue-50 to-white border border-blue-100 p-4 mb-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">
                      Total per month
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {card.total}
                    </p>
                  </div>
                  <div className="divide-y divide-slate-100 py-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Staff salary</span>
                      <span className="font-medium text-right">{card.salary}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Seat fee</span>
                      <span className="font-medium text-right">{card.seatFee}</span>
                    </div>
                  </div>
                  <div className="border-t border-dashed border-slate-200 my-4" />
                  <Button
                    variant="outline"
                    size="xl"
                    className="w-full h-11 rounded-xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
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
          <div className="mt-10 flex justify-center">
            <Button
              variant="brand"
              size="xl"
              nativeButton={false}
              render={
                <Link href="/pricing">
                  See all staff costs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              }
            />
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
