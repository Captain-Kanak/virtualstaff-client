"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bookingUrl } from "@/lib/site";
import {
  sampleProfiles,
  computeMonthlyInvestment,
  formatUsd,
} from "@/lib/sample-profiles";

interface SampleProfilesCardProps {
  profile: typeof sampleProfiles[number];
}

function SampleProfilesCard({ profile }: SampleProfilesCardProps) {
  const investment = computeMonthlyInvestment(
    profile.salary,
    profile.seatFee
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-shrink-0 w-[320px] md:w-[360px] scroll-snap-align-start rounded-2xl border border-slate-100 bg-white p-5 shadow-[2px_4px_12px_#00000014]"
    >
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="/images/user.jpg"
          alt={profile.firstName}
          width={40}
          height={40}
          className="rounded-full object-cover ring-2 ring-white shadow-sm"
          loading="lazy"
        />
        <div className="flex flex-col leading-none">
          <span className="text-xs font-bold text-foreground">
            {profile.firstName} {profile.initial}.
          </span>
          <span className="text-xs text-slate-500">{profile.role}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
        <span>{profile.country}</span>
        <span>{profile.years}+ years</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {profile.skills.map((skill) => (
          <Badge key={skill} variant="outline" className="text-slate-600 border-slate-200">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="space-y-1 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Expected salary</span>
          <span className="font-medium text-foreground">{profile.salary}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Seat fee</span>
          <span>{formatUsd(profile.seatFee)}</span>
        </div>
        <div className="flex justify-between text-sm font-semibold text-foreground border-t border-slate-100 pt-1.5">
          <span>Total monthly investment</span>
          <span>
            {formatUsd(investment.min)} &ndash; {formatUsd(investment.max)}
          </span>
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
            Ready to onboard someone similar
          </a>
        }
      />
    </motion.div>
  );
}

interface SampleProfilesCarouselProps {
  title?: string;
  subtitle?: string;
}

export default function SampleProfilesCarousel({
  title = "Sample profiles",
  subtitle,
}: SampleProfilesCarouselProps) {
  const [arrowState, setArrowState] = React.useState<{
    left: boolean;
    right: boolean;
  }>({ left: false, right: false });
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setArrowState({
        left: el.scrollLeft > 0,
        right: el.scrollLeft < el.scrollWidth - el.clientWidth,
      });
    };
    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, []);

  const scrollAmount = 360;

  return (
    <section className="py-16 md:py-20 bg-[#F5F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
          Sample profiles for illustration
        </p>
        <h2 className={[
          "text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4",
          subtitle ? "mb-4" : "mb-8",
        ]
          .filter(Boolean)
          .join(" ")}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-600 text-lg max-w-2xl mb-10">
            {subtitle}
          </p>
        )}

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x scroll-snap-mandatory -space-x-2 md:-space-x-4 pb-6"
          >
            {sampleProfiles.map((profile) => (
              <SampleProfilesCard key={profile.id} profile={profile} />
            ))}
          </div>

          {arrowState.left && (
            <Button
              variant="outline"
              size="icon-sm"
              className="absolute left-2 top-1/2 -translate-y-1/2 md:top-auto md:left-auto md:bottom-4 md:left-2 z-10 bg-white/90 backdrop-blur-sm hidden md:flex"
              onClick={() => {
                const el = containerRef.current;
                if (el) {
                  el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
                }
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="size-4" />
            </Button>
          )}
          {arrowState.right && (
            <Button
              variant="outline"
              size="icon-sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 md:top-auto md:right-auto md:bottom-4 md:right-2 z-10 bg-white/90 backdrop-blur-sm hidden md:flex"
              onClick={() => {
                const el = containerRef.current;
                if (el) {
                  el.scrollBy({ left: scrollAmount, behavior: "smooth" });
                }
              }}
              aria-label="Scroll right"
            >
              <ChevronRight className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
