import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/card";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact RemoteStaff365",
  description: "Get in touch with RemoteStaff365. We're here to help you hire offshore virtual assistants.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="Get in touch"
        subtitle="Have questions about hiring offshore virtual assistants? Send us a message or book a call."
      />
      <section className="py-12 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <Card className="bg-surface-hero rounded-2xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Contact details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-muted shrink-0 mt-1">Email</span>
                    <p className="text-foreground">hello@remotestaff365.com</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-muted shrink-0 mt-1">Book a call</span>
                    <p className="text-foreground">calendly.com/remotestaff365</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-muted shrink-0 mt-1">Hours</span>
                    <p className="text-foreground">Mon–Fri, 9am–6pm ET</p>
                  </div>
                </div>
                <Button
                  variant="brand"
                  size="xl"
                  className="w-full"
                  nativeButton={false}
                  render={
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a call
                    </a>
                  }
                />
              </Card>
              <Link
                href="/jobs"
                className="text-primary font-medium hover:underline flex items-center gap-2"
              >
                → View open roles
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
