import PageHeader from "@/components/PageHeader";
import JobSeekerForm from "@/components/forms/JobSeekerForm";

export const metadata = {
  title: "Virtual Assistant Jobs - For Job Seekers",
  description:
    "Apply for remote virtual assistant roles. Join our offshore talent team working with US companies.",
};

export default function ForJobSeekersPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="For job seekers"
        subtitle="Apply for remote virtual assistant roles with US companies. Join our offshore talent team."
      />
      <section className="py-12 lg:py-24">
        <div className="max-w-md mx-auto px-5">
          <JobSeekerForm />
        </div>
      </section>
    </div>
  );
}
