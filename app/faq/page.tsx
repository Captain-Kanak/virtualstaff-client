import type { Metadata } from "next";

import FaqHero from "@/components/faq/FaqHero";
import FaqList from "@/components/faq/FaqList";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ | RemoteStaff365",
  description:
    "Get quick answers about how RemoteStaff365 works, our pricing, and the support you'll receive.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <FaqHero />
      <FaqList />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
