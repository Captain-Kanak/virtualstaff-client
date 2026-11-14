import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";

type ColumnKey = "us" | "agencies" | "boards";

interface Column {
  key: ColumnKey;
  label: string;
  highlight?: boolean;
}

interface RowValues {
  us: string;
  agencies: string;
  boards: string;
}

interface Row {
  label: string;
  values: RowValues;
}

const COLUMNS: Column[] = [
  { key: "us", label: "RemoteStaff365 seats", highlight: true },
  { key: "agencies", label: "Traditional agencies" },
  { key: "boards", label: "Job boards and marketplaces" },
];

const ROWS: Row[] = [
  {
    label: "What you get",
    values: {
      us:
        "A pre-vetted assistant you interview and hire, plus payroll, compliance handling, and a dedicated account manager.",
      agencies:
        "An assistant matched by the agency, typically with a markup and less clarity on the assistant's pay.",
      boards:
        "A listing of freelancers you source, vet, hire, and manage completely on your own.",
    },
  },
  {
    label: "Who controls the work",
    values: {
      us:
        "You. Your assistant works directly for you on your schedule and in your tools.",
      agencies:
        "The agency. They employ the assistant and often mediate the relationship.",
      boards:
        "The freelancer. You negotiate terms, but no party oversees delivery.",
    },
  },
  {
    label: "Cost and fees",
    values: {
      us:
        "$99 seat fee per month plus the assistant's salary — no markups, no long-term contracts.",
      agencies:
        "Agency markup on top of the assistant's rate, often with placement and monthly fees.",
      boards:
        "Freelancer's rate plus platform service fees; you handle taxes and compliance yourself.",
    },
  },
  {
    label: "Support after start",
    values: {
      us:
        "A dedicated account manager and ongoing support for as long as you're a client.",
      agencies:
        "An account manager during onboarding; support varies after placement.",
      boards:
        "Community forums or a help center; you're responsible for resolving issues.",
    },
  },
  {
    label: "Adding people",
    values: {
      us:
        "Add seats anytime at the same simple fee-plus-salary model.",
      agencies: "A new placement process with another agency fee per hire.",
      boards: "Find and onboard a new freelancer from scratch each time.",
    },
  },
  {
    label: "When something goes wrong",
    values: {
      us:
        "Replace your assistant at no extra cost if they're not the right fit.",
      agencies:
        "Replacement may involve another fee and a new matching cycle.",
      boards: "You end the contract and start the search over yourself.",
    },
  },
];

function cellClass(highlight: boolean) {
  return `p-4 text-left border-b border-slate-100 ${
    highlight ? "bg-blue-50 border-t-2 border-t-blue-600" : "bg-white"
  }`;
}

function mobileCardClass(highlight: boolean) {
  return `p-3 border-b border-slate-50 ${
    highlight ? "bg-blue-50 border-l-3 border-l-blue-600" : "bg-white"
  }`;
}

export default function ComparisonTable() {
  return (
    <Reveal>
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why teams choose RemoteStaff365
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Transparent, seat-based pricing with none of the hidden markups
              you&rsquo;ll find elsewhere.
            </p>
          </div>

          {/* Desktop: wide table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse border border-slate-100 rounded-xl overflow-hidden">
              <thead>
                <tr>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className={[
                        cellClass(Boolean(col.highlight)),
                        "text-sm font-semibold uppercase tracking-wider",
                        col.highlight ? "text-blue-700" : "text-slate-600",
                      ]
                        .filter(Boolean)
                        .join(" ")}>
                      {col.label}
                      {col.highlight && (
                        <Badge
                          variant="outline"
                          className="ms-2 text-[10px] border-blue-600 text-blue-600"
                        >
                          Our approach
                        </Badge>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="group hover:bg-slate-50/50 transition-colors">
                    <th
                      scope="row"
                      className={[
                        "p-4 font-medium text-slate-900 border-b border-slate-100 bg-white",
                        "sticky left-0 z-10",
                      ]
                        .filter(Boolean)
                        .join(" ")}>
                      {row.label}
                    </th>
                    {COLUMNS.map((col) => (
                      <td
                        key={col.key}
                        className={cellClass(Boolean(col.highlight))}
                      >
                        {row.values[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards per row */}
          <div className="md:hidden space-y-4">
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-slate-100 bg-white p-5 shadow-[2px_4px_12px_#00000014]"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  {row.label}
                </h3>
                {COLUMNS.map((col) => (
                  <div
                    key={col.key}
                    className={mobileCardClass(Boolean(col.highlight))}
                  >
                    <span
                      className={[
                        "text-xs font-semibold uppercase tracking-wider block mb-1",
                        col.highlight ? "text-blue-700" : "text-slate-500",
                      ]
                        .filter(Boolean)
                        .join(" ")}>
                      {col.label}
                      {col.highlight && (
                        <span className="text-[10px] ml-1 border border-blue-600 text-blue-600 px-1.5 py-0.5 rounded">
                          Our approach
                        </span>
                      )}
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {row.values[col.key]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
            <p className="text-xs text-slate-400 text-center pt-2">
              Swipe horizontally to compare all three columns.
            </p>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
