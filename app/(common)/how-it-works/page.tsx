import type { Metadata } from "next";
import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import Partnership from "@/components/how-it-works/Partnership";
import PriceFormula from "@/components/how-it-works/PriceFormula";
import ProcessSteps from "@/components/how-it-works/ProcessSteps";
import ImageFeatureSection from "@/components/shared/ImageFeatureSection";
import WhyChooseUs from "@/components/how-it-works/WhyChooseUs";
import Regions from "@/components/how-it-works/Regions";
import HowFAQ from "@/components/how-it-works/HowFAQ";
import WhyRemoteStaff from "@/components/shared/WhyRemoteStaff";

export const metadata: Metadata = {
  title: "How It Works | RemoteStaff365",
  description:
    "Hire dedicated virtual assistants in 48 hours. Four simple steps to add offshore talent to your team.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <HowItWorksHero />
      <ProcessSteps />
      <ImageFeatureSection
        id="what-you-can-expect"
        heading="What You Can Expect"
        items={[
          "Pre-vetted, experienced remote professionals",
          "Full team management and ongoing support",
          "Clear communication and performance tracking",
          "A flexible, cost-effective solution that scales with you",
        ]}
        image={{
          src: "/images/va-banner-image.png",
          alt: "Smiling remote team member",
        }}
        columns={1}
      />
      <WhyChooseUs />
      <WhyRemoteStaff />
      <Partnership />
      <PriceFormula />
      <Regions />
      <HowFAQ />
    </div>
  );
}
