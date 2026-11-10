import { z } from "zod";

export const employerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
  companyWebsite: z.string().url("Please enter a valid website URL.").optional().or(z.literal("")),
  teamSize: z.string().min(1, "Please select a team size."),
  rolesNeeded: z.string().min(2, "Please describe the roles you need."),
  message: z.string().optional(),
});

export const jobSeekerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  country: z.string().min(1, "Please select your country."),
  skills: z.string().min(2, "Please list your skills."),
  yearsExperience: z.string().min(1, "Please select your experience level."),
  resumeUrl: z.string().url("Please enter a valid resume URL.").optional().or(z.literal("")),
  englishLevel: z.string().min(1, "Please select your English level."),
  message: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

export type EmployerFormValues = z.infer<typeof employerSchema>;
export type JobSeekerFormValues = z.infer<typeof jobSeekerSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
