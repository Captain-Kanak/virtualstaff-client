"use client";

import * as React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { testimonials } from "@/lib/testimonials";

function TestimonialCard({ t, clone, index }: { t: (typeof testimonials)[number]; clone?: boolean; index?: number }) {
  const quoteParts = t.quote.split("RemoteStaff365");
  const extra = clone ? { "aria-hidden": true, tabIndex: -1 } : {};
  return (
    <div
      data-slide
      role="group"
      aria-roledescription="slide"
      aria-label={clone ? undefined : `Testimonial ${index !== undefined ? index + 1 : 1} of ${testimonials.length}`}
      {...extra}
      className="flex shrink-0 flex-none"
    >
      <div className="relative h-full w-full flex flex-col items-center text-center rounded-[32px] bg-white shadow-[0_10px_30px_rgba(30,64,175,0.10)] px-6 pt-[52px] pb-6">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[38px] flex items-center justify-center z-10">
          <div className="relative w-[150px] h-[76px] rounded-[22px] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.10)] flex items-center justify-center">
            {t.logo ? (
              <Image
                src={t.logo}
                alt={`${t.company} logo`}
                width={110}
                height={48}
                className="object-contain max-h-[48px] max-w-[110px]"
                loading="lazy"
              />
            ) : (
              <span className="text-[15px] font-extrabold uppercase tracking-wide text-slate-800 text-center leading-tight max-w-[110px]">
                {t.company}
              </span>
            )}
          </div>
        </div>
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
        <p className="italic text-[17px] md:text-lg leading-7 text-slate-800 text-center w-full">
          {quoteParts.map((part, pIdx) => (
            <React.Fragment key={pIdx}>
              {part && <span className="italic">{part}</span>}
              {pIdx < quoteParts.length - 1 && (
                <span className="text-blue-600 not-italic">
                  RemoteStaff365
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
        <div className="mt-auto pt-5 flex flex-col items-center text-center w-full">
          <p className="text-base font-semibold text-slate-900">{t.name}</p>
          <p className="text-sm text-slate-700 mt-1">{t.title}</p>
          <p className="text-sm mt-1 font-medium text-blue-600">{t.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(1);
  const [running, setRunning] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(1);
  const [renderKey, setRenderKey] = React.useState(0);
  const stepRef = React.useRef(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const N = testimonials.length;

  const measure = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const style = getComputedStyle(track);
    const gap = parseInt(style.gap) || 6;
    const cardWidth = first.offsetWidth;
    stepRef.current = cardWidth + gap;
  }, []);

  const computeV = React.useCallback((): number => {
    const w = typeof window !== "undefined" ? window.innerWidth : 0;
    if (w >= 1280) return 3;
    if (w >= 640) return 2;
    return 1;
  }, []);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const v = computeV();
    if (v !== visibleCount) {
      setTimeout(() => {
        setVisibleCount(v);
        setIndex(v);
      }, 0);
    }
    measure();
    const ro = new ResizeObserver(() => {
      const v2 = computeV();
      setVisibleCount(v2);
      setIndex(v2);
      measure();
      setRenderKey((k) => k + 1);
    });
    ro.observe(track);
    return () => ro.disconnect();
  }, [computeV, measure, visibleCount]);

  const V = visibleCount;

  const setTranslate = React.useCallback((i: number) => {
    const track = trackRef.current;
    if (!track || stepRef.current <= 0) return;
    track.style.transition = running ? "transform 700ms cubic-bezier(0.22,1,0.36,1)" : "none";
    track.style.transform = `translateX(${-i * stepRef.current}px)`;
  }, [running]);

  const jump = React.useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "none";
    track.style.transform = `translateX(${-i * stepRef.current}px)`;
    void track.getBoundingClientRect();
    track.style.transition = running ? "transform 700ms cubic-bezier(0.22,1,0.36,1)" : "none";
  }, [running]);

  const onTransitionEnd = React.useCallback(() => {
    setRunning(false);
    if (index >= V + N) {
      jump(V);
      setIndex(V);
    } else if (index < V) {
      jump(N + V - 1);
      setIndex(N + V - 1);
    }
  }, [index, V, N, jump]);

  React.useEffect(() => {
    setTranslate(index);
  }, [index, setTranslate]);

  const moveNext = React.useCallback(() => {
    if (running) return;
    setRunning(true);
    setIndex(index + 1);
  }, [running, index]);

  const movePrev = React.useCallback(() => {
    if (running) return;
    setRunning(true);
    setIndex(index - 1);
  }, [running, index]);

  // Autoplay
  React.useEffect(() => {
    if (prefersReducedMotion) return;
    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (id) clearInterval(id);
      id = setInterval(() => moveNext(), 5000);
    };
    const pause = () => {
      if (id) clearInterval(id);
      id = null;
    };

    const el = wrapperRef.current;
    el?.addEventListener("pointerenter", pause);
    el?.addEventListener("pointerleave", start);
    el?.addEventListener("focusin", pause);
    el?.addEventListener("focusout", start);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) pause();
      else start();
    });

    start();
    return () => {
      if (id) clearInterval(id);
      el?.removeEventListener("pointerenter", pause);
      el?.removeEventListener("pointerleave", start);
      el?.removeEventListener("focusin", pause);
      el?.removeEventListener("focusout", start);
      document.removeEventListener("visibilitychange", pause);
    };
  }, [prefersReducedMotion, moveNext]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    (e.currentTarget as { startX?: number }).startX = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const startX = (e.currentTarget as { startX?: number }).startX;
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) {
      if (dx > 0) movePrev();
      else moveNext();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      movePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      moveNext();
    }
  };

  return (
    <section className="relative isolate overflow-hidden py-12 md:py-16 bg-blue-50">
      {/* Layer 1: background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/testimonial-bg.png')" }}
      />
      {/* Layer 2: gradient overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-white via-blue-50/40 to-white" />

      <Container className="relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            What our clients say
            <br />
            <span className="text-blue-600">about RemoteStaff365</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 mt-5 max-w-xl mx-auto">
            Hear from teams that scaled with RemoteStaff365.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div
          ref={wrapperRef}
          className="relative mt-6 lg:px-[72px]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          style={{ touchAction: "pan-y" }}
        >
          <div
            ref={trackRef}
            className={[
              "flex items-stretch overflow-hidden [--gap:1.5rem] gap-[var(--gap)] pb-8 pt-14 scroll-pl-4 scroll-pr-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]",
            ]
              .filter(Boolean)
              .join(" ")}
            key={renderKey}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            aria-live={running ? "off" : "polite"}
            onTransitionEnd={onTransitionEnd}
          >
            {/* Left clones */}
            {testimonials.slice(-V).map((t, i) => (
              <TestimonialCard key={`clone-l-${i}`} t={t} clone index={N - V + i} />
            ))}
            {/* Originals */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`s-${i}`} t={t} index={i} />
            ))}
            {/* Right clones */}
            {testimonials.slice(0, V).map((t, i) => (
              <TestimonialCard key={`clone-r-${i}`} t={t} clone index={i} />
            ))}
          </div>

          {/* Arrows outside cards from lg (1024px) up */}
          <div className="hidden lg:block">
            <button
              onClick={() => movePrev()}
              className={`absolute left-0 top-1/2 -translate-y-1/2 top-[calc(50%+8px)] z-20 size-13 rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] cursor-pointer transition transform hover:bg-blue-600 hover:text-white active:scale-95 flex items-center justify-center`}
              aria-label="Previous testimonial"
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-900"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => moveNext()}
              className={`absolute right-0 top-1/2 -translate-y-1/2 top-[calc(50%+8px)] z-20 size-13 rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] cursor-pointer transition transform hover:bg-blue-600 hover:text-white active:scale-95 flex items-center justify-center`}
              aria-label="Next testimonial"
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-900"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
