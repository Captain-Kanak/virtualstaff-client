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

export default function ComparisonTable() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight inline-block relative">
            Why teams choose
            <span className="text-blue-600 relative inline-block ml-1">
              RemoteStaff365
              <span className="text-blue-600 ml-1">✦</span>
            </span>
          </h2>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            See how RemoteStaff365 stacks up against traditional agencies and job boards.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block pt-4">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-900/5">
            <table className="w-full text-left border-separate border-spacing-0">
              <caption className="sr-only">
                Comparison of RemoteStaff365 vs traditional agencies vs job boards
              </caption>
              <thead>
                <tr className="border-b border-slate-100">
                  <th scope="col" className="h-auto w-[24%] px-5 py-5 text-left align-top relative rounded-tl-3xl" />
                  {comparisonColumns.map((col, ci) => {
                    const isOurs = col.key === "ours";
                    return (
                      <th
                        key={col.key}
                        scope="col"
                        className={[
                          "px-5 py-5 text-left align-top relative",
                          isOurs
                            ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white border-x-2 border-blue-500"
                            : "bg-slate-50 border-b border-slate-100 text-slate-900",
                          ci === comparisonColumns.length - 1 ? "rounded-tr-3xl" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        style={{ width: isOurs ? "28%" : "24%" }}
                      >
                        <div className="flex flex-col h-full items-start justify-center gap-2">
                          {isOurs && (
                            <>
                              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-amber-950 shadow-sm">
                                <Image
                                  src={checkIcon}
                                  width={iconSizes.check.w}
                                  height={iconSizes.check.h}
                                  alt=""
                                  className="object-contain shrink-0"
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
                                    className="object-contain"
                                  />
                                </div>
                                <div>
                                  <div className="font-bold text-lg text-white leading-snug">
                                    {col.label}
                                  </div>
                                  <div className="text-sm font-normal text-blue-100 mt-0.5 leading-snug max-w-[170px]">
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
                                className="object-contain shrink-0"
                              />
                              <div>
                                <div className="font-semibold text-base md:text-lg text-slate-900 leading-snug">
                                  {col.label}
                                </div>
                                <div className="text-sm font-normal text-slate-500 mt-0.5 leading-snug max-w-[140px]">
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
                    <tr key={row.title} className="border-t border-slate-100">
                      <th
                        scope="row"
                        className="px-5 py-5 border-r border-slate-100 bg-white align-top"
                        style={{ width: "24%" }}
                      >
                        <div className="flex items-start gap-3">
                          <Image
                            src={row.icon}
                            width={iconSizes.row.w}
                            height={iconSizes.row.h}
                            alt=""
                            className="object-contain shrink-0"
                          />
                          <div>
                            <div className="text-[15px] font-semibold text-slate-900 leading-5">
                              {row.title}
                            </div>
                            <div className="text-xs font-normal text-slate-500 mt-0.5 leading-relaxed">
                              {row.caption}
                            </div>
                          </div>
                        </div>
                      </th>
                      <td
                        className="px-5 py-5 border-r-2 border-blue-500 bg-blue-50/80 align-top z-10 shadow-xl shadow-blue-600/10 relative"
                        style={{ width: "28%" }}
                      >
                        <div className="flex gap-2.5 items-start">
                          <Image
                            src={checkIcon}
                            width={iconSizes.check.w}
                            height={iconSizes.check.h}
                            alt=""
                            className="object-contain shrink-0 mt-0.5"
                          />
                          <div>
                            <span className="font-semibold text-blue-700 leading-6">
                              {row.ours.lead}
                            </span>{" "}
                            <span className="text-slate-700 leading-6">
                              {row.ours.rest}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td
                        className={`px-5 py-5 align-top ${
                          row.agency.tone === "bad"
                            ? "bg-red-50/60 border-r border-red-100"
                            : "border-r border-slate-100 bg-white"
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
                                ? "text-red-600"
                                : "text-slate-800 text-[15px]"
                            }`}>
                              {row.agency.lead}
                            </span>{" "}
                            <span className="text-slate-600 leading-6">
                              {row.agency.rest}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td
                        className={`px-5 py-5 align-top ${
                          row.boards.tone === "bad"
                            ? "bg-red-50/60"
                            : "bg-white"
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
                                ? "text-red-600"
                                : "text-slate-800 text-[15px]"
                            }`}>
                              {row.boards.lead}
                            </span>{" "}
                            <span className="text-slate-600 leading-6">
                              {row.boards.rest}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr className="border-t-0">
                  <th scope="row" className="px-5 py-5 border-r border-slate-100 bg-white rounded-bl-3xl" style={{ width: "24%" }} />
                  <td className="border-b-2 border-b-blue-500" style={{ width: "28%" }} />
                  <td className="border-b border-slate-100" style={{ width: "24%" }} />
                  <td className="border-b border-slate-100 rounded-br-3xl" style={{ width: "24%" }} />
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row) => {
            return (
              <div key={row.title} className="rounded-2xl border border-slate-100 bg-white p-5">
                <div className="flex items-start gap-3 mb-4">
                  <Image
                    src={row.icon}
                    width={iconSizes.row.w}
                    height={iconSizes.row.h}
                    alt=""
                    className="object-contain shrink-0"
                  />
                  <div>
                    <div className="text-[15px] font-semibold text-slate-900 leading-5">
                      {row.title}
                    </div>
                    <div className="text-xs font-normal text-slate-500 mt-0.5 leading-relaxed">
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
                      bg: "bg-blue-50/70",
                      leadClass: "font-semibold text-blue-700",
                    },
                    {
                      label: "Traditional agencies",
                      cell: row.agency,
                      icon: row.agency.tone === "bad" ? crossIcon : null,
                      bg: row.agency.tone === "bad" ? "bg-red-50/60" : "bg-white",
                      leadClass: `font-medium leading-6 ${
                        row.agency.tone === "bad"
                          ? "text-red-600"
                          : "text-slate-800 text-[15px]"
                      }`,
                    },
                    {
                      label: "Job boards / marketplaces",
                      cell: row.boards,
                      icon: row.boards.tone === "bad" ? crossIcon : null,
                      bg: row.boards.tone === "bad" ? "bg-red-50/60" : "bg-white",
                      leadClass: `font-medium leading-6 ${
                        row.boards.tone === "bad"
                          ? "text-red-600"
                          : "text-slate-800 text-[15px]"
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
                            className="object-contain shrink-0 mt-0.5"
                          />
                        )}
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                            {block.label}
                          </div>
                          <span className={block.leadClass}>
                            {block.cell.lead}
                          </span>{" "}
                          <span className="text-slate-600 leading-6">
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
