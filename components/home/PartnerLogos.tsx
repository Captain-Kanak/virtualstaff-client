"use client";

// PLACEHOLDER logos: replace the files in /images/partners with the client's real partner logos before launch
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

const partners = [
  { name: "CardFactory", src: "/images/partners/cardfactory.png", scale: 1.15 },
  { name: "Culture Amp", src: "/images/partners/culture_amp.png", scale: 1.15 },
  { name: "SafetyCulture", src: "/images/partners/safety_culture.png", scale: 1.15 },
  { name: "SkyScanner", src: "/images/partners/sky_scanner.png", scale: 1.15 },
  { name: "Virgin", src: "/images/partners/virgin.png", scale: 1.15 },
] as const;

// placeholder number, confirm with client

export default function PartnerLogos() {
  return (
    <Container className="bg-white py-10 md:py-14">
      <Reveal>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-2 mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] text-foreground">
            Trusted by businesses like these, and
            <br />
            <span className="text-primary">2,500+ growing companies</span>{" "}
            across the US and beyond
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 mt-8">
        {partners.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className={`relative flex h-28 md:h-32 lg:h-36 items-center justify-center rounded-3xl bg-white px-4 py-3 shadow-[0_6px_24px_color-mix(in_srgb,var(--brand-secondary)_8%,transparent)] border border-line-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${i === partners.length - 1 ? "last:col-span-2 sm:last:col-span-1" : ""}`}>
              <div className="relative h-full w-full" style={{ transform: `scale(${p.scale ?? 1})` }}>
                <Image
                  src={p.src}
                  alt={`${p.name} logo`}
                  fill
                  sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 45vw"
                  className="object-contain"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={partners.length * 0.08}>
        <p className="mt-6 text-center text-sm text-text-body max-w-2xl mx-auto">
          Most of our clients are growing small and mid-sized businesses.
        </p>
      </Reveal>
    </Container>
  );
}
