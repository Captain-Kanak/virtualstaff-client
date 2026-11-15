"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";

const ITEMS = [
  "Executive Assistant",
  "Project Management",
  "Data Entry & Research",
  "HR & Recruitment",
  "Real Estate Support",
  "And More",
] as const;

export default function SpecializedRoleSection() {
  return (
    <section id="specialized-roles" className="bg-white py-10 md:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line-soft bg-linear-to-br from-white to-brand-tint shadow-card">
          <div className="grid gap-8 lg:gap-0 items-center grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            {/* Left: image panel */}
            <div className="relative h-64 sm:h-80 lg:min-h-[380px] overflow-visible">
              <div className="standard-edge z-0" aria-hidden={true} />
              <div className="standard-photo z-10 bottom-0 left-0 h-full w-full overflow-visible">
                <Image
                  fill
                  src="/images/va-banner-image.png"
                  alt="Smiling remote team member"
                  sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover object-[40%_top]"
                  priority
                />
              </div>
            </div>

            {/* Right: vertical stack */}
            <div className="px-6 sm:p-8 px-10 xl:px-14 py-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-text-heading">
                Need a Specialized Role?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-body">
                We also source global talent for a wide range of specialized
                and industry-specific roles. Tell us what you need and we&apos;ll
                find the right talent for your business.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 lg:gap-x-10 xl:whitespace-nowrap">
                {ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-primary">
                      <Check className="size-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base font-medium text-text-heading">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
