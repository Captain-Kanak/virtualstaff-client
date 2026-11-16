import type { Metadata } from "next";

import InnerHero from "@/components/InnerHero";
import HeroFeatures from "@/components/home/HeroFeatures";
import Services from "@/components/home/Services";
import Standard, { DEFAULT_ITEMS } from "@/components/home/Standard";
import ThreeSteps from "@/components/home/ThreeSteps";
import PartnerLogos from "@/components/home/PartnerLogos";
import MidCTA from "@/components/home/MidCTA";
import HowItWorks from "@/components/home/HowItWorks";
import GrowthPath from "@/components/home/GrowthPath";
import PricingCards from "@/components/home/PricingCards";
import ComparisonTable from "@/components/home/ComparisonTable";
import Testimonials from "@/components/home/Testimonials";
import Guarantee from "@/components/home/Guarantee";
import BottomCTA from "@/components/home/BottomCTA";
import { bookingUrl, navLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Remote Staffing for US Companies - RemoteStaff365",
  description:
    "Hire pre-vetted offshore virtual assistants in 48 hours. Customer support, admin, bookkeeping, sales, marketing, and back-office. No long-term contracts.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <InnerHero
        titleLines={["Hire Exceptional", "Global Talent", "Starting at $7/Hour"]}
        lead="Grow Your Team, Not Your Overhead."
        description="Get reliable, pre-vetted remote professionals who work under RemoteStaff365. We handle the hiring, payroll, and day-to-day management, so you get skilled support without the hassle."
        primaryCta={{
          label: "Book a Free Consultation",
          href: bookingUrl,
        }}
        secondaryCta={{
          label: "Explore Our Services",
          href:
            navLinks.find((l) => l.name === "Services")?.href ?? "/#services",
        }}
        image={{
          src: "/images/banner-2.png",
          alt: "Remote team member with a headset smiling at her laptop",
        }}
        tags={[
          { title: "Top 1%", subtitle: "GLOBAL TALENT" },
          { title: "$7/hr", subtitle: "STARTING AT" },
          { title: "Ongoing", subtitle: "SUPPORT" },
        ]}
        footer={<HeroFeatures />}
      />
      <Services />
      <Standard
        variant="default"
        heading="Top 1% Global Talent"
        description="Our team consists of highly skilled, experienced professionals who are vetted, trained, and managed by RemoteStaff365 to ensure quality, reliability, and performance."
        items={DEFAULT_ITEMS}
        image={{
          src: "/images/va-banner-image.png",
          alt: "Smiling remote team member",
        }}
        imageMode="cutout"
      />
      <ThreeSteps />
      <PartnerLogos />
      <HowItWorks />
      <GrowthPath />
      <PricingCards />
      <ComparisonTable />
      <Testimonials />
      <Guarantee />
      <MidCTA />
      {/* <BottomCTA /> */}
    </div>
  );
}
