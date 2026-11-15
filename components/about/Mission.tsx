"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const MISSION_IMAGE = "/images/me.webp";

export default function Mission() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="OUR MISSION"
            title="To Help Businesses Grow With Reliable Remote Support"
            subtitle="We make it easy for businesses to build and scale a high-performing remote team through a simple, cost-effective, and fully managed solution."
          />
        </Reveal>

        <div className="mt-10 md:mt-14">
          <div
            className="overflow-hidden rounded-3xl border border-line-soft bg-gradient-to-br from-brand-soft via-white to-brand-tint shadow-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center">
              {/* Photo column */}
              <div className="relative h-64 sm:h-72 lg:h-full lg:min-h-[22rem] overflow-visible">
                <div className="standard-edge z-0" aria-hidden={true} />
                <div className="standard-photo z-10 bottom-0 left-0 h-full w-full overflow-visible">
                  <Image
                    fill
                    src={MISSION_IMAGE}
                    alt="Smiling team member at his laptop"
                    sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Text column */}
              <Reveal>
                <div className="px-6 py-8 lg:px-10 lg:py-10">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-text-heading">
                    Who We Are
                  </h3>
                  <p className="mt-5 text-base md:text-lg leading-relaxed text-text-body">
                    RemoteStaff365 is a remote team solutions provider that connects businesses with skilled, pre-vetted professionals across a wide range of business functions.
                  </p>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-text-body">
                    We handle the management, support, and performance oversight, giving you a seamless, reliable, and long-term team you can count on.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
