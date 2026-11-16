"use client";

import * as React from "react";
import { CalendarDays, Coins, Globe, Headset, Users } from "lucide-react";
import Container from "@/components/ui/Container";

type Feature = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  line1: string;
  line2: string;
};

const features: Feature[] = [
  { Icon: Globe, line1: "Ready-to-Work", line2: "Global Talent" },
  { Icon: Coins, line1: "Starting at", line2: "$7/Hour" },
  { Icon: Users, line1: "Managed by", line2: "RemoteStaff365" },
  { Icon: CalendarDays, line1: "Flexible", line2: "Team Options" },
  { Icon: Headset, line1: "Ongoing", line2: "Support" },
];

export default function HeroFeatures() {
  return (
    <Container>
      <div className="border-t border-line-soft py-5">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-5 lg:gap-0">
          {features.map((feature, i) => {
            const Icon = feature.Icon;
            return (
              <div
                key={feature.line1}
                className={`flex items-center gap-3 lg:justify-center lg:px-4 lg:border-l lg:border-line first:lg:border-l-0 ${
                  i === 4 ? "col-span-2 lg:col-span-1 justify-self-center lg:justify-self-auto" : ""
                }`}
              >
                <Icon className="size-9 shrink-0 text-primary" strokeWidth={1.75} />
                <div className="text-sm md:text-base font-medium leading-snug text-text-heading">
                  <span className="block">{feature.line1}</span>
                  <span className="block">{feature.line2}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
