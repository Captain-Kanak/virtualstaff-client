"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { bookingUrl } from "@/lib/site";

// replace with distinct portraits later
const plans = [
  {
    tag: "START",
    title: "Your First Assistant",
    seats: 1,
    label: "Seat",
    text: "Add one assistant when you're ready.",
    avatars: [{ photo: "/images/user.jpg" }],
    size: "lg",
  },
  {
    tag: "GROW",
    title: "Build Your Core Team",
    seats: 3,
    label: "Seats",
    text: "Add more seats as your business needs more capacity.",
    avatars: [
      { photo: "/images/user.jpg" },
      { photo: "/images/user.jpg" },
      { photo: "/images/user.jpg" },
    ],
    size: "md",
  },
  {
    tag: "SCALE",
    title: "Grow Your Team Over Time",
    seats: 5,
    label: "Seats",
    text: "Keep growing your team over time.",
    avatars: [
      { photo: "/images/user.jpg" },
      { photo: "/images/user.jpg" },
      { photo: "/images/user.jpg" },
      { photo: "/images/user.jpg" },
      { photo: "/images/user.jpg" },
    ],
    size: "sm",
  },
] as const;

const avatarSizes = {
  lg: "size-32 md:size-36",
  md: "size-24 md:size-28",
  sm: "size-[4.25rem] md:size-20",
};

function Avatar({ photo, size, index }: { photo?: string; size: keyof typeof avatarSizes; index: number }) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-line ring-4 ring-white shadow-md ${avatarSizes[size]} ${index > 0 ? "-ml-3" : ""}`}
    >
      <Image
        src={photo ?? "/images/user.jpg"}
        alt=""
        fill
        className="object-cover"
        sizes="144px"
      />
    </span>
  );
}

export default function GrowthPath() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title={
              <>
                Start with one great assistant
                <br />
                <span className="text-primary">Build the team your business needs</span>
              </>
            }
            subtitle="Add one seat when you're ready, then keep growing your global team over time."
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-4">
          {plans.map((plan, i) => (
            <React.Fragment key={plan.tag}>
              <Reveal key={`${plan.tag}-card`} delay={i * 0.1}>
                <div className="flex h-full flex-col">
                  <div className="relative flex flex-1 flex-col rounded-3xl bg-white p-6 text-center border border-line-soft shadow-[0_10px_30px_color-mix(in_srgb,var(--brand-secondary)_7%,transparent)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto inline-flex w-fit items-center rounded-full bg-brand-soft px-4 py-1 text-xs font-semibold tracking-wide text-primary mb-2">
                      {plan.tag}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">
                      {plan.title}
                    </h3>
                    <div className="mt-6 flex min-h-[9.5rem] items-center justify-center">
                      {plan.avatars.map((avatar, j) => (
                        <Avatar
                          key={j}
                          photo={avatar.photo}
                          size={plan.size}
                          index={j}
                        />
                      ))}
                    </div>
                    <div className="mt-auto pt-6 min-h-[7.5rem] rounded-2xl bg-brand-tint px-5 py-4 flex items-center gap-4 text-left">
                      <span className="text-5xl font-extrabold text-primary leading-none">
                        {plan.seats}
                      </span>
                      <div>
                        <div className="flex items-center gap-1 text-base font-semibold text-foreground">
                          RemoteStaff365
                          <span className="text-primary">{plan.label === "Seat" ? " Seat" : " Seats"}</span>
                        </div>
                        <p className="mt-1 text-sm text-text-body">{plan.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {i < plans.length - 1 && (
                <div className="lg:self-center lg:justify-self-center hidden lg:block">
                  <ArrowRight className="size-8 text-primary" />
                </div>
              )}
              {i < plans.length - 1 && (
                <div className="lg:hidden">
                  <ArrowDown className="size-8 text-primary mx-auto" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-white border border-line-soft shadow-[0_8px_24px_color-mix(in_srgb,var(--brand-secondary)_6%,transparent)] grid md:grid-cols-2 md:divide-x divide-line-soft">
          <div className="flex items-center gap-4 md:gap-5 p-6 md:p-7">
              <Image
                src="/images/team/money.png"
                alt=""
                width={56}
                height={56}
                className="shrink-0 object-contain h-14 w-14 md:h-16 md:w-16"
              />
            <div>
              <p className="text-base font-semibold text-foreground">
                Add more seats as your needs grow
              </p>
              <p className="mt-1 text-sm text-text-body">
                Each $99 / month seat supports one ongoing team member.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-5 p-6 md:p-7">
              <Image
                src="/images/team/team.png"
                alt=""
                width={56}
                height={56}
                className="shrink-0 object-contain h-14 w-14 md:h-16 md:w-16"
              />
            <div>
              <p className="text-base font-semibold text-foreground">
                Over time, seats become part of how your business grows
              </p>
              <p className="mt-1 text-sm text-text-body">
                A simple way to keep building your team month after month.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            variant="brand"
            size="xl"
            nativeButton={false}
            render={
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Add your first seat
                <ArrowRight className="size-4 ml-2" />
              </a>
            }
          />
        </div>
      </Container>
    </section>
  );
}
