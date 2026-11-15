"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { comparisonRows, comparisonColumns, checkIcon, crossIcon } from "@/lib/comparison";

const iconSizes = {
  row: { w: 44, h: 44 },
  headerOurs: { w: 52, h: 52 },
  headerOther: { w: 48, h: 48 },
  check: { w: 22, h: 22 },
};

// Natural pixel dimensions of each row icon, used to preserve aspect ratio
// when rendering at a fixed width (avoids Next.js width/height warnings).
const iconDims: Record<string, { w: number; h: number }> = {
  "/images/icons/np-icon1.png": { w: 96, h: 73 },
  "/images/icons/np-icon2.png": { w: 96, h: 96 },
  "/images/icons/np-icon3.png": { w: 96, h: 97 },
  "/images/icons/np-icon4.png": { w: 96, h: 89 },
  "/images/icons/np-icon5.png": { w: 96, h: 87 },
  "/images/icons/np-icon6.png": { w: 352, h: 352 },
  "/images/icons/np-icon7.png": { w: 352, h: 352 },
  "/images/icons/np-icon8.png": { w: 352, h: 352 },
  "/images/icons/WarningIconBlue.png": { w: 96, h: 95 },
  "/images/icons/check-icon.png": { w: 48, h: 48 },
};

function rowIconSize(icon: string) {
  const d = iconDims[icon] ?? iconSizes.row;
  return {
    width: iconSizes.row.w,
    height: Math.max(1, Math.round((iconSizes.row.w * d.h) / d.w)),
  };
}

