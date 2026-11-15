import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import HeroFeatures from "@/components/home/HeroFeatures";
import PartnerLogos from "@/components/home/PartnerLogos";
import ValueProps from "@/components/home/ValueProps";
import MidCTA from "@/components/home/MidCTA";
import HowItWorks from "@/components/home/HowItWorks";
import GrowthPath from "@/components/home/GrowthPath";
import PricingCards from "@/components/home/PricingCards";
import ComparisonTable from "@/components/home/ComparisonTable";
import Testimonials from "@/components/home/Testimonials";
import Guarantee from "@/components/home/Guarantee";
import BottomCTA from "@/components/home/BottomCTA";

export const metadata: Metadata = {
  title: "Remote Staffing for US Companies - RemoteStaff365",
  description:
    "Hire pre-vetted offshore virtual assistants in 48 hours. Customer support, admin, bookkeeping, sales, marketing, and back-office. No long-term contracts.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="hero-screen">
        <Hero />
        <HeroFeatures />
      </div>
      <PartnerLogos />
      <ValueProps />
      <MidCTA />
      <HowItWorks />
      <GrowthPath />
      <PricingCards />
      <ComparisonTable />
      <Testimonials />
      <Guarantee />
      <BottomCTA />
    </div>
  );
}
