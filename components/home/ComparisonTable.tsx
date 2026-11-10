"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Reveal from "@/components/Reveal";

const columns = [
  { name: "Feature", key: "feature" },
  { name: "RemoteStaff365", key: "remote" },
  { name: "Traditional Agencies", key: "agency" },
  { name: "Job Boards / Marketplaces", key: "marketplace" },
];

const remoteCol = "bg-[#F5F8FF] border-[#2563eb]";

const rows = [
  {
    feature: "What you build",
    remote: "Dedicated VA you choose",
    agency: "Agency-assigned staff",
    marketplace: "Freelancers you vet",
    remoteCheck: true,
    agencyCheck: false,
    marketplaceCheck: false,
  },
  {
    feature: "Control",
    remote: "You manage tasks & hours",
    agency: "Agency controls staff",
    marketplace: "You manage freelancers",
    remoteCheck: true,
    agencyCheck: false,
    marketplaceCheck: true,
  },
  {
    feature: "Cost",
    remote: "$99 seat fee + salary",
    agency: "High markup on top",
    marketplace: "Hourly rate, no seat fee",
    remoteCheck: true,
    agencyCheck: false,
    marketplaceCheck: false,
  },
  {
    feature: "Support after start",
    remote: "Dedicated account manager",
    agency: "Limited agency support",
    marketplace: "No support",
    remoteCheck: true,
    agencyCheck: false,
    marketplaceCheck: false,
  },
  {
    feature: "Team growth",
    remote: "Add seats anytime",
    agency: "Renegotiate contract",
    marketplace: "Hire more freelancers",
    remoteCheck: true,
    agencyCheck: false,
    marketplaceCheck: true,
  },
  {
    feature: "Problem resolution",
    remote: "We mediate & replace",
    agency: "Agency handles it",
    marketplace: "You handle it",
    remoteCheck: true,
    agencyCheck: false,
    marketplaceCheck: false,
  },
];

export default function ComparisonTable() {
  return (
    <Reveal>
      <section className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="overflow-x-auto border border-solid border-[#e2e8f0] rounded-xl shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((col) => (
                    <TableHead
                      key={col.key}
                      className={
                        col.key === "remote" ? remoteCol : "bg-[#F5F8FF]"
                      }
                    >
                      {col.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium text-foreground">
                      {row.feature}
                    </TableCell>
                    <TableCell className={remoteCol}>
                      {row.remoteCheck ? (
                        <Check className="h-4 w-4 text-[#2563eb]" />
                      ) : (
                        <X className="h-4 w-4 text-muted" />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.agencyCheck ? (
                        <Check className="h-4 w-4 text-[#2563eb]" />
                      ) : (
                        <X className="h-4 w-4 text-muted" />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.marketplaceCheck ? (
                        <Check className="h-4 w-4 text-[#2563eb]" />
                      ) : (
                        <X className="h-4 w-4 text-muted" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
