"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";

type ImageMode = "cutout" | "photo";
type Variant = "default" | "stacked";

export const DEFAULT_ITEMS = [
  "Skills and experience verification",
  "Communication and cultural fit assessment",
  "Ongoing performance management",
  "Dedicated support from our team",
] as const;

export interface StandardProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly string[];
  image: { src: string; alt: string };
  imageMode?: ImageMode;
  variant?: Variant;
}

export default function Standard({
  id,
  eyebrow,
  heading,
  description,
  items,
  image,
  imageMode = "cutout",
  variant = "default",
}: StandardProps) {
  const isStacked = variant === "stacked";
  const leftColumn = items.slice(0, 3);
  const rightColumn = items.slice(3);

  return (
    <section id={id} className="bg-white py-10 md:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line-soft bg-linear-to-br from-white to-brand-tint shadow-card">
          {isStacked ? (
            <div
              className={[
                "grid gap-8 lg:gap-0 items-center",
                "grid-cols-1 md:grid-cols-[40_60] lg:grid-cols-[44_56]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Left: image panel */}
              <div className="relative h-64 sm:h-72 lg:h-full lg:min-h-84 overflow-visible">
                {imageMode === "photo" ? (
                  <div
                    className="standard-photo z-10 bottom-0 left-0 h-full w-full overflow-hidden lg:clip-path-[polygon(0_0,_100%_0,_94%_100%,_0_100%)]"
                  >
                    <Image
                      fill
                      src={image.src}
                      alt={image.alt}
                      sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                      className="object-cover object-[40%_top]"
                      priority
                    />
                  </div>
                ) : (
                  <>
                    <div className="standard-edge z-0" aria-hidden={true} />
                    <div className="standard-photo z-10 bottom-0 left-0 h-full w-full overflow-visible">
                      <Image
                        fill
                        src={image.src}
                        alt={image.alt}
                        sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                        className="object-cover object-[40%_top]"
                        priority
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Right: vertical stack */}
              <div className="px-6 py-8 lg:px-12 lg:py-12 flex flex-col justify-center">
                {eyebrow && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                    {eyebrow}
                  </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-text-heading">
                  {heading}
                </h2>
                <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-text-body">
                  {description}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-y-4 gap-x-8 lg:gap-x-10 lg:whitespace-nowrap">
                  <li className="flex flex-col gap-y-4">
                    {leftColumn.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-primary">
                          <Check className="size-3.5 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-base font-medium text-text-heading">
                          {item}
                        </span>
                      </div>
                    ))}
                  </li>
                  <li className="flex flex-col gap-y-4">
                    {rightColumn.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-primary">
                          <Check className="size-3.5 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-base font-medium text-text-heading">
                          {item}
                        </span>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.5fr_1.1fr] items-center">
              {/* Photo column */}
              <div className="relative h-64 sm:h-72 lg:h-full lg:min-h-84 overflow-visible">
                {imageMode === "photo" ? (
                  <div
                    className="standard-photo z-10 bottom-0 left-0 h-full w-full overflow-hidden lg:clip-path-[polygon(0_0,_100%_0,_94%_100%,_0_100%)]"
                  >
                    <Image
                      fill
                      src={image.src}
                      alt={image.alt}
                      sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                      className="object-cover object-[40%_top]"
                      priority
                    />
                  </div>
                ) : (
                  <>
                    <div className="standard-edge z-0" aria-hidden={true} />
                    <div className="standard-photo z-10 bottom-0 left-0 h-full w-full overflow-visible">
                      <Image
                        fill
                        src={image.src}
                        alt={image.alt}
                        sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                        className="object-cover object-[40%_top]"
                        priority
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Text column */}
              <div className="px-6 py-8 lg:pl-12 lg:pr-6 lg:py-10">
                {eyebrow && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                    {eyebrow}
                  </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-text-heading">
                  {heading}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-text-body">
                  {description}
                </p>
              </div>

              {/* Checklist column */}
              <div className="px-6 pb-8 lg:px-8 lg:py-10">
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-primary">
                        <Check className="size-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-base font-medium text-text-heading">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
