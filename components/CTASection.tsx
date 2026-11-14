import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  className?: string;
}

export default function CTASection({
  title = "Ready to build your team?",
  description = "Book a call with our team and hire your first offshore virtual assistant within 48 hours.",
  primaryLabel = "Book a Call",
  secondaryLabel = "View Pricing",
  primaryHref = "https://calendly.com/your-link",
  secondaryHref = "#pricing",
  className,
}: CTASectionProps) {
  return (
    <section className="bg-white py-12 md:py-16 text-center">
      <Container className="max-w-6xl mx-auto px-5">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-12 md:px-12 md:py-14 text-center text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)]">
          <div className="relative z-10">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="brand"
                size="xl"
                className="w-full sm:w-auto bg-white text-primary font-semibold h-12 px-8 hover:bg-white/90 transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out"
                nativeButton={false}
                render={
                  <Link
                    href={primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryLabel}
                  </Link>
                }
              />
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white transition-[background-color,border-color,color] duration-300 ease-out"
                nativeButton={false}
                render={
                  <Link
                    href={secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondaryLabel}
                  </Link>
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
