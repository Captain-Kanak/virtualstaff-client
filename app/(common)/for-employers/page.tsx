import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import EmployerForm from "@/components/forms/EmployerForm";

export const metadata = {
  title: "Hire Offshore Talent - For Employers",
  description:
    "US companies: hire pre-vetted virtual assistants. Request a quote for dedicated offshore staffing.",
};

export default function ForEmployersPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="RemoteStaff365"
        title="For employers"
        subtitle="Hire dedicated offshore virtual assistants for your US business. Request a quote below."
      />
      <section className="py-12 lg:py-24">
      <Container>
        <EmployerForm />
        </Container>
      </section>
    </div>
  );
}
