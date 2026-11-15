"use client";

import InnerHero from "@/components/InnerHero";
import { bookingUrl } from "@/lib/site";

export default function HowItWorksHero() {
  return (
    <InnerHero
      eyebrow="HOW IT WORKS"
      titleLines={[
        "A Simple, Managed",
        "Process That Gets",
        "You the Right Support",
      ]}
      description="Get skilled, reliable remote talent for your business without the hiring, training, or daily management headaches. We handle the process, so you can focus on growing your business."
      primaryCta={{
        label: "Book a Free Consultation",
        href: bookingUrl,
      }}
      secondaryCta={{
        label: "View Our Services",
        href: "/services",
      }}
      image={{
        src: "/images/banner-2.png",
        alt: "Skilled virtual assistant working remotely at a laptop",
      }}
      tags={[
        { title: "Managed", subtitle: "END-TO-END PROCESS" },
        { title: "Pre-vetted", subtitle: "GLOBAL TALENT" },
        { title: "3 Steps", subtitle: "TO GET STARTED" },
      ]}
    />
  );
}