export default function ComparisonTable() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-heading tracking-tight leading-tight inline-block relative">
            Why teams choose
            <span className="text-primary relative inline-block ml-1">
              RemoteStaff365
              <span className="text-primary ml-1">✦</span>
            </span>
          </h2>
          <p className="text-text-body text-lg mt-4 max-w-2xl mx-auto">
            See how RemoteStaff365 stacks up against traditional agencies and job boards.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block pt-4">
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xl">
            <table className="w-full text-left border-separate border-spacing-0">
              <caption className="sr-only">
                Comparison of RemoteStaff365 vs traditional agencies vs job boards
              </caption>
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="h-auto w-[24%] px-5 py-5 text-left align-top relative rounded-tl-3xl border-b border-r border-line" />
                  {comparisonColumns.map((col, ci) => {
                    const isOurs = col.key === "ours";
                    return (
                      <th
                        key={col.key}
                        scope="col"
                          className={[
                            "px-5 py-5 text-left align-top relative",
                            isOurs
                              ? "bg-gradient-to-b from-brand-primary to-brand-primary-light text-white border-x-2 border-brand-primary border-b border-r border-white/25"
                              : ci === comparisonColumns.length - 1
                                ? "bg-brand-soft border-b border-line text-text-heading rounded-tr-3xl"
                                : "bg-brand-soft border-b border-r border-line text-text-heading",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        style={{ width: isOurs ? "28%" : "24%" }}
                      >
                        <div className="flex flex-col h-full items-start justify-center gap-2">
                          {isOurs && (
                            <>
                              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-text-heading shadow-sm">
                              <Image
                                src={crossIcon}
                                width={iconSizes.check.w}
                                height={iconSizes.check.h}
                                alt=""
                                className="object-cover shrink-0 rounded-full overflow-hidden mt-0.5"
                              />
                                OUR APPROACH
                              </span>
                              <div className="flex items-center gap-4 pl-2">
                                <div className="relative size-13 rounded-full bg-white p-2 shadow-md flex items-center justify-center">
                                  <Image
                                    src={col.icon}
                                    width={iconSizes.headerOurs.w}
                                    height={iconSizes.headerOurs.h}
                                    alt=""
                                    className="object-cover rounded-full overflow-hidden"
                                  />
                                </div>
                                <div>
                                  <div className="font-bold text-lg text-white leading-snug">
                                    {col.label}
                                  </div>
                                  <div className="text-sm font-normal text-white mt-0.5 leading-snug max-w-[170px]">
                                    {col.caption}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {!isOurs && (
                            <div className="flex items-center gap-4">
                              <Image
                                src={col.icon}
                                width={iconSizes.headerOther.w}
                                height={iconSizes.headerOther.h}
                                alt=""
                                className="object-cover rounded-full overflow-hidden shrink-0"
                              />
                              <div>
                                <div className="font-semibold text-base md:text-lg text-text-heading leading-snug">
                                  {col.label}
                                </div>
                                <div className="text-sm font-normal text-text-body mt-0.5 leading-snug max-w-[140px]">
                                  {col.caption}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => {
                  return (
                    <tr key={row.title} className="border-t border-line-soft">
                      <th
                        scope="row"
                        className="px-5 py-5 border-b border-r border-line bg-white align-top"
                        style={{ width: "24%" }}
                      >
                        <div className="flex items-start gap-3">
                          <Image
                            src={row.icon}
                            width={rowIconSize(row.icon).width}
                            height={rowIconSize(row.icon).height}
                            alt=""
                            className="object-cover shrink-0 rounded-full overflow-hidden"
                          />
                          <div>
                            <div className="text-[15px] font-semibold text-text-heading leading-5">
                              {row.title}
                            </div>
                            <div className="text-xs font-normal text-text-body mt-0.5 leading-relaxed">
                              {row.caption}
                            </div>
                          </div>
                        </div>
                      </th>
                      <td
                        className="px-5 py-5 border-b border-r border-line bg-brand-soft/80 align-top z-10 shadow-xl shadow-[0_0_20px_color-mix(in_srgb,var(--brand-primary)_10%,transparent)] relative"
                        style={{ width: "28%" }}
                      >
                        <div className="flex gap-2.5 items-start">
                          <Image
                            src={checkIcon}
                            width={iconSizes.check.w}
                            height={iconSizes.check.h}
                            alt=""
                            className="object-cover shrink-0 rounded-full overflow-hidden mt-0.5"
                          />
                          <div>
                            <span className="font-semibold text-primary leading-6">
                              {row.ours.lead}
                            </span>{" "}
                            <span className="text-text-body leading-6">
                              {row.ours.rest}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td
                        className={`px-5 py-5 border-b border-r align-top ${
                          row.agency.tone === "bad"
                            ? "bg-brand-soft border-line"
                            : "border-line bg-white"
                        }`}
                        style={{ width: "24%" }}
                      >
                        <div className="flex gap-2.5 items-start">
                          {row.agency.tone === "bad" && (
                            <Image
                              src={crossIcon}
                              width={iconSizes.check.w}
                              height={iconSizes.check.h}
                              alt=""
                              className="object-contain shrink-0 mt-0.5"
                            />
                          )}
                          <div>
                            <span className={`font-medium leading-6 ${
                              row.agency.tone === "bad"
                                ? "text-primary"
                                : "text-text-heading text-[15px]"
                            }`}>
                              {row.agency.lead}
                            </span>{" "}
                            <span className="text-text-body leading-6">
                              {row.agency.rest}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td
                        className={`px-5 py-5 border-b align-top ${
                          row.boards.tone === "bad"
                            ? "bg-brand-soft border-line"
                            : "border-line bg-white"
                        }`}
                        style={{ width: "24%" }}
                      >
                        <div className="flex gap-2.5 items-start">
                          {row.boards.tone === "bad" && (
                            <Image
                              src={crossIcon}
                              width={iconSizes.check.w}
                              height={iconSizes.check.h}
                              alt=""
                              className="object-contain shrink-0 mt-0.5"
                            />
                          )}
                          <div>
                            <span className={`font-medium leading-6 ${
                              row.boards.tone === "bad"
                                ? "text-primary"
                                : "text-text-heading text-[15px]"
                            }`}>
                              {row.boards.lead}
                            </span>{" "}
                            <span className="text-text-body leading-6">
                              {row.boards.rest}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr className="border-t-0">
                  <th scope="row" className="px-5 py-5 border-r border-line-soft bg-white rounded-bl-3xl" style={{ width: "24%" }} />
                  <td className="border-r border-line" style={{ width: "28%" }} />
                  <td className="border-r border-line" style={{ width: "24%" }} />
                  <td className="rounded-br-3xl" style={{ width: "24%" }} />
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row) => {
            return (
              <div key={row.title} className="rounded-2xl border border-line-soft bg-white p-5">
                <div className="flex items-start gap-3 mb-4">
                  <Image
                    src={row.icon}
                    width={rowIconSize(row.icon).width}
                    height={rowIconSize(row.icon).height}
                    alt=""
                    className="object-contain shrink-0"
                  />
                  <div>
                    <div className="text-[15px] font-semibold text-text-heading leading-5">
                      {row.title}
                    </div>
                    <div className="text-xs font-normal text-text-body mt-0.5 leading-relaxed">
                      {row.caption}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      label: "RemoteStaff365",
                      cell: row.ours,
                      icon: checkIcon,
                      bg: "bg-brand-soft/70",
                      leadClass: "font-semibold text-primary",
                    },
                    {
                      label: "Traditional agencies",
                      cell: row.agency,
                      icon: row.agency.tone === "bad" ? crossIcon : null,
                      bg: row.agency.tone === "bad" ? "bg-brand-soft" : "bg-white",
                      leadClass: `font-medium leading-6 ${
                        row.agency.tone === "bad"
                          ? "text-primary"
                          : "text-text-heading text-[15px]"
                      }`,
                    },
                    {
                      label: "Job boards / marketplaces",
                      cell: row.boards,
                      icon: row.boards.tone === "bad" ? crossIcon : null,
                      bg: row.boards.tone === "bad" ? "bg-brand-soft" : "bg-white",
                      leadClass: `font-medium leading-6 ${
                        row.boards.tone === "bad"
                          ? "text-primary"
                          : "text-text-heading text-[15px]"
                      }`,
                    },
                  ].map((block) => (
                    <div
                      key={block.label}
                      className={`rounded-xl p-4 ${block.bg}`}
                    >
                      <div className="flex items-start gap-2.5">
                        {block.icon && (
                      <Image
                        src={block.icon}
                        width={iconSizes.check.w}
                        height={iconSizes.check.h}
                        alt=""
                        className="object-cover shrink-0 rounded-full overflow-hidden mt-0.5"
                      />
                        )}
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-text-body mb-1">
                            {block.label}
                          </div>
                          <span className={block.leadClass}>
                            {block.cell.lead}
                          </span>{" "}
                          <span className="text-text-body leading-6">
                            {block.cell.rest}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
