import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Build a high-performing remote team with skilled, pre-vetted VAs from around the world. We match you with the right talent to scale, save time, and grow your business.",
};

export default function ServicesPage() {
  return (
    <div className="hero-screen">
      <ServicesHero />
    </div>
  );
}
