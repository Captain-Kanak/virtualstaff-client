"use client";

import * as React from "react";
import Reveal from "@/components/Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <Reveal>
      <section className="bg-[#F1F9FC] py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2563eb] mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted leading-relaxed">{subtitle}</p>
          )}
        </div>
      </section>
    </Reveal>
  );
}
