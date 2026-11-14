"use client";

import * as React from "react";
import { CheckCircle2, XCircle, Minus } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const rows = [
  {
    feature: "What you build",
    remote: "A dedicated team you choose yourself",
    agency: "Staff assigned by the agency",
    boards: "You find and screen everyone",
  },
  {
    feature: "Control",
    remote: "You choose people and set the salary",
    agency: "Agency sets the process and rates",
    boards: "Full control, but all the work is yours",
  },
  {
    feature: "Cost",
    remote: "Flat seat fee + salary, no markups",
    agency: "Markups built into the rate",
    boards: "Low listing fees, high time cost",
  },
  {
    feature: "Support after start",
    remote: "Ongoing support from our team",
    agency: "Often limited after placement",
    boards: "None once you hire",
  },
  {
    feature: "Team growth",
    remote: "Add seats any time",
    agency: "New contracts for each hire",
    boards: "Repeat the hiring process",
  },
  {
    feature: "Problem resolution",
    remote: "We help fix issues quickly",
    agency: "Goes through account managers",
    boards: "You handle it alone",
  },
];

export default function ComparisonTable() {
  return (
    <Reveal>
      <section className="bg-white py-14 md:py-20 overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="COMPARE"
            title="Why teams choose RemoteStaff365"
            subtitle="See how RemoteStaff365 stacks up against traditional agencies and job boards."
          />
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-[2px_4px_12px_#00000014]">
            <div className="overflow-x-auto">
              <Table className="min-w-190">
                <TableHeader>
                  <TableRow>
                    <TableHead
                      className="font-medium text-foreground py-4 px-4 border-b border-slate-100"
                    >
                      Feature
                    </TableHead>
                    <TableHead
                      className="bg-linear-to-b from-[#4289e0] to-[#2563eb] text-white font-semibold py-4 px-4 border-b border-slate-100"
                    >
                      <div className="flex flex-col items-start gap-1">
                        <Badge className="bg-white text-primary text-[10px] px-1.5 py-0">
                          Best choice
                        </Badge>
                        <span>RemoteStaff365</span>
                      </div>
                    </TableHead>
                    <TableHead
                      className="bg-[#F5F8FF] text-slate-700 font-semibold py-4 px-4 border-b border-slate-100"
                    >
                      Traditional Agencies
                    </TableHead>
                    <TableHead
                      className="bg-[#F5F8FF] text-slate-700 font-semibold py-4 px-4 border-b border-slate-100"
                    >
                      Job Boards / Marketplaces
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={row.feature}>
                      <TableCell
                        className="py-4 px-4 font-medium text-foreground align-middle border-b border-slate-100"
                      >
                        {row.feature}
                      </TableCell>
                      <TableCell
                        className={`py-4 px-4 bg-[#F5F8FF] text-foreground font-medium align-middle border-b border-slate-100 border-l-2 border-r-2 ${
                          i === rows.length - 1 ? "rounded-b-xl" : ""
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
                          {row.remote}
                        </div>
                      </TableCell>
                      <TableCell
                        className="py-4 px-4 text-sm text-slate-600 align-middle border-b border-slate-100"
                      >
                        <div className="flex items-center gap-1.5">
                          <XCircle className="h-4 w-4 text-red-400" />
                          {row.agency}
                        </div>
                      </TableCell>
                      <TableCell
                        className="py-4 px-4 text-sm text-slate-600 align-middle border-b border-slate-100"
                      >
                        <div className="flex items-center gap-1.5">
                          <Minus className="h-4 w-4 text-amber-500" />
                          {row.boards}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
