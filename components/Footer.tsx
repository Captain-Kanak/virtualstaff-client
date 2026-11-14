"use client";

import * as React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { siteName } from "@/lib/site";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const year = new Date().getFullYear();

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Industries", href: "#" },
];

const resourcesLinks = [
  { name: "FAQ", href: "#" },
  { name: "What Is RemoteStaff365", href: "#" },
];

const contactItems = [
  { name: "Email", href: "mailto:hello@remotestaff365.com", asLink: true },
  { name: "US businesses worldwide", asLink: false },
];

const regionalText = "Hire talent from 7 regions worldwide";

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF, ariaLabel: "RemoteStaff365 on Facebook" },
  { name: "X", href: "https://x.com", icon: FaXTwitter, ariaLabel: "RemoteStaff365 on X" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn, ariaLabel: "RemoteStaff365 on LinkedIn" },
  { name: "Instagram", href: "#", icon: FaInstagram, ariaLabel: "RemoteStaff365 on Instagram" },
  { name: "YouTube", href: "https://youtube.com", icon: FaYoutube, ariaLabel: "RemoteStaff365 on YouTube" },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: {
    name: string;
    href?: string;
    asLink?: boolean;
  }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xs font-semibold tracking-wide uppercase text-white">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => {
          const isLink = item.asLink !== false && !!item.href;
          if (isLink) {
            return (
              <li key={item.name}>
                <Link
                  href={item.href!}
                  className="text-sm text-slate-300 transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:rounded-sm"
                >
                  {item.name}
                </Link>
              </li>
            );
          }
          return (
            <li key={item.name} className="text-sm text-slate-400">
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SocialIcon({ icon: Icon, href, ariaLabel }: { icon: React.ElementType; href: string; ariaLabel: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="size-9 rounded-full bg-white/10 text-white hover:bg-primary transition-colors duration-300 flex items-center justify-center"
    >
      <Icon size={18} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900 text-white">
      <Container className="py-10 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
          <div className="flex flex-col gap-3 lg:flex lg:flex-col lg:gap-3">
            <Logo variant="light" className="h-10 md:h-11" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs mt-4">
              Hire pre-vetted offshore virtual assistants for your US-based
              business.
            </p>
            <p className="text-xs text-slate-500">{regionalText}</p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <SocialIcon key={social.name} icon={social.icon} href={social.href} ariaLabel={social.ariaLabel} />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex gap-8 flex-1 justify-between">
            <FooterColumn title="Company" items={companyLinks} />
            <FooterColumn title="Services" items={servicesLinks} />
            <FooterColumn title="Resources" items={resourcesLinks} />
            <FooterColumn title="Contact" items={contactItems} />
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-white/10">
          <div className="col-span-2 flex flex-col gap-3">
            <Logo variant="light" className="h-10 md:h-11" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs mt-4">
              Hire pre-vetted offshore virtual assistants for your US-based
              business.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <SocialIcon key={social.name} icon={social.icon} href={social.href} ariaLabel={social.ariaLabel} />
              ))}
            </div>
          </div>
          <FooterColumn title="Company" items={companyLinks} />
          <FooterColumn title="Services" items={servicesLinks} />
          <FooterColumn title="Resources" items={resourcesLinks} />
          <FooterColumn title="Contact" items={contactItems} />
        </div>

        <div className="border-t border-white/10 pt-5 flex items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; {year} {siteName}. All rights reserved.</p>
          <nav aria-label="Footer legal" className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
