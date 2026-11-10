import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialLinks, siteName } from "@/lib/site";

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

function Column({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold tracking-tight text-white uppercase">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
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
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
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
            <p className="text-white/80 text-sm max-w-xs leading-relaxed">
              Connecting US companies with top offshore virtual assistants.
            </p>
          </div>

          <Column title="Company" items={footerLinks.company} />
          <Column title="Build Your Team" items={footerLinks.hireTalent} />
          <Column title="Industries" items={footerLinks.industries} />
          <Column title="Legal" items={footerLinks.legal} />
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/20 flex flex-col lg:flex-row items-center justify-between gap-4 text-white/80 text-sm">
          <p>&copy; {year} {siteName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
                aria-label={social.name}
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
