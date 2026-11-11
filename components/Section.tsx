import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  className?: string;
}

export default function Section({
  children,
  container = true,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        "py-20 lg:py-32 relative",
        container ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}
