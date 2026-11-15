import type { Metadata } from "next";

import PageHero from "@/components/shared/PageHero";
import Services from "@/components/home/Services";
import Standard from "@/components/home/Standard";
import { bookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Build a high-performing remote team with skilled, pre-vetted VAs from around the world. We match you with the right talent to scale, save time, and grow your business.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title={<span className="block">Skilled Virtual Assistants</span>}
        highlight={<span className="block text-primary">From Around the World</span>}
        description="Build a high-performing remote team with skilled, pre-vetted virtual assistants from around the world. From day-to-day support to specialized roles, we provide the right talent to help you scale, save time, and grow your business."
        primaryCta={{
          label: "Book a Free Consultation",
          href: bookingUrl,
        }}
        secondaryCta={{
          label: "Get a Custom VA Plan",
          href: "/contact",
        }}
        image={{
          src: "/images/banner-2.png",
          alt: "Skilled virtual assistant working remotely at a laptop",
        }}
        badges={[
          {
            title: "Top 1%",
            caption: "GLOBAL TALENT",
            variant: "primary",
          },
          {
            title: "Pre-vetted",
            caption: "VIRTUAL ASSISTANTS",
            variant: "accent",
          },
          {
            title: "Specialized",
            caption: "ROLES",
            variant: "dark",
          },
        ]}
      />
      <Services
        eyebrow="OUR SERVICES"
        title="The Right Support for Every Part of Your Business"
        subtitle="Flexible, scalable, and cost-effective virtual assistant solutions tailored to your needs."
      />
      <Standard
        id="specialized-roles"
        heading="Need a Specialized Role?"
        description="We also source global talent for a wide range of specialized and industry-specific roles. Tell us what you need and we'll find the right talent for your business."
        items={[
          "Executive Assistant",
          "Project Management",
          "Data Entry & Research",
          "HR & Recruitment",
          "Real Estate Support",
          "And More",
        ]}
        image={{
          src: "/images/user.jpg",
          alt: "Smiling man with glasses in a navy shirt at a laptop",
        }}
        imageMode="photo"
      />
    </>
  );
}
