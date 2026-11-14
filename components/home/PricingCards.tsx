"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { roles } from "@/lib/pricing";
import RolePricingCard from "@/components/pricing/RolePricingCard";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function PricingCards() {
  return (
    <Reveal>
      <section className="bg-white py-14 md:py-20 overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="PRICING"
            title="What it costs by role"
            subtitle="Transparent monthly pricing by role, with no long-term contracts."
          />
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
