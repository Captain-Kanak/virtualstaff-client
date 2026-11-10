"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import JobFilters from "@/components/jobs/JobFilters";
import JobCard from "@/components/jobs/JobCard";
import { jobs, categories, regions, jobTypes } from "@/lib/jobs";
import type { Job } from "@/lib/jobs";

type Filters = {
  search: string;
  category: string;
  region: string;
  type: string;
};

function filterJobs(jobs: Job[], filters: Filters) {
  return jobs.filter((job) => {
    if (
      filters.search &&
      !job.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    if (filters.category !== "all" && job.category !== filters.category) {
      return false;
    }
    if (filters.region !== "all" && job.region !== filters.region) {
      return false;
    }
    if (filters.type !== "all" && job.type !== filters.type) {
      return false;
    }
    return true;
  });
}

export default function JobsList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters: Filters = {
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "all",
    region: searchParams.get("region") || "all",
    type: searchParams.get("type") || "all",
  };

  const filtered = filterJobs(jobs, filters);

  const onChange = useCallback(
    (nextFilters: Filters) => {
      const params = new URLSearchParams();
      if (nextFilters.search) params.set("search", nextFilters.search);
      if (nextFilters.category !== "all")
        params.set("category", nextFilters.category);
      if (nextFilters.region !== "all")
        params.set("region", nextFilters.region);
      if (nextFilters.type !== "all")
        params.set("type", nextFilters.type);
      const query = params.toString();
      router.push(`${pathname}${query ? "?" + query : ""}`, {
        scroll: false,
      });
    },
    [pathname, router]
  );

  return (
    <section className="py-12 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <JobFilters
          filters={filters}
          onChange={onChange}
          categories={categories}
          regions={regions}
          types={jobTypes}
        />
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-muted">
            {filtered.length} job{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-3 text-center py-20">
              <p className="text-muted text-lg">
                No jobs found matching your filters. Try adjusting your search.
              </p>
            </div>
          ) : (
            filtered.map((job: Job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
