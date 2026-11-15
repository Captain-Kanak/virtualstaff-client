import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import Container from "@/components/ui/Container";
import { bookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About RemoteStaff365",
  description:
    "Learn about RemoteStaff365's mission to connect US companies with pre-vetted offshore virtual assistants.",
};

const values = [
  {
    title: "Transparency",
    text: "One flat seat fee plus salary. No markups, no hidden costs, ever.",
  },
  {
    title: "Quality",
    text: "Every assistant is pre-vetted, interviewed, and matched to your exact needs.",
  },
  {
    title: "Support",
    text: "Dedicated account management and SLA-backed response times as you grow.",
  },
];

const stats = [
  { label: "2,500+", value: "US businesses served" },
  { label: "48 hours", value: "Average time to first hire" },
  { label: "100%", value: "US time-zone overlap" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="About us"
        subtitle="Connecting US companies with top offshore virtual assistants, one seat at a time."
      />

      <Reveal>
        <section className="py-12 lg:py-24">
        <Container className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Our mission
            </h2>
              <p className="text-lg text-muted leading-relaxed">
                We believe great talent shouldn{"'"}t be limited by geography.
                RemoteStaff365 helps US companies hire dedicated offshore virtual
                assistants quickly, transparently, and affordably — without
                long-term contracts or markups. Our talent is sourced worldwide,
                including the Philippines, India, Latin America, Eastern Europe,
                Africa, South Asia, and Southeast Asia.
              </p>
        </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24 bg-brand-tint">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
              What we stand for
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((v) => (
                <Card
                  key={v.title}
                  className="bg-white rounded-2xl shadow-card p-6 flex flex-col h-full"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{v.text}</p>
                </Card>
              ))}
            </div>
        </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 lg:py-24">
        <Container className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-10">
              By the numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xl mx-auto">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="text-4xl font-bold text-foreground">
                    {s.label}
                  </span>
                  <p className="text-muted text-sm">{s.value}</p>
                </div>
              ))}
            </div>
        </Container>
        </section>
      </Reveal>

      <CTASection primaryHref={bookingUrl} />
    </div>
  );
}
