"use client";

import { CalendarCheck, Check, Star, User, Users } from "lucide-react";
import { bookingUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

type PricingCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  priceLabel: string;
  price: string;
  priceClass: string;
  accentClass: string;
  tintClass: string;
  checklist: string[];
};

const cards: PricingCard[] = [
  {
    icon: User,
    title: "Part-Time Support",
    priceLabel: "Starting at",
    price: "$7/Hour",
    priceClass:
      "text-[color-mix(in_srgb,var(--brand-success)_70%,var(--brand-primary))] text-4xl lg:text-[44px] font-extrabold leading-none",
    accentClass:
      "text-[color-mix(in_srgb,var(--brand-success)_70%,var(--brand-primary))]",
    tintClass: "bg-[color-mix(in_srgb,var(--brand-success)_12%,white)]",
    checklist: [
      "Up to 20 hours per week",
      "Dedicated, managed support",
      "Cost-effective and flexible",
    ],
  },
  {
    icon: Users,
    title: "Full-Time Support",
    priceLabel: "Starting at",
    price: "$7/Hour",
    priceClass:
      "text-brand-primary text-4xl lg:text-[44px] font-extrabold leading-none",
    accentClass: "text-brand-primary",
    tintClass: "bg-[var(--brand-soft)]",
    checklist: [
      "Up to 40 hours per week",
      "Dedicated, managed professional",
      "Long-term support and stability",
    ],
  },
  {
    icon: Star,
    title: "Specialized Support",
    priceLabel: "",
    price: "Custom Quote",
    priceClass: "text-brand-secondary text-3xl lg:text-4xl font-extrabold leading-none",
    accentClass: "text-brand-secondary",
    tintClass: "bg-[color-mix(in_srgb,var(--brand-primary)_12%,white)]",
    checklist: [
      "For specialized or senior-level roles",
      "Tailored to your specific requirements",
      "Scalable team options",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="bg-[var(--brand-tint)] py-12 md:py-16">
      <Container>
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-brand-primary mb-3">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-text-heading">
            Global Talent. Affordable Rates. Flexible Options.
          </h2>
          <p className="text-base md:text-lg text-text-body mt-3 max-w-2xl mx-auto">
            Choose a managed team solution that fits your business needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 items-stretch">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col h-full rounded-3xl p-6 lg:p-8 border border-white/60 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_color-mix(in_srgb,var(--brand-secondary)_10%,transparent)]"
              aria-labelledby={`pricing-title-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start gap-5">
                <card.icon
                  className={`size-12 shrink-0 stroke-[1.75] ${card.accentClass}`}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <h3
                    id={`pricing-title-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-xl font-bold text-text-heading"
                  >
                    {card.title}
                  </h3>
                  {card.priceLabel && (
                    <p className="text-base text-text-body">
                      {card.priceLabel}
                    </p>
                  )}
                  <p className={card.priceClass}>{card.price}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {card.checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check
                      className="size-20 shrink-0 text-brand-secondary stroke-[2.5]"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] md:text-base leading-6 text-text-heading">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full h-14 rounded-xl bg-brand-secondary text-white font-semibold text-base md:text-lg flex items-center justify-center gap-3 cursor-pointer hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-secondary)_88%,white)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  nativeButton={false}
                  render={
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarCheck
                        className="size-22 text-white"
                        aria-hidden="true"
                      />
                      Book a Free Consultation
                    </a>
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
