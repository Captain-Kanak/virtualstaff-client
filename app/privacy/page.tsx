import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy - RemoteStaff365",
  description: "RemoteStaff365 Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365 Legal"
        title="Privacy Policy"
        subtitle="Last updated: November 2026"
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
              Privacy Policy
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              We respect your privacy and are committed to protecting your
              personal information.
            </p>
            <p className="text-muted leading-relaxed">
              This is a placeholder page. Full privacy policy will be
              published before launch.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
