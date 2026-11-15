"use client";

import * as React from "react";
import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "default" | "light";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const isLight = tone === "light";
  const center = align === "center";

  return (
    <Reveal>
      <div className={[
        "flex flex-col gap-2 mb-10 md:mb-14",
        center ? "items-center text-center" : "items-start",
      ]
        .filter(Boolean)
        .join(" ")}>
        {eyebrow && (
          <span className={[
            "text-xs md:text-sm font-semibold uppercase tracking-widest text-primary mb-3",
            isLight ? "text-white" : "",
          ]
            .filter(Boolean)
            .join(" ")}>
            {eyebrow}
          </span>
        )}
        <h2
          className={[
            "text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15]",
            isLight ? "text-white" : "text-foreground",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={[
              "text-base md:text-lg leading-relaxed max-w-2xl mt-4",
              center ? "mx-auto" : "",
              isLight ? "text-white/90" : "text-text-body",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
