"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { roles } from "@/lib/pricing";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

const mainRoles = roles.slice(0, 4);

const formatMoney = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const parseRange = (range: string): [number, number] => {
  const nums = range.match(/\d[\d,]*/g);
  if (!nums) return [0, 0];
  return [Number(nums[0].replace(/,/g, "")), Number(nums[1].replace(/,/g, ""))] as [number, number];
};

export default function PricingCards() {
  return (
    <section className="relative bg-gradient-to-b from-white via-brand-soft/70 to-white py-20 md:py-24 overflow-hidden scroll-mt-24">
      <div className="absolute -top-24 -left-24 size-72 bg-brand-primary/40 blur-3xl rounded-full -z-10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 size-96 bg-brand-primary/40 blur-3xl rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 size-64 bg-brand-primary/30 blur-3xl rounded-full -z-10 pointer-events-none" />

      <Container>
        <div className="text-center mb-12 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-heading tracking-tight leading-tight inline-block relative">
            What it costs
            <span className="text-primary relative inline-block ml-1">
              by role
              <svg
                className="absolute -bottom-[3px] left-0 w-full h-3"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,3 Q50,1 100,3"
                  stroke="currentColor"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-primary ml-1">✦</span>
          </h2>
          <p className="text-text-body text-lg mt-4">
            Transparent monthly pricing by role, with no long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {mainRoles.map((role) => {
            const [salaryMin, salaryMax] = parseRange(role.salary);
            const seatFee = role.seatFee ?? 99;

            return (
              <div
                key={role.role}
                className="relative flex flex-col h-full rounded-3xl border border-line-soft bg-white shadow-lg overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="h-20 w-full bg-gradient-to-b from-brand-soft to-white" />
                <div className="relative -mt-6 flex justify-center">
                  <Image
                    src={role.image ?? "/images/user.jpg"}
                    width={112}
                    height={112}
                    alt={role.role}
                    className="size-28 rounded-full object-cover ring-4 ring-white shadow-md"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-text-heading text-center">
                  {role.role}
                </h3>
                <div className="mt-3 px-6 text-center">
                  <p className="text-xs uppercase tracking-wide text-text-body">
                    Total per month
                  </p>
                  <p className="mt-1 whitespace-nowrap text-lg lg:text-xl xl:text-2xl font-bold text-primary tracking-tight">
                    {role.total}
                  </p>
                </div>
                <div className="mt-5 mx-5 mb-5 rounded-2xl border border-line-soft bg-brand-soft p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-body">Staff salary</span>
                    <span className="text-sm font-semibold text-text-heading whitespace-nowrap">
                      {formatMoney(salaryMin)} - {formatMoney(salaryMax)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-body">Seat fee</span>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">
                      + ${seatFee}/month
                    </span>
                  </div>
                  <div className="border-t border-dashed border-line" />
                  <p className="text-xs text-text-body text-center">
                    Powered by a RemoteStaff365 Seat
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-white border border-line-soft shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-line-soft">
            <div className="flex items-center gap-5 p-6 md:p-8 border-b md:border-b-0 md:border-r">
              <Image
                src="/images/team/money.png"
                width={64}
                height={64}
                alt=""
                className="shrink-0 object-contain rounded-2xl"
                sizes="64px"
              />
              <div>
                <p className="text-base font-semibold text-text-heading">
                  Add more seats as your needs grow
                </p>
                <p className="mt-1 text-sm text-text-body">
                  Each $99 / month seat supports one ongoing team member.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 md:p-8">
              <Image
                src="/images/team/team.png"
                width={64}
                height={64}
                alt=""
                className="shrink-0 object-contain rounded-2xl"
                sizes="64px"
              />
              <div>
                <p className="text-base font-semibold text-text-heading">
                  Over time, seats become part of how your business grows
                </p>
                <p className="mt-1 text-sm text-text-body">
                  A simple way to keep building your team month after month.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            size="xl"
            className="rounded-xl bg-gradient-to-b from-brand-primary to-brand-primary-light text-white font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-brand-primary cursor-pointer"
            nativeButton={false}
            render={
              <Link href="/pricing">
                See all staff costs
                <ArrowRight className="size-4 ml-2 transition-transform hover:translate-x-0.5" />
              </Link>
            }
          />
        </div>
      </Container>
    </section>
  );
}
