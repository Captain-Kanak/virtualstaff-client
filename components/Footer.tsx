"use client";

import * as React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { siteName } from "@/lib/site";
import Container from "@/components/Container";
import Logo from "@/components/ui/Logo";

const year = new Date().getFullYear();

const companyLinks = [
  { name: "About", href: "/about" },
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
    <div className="flex flex-col gap-5">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => {
          const isLink = item.asLink !== false && !!item.href;
          if (isLink) {
            return (
              <li key={item.name}>
                <Link
                  href={item.href!}
                  className="text-base text-text-body py-0.5 transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:rounded-sm"
                >
                  {item.name}
                </Link>
              </li>
            );
          }
          return (
            <li key={item.name} className="text-base text-text-body py-0.5">
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
      className="size-9 rounded-full bg-white/10 text-white hover:bg-brand-primary transition-colors duration-300 flex items-center justify-center"
    >
      <Icon size={18} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-footer-bg text-white">
      <Container className="py-12 md:py-14">
        <div className="lg:grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Logo variant="light" className="h-10 md:h-11" />
            <p className="text-base leading-7 text-text-body max-w-xs mt-4">
              Hire pre-vetted offshore virtual assistants for your US-based
              business.
            </p>
            <p className="text-sm text-text-body">{regionalText}</p>
            <div className="flex flex-wrap gap-3 pb-2 mt-6">
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

        <div className="lg:hidden grid grid-cols-2 gap-8 mt-6 pt-6 border-t border-white/10">
          <div className="col-span-2 flex flex-col gap-5">
            <Logo variant="light" className="h-10 md:h-11" />
            <p className="text-base leading-7 text-text-body max-w-xs mt-4">
              Hire pre-vetted offshore virtual assistants for your US-based
              business.
            </p>
            <p className="text-sm text-text-body">{regionalText}</p>
            <div className="flex flex-wrap gap-3 pb-2 mt-6">
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

        <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 pb-6 flex items-center justify-between gap-4 text-sm md:text-[15px] text-text-body">
          <p>&copy; {year} {siteName}. All rights reserved.</p>
          <nav aria-label="Footer legal" className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-text-body hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-text-body hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
