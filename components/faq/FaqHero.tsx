"use client";

import InnerHero from "@/components/InnerHero";
import { bookingUrl } from "@/lib/site";

export default function FaqHero() {
  return (
    <InnerHero
      eyebrow="FAQ"
      titleLines={["Frequently Asked", "Questions", ""]}
      description="Get quick answers about how RemoteStaff365 works, our pricing, and the support you'll receive."
      primaryCta={{
        label: "Book a Free Consultation",
        href: bookingUrl,
      }}
      secondaryCta={{
        label: "Contact Us",
        href: "/contact",
      }}
      image={{
        src: "/images/banner-2.png",
        alt: "Remote team member working remotely at a laptop",
      }}
      tags={[
        { title: "Quick", subtitle: "ANSWERS" },
        { title: "Transparent", subtitle: "PRICING" },
        { title: "Ongoing", subtitle: "SUPPORT" },
      ]}
    />
  );
}
