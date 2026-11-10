import { MetadataRoute } from "next";
import { jobs } from "@/lib/jobs";
import { industries } from "@/app/(common)/industries/[slug]/page";

const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/case-studies",
  "/contact",
  "/enterprise",
  "/for-employers",
  "/for-job-seekers",
  "/how-it-works",
  "/jobs",
  "/pricing",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://remotestaff365.com";

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const jobEntries = jobs.map((job) => ({
    url: `${base}/jobs/${job.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const industryEntries = Object.keys(industries).map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...jobEntries, ...industryEntries];
}
