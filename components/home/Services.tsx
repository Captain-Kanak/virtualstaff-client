"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Code,
  Headset,
  Laptop,
  Megaphone,
  Package,
  PlayCircle,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services, SERVICES_SECTION_DEFAULTS } from "@/lib/services";

const LUCIDE_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  laptop: Laptop,
  headset: Headset,
  "trending-up": TrendingUp,
  megaphone: Megaphone,
  "play-circle": PlayCircle,
  calculator: Calculator,
  package: Package,
  code: Code,
};

export interface ServicesSectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
}

export default function Services({
  eyebrow = SERVICES_SECTION_DEFAULTS.eyebrow,
  title = SERVICES_SECTION_DEFAULTS.title,
  subtitle = SERVICES_SECTION_DEFAULTS.subtitle,
}: ServicesSectionProps) {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {services.map((service) => {
            const Icon = LUCIDE_ICONS[service.icon];
            return (
              <Reveal key={service.title} className="flex h-full flex-col">
                <Link
                  href="/pricing"
                  className="group flex flex-1 flex-col rounded-2xl border border-line-soft bg-gradient-to-br from-white to-brand-tint p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="grid size-14 place-items-center rounded-full bg-brand-soft">
                    <Icon className="size-7 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg md:text-xl font-semibold leading-snug text-text-heading">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-body">
                    {service.description}
                  </p>
                  <div className="mt-auto flex justify-end pt-4">
                    <ArrowRight className="size-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
