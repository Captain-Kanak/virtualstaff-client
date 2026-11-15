"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";

const checklist = [
  "Skills and experience verification",
  "Communication and cultural fit assessment",
  "Ongoing performance management",
  "Dedicated support from our team",
] as const;

export default function Standard() {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line-soft bg-linear-to-br from-white to-brand-tint shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.5fr_1.1fr] items-center">
            {/* Photo column */}
            <div className="relative h-64 sm:h-72 lg:h-full lg:min-h-84 overflow-visible">
              {/* Layer A: blue background shape */}
              <div className="standard-edge z-0" aria-hidden={true} />
              {/* Layer B: photo */}
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

            {/* Text column */}
            <div className="px-6 py-8 lg:pl-12 lg:pr-6 lg:py-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                OUR STANDARD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-text-heading">
                Top 1% Global Talent
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-body">
                Our team consists of highly skilled, experienced professionals
                who are vetted, trained, and managed by RemoteStaff365 to
                ensure quality, reliability, and performance.
              </p>
            </div>

            {/* Checklist column */}
            <div className="px-6 pb-8 lg:px-8 lg:py-10">
              <ul className="space-y-3">
                {checklist.map((item) => (
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
