"use client";

import * as React from "react";
import Link from "next/link";
import { bookingUrl, navLinks } from "@/lib/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";

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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] flex items-center transition-colors duration-300 ease-out ${scrolled ? "border-b-2 border-slate-100 bg-white/90 backdrop-blur-md shadow-sm" : "border-b border-transparent bg-transparent"}`}
    >
      <Container className="flex h-full w-full items-center justify-between">
        <Logo variant="default" className="h-10 md:h-11" />

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
            render={
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Build Your Team
              </a>
            }
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
            <SheetContent
              side="right"
              className="lg:hidden p-0 border-none shadow-xl"
            >
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
                  render={
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Build Your Team
                    </a>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </Container>
      </nav>
  );
}
