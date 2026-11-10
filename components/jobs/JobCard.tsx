"use client";

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Job } from "@/lib/jobs";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full hover:shadow-xl transition-shadow">
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="text-xs">
          {job.category}
        </Badge>
        <Badge variant="outline" className="text-xs">
          {job.region}
        </Badge>
        <Badge variant="outline" className="text-xs">
          {job.type}
        </Badge>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{job.title}</h3>
      <p className="text-muted leading-relaxed mb-4 flex-1">
        {job.description}
      </p>
      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xl font-bold text-foreground">{job.rate}</span>
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={
            <Link href={`/jobs/${job.id}`}>View job</Link>
          }
        />
      </div>
    </Card>
  );
}
