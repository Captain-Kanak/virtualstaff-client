"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { bookingUrl, navLinks, siteName } from "@/lib/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const menuSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-slate-100 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label={siteName}
          >
            <Image
              src="/logo.png"
              alt={`${siteName} logo`}
              width="32"
              height="32"
              className="h-8 w-8 rounded-lg object-cover"
              priority
            />
            <span className="font-bold text-xl tracking-tight text-foreground">
              {siteName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-normal text-foreground transition-all duration-300 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="brand"
              size="xl"
              nativeButton={false}
              render={<a href={bookingUrl} target="_blank" rel="noopener noreferrer">Build Your Team</a>}
            />
          </div>

          <Sheet>
            <SheetTrigger
              render={
                <button
                  className="lg:hidden p-2 rounded-md text-foreground hover:bg-slate-100"
                  aria-label="Open menu"
                >
                  {menuSvg}
                </button>
              }
            />
            <SheetContent side="right" className="lg:hidden p-0 border-none shadow-xl">
              <SheetHeader className="px-6 py-4 border-b border-border">
                <SheetTitle className="text-lg font-semibold text-foreground">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="divide-y px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-3.5 text-base font-medium text-foreground transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  variant="brand"
                  size="xl"
                  className="w-full mt-4"
                  nativeButton={false}
                  render={<a href={bookingUrl} target="_blank" rel="noopener noreferrer">Build Your Team</a>}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
