import type { Metadata } from "next";

import PageHero from "@/components/shared/PageHero";
import HeroFeatures from "@/components/home/HeroFeatures";
import Services from "@/components/home/Services";
import Standard, { DEFAULT_ITEMS } from "@/components/home/Standard";
import ThreeSteps from "@/components/home/ThreeSteps";import PartnerLogos from "@/components/home/PartnerLogos";
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
      <div className="hero-screen">
        <PageHero
          title={
            <>
              <span className="block">Hire Exceptional</span>
              <span className="block">Global Talent</span>
            </>
          }
          highlight={
            <span className="block bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
              Starting at $7/Hour
            </span>
          }
          description={
            <>
              <p className="mt-4 text-lg md:text-xl font-semibold text-text-heading">
                Grow Your Team, Not Your Overhead.
              </p>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-text-body">
                Get reliable, pre-vetted remote professionals who work under
                RemoteStaff365. We handle the hiring, payroll, and day-to-day
                management, so you get skilled support without the hassle.
              </p>
            </>
          }
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
          badges={[
            {
              title: "Top 1%",
              caption: "GLOBAL TALENT",
              variant: "primary",
            },
            {
              title: "$7/hr",
              caption: "STARTING AT",
              variant: "accent",
            },
            {
              title: "Ongoing",
              caption: "SUPPORT",
              variant: "dark",
            },
          ]}
          trustItems={[
            { icon: "globe", label: "Ready-to-Work Global Talent" },
            { icon: "coins", label: "Starting at $7/Hour" },
            { icon: "users", label: "Managed by RemoteStaff365" },
            { icon: "calendar-days", label: "Flexible Team Options" },
            { icon: "headset", label: "Ongoing Support" },
          ]}
        >
          <HeroFeatures />
        </PageHero>
      </div>
      <Services />
      <Standard
        heading="Top 1% Global Talent"
        description="Our team consists of highly skilled, experienced professionals who are vetted, trained, and managed by RemoteStaff365 to ensure quality, reliability, and performance."
        items={DEFAULT_ITEMS}
        image={{ src: "/images/va-banner-image.png", alt: "Smiling remote team member" }}
        imageMode="cutout"
      />
      <ThreeSteps />
      <PartnerLogos />
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
