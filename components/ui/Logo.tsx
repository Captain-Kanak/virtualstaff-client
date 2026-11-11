"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

export default function Logo({ variant = "default", className }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link href="/" className="flex items-center" aria-label="RemoteStaff365">
      <Image
        src="/images/logo-transparent.png"
        alt="RemoteStaff365"
        width={2147}
        height={465}
        className={[
          "object-contain",
          isLight ? "h-9 md:h-10 w-auto brightness-0 invert" : "h-9 md:h-10 w-auto",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        priority={variant === "default"}
      />
    </Link>
  );
}
