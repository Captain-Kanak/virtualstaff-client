import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import JobsList from "@/components/jobs/JobsList";

export const metadata = {
  title: "Jobs - Join Our Offshore Talent Team",
  description:
    "Browse remote virtual assistant jobs across customer support, admin, bookkeeping, sales, marketing, and back-office.",
};

export default function JobsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365 Jobs"
        title="Join our team"
        subtitle="Browse remote virtual assistant roles across customer support, admin, bookkeeping, sales, marketing, and back-office."
      />
      <Suspense
        fallback={
          <div className="py-20 lg:py-24 max-w-6xl mx-auto px-5 text-center text-muted">
            Loading jobs...
          </div>
        }
      >
        <JobsList />
      </Suspense>
    </div>
  );
}
