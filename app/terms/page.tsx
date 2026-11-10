import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service - RemoteStaff365",
  description: "RemoteStaff365 Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365 Legal"
        title="Terms of Service"
        subtitle="Last updated: November 2026"
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
              Terms of Service
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Welcome to RemoteStaff365. These terms govern your use of our
              virtual assistant staffing platform.
            </p>
            <p className="text-muted leading-relaxed">
              This is a placeholder page. Full terms will be published before
              launch. By using the site, you agree to our terms of service.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
