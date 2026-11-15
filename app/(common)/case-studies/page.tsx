import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies - Offshore Virtual Assistant Success Stories",
  description:
    "See how US companies grew with dedicated offshore virtual assistants. Real results across healthcare, logistics, real estate, and more.",
};

const caseStudies = [
  {
    company: "HealthBridge Clinic",
    industry: "Healthcare",
    stat: "48h",
    statLabel: "Time to first hire",
    story:
      "Needed a billing-savvy VA quickly. We matched them with a HIPAA-trained assistant who started within two days.",
  },
  {
    company: "SwiftLogistics",
    industry: "Logistics",
    stat: "2+",
    statLabel: "Seats added this year",
    story:
      "Their logistics VA handles dispatch and tracking flawlessly, so they expanded the team twice.",
  },
  {
    company: "Prime Realty Group",
    industry: "Real Estate",
    stat: "100%",
    statLabel: "Closing support coverage",
    story:
      "Back-office support has been a game-changer for their closings and transaction coordination.",
  },
  {
    company: "Cedarwood Medical",
    industry: "Healthcare",
    stat: "$0",
    statLabel: "Long-term contracts",
    story:
      "HIPAA-trained virtual assistants who understand healthcare billing, worth every penny.",
  },
  {
    company: "Main Street Accounting",
    industry: "Accounting",
    stat: "24/5",
    statLabel: "Bookkeeping coverage",
    story:
      "Responsive and affordable bookkeeping support with no long-term contracts needed.",
  },
  {
    company: "Nexus Ecommerce",
    industry: "Ecommerce",
    stat: "3",
    statLabel: "Time zones covered",
    story:
      "Customer support coverage across time zones let them scale without burning out their local team.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="Customer success stories"
        subtitle="How US companies grow with dedicated offshore virtual assistants."
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {caseStudies.map((study) => (
                <Card
                  key={study.company}
                  className="bg-white rounded-2xl shadow-card p-6 flex flex-col h-full"
                >
                  <Badge variant="outline" className="mb-4">
                    {study.industry}
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {study.company}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {study.story}
                  </p>
                  <div className="mt-auto flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      {study.stat}
                    </span>
                    <span className="text-sm text-muted">{study.statLabel}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <CTASection primaryHref={bookingUrl} />
    </div>
  );
}
