import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Globe, Clock, DollarSign, Headset } from "lucide-react";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Enterprise - Dedicated Offshore Teams",
  description:
    "Custom offshore virtual assistant teams for enterprises. Dedicated account management, SLA-backed support, and volume pricing.",
};

const benefits = [
  {
    title: "Dedicated account management",
    text:
      "A single point of contact who understands your business and coordinates your offshore team.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "SLA-backed response times",
    text:
      "Guaranteed response and resolution times so your operations never stall.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Volume pricing",
    text:
      "Discounted seat fees as you scale your offshore team across roles and regions.",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    title: "HIPAA & compliance ready",
    text:
      "Assistants trained for healthcare, legal, and financial compliance requirements.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Time-zone coverage",
    text:
      "Assistants who overlap your business hours across US time zones and beyond.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Fast replacement guarantee",
    text:
      "If an assistant isn't the right fit, we replace them quickly at no extra cost.",
    icon: <Headset className="h-5 w-5" />,
  },
];

export default function EnterprisePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365 Enterprise"
        title="Dedicated offshore teams for enterprises"
        subtitle="Custom staffing solutions, dedicated account management, and volume pricing for growing companies."
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F1F9FC] flex items-center justify-center text-[#2563eb] mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{benefit.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24 bg-[#F5F8FF]">
          <div className="max-w-4xl mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                Custom team size
              </h2>
              <p className="text-muted text-lg">
                Build a team of any size, from one assistant to a full offshore department.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xl mx-auto">
              {[1, 3, 5].map((seats) => (
                <div
                  key={seats}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span className="text-4xl font-bold text-foreground">
                    {seats}
                  </span>
                  <span className="text-sm text-muted">
                    {seats === 1 ? "seat" : "seats"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                variant="green"
                size="xl"
                className="w-full sm:w-auto"
                nativeButton={false}
                render={
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book an enterprise call
                  </a>
                }
              />
            </div>
          </div>
        </section>
      </Reveal>

      <CTASection primaryHref={bookingUrl} />
    </div>
  );
}
