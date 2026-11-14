"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { roles } from "@/lib/pricing";
import RolePricingCard from "@/components/pricing/RolePricingCard";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pb-8">
            {roles.map((role, i) => (
              <Reveal key={role.role} delay={i * 0.1}>
                <RolePricingCard role={role} />
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
