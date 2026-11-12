import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <section
      className={[
        "rounded-xl bg-primary p-8 lg:p-12 text-center text-white relative overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative z-10">
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-primary leading-relaxed max-w-2xl mx-auto mb-8 lg:mb-10 text-lg">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="brand" size="xl" className="w-full sm:w-auto" nativeButton={false} render={<Link href={primaryHref} target="_blank" rel="noopener noreferrer">{primaryLabel}</Link>} />
          <Button variant="outline" size="xl" className="w-full sm:w-auto" nativeButton={false} render={<Link href={secondaryHref}>{secondaryLabel}</Link>} />
        </div>
      </div>
    </section>
  );
}
