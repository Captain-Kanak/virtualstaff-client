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

type Service = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    Icon: Laptop,
    title: "Virtual Assistants",
    description: "Administrative, operational, and day-to-day business support.",
  },
  {
    Icon: Headset,
    title: "Customer Support",
    description: "Deliver exceptional customer service across email, chat, and phone.",
  },
  {
    Icon: TrendingUp,
    title: "Sales & Lead Generation",
    description: "Grow your pipeline with prospecting, outreach, and appointment setting.",
  },
  {
    Icon: Megaphone,
    title: "Social Media Management",
    description: "Build your brand and grow your audience across social platforms.",
  },
  {
    Icon: PlayCircle,
    title: "Creative & Video Editing",
    description: "Professional graphics, video editing, and content creation.",
  },
  {
    Icon: Calculator,
    title: "Bookkeeping & Finance Support",
    description: "Keep your finances organized with bookkeeping, reconciliations, and reporting support.",
  },
  {
    Icon: Package,
    title: "E-commerce Support",
    description: "Manage product listings, orders, customer inquiries, and more for your online store.",
  },
  {
    Icon: Code,
    title: "Website & Technical Support",
    description: "Keep your systems running smoothly with website, IT, and technical support.",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="The Right Talent for Every Part of Your Business."
          subtitle="Reliable, managed remote team support across a wide range of business functions."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {services.map((service) => {
            const Icon = service.Icon;
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
