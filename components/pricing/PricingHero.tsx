"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roles } from "@/lib/pricing";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const SEAT_FEE = 99;

const parseRange = (s: string): [number, number] => {
  const nums = s.match(/\d+/g);
  if (!nums) return [0, 0];
  return [Number(nums[0]), Number(nums[1])] as [number, number];
};

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

export default function PricingHero() {
  const [roleKey, setRoleKey] = React.useState(roles[0].role);
  const [seats, setSeats] = React.useState(1);

  const role = roles.find((r) => r.role === roleKey) ?? roles[0];
  const [salaryMin, salaryMax] = parseRange(role.salary);
  const totalMin = salaryMin * seats + SEAT_FEE * seats;
  const totalMax = salaryMax * seats + SEAT_FEE * seats;

  const increment = () => setSeats((s) => (s < 10 ? s + 1 : s));
  const decrement = () => setSeats((s) => (s > 1 ? s - 1 : s));

  return (
    <Reveal>
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F9FC] to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                PRICING
              </p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Simple, transparent pricing
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-lg">
                One flat seat fee per month plus the assistant&rsquo;s salary. No
                markups, no long-term contracts.
              </p>
              <Button
                variant="brand"
                size="xl"
                className="w-full sm:w-auto"
                nativeButton={false}
                render={
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                }
              />
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <span
                  className="relative -top-px h-[1px] w-4 flex-shrink-0 bg-slate-300"
                />
                No long-term contracts &middot; 30-day money-back guarantee
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white shadow-xl p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-foreground mb-2">
                    Cost calculator
                  </h2>
                  <p className="text-sm text-slate-500">
                    Estimate your monthly cost per role.
                  </p>
                </div>

                <div className="space-y-3">
                  <label htmlFor="role-select" className="text-xs font-semibold text-muted-foreground">
                    Role
                  </label>
                  <Select
                    id="role-select"
                    value={roleKey}
                    onValueChange={(value) => {
                      if (value !== null) setRoleKey(value);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((r) => (
                        <SelectItem key={r.role} value={r.role}>
                          {r.role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">
                      Seats
                    </span>
                    <span className="text-sm text-slate-600">{seats}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={decrement}
                      disabled={seats <= 1}
                      aria-label="Decrease seats"
                      className="size-9"
                    >
                      <Minus className="size-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={increment}
                      disabled={seats >= 10}
                      aria-label="Increase seats"
                      className="size-9"
                    >
                      <Plus className="size-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Staff salary</span>
                    <span className="font-medium text-foreground">
                      {usd(salaryMin)} &ndash; {usd(salaryMax)}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2 text-sm text-slate-600">
                    <span className="font-medium">&times; {seats}</span>
                    <span className="ml-4 text-xs">+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Seat fee</span>
                    <span className="font-medium text-foreground">
                      {usd(SEAT_FEE)}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2 text-sm text-slate-600">
                    <span className="font-medium">&times; {seats}</span>
                    <span className="ml-4 text-xs">=</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="font-semibold text-foreground">
                      Total per month
                    </span>
                    <AnimatePresence>
                      <motion.span
                        key={`${totalMin}-${totalMax}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-xl font-bold text-primary tabular-nums"
                        aria-live="polite"
                      >
                        {usd(totalMin)} &ndash; {usd(totalMax)}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                <Button
                  variant="brand"
                  className="w-full"
                  nativeButton={false}
                  render={
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hire this role
                    </a>
                  }
                />

                <p className="text-xs text-slate-500 leading-relaxed">
                  Salary is paid to your assistant. Seat fee covers hiring,
                  payroll and compliance support.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
