"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/Container";

export interface ImageFeatureSectionProps {
  id: string;
  heading: string;
  description?: string;
  items: string[];
  image: { src: string; alt: string };
  columns?: 1 | 2;
}

export default function ImageFeatureSection({
  id,
  heading,
  description,
  items,
  image,
  columns = 2,
}: ImageFeatureSectionProps) {
  const isSingleColumn = columns === 1;
  const listClasses = isSingleColumn
    ? "mt-6 grid grid-cols-1 gap-y-4"
    : "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 lg:gap-x-10 xl:whitespace-nowrap";

  return (
    <section id={id} className="bg-white py-10 md:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line-soft bg-linear-to-br from-white to-brand-tint shadow-card">
          <div className="grid gap-8 lg:gap-0 items-center grid-cols-1 lg:grid-cols-[minmax(0,5.2fr)_minmax(0,7fr)]">
            {/* Left: image panel */}
            <div className="relative h-64 sm:h-80 lg:min-h-[380px] overflow-visible">
              <div className="standard-edge z-0" aria-hidden={true} />
              <div className="standard-photo z-10 bottom-0 left-0 h-full w-full overflow-visible">
                <Image
                  fill
                  src={image.src}
                  alt={image.alt}
                  sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover object-right-top"
                  priority
                />
              </div>
            </div>

            {/* Right: vertical stack */}
            <div className="px-6 sm:p-8 px-10 xl:px-14 py-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-text-heading">
                {heading}
              </h2>
              {description && (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-text-body">
                  {description}
                </p>
              )}
              <ul className={listClasses}>
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
        </div>
      </Container>
    </section>
  );
}
