import type { Metadata } from "next";

import FaqHero from "@/components/faq/FaqHero";

export const metadata: Metadata = {
  title: "FAQ | RemoteStaff365",
  description:
    "Get quick answers about how RemoteStaff365 works, our pricing, and the support you'll receive.",
};

export default function FaqPage() {
  return <FaqHero />;
}
