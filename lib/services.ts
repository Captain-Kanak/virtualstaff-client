export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "laptop",
    title: "Virtual Assistants",
    description:
      "Administrative, operational, and day-to-day business support.",
  },
  {
    icon: "headset",
    title: "Customer Support",
    description:
      "Deliver exceptional customer service across email, chat, and phone.",
  },
  {
    icon: "trending-up",
    title: "Sales & Lead Generation",
    description:
      "Grow your pipeline with prospecting, outreach, and appointment setting.",
  },
  {
    icon: "megaphone",
    title: "Social Media Management",
    description:
      "Build your brand and grow your audience across social platforms.",
  },
  {
    icon: "play-circle",
    title: "Creative & Video Editing",
    description:
      "Professional graphics, video editing, and content creation.",
  },
  {
    icon: "calculator",
    title: "Bookkeeping & Finance Support",
    description:
      "Keep your finances organized with bookkeeping, reconciliations, and reporting support.",
  },
  {
    icon: "package",
    title: "E-commerce Support",
    description:
      "Manage product listings, orders, customer inquiries, and more for your online store.",
  },
  {
    icon: "code",
    title: "Website & Technical Support",
    description:
      "Keep your systems running smoothly with website, IT, and technical support.",
  },
] as const;

export const SERVICES_SECTION_DEFAULTS = {
  eyebrow: "OUR SERVICES",
  title: "The Right Talent for Every Part of Your Business.",
  subtitle:
    "Reliable, managed remote team support across a wide range of business functions.",
} as const;
