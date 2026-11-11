"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className ?? ""}`} aria-label="RemoteStaff365">
      <Image
        src="/images/logo.png"
        alt="RemoteStaff365"
        width={2172}
        height={724}
        className="h-14 w-auto md:h-18 object-contain"
        priority
      />
    </Link>
  );
}
