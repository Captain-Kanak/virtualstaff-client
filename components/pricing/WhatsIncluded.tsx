"use client";

import { BarChart3, CalendarDays, Headset, Users, Zap } from "lucide-react";
import FeatureColumns from "@/components/FeatureColumns";

const WHATS_INCLUDED_ITEMS = [
  { icon: Headset, title: "Full Management", description: "We handle the day-to-day support, oversight, and performance." },
  { icon: BarChart3, title: "Quality Assurance", description: "Ongoing monitoring to ensure high-quality results." },
  { icon: CalendarDays, title: "Flexible Terms", description: "Scale up, down, or adjust your plan as your needs change." },
  { icon: Users, title: "Dedicated Talent", description: "A remote professional focused on your business and goals." },
  { icon: Zap, title: "Ongoing Support", description: "Continued guidance and account support when you need it." },
] as const;

export default function WhatsIncluded() {
  return (
    <FeatureColumns eyebrow="WHAT'S INCLUDED" items={WHATS_INCLUDED_ITEMS} />
  );
}
