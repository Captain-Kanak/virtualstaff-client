"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    badge: "/images/process/01.png",
    image: "/images/process/step-1.webp",
    imageAlt: "Step 1: Add a seat to your team",
    title: "Add a Seat",
    text: "One seat gives you a place to add one part-time or full-time offshore assistant to your business.",
    objectFit: "object-top",
  },
  {
    badge: "/images/process/02.png",
    image: "/images/process/step-2.webp",
    imageAlt: "Step 2: Choose who fills your seat",
    title: "Choose Who Fills Your Seat",
    text: "We supply vetted candidates. You choose the person and tell us the salary you want them to receive. We handle contracts and payroll.",
    objectFit: "object-top",
  },
  {
    badge: "/images/process/03.png",
    image: "/images/process/step-3.webp",
    imageAlt: "Step 3: They plug into your business",
    title: "They Plug Into Your Business",
    text: "Your assistant works in your systems, follows your processes and reports to you, as part of your team.",
    objectFit: "object-top",
  },
  {
    badge: "/images/process/04.png",
    image: "/images/process/step-4.webp",
    imageAlt: "Step 4: RemoteStaff365 stays behind the relationship",
    title: "RemoteStaff365 Stays Behind the Relationship",
    text: "Your seat stays active around that assistant, with our team behind the ongoing relationship as you grow.",
    objectFit: "object-top",
  },
] as const;

export default function HowItWorks() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-wash via-brand-soft to-white py-14 md:py-20">
        <Container>
          <SectionHeading
            title={
              <>
                A simple, structured way to
                <br />
                <span className="text-primary">add global talent to your team</span>
              </>
            }
            subtitle="From first match to long-term team member, here's how a RemoteStaff365 seat works."
          />
          <div className="mt-14 grid items-stretch gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="flex h-full flex-col">
                  <div className="relative flex flex-1 flex-col rounded-3xl bg-white p-5 pt-10 shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-primary)_10%,transparent)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <Image
                      src={step.badge}
                      alt={`Step ${i + 1}`}
                      width={216}
                      height={212}
                      className="absolute left-1/2 top-0 z-10 h-14 w-auto -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_6px_12px_color-mix(in_srgb,var(--brand-primary)_35%,transparent)]"
                    />
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-line-soft">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                        className={`object-cover ${step.objectFit}`}
                      />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-snug text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-text-body">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
