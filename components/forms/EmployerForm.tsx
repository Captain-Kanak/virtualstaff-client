"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { employerSchema, type EmployerFormValues } from "@/lib/validations";

const teamSizeOptions = [
  { value: "1-10", label: "1-10 seats" },
  { value: "11-50", label: "11-50 seats" },
  { value: "51-200", label: "51-200 seats" },
  { value: "200+", label: "200+ seats" },
];

export default function EmployerForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<EmployerFormValues>({
    resolver: zodResolver(employerSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      companyWebsite: "",
      teamSize: "",
      rolesNeeded: "",
      message: "",
    },
  });

  const onSubmit = React.useCallback(
    async (values: EmployerFormValues) => {
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/employer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Failed to submit");
        setSubmitted(true);
        toast.success("Thank you! We'll be in touch shortly.");
        form.reset();
      } catch {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [form]
  );

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-5 py-12 text-center">
        <div className="mb-6">
          <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
            Submit another request
          </Button>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Request received
        </h2>
        <p className="text-muted">
          Thanks for reaching out. We{"'"}ll review your request and get back to you within one business day.
        </p>
      </div>
    );
  }

  const errors = form.formState.errors;

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto px-5 space-y-6">
      <div className="space-y-4">
        <FormItem>
          <FormLabel>Full name</FormLabel>
          <Input
            {...form.register("name")}
            placeholder="Jane Doe"
            className={errors.name ? "border-destructive" : undefined}
          />
          {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Work email</FormLabel>
          <Input
            {...form.register("email")}
            type="email"
            placeholder="jane@company.com"
            className={errors.email ? "border-destructive" : undefined}
          />
          {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Company</FormLabel>
          <Input
            {...form.register("company")}
            placeholder="Acme Corp"
            className={errors.company ? "border-destructive" : undefined}
          />
          {errors.company && <FormMessage>{errors.company.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Company website</FormLabel>
          <Input
            {...form.register("companyWebsite")}
            type="url"
            placeholder="https://acme.com"
            className={errors.companyWebsite ? "border-destructive" : undefined}
          />
          {errors.companyWebsite && (
            <FormMessage>{errors.companyWebsite.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel>Team size</FormLabel>
          <Select
            onValueChange={(value) => form.setValue("teamSize", value ?? "")}
            defaultValue={form.getValues("teamSize") || undefined}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select team size">
                {form.getValues("teamSize") || "Select team size"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Team size</SelectLabel>
              {teamSizeOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.teamSize && <FormMessage>{errors.teamSize.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Roles needed</FormLabel>
          <Input
            {...form.register("rolesNeeded")}
            placeholder="e.g. 2 customer support VAs, 1 bookkeeper"
            className={errors.rolesNeeded ? "border-destructive" : undefined}
          />
          {errors.rolesNeeded && (
            <FormMessage>{errors.rolesNeeded.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel>Additional details</FormLabel>
          <Textarea
            {...form.register("message")}
            placeholder="Anything else we should know?"
            className={errors.message ? "border-destructive" : undefined}
          />
          {errors.message && <FormMessage>{errors.message.message}</FormMessage>}
        </FormItem>
      </div>
      <Button variant="brand" type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Request a quote"}
      </Button>
    </Form>
  );
}
