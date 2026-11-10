import * as React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  textCenter?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  textCenter = false,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "flex flex-col gap-2",
        textCenter ? "items-center text-center" : "items-start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-wider text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={[
          "mt-2 text-3xl lg:text-4xl font-bold tracking-tight text-foreground",
          textCenter ? "" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h2>
      {description && (
        <p className={[
          "mt-4 text-lg text-muted leading-relaxed max-w-2xl",
          textCenter ? "mx-auto" : "",
        ]
          .filter(Boolean)
          .join(" ")}>
          {description}
        </p>
      )}
    </div>
  );
}
