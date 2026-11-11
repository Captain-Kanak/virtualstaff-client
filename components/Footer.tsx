"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bookingUrl, siteName, socialLinks } from "@/lib/site";
import Container from "@/components/ui/Container";

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
  { label: "Email", value: "hello@remotestaff365.com" },
  { label: "Serving", value: "US businesses worldwide" },
];

const regionalText = "Hire talent from 7 regions worldwide";

const facebookSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.663 9.129 8.515 9.894v-6.584h-2.979v-2.886h2.979v-1.6c0-.408.22-.751.615-.751.392 0 .78.152.78.152v2.446h1.996l-.592 2.886h-1.404v6.584A10 10 0 0 0 22 12" />
  </svg>
);

const xSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231z" />
  </svg>
);

const linkedinSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14C9.471 0 8 1.478 8 3v18c0 1.522 1.471 3 3 3h14c1.522 0 3-1.478 3-3V3c0-1.522-1.478-3-3-3zm-9.333 13.333h-2.286v-5.572h2.286zm4.286 0h-2.286V9.943c0-2.433-1.51-4-4-4s-4 1.567-4 4v7.39h-2.286V3h2.286v2.309c1.716-.201 3.28-.788 4.752-1.467 1.169-.54 2.43-.93 3.868-.93 4.26 0 5.67 2.495 5.67 6.01v6.01z" />
  </svg>
);

const youtubeSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.226c-.621-3.187-2.925-5.478-5.875-5.478H2.373C.422.748 0 2.043 0 4.976v14.048c0 2.933.422 4.228.422 4.228s1.952-1.737 5.875-5.478c1.516-1.446 3.776-2.608 6.252-2.608s4.735 1.162 6.251 2.608c3.923 3.241 5.875 5.478 5.875 5.478s1.408-1.295 1.408-4.228V4.976c0-2.933-.422-4.228-.422-4.228-3.487-.001-4.736 1.162-6.251 2.608-2.475 2.362-4.736 3.524-6.252 2.608m-10.247 5.577v7.736l5.318-3.868z" />
  </svg>
);

const socialIcons: Record<string, React.ReactNode> = {
  facebook: facebookSvg,
  x: xSvg,
  linkedin: linkedinSvg,
  youtube: youtubeSvg,
};

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold tracking-tight text-white uppercase">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:rounded-sm"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <Container className="py-16 lg:py-24">
        <div className="border-b border-white/10 pb-12 lg:pb-16 mb-10 lg:mb-16 flex flex-col lg:flex-row items-center justify-between lg:items-start gap-6 lg:gap-0">
          <div className="text-center lg:text-left max-w-lg">
            <h2 className="text-xl lg:text-2xl font-bold text-white">Ready to build your global team?</h2>
            <p className="text-sm text-white/70 mt-2 max-w-xs mx-auto lg:mx-0">
              Offshore virtual assistants for US-based companies.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="brand"
              size="xl"
              className="w-auto"
              render={
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <Image
                src="/logo.png"
                alt={`${siteName} logo`}
                width="32"
                height="32"
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="font-bold text-xl tracking-tight text-white">
                {siteName}
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Hire pre-vetted offshore virtual assistants for your US-based
              business.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white transition-colors"
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" items={companyLinks} />
          <FooterColumn title="Services" items={servicesLinks} />
          <FooterColumn title="Resources" items={resourcesLinks} />

          <div>
            <h2 className="mb-6 text-sm font-semibold tracking-tight text-white uppercase">Contact</h2>
            <ul className="space-y-4 text-sm">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-white/50">{item.label}</span>
                  <span className="text-white/80">
                    {item.label === "Email" ? (
                      <Link
                        href={`mailto:${item.value}`}
                        className="hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded-sm"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      item.value
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 lg:pt-16 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 text-xs text-white/60">
          <p className="leading-relaxed">
            &copy; {year} {siteName}. All rights reserved.
          </p>
          <nav aria-label="Footer legal" className="flex items-center gap-6">
            <Link
              href="/terms"
              className="hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded-sm"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded-sm"
            >
              Privacy
            </Link>
          </nav>
          <p className="text-white/60">{regionalText}</p>
        </div>
      </Container>
    </footer>
  );
}
