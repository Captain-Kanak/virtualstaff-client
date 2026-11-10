import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import { bookingUrl } from "@/lib/site";

export const industries: Record<
  string,
  { name: string; intro: string; roles: string[] }
> = {
  "healthcare-insurance": {
    name: "Healthcare & Insurance",
    intro:
      "HIPAA-trained virtual assistants for billing, scheduling, and patient support so your practice can focus on care.",
    roles: ["Medical Billing Specialist", "Patient Care Coordinator", "Insurance Verification VA"],
  },
  logistics: {
    name: "Logistics",
    intro:
      "Dispatch, tracking, and freight coordination support from assistants who understand supply chain operations.",
    roles: ["Dispatch Coordinator", "Logistics VA", "Freight Operations Assistant"],
  },
  legal: {
    name: "Legal",
    intro:
      "Confidential, detail-oriented assistants for document prep, client intake, and case management support.",
    roles: ["Legal Assistant", "Document Reviewer", "Client Intake VA"],
  },
  accounting: {
    name: "Accounting",
    intro:
      "Bookkeeping, accounts payable/receivable, and financial report support from finance-trained VAs.",
    roles: ["Bookkeeper", "Accounts Payable Clerk", "Financial Reporting VA"],
  },
  "real-estate": {
    name: "Real Estate",
    intro:
      "Transaction coordination, listing management, and client follow-up support for agents and brokerages.",
    roles: ["Transaction Coordinator", "Listing Assistant", "Real Estate VA"],
  },
  ecommerce: {
    name: "Ecommerce",
    intro:
      "Customer support, order management, and product listing assistance for online stores.",
    roles: ["Ecommerce VA", "Customer Support Specialist", "Order Management Assistant"],
  },
  "customer-support": {
    name: "Customer Support",
    intro:
      "Dedicated support agents for email, chat, and phone coverage across US time zones.",
    roles: ["Support Specialist", "Chat Support Agent", "Help Desk VA"],
  },
  "home-services": {
    name: "Home Services",
    intro:
      "Scheduling, dispatch, and customer service support for plumbing, HVAC, and home service businesses.",
    roles: ["Dispatch Coordinator", "Scheduling VA", "Customer Service Assistant"],
  },
  hospitality: {
    name: "Hospitality",
    intro:
      "Reservation, guest services, and administrative support for hotels and hospitality groups.",
    roles: ["Reservation Agent", "Guest Services VA", "Front Desk Assistant"],
  },
  construction: {
    name: "Construction",
    intro:
      "Project coordination, permit tracking, and vendor management support for construction firms.",
    roles: ["Project Coordinator", "Permit Assistant", "Construction VA"],
  },
};

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug as keyof typeof industries];
  if (!industry) {
    return { title: "Industry not found" };
  }
  return {
    title: `${industry.name} Virtual Assistants - RemoteStaff365`,
    description: industry.intro,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries[slug as keyof typeof industries];
  if (!industry) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow={`RemoteStaff365 · ${industry.name}`}
        title={industry.name}
        subtitle={industry.intro}
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-2xl mx-auto px-5">
            <p className="text-lg text-muted leading-relaxed mb-10">
              {industry.intro}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
              Common roles for {industry.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {industry.roles.map((role: string) => (
                <Card
                  key={role}
                  className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {role}
                  </h3>
                  <p className="text-muted text-sm">
                    Dedicated support for your {industry.name.toLowerCase()} operations.
                  </p>
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
