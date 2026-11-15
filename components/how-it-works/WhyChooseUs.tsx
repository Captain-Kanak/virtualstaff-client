"use client";

import { Coins, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import FeatureColumns from "@/components/FeatureColumns";

const WHY_CHOOSE_US_ITEMS = [
  { icon: Zap, title: "Fast Setup", description: "Get started quickly, often within 24–72 hours." },
  { icon: ShieldCheck, title: "Quality Talent", description: "Skilled, experienced, and ready to support your business." },
  { icon: Users, title: "Fully Managed", description: "We handle the team, operations, and ongoing support." },
  { icon: Coins, title: "Cost-Effective", description: "Get the support you need at a fraction of local costs." },
  { icon: TrendingUp, title: "Scalable", description: "Easily add more support as your business grows." },
] as const;

export default function WhyChooseUs() {
  return (
    <FeatureColumns eyebrow="WHY BUSINESSES CHOOSE US" items={WHY_CHOOSE_US_ITEMS} />
  );
}
