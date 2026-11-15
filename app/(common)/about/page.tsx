import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import Container from "@/components/ui/Container";
import { bookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About RemoteStaff365",
  description:
    "Learn about RemoteStaff365's mission to connect US companies with pre-vetted offshore virtual assistants.",
};

const values = [
  {
    title: "Transparency",
    text: "One flat seat fee plus salary. No markups, no hidden costs, ever.",
  },
  {
    title: "Quality",
    text: "Every assistant is pre-vetted, interviewed, and matched to your exact needs.",
  },
  {
    title: "Support",
    text: "Dedicated account management and SLA-backed response times as you grow.",
  },
];

const stats = [
  { label: "2,500+", value: "US businesses served" },
  { label: "48 hours", value: "Average time to first hire" },
  { label: "100%", value: "US time-zone overlap" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <InnerHero
        eyebrow="ABOUT US"
        titleLines={["Your Partner for", "Reliable Remote", "Team Support"]}
        description="RemoteStaff365 provides businesses with skilled, reliable, and fully managed remote teams, so you can focus on growth, productivity, and what matters most."
        primaryCta={{
          label: "Book a Free Consultation",
          href: bookingUrl,
        }}
        secondaryCta={{
          label: "Our Services",
          href: "/services",
        }}
        image={{
          src: "/images/banner-2.png",
          alt: "Remote team member smiling with her laptop",
        }}
        tags={[
          { title: "Skilled", subtitle: "PROFESSIONALS" },
          { title: "Reliable", subtitle: "SUPPORT" },
          { title: "Managed", subtitle: "BY US" },
        ]}
      />

      <Mission />

      <Values />

      <CTASection primaryHref={bookingUrl} />
    </div>
  );
}
