"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactSchema, type ContactFormValues } from "@/lib/validations";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = React.useCallback(
    async (values: ContactFormValues) => {
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/contact", {
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
            Send another message
          </Button>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Message received
        </h2>
        <p className="text-muted">
          Thanks for reaching out. We&apos;ll review your message and get back to you within one business day.
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
          <FormLabel>Company (optional)</FormLabel>
          <Input
            {...form.register("company")}
            placeholder="Acme Corp"
            className={errors.company ? "border-destructive" : undefined}
          />
          {errors.company && <FormMessage>{errors.company.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Subject</FormLabel>
          <Input
            {...form.register("subject")}
            placeholder="General inquiry"
            className={errors.subject ? "border-destructive" : undefined}
          />
          {errors.subject && <FormMessage>{errors.subject.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>Message</FormLabel>
          <Textarea
            {...form.register("message")}
            placeholder="How can we help you?"
            className={errors.message ? "border-destructive" : undefined}
          />
          {errors.message && <FormMessage>{errors.message.message}</FormMessage>}
        </FormItem>
      </div>
      <Button variant="brand" type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </Form>
  );
}
