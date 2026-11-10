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
import { jobSeekerSchema, type JobSeekerFormValues } from "@/lib/validations";

const countryOptions = ["United States", "Canada", "United Kingdom", "Australia", "Other"];
const experienceOptions = [
  { value: "0-1", label: "0-1 years" },
  { value: "1-3", label: "1-3 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "5+", label: "5+ years" },
];
const englishLevelOptions = [
  { value: "basic", label: "Basic" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "fluent", label: "Fluent / Native" },
];

export default function JobSeekerForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<JobSeekerFormValues>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      skills: "",
      yearsExperience: "",
      resumeUrl: "",
      englishLevel: "",
      message: "",
    },
  });

  const onSubmit = React.useCallback(
    async (values: JobSeekerFormValues) => {
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/job-seeker", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Failed to submit");
        setSubmitted(true);
        toast.success("Application submitted! We'll review and get back to you.");
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
            Apply again
          </Button>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Application received
        </h2>
        <p className="text-muted">
          Thanks for applying. Our team will review your profile and reach out if there&apos;s a match.
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
            placeholder="jane@example.com"
            className={errors.email ? "border-destructive" : undefined}
          />
          {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Country</FormLabel>
          <Select
            onValueChange={(value) => form.setValue("country", value ?? "")}
            defaultValue={form.getValues("country") || undefined}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select country">
                {form.getValues("country") || "Select country"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Country</SelectLabel>
              {countryOptions.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && <FormMessage>{errors.country.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Skills</FormLabel>
          <Input
            {...form.register("skills")}
            placeholder="e.g. Customer support, Zendesk, English"
            className={errors.skills ? "border-destructive" : undefined}
          />
          {errors.skills && <FormMessage>{errors.skills.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Years of experience</FormLabel>
          <Select
            onValueChange={(value) =>
              form.setValue("yearsExperience", value ?? "")
            }
            defaultValue={form.getValues("yearsExperience") || undefined}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select experience">
                {form.getValues("yearsExperience") || "Select experience"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Experience</SelectLabel>
              {experienceOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.yearsExperience && (
            <FormMessage>{errors.yearsExperience.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel>Resume URL (optional)</FormLabel>
          <Input
            {...form.register("resumeUrl")}
            type="url"
            placeholder="https://example.com/resume.pdf"
            className={errors.resumeUrl ? "border-destructive" : undefined}
          />
          {errors.resumeUrl && (
            <FormMessage>{errors.resumeUrl.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel>English level</FormLabel>
          <Select
            onValueChange={(value) =>
              form.setValue("englishLevel", value ?? "")
            }
            defaultValue={form.getValues("englishLevel") || undefined}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select level">
                {form.getValues("englishLevel") || "Select level"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>English level</SelectLabel>
              {englishLevelOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.englishLevel && (
            <FormMessage>{errors.englishLevel.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel>Additional details</FormLabel>
          <Textarea
            {...form.register("message")}
            placeholder="Tell us about yourself and the role you're looking for."
            className={errors.message ? "border-destructive" : undefined}
          />
          {errors.message && <FormMessage>{errors.message.message}</FormMessage>}
        </FormItem>
      </div>
      <Button variant="brand" type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Apply"}
      </Button>
    </Form>
  );
}
