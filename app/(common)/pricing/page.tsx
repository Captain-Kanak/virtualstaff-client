import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import PricingCards from "@/components/home/PricingCards";
import PricingPageContent from "@/components/pricing/PricingPageContent";
import { bookingUrl } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Pricing - Hire Offshore Virtual Assistants",
  description:
    "Simple, transparent pricing for dedicated virtual assistants. $99 seat fee per month plus salary, no markups, no long-term contracts.",
  openGraph: {
    title: "Pricing - Hire Offshore Virtual Assistants | RemoteStaff365",
    description:
      "Transparent seat-based pricing for dedicated virtual assistants. $99 seat fee per month plus salary, no markups, no long-term contracts.",
    type: "website",
    url: `${siteUrl}/pricing`,
    siteName: "RemoteStaff365",
    images: [
      {
        url: "/logo.png",
        width: 32,
        height: 32,
        alt: "RemoteStaff365 logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Hire Offshore Virtual Assistants | RemoteStaff365",
    description:
      "Transparent seat-based pricing for dedicated virtual assistants. $99 seat fee per month plus salary.",
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <InnerHero
        eyebrow="PRICING"
        titleLines={[
          "Simple, Transparent",
          "Pricing for",
          "Dedicated Remote Support",
        ]}
        description="Get a fully managed remote team at a fraction of the cost, with flexible plans that fit your business needs."
        primaryCta={{
          label: "Book a Free Consultation",
          href: bookingUrl,
        }}
        secondaryCta={{
          label: "Compare Plans",
          href: "#plans",
        }}
        image={{
          src: "/images/banner-2.png",
          alt: "Remote team member smiling with her laptop",
        }}
        tags={[
          { title: "From $7/hr", subtitle: "DEDICATED TEAMS" },
          { title: "Flexible", subtitle: "PLANS" },
          { title: "Fully Managed", subtitle: "TEAMS" },
        ]}
      />
      <PricingCards id="plans" />
      <PricingPageContent />
    </div>
  );
}
