"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Container from "@/components/ui/Container";

const tiles = [
  {
    icon: "/images/icons/check-icon.png",
    width: 48,
    height: 48,
    text: "Try any seat",
    highlight: "risk-free for 30 days",
  },
  {
    icon: "/images/icons/np-icon3.png",
    width: 96,
    height: 97,
    text: "Full refund",
    highlight: "if you're not satisfied",
  },
  {
    icon: "/images/icons/pIcon1.png",
    width: 146,
    height: 146,
    text: "One seat supports",
    highlight: "one ongoing team member",
  },
  {
    icon: "/images/icons/pIcon3.png",
    width: 146,
    height: 146,
    text: "Cancel anytime",
    highlight: "no questions asked",
  },
];

export default function Guarantee() {
  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <Container className="relative z-10">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#eaf6fe] via-blue-50 to-white shadow-[0_20px_60px_rgba(37,99,235,0.12)] ring-1 ring-white/70 grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-8 lg:gap-12 p-6 md:p-10 lg:p-12">
          {/* Left: 30-day badge image */}
          <div className="relative w-full max-w-[560px] mx-auto h-auto">
            <Image
              src="/images/icons/30-day.png"
              alt="30-day money-back guarantee badge"
              width={1144}
              height={1375}
              className="w-full max-w-[560px] h-auto object-contain [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_62%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_62%,transparent_100%)]"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>

          {/* Right: content */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Try your first seat for{" "}
              <span className="text-blue-600 relative inline-block">
                30 days, risk-free
                <svg
                  className="absolute -bottom-0.75 left-0 w-full h-3"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,3 Q50,1 100,3"
                    stroke="currentColor"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-7 mt-5">
              Add your first assistant, bring them into your business and see what it
              is like to work with a dedicated team member. If it isn&rsquo;t the right fit
              within your first 30 days, we&rsquo;ll make it right or refund your seat fee.
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-7 mt-4">
              There are no long-term contracts, so you can cancel anytime, no questions
              asked. You get to know the team first, and we stand behind every seat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-7">
              {tiles.map((tile, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-blue-900/5 border border-blue-50 text-left"
                >
                  <Image
                    src={tile.icon}
                    alt=""
                    width={tile.width}
                    height={tile.height}
                    className="size-12 object-contain shrink-0"
                  />
                  <span className="text-[15px] leading-snug text-slate-600">
                    {tile.text} <span className="font-semibold text-slate-900">{tile.highlight}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center sm:text-left text-lg font-bold text-slate-900 mt-6">
              Hire with confidence. We stand behind every seat.
            </p>
            <Button
              variant="brand"
              size="xl"
              className="mt-4 w-full sm:w-auto sm:min-w-[320px] h-14 px-8 rounded-xl bg-linear-to-b from-blue-500 to-blue-600 text-white text-lg font-semibold shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500"
              nativeButton={false}
              render={
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  Build Your Team
                  <svg
                    className="size-4 transition-transform hover:translate-x-0.5"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
