"use client";

import * as React from "react";
import RolePricingCard from "@/components/pricing/RolePricingCard";
import RoleTabs from "@/components/pricing/RoleTabs";
import SampleProfilesCarousel from "@/components/pricing/SampleProfilesCarousel";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTASection from "@/components/CTASection";
import { bookingUrl } from "@/lib/site";
import { roles } from "@/lib/pricing";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";

export default function PricingPageContent() {
  const [filter, setFilter] = React.useState<string>("All roles");
  const visibleRoles =
    filter === "All roles"
      ? roles
      : roles.filter((role) => role.role === filter);

  const included = [
    "Pre-vetted candidate profiles",
    "Dedicated account management",
    "Time tracking and reporting",
    "Payroll and compliance handled",
    "Replace anytime at no cost",
    "SLA-backed response times",
  ];

  return (
    <div className="flex flex-col">
      <Reveal>
        <section className="py-16 md:py-20">
          <Container>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                Pricing by role
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Choose a role to see transparent monthly pricing. Seat fee is
                $99 per month plus the assistant&rsquo;s salary.
              </p>
            </div>
            <RoleTabs
              roles={roles.map((r) => r.role)}
              selected={filter}
              onChange={setFilter}
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {visibleRoles.map((role) => (
                  <motion.div
                    key={role.role}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col"
                  >
                    <RolePricingCard role={role} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-16 md:py-20 bg-[#F5F8FF]">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                What{"'"}s included
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Everything you need to run your offshore team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {included.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-4 shadow-[2px_4px_12px_#00000014] text-left"
                >
                  <p className="text-base font-medium text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <SampleProfilesCarousel
        title="Sample profiles"
        subtitle="Illustrative candidate profiles. Salary is paid to your assistant; the seat fee covers hiring, payroll and compliance support."
      />

      <ComparisonTable />

      <PricingFAQ />

      <CTASection
        primaryHref={bookingUrl}
        secondaryLabel="See how it works"
        secondaryHref="/how-it-works"
      />
    </div>
  );
}
