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
      <section className="hero-offset bg-gradient-to-b from-[#F1F9FC] to-white pb-12 md:pb-16 text-center">
        <div className="max-w-2xl mx-auto px-5">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-wider text-primary mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    </Reveal>
  );
}
