"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/core";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as React from "react";
import Container from "@/components/ui/Container";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    setTimeout(() => setReducedMotion(mq.matches), 0);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const breakpoints = {
    0: { slidesPerView: 1.12, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    1280: { slidesPerView: 3, spaceBetween: 24 },
  };

  return (
    <section
      className="relative isolate overflow-hidden py-12 md:py-16 bg-blue-50"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      {/* Layer 1: background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/testimonial-bg.png')" }}
      />
      {/* Layer 2: gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-b from-white via-blue-50/40 to-white"
      />

      <Container className="relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            What our clients say
            <br />
            <span className="text-blue-600">about RemoteStaff365</span>
          </h2>
          <p className="text-lg text-slate-700 mt-4 max-w-xl mx-auto">
            Hear from teams that scaled with RemoteStaff365.
          </p>
        </div>

        {/* Swiper wrapper with side padding for arrows */}
        <div className="relative mt-20 lg:px-18">
          {/* Clipping div so tabs and shadows show but neighbors stay hidden */}
          <div className="[clip-path:inset(-56px_-16px_-32px_-16px)]">
            <Swiper
              modules={[Autoplay, Keyboard, A11y]}
              loop
              speed={700}
              grabCursor
              keyboard={{ enabled: true }}
              autoplay={
                reducedMotion
                  ? false
                  : {
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              breakpoints={breakpoints as SwiperOptions["breakpoints"]}
              className="overflow-visible!"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {testimonials.map((t) => {
                const quoteParts = t.quote.split("RemoteStaff365");
                return (
                  <SwiperSlide key={t.name} className="h-auto!">
                    <div className="relative flex h-full flex-col items-center text-center rounded-[32px] bg-white px-6 pb-6 pt-13 shadow-[0_10px_30px_rgba(30,64,175,0.10)]">
                      {/* Logo tab */}
                      <div className="absolute left-1/2 top-0 z-10 flex h-19 w-37.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22px] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.10)]">
                        {t.logo ? (
                          <Image
                            src={t.logo}
                            alt={`${t.company} logo`}
                            width={110}
                            height={48}
                            className="max-h-12 w-auto object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-[15px] font-extrabold uppercase tracking-wide text-slate-800">
                            {t.company}
                          </span>
                        )}
                      </div>

                      {/* Quote icon */}
                      <div className="mb-3 flex justify-center">
                        <Image
                          src="/images/staffComment.svg"
                          alt=""
                          width={40}
                          height={40}
                          className="w-10 h-auto"
                          unoptimized
                        />
                      </div>

                      {/* Quote text */}
                      <p className="italic text-[17px] md:text-lg leading-7 text-slate-800 text-center w-full">
                        {quoteParts.map((part, pIdx) => (
                          <React.Fragment key={pIdx}>
                            {part && <span className="italic">{part}</span>}
                            {pIdx < quoteParts.length - 1 && (
                              <span className="text-blue-600 not-italic font-medium">
                                RemoteStaff365
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </p>

                      {/* Author block */}
                      <div className="mt-auto pt-5 flex flex-col items-center text-center w-full">
                        <p className="text-base font-semibold text-slate-900">
                          {t.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-700">{t.title}</p>
                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {t.company}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Arrows outside cards */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden lg:flex absolute top-1/2 z-20 size-13 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] cursor-pointer transition hover:bg-blue-600 hover:text-white active:scale-95 left-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-22 text-slate-900" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden lg:flex absolute top-1/2 z-20 size-13 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] cursor-pointer transition hover:bg-blue-600 hover:text-white active:scale-95 right-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-22 text-slate-900" />
          </button>
        </div>
      </Container>
    </section>
  );
}
