"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bookingUrl, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { X, ChevronRight, CalendarDays } from "lucide-react";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div
      className="relative size-5 shrink-0 transition-[transform,opacity] duration-300 ease-out"
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute left-1/2 top-0 -translate-x-1/2 w-5 h-0.5 bg-text-heading rounded-full transition-[transform,opacity] duration-300 ease-out origin-center",
          open
            ? "translate-y-2 rotate-45 bg-brand-primary"
            : "translate-y-0 rotate-0"
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-text-heading rounded-full transition-[transform,opacity] duration-300 ease-out",
          open ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 bottom-0 -translate-x-1/2 w-5 h-0.5 bg-text-heading rounded-full transition-[transform,opacity] duration-300 ease-out origin-center",
          open
            ? "-translate-y-2 -rotate-45 bg-brand-primary"
            : "translate-y-0 rotate-0"
        )}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  React.useEffect(() => {
    const id = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-(--nav-h) flex items-center transition-colors duration-300 ease-out ${scrolled ? "border-b-2 border-line-soft bg-white/90 backdrop-blur-md shadow-sm" : "border-b border-transparent bg-transparent"}`}
      >
        <Container className="flex h-full w-full items-center justify-between">
          <Logo variant="default" className="h-10 md:h-11" />

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-normal text-foreground transition-all duration-300 hover:text-primary"
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
                  <CalendarDays className="size-4 mr-2" />
                  Book a Free Consultation
                </a>
              }
            />
          </div>

          {/* Hamburger trigger */}
          <button
            id="mobile-menu-button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu-drawer"
            className={cn(
              "lg:hidden cursor-pointer size-11 rounded-xl flex items-center justify-center transition-all duration-200",
              "hover:bg-brand-soft active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            )}
          >
            <HamburgerIcon open={open} />
          </button>
        </Container>
      </nav>

      <MobileDrawer open={open} onClose={closeMenu}>
        {/* Drawer header */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-line-soft">
          <Logo variant="default" className="h-8" />
          <button
            onClick={closeMenu}
            className={cn(
              "cursor-pointer size-11 rounded-full flex items-center justify-center transition-colors duration-200",
              "bg-brand-soft hover:bg-line",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            )}
            aria-label="Close menu"
          >
            <X className="size-5 shrink-0" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col divide-y border-line-soft px-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <div key={link.name} className="border-b border-line-soft last:border-b-0">
                <div
                  className={cn(
                    "relative px-3 rounded-xl transition-colors duration-200 group cursor-pointer",
                    active ? "bg-brand-soft" : "hover:bg-brand-soft/60"
                  )}
                >
                  {active && (
                    <span
                      className="absolute left-0 top-0 bottom-0 w-0.75 bg-brand-primary rounded-l-xl"
                    />
                  )}
                  <Link
                    href={link.href}
                    className={cn(
                      "block w-full py-4 text-lg font-medium",
                      active
                        ? "text-primary"
                        : "text-text-heading hover:text-primary",
                      "pl-6 pr-4 flex items-center justify-between"
                    )}
                    onClick={closeMenu}
                  >
                    {link.name}
                    <ChevronRight
                      className={cn(
                        "size-4 shrink-0 transition-transform duration-200",
                        active ? "text-primary" : "text-text-body",
                        "group-hover:translate-x-1"
                      )}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom area */}
        <div className="mt-auto px-6 pt-6 pb-8 border-t border-line-soft">
          <Button
            variant="brand"
            size="xl"
            className={cn(
              "w-full h-12 rounded-xl shadow-lg cursor-pointer transition-transform duration-200",
              "hover:-translate-y-0.5 active:scale-95"
            )}
            nativeButton={false}
            render={
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="size-4 mr-2" />
                Book a Free Consultation
              </a>
            }
          />
          <p className="mt-4 text-xs text-text-body leading-relaxed">
            Hire pre-vetted offshore assistants in 48 hours
          </p>
          <p className="mt-1 text-xs text-text-body">
            hello@remotestaff365.com
          </p>
        </div>
      </MobileDrawer>
    </>
  );
}
