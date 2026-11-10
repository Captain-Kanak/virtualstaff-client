import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/lib/jobs";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) {
    return { title: "Job not found" };
  }
  return {
    title: `${job.title} - RemoteStaff365 Jobs`,
    description: job.description,
  };
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365 Jobs"
        title={job.title}
        subtitle={`${job.category} · ${job.region} · ${job.type}`}
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline">{job.category}</Badge>
                    <Badge variant="outline">{job.region}</Badge>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-4">
                    Role details
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {job.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-muted shrink-0 mt-0.5">Rate</span>
                      <span className="text-foreground font-medium">
                        {job.rate}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-muted shrink-0 mt-0.5">
                        Employment type
                      </span>
                      <span className="text-foreground font-medium">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-muted shrink-0 mt-0.5">Region</span>
                      <span className="text-foreground font-medium">
                        {job.region}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="default" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="bg-[#F1F9FC] rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Ready to apply?
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Book a call to discuss this role and start hiring within
                    48 hours.
                  </p>
                  <Button
                    variant="brand"
                    size="xl"
                    className="w-full"
                    nativeButton={false}
                    render={
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </a>
                    }
                  />
                </Card>
                <Link
                  href="/jobs"
                  className="text-[#2563eb] font-medium hover:underline flex items-center gap-2"
                >
                  ← Back to jobs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
