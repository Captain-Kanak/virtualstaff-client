import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import { bookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog - Remote Staffing Insights",
  description:
    "Read our latest articles on hiring offshore virtual assistants, remote team management, and business growth.",
};

const posts = [
  {
    title: "How to Hire Your First Virtual Assistant in 48 Hours",
    excerpt:
      "A step-by-step guide to defining the role, vetting candidates, and onboarding your offshore VA quickly.",
    date: "Nov 5, 2026",
  },
  {
    title: "Offshore vs. Onshore: Comparing VA Costs for US Businesses",
    excerpt:
      "Break down the real cost differences between hiring locally and going offshore, including hidden expenses.",
    date: "Oct 22, 2026",
  },
  {
    title: "Time-Zone Strategies for Managing Remote Assistants",
    excerpt:
      "Tips for collaborating smoothly with virtual assistants across Asia, Africa, Latin America, and Eastern Europe.",
    date: "Oct 10, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="Blog"
        subtitle="Insights on hiring, managing, and growing with offshore virtual assistants."
      />

      <Reveal>
        <section className="py-12 lg:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <Card
                  key={post.title}
                  className="bg-white rounded-2xl shadow-[2px_4px_12px_#00000014] p-6 flex flex-col h-full"
                >
                  <span className="text-xs text-muted mb-3">{post.date}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href="/blog" className="text-[#2563eb] font-medium hover:underline inline-flex items-center gap-1">
                    Read more
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <CTASection primaryHref={bookingUrl} />
    </div>
  );
}
