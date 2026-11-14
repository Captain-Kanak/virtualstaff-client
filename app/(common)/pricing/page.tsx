import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPageContent from "@/components/pricing/PricingPageContent";

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
      <PricingHero />
      <PricingPageContent />
    </div>
  );
}
