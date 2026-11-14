export const siteName = "RemoteStaff365";

export const bookingUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-link";

export const navLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Jobs", href: "/jobs" },
];

export const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  hireTalent: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Hiring FAQs", href: "/jobs" },
  ],
  industries: [
    { name: "Healthcare & Insurance", href: "/industries/healthcare-insurance" },
    { name: "Logistics", href: "/industries/logistics" },
    { name: "Legal", href: "/industries/legal" },
    { name: "Accounting", href: "/industries/accounting" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Ecommerce", href: "/industries/ecommerce" },
    { name: "Customer Support", href: "/industries/customer-support" },
    { name: "Home Services", href: "/industries/home-services" },
    { name: "Hospitality", href: "/industries/hospitality" },
    { name: "Construction", href: "/industries/construction" },
  ],
  legal: [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
};

export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "X", href: "https://x.com", icon: "x" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
];
