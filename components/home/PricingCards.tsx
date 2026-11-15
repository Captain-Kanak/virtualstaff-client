"use client";

import { CalendarCheck, Check, Star, User, Users } from "lucide-react";
import { bookingUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

type PricingCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  priceLabel: string;
  priceDollars: string;
  priceSuffix: string;
  isCustom?: boolean;
  accentClass: string;
  accentBgClass: string;
  tintClass: string;
  gradientClass: string;
  shadowClass: string;
  badge?: boolean;
  checklist: string[];
};

const cards: PricingCard[] = [
  {
    icon: User,
    title: "Part-Time Support",
    priceLabel: "Starting at",
    priceDollars: "$7",
    priceSuffix: "/hour",
    accentClass: "text-brand-success",
    accentBgClass: "bg-brand-success",
    tintClass: "bg-[color-mix(in_srgb,var(--brand-success)_12%,white)]",
    gradientClass: "bg-gradient-to-b from-brand-success to-brand-primary-light",
    shadowClass: "shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-secondary)_6%,transparent)]",
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
    priceDollars: "$7",
    priceSuffix: "/hour",
    accentClass: "text-brand-primary",
    accentBgClass: "bg-brand-primary",
    tintClass: "bg-[var(--brand-soft)]",
    gradientClass: "bg-gradient-to-b from-brand-primary to-brand-primary-light",
    shadowClass: "shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-secondary)_8%,transparent)]",
    badge: true,
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
    priceDollars: "",
    priceSuffix: "",
    isCustom: true,
    accentClass: "text-brand-secondary",
    accentBgClass: "bg-brand-secondary",
    tintClass: "bg-[color-mix(in_srgb,var(--brand-primary)_12%,white)]",
    gradientClass: "bg-gradient-to-b from-brand-secondary to-brand-primary",
    shadowClass: "shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-secondary)_6%,transparent)]",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-text-heading">
            Global Talent. Affordable Rates.{" "}
            <span className="text-brand-primary">Flexible Options.</span>
          </h2>
          <p className="text-base md:text-lg text-text-body mt-3 max-w-2xl mx-auto text-balance">
            Choose a managed team solution that fits your business needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 items-stretch">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isPopular = card.badge;
            return (
              <article
                key={card.title}
                aria-labelledby={`pricing-title-${i}`}
                className={[
                  "flex flex-col h-full rounded-3xl p-6 lg:p-8 border border-white/70",
                  card.tintClass,
                  "shadow-lg transition-all duration-300 ease-out",
                  isPopular
                    ? "hover:-translate-y-1 hover:shadow-[0_20px_40px_color-mix(in_srgb,var(--brand-primary)_15%,transparent)] ring-2 ring-[var(--brand-primary)] ring-inset"
                    : "hover:-translate-y-1 hover:shadow-lg",
                  card.shadowClass,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {isPopular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold tracking-wide text-primary border border-brand-primary ring-1 ring-white">
                    Most popular
                  </div>
                )}
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl overflow-hidden">
                      <div className={card.gradientClass}>
                        <Icon className="size-[26px] text-white shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3
                        id={`pricing-title-${i}`}
                        className="text-xl font-bold text-text-heading"
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 lg:mt-6 rounded-2xl bg-white/70 border border-white p-4 lg:p-5 min-h-[132px] flex flex-col justify-center">
                    <div className="flex flex-col items-baseline">
                      <span
                        className={`text-sm text-text-body ${card.isCustom ? "opacity-0" : ""}`}
                      >
                        {card.priceLabel || "Starting at"}
                      </span>
                      <div className="flex items-baseline gap-1">
                        {card.isCustom ? (
                          <span
                            className={`${card.accentClass} text-3xl font-extrabold leading-none whitespace-nowrap`}
                          >
                            Custom Quote
                          </span>
                        ) : (
                          <>
                            <span className={`${card.accentClass} text-5xl font-extrabold leading-none`}>
                              {card.priceDollars}
                            </span>
                            <span className="text-lg font-semibold text-text-body">
                              {card.priceSuffix}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3.5 min-h-[168px]">
                    {card.checklist.map((item) => (
                      <div key={item} className="flex items-start gap-3 min-h-[28px]">
                        <div
                          className={`grid size-6 place-items-center rounded-full shrink-0 ${card.accentBgClass}`}
                        >
                          <Check
                            className="size-3.5 text-white"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-[15px] md:text-base leading-6 text-text-heading">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <Button
                      variant="brand"
                      className="w-full h-12 md:h-13 rounded-xl text-base md:text-lg font-semibold whitespace-nowrap px-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                      nativeButton={false}
                      render={
                        <a
                          href={bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CalendarCheck
                            className="size-[18px] text-white"
                            aria-hidden="true"
                          />
                          Book a Free Consultation
                        </a>
                      }
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center gap-4 text-sm text-text-body flex items-center justify-center">
          <span className="flex items-center gap-1.5">
            <Check className="size-4 text-brand-primary" aria-hidden="true" />
            No long-term contracts
          </span>
          <span className="mx-1">·</span>
          <span className="flex items-center gap-1.5">
            <Check className="size-4 text-brand-primary" aria-hidden="true" />
            30-day money-back guarantee
          </span>
          <span className="mx-1">·</span>
          <span className="flex items-center gap-1.5">
            <Check className="size-4 text-brand-primary" aria-hidden="true" />
            Free consultation
          </span>
        </div>
      </Container>
    </section>
  );
}
