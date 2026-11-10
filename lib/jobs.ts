export type JobType = "Full-time" | "Part-time" | "Contract";

export interface Job {
  id: string;
  title: string;
  category: string;
  region: string;
  type: JobType;
  rate: string;
  description: string;
  tags: string[];
}

export const categories = [
  "Customer Support",
  "Admin",
  "Bookkeeping",
  "Sales",
  "Marketing",
  "Back-Office",
];

export const regions = ["Asia", "Africa", "Latin America", "Eastern Europe"];

export const jobTypes: JobType[] = ["Full-time", "Part-time", "Contract"];

export const jobs: Job[] = [
  {
    id: "cs-asia-1",
    title: "Customer Support Specialist",
    category: "Customer Support",
    region: "Asia",
    type: "Full-time",
    rate: "$1,200 - $1,600 / month",
    description:
      "Handle inbound customer inquiries via email and chat for a fast-growing US ecommerce brand. Evening shift overlapping US Pacific time.",
    tags: ["Zendesk", "English", "Chat support", "Evening shift"],
  },
  {
    id: "cs-africa-1",
    title: "Customer Success Representative",
    category: "Customer Support",
    region: "Africa",
    type: "Part-time",
    rate: "$900 - $1,200 / month",
    description:
      "Support SaaS customers with onboarding and troubleshooting. Part-time, flexible hours with US Eastern overlap.",
    tags: ["SaaS", "Onboarding", "Intercom", "Part-time"],
  },
  {
    id: "admin-latam-1",
    title: "Executive Assistant",
    category: "Admin",
    region: "Latin America",
    type: "Full-time",
    rate: "$1,400 - $1,800 / month",
    description:
      "Support a US-based founder with calendar management, travel coordination, and inbox triage. Fully remote.",
    tags: ["Calendar", "Travel", "Inbox", "Executive support"],
  },
  {
    id: "admin-ee-1",
    title: "Operations Coordinator",
    category: "Admin",
    region: "Eastern Europe",
    type: "Contract",
    rate: "$1,000 - $1,400 / month",
    description:
      "Coordinate vendor relationships, schedule meetings, and maintain SOPs for a logistics company.",
    tags: ["Vendor management", "Scheduling", "SOPs", "Logistics"],
  },
  {
    id: "bookkeeping-asia-1",
    title: "Bookkeeper",
    category: "Bookkeeping",
    region: "Asia",
    type: "Full-time",
    rate: "$1,300 - $1,700 / month",
    description:
      "Manage accounts payable/receivable, reconcile bank statements, and prepare monthly financial reports for a US accounting firm.",
    tags: ["QuickBooks", "Xero", "AP/AR", "Financial reporting"],
  },
  {
    id: "bookkeeping-latam-1",
    title: "Accounts Payable Clerk",
    category: "Bookkeeping",
    region: "Latin America",
    type: "Part-time",
    rate: "$800 - $1,100 / month",
    description:
      "Process invoices, match purchase orders, and run weekly payment runs for a US ecommerce business.",
    tags: ["Invoices", "Purchase orders", "Payments", "Part-time"],
  },
  {
    id: "sales-africa-1",
    title: "Sales Development Representative",
    category: "Sales",
    region: "Africa",
    type: "Full-time",
    rate: "$1,100 - $1,500 / month",
    description:
      "Generate qualified leads and book demos for a B2B software company. US Eastern hours, commission eligible.",
    tags: ["Outbound", "Lead gen", "CRM", "Demo booking"],
  },
  {
    id: "sales-ee-1",
    title: "Account Manager",
    category: "Sales",
    region: "Eastern Europe",
    type: "Full-time",
    rate: "$1,500 - $2,000 / month",
    description:
      "Manage a book of SMB clients, drive renewals and upsells, and coordinate with the US sales team.",
    tags: ["Account management", "Renewals", "Upsell", "Client relations"],
  },
  {
    id: "marketing-latam-1",
    title: "Social Media Coordinator",
    category: "Marketing",
    region: "Latin America",
    type: "Part-time",
    rate: "$900 - $1,200 / month",
    description:
      "Create and schedule social content, engage with followers, and track performance for a consumer brand.",
    tags: ["Instagram", "TikTok", "Content", "Community management"],
  },
  {
    id: "marketing-asia-1",
    title: "Email Marketing Associate",
    category: "Marketing",
    region: "Asia",
    type: "Contract",
    rate: "$1,000 - $1,400 / month",
    description:
      "Build and send email campaigns, manage lists, and report on open and click rates for an ecommerce brand.",
    tags: ["Klaviyo", "Email campaigns", "Copywriting", "Analytics"],
  },
  {
    id: "backoffice-africa-1",
    title: "Data Entry Specialist",
    category: "Back-Office",
    region: "Africa",
    type: "Full-time",
    rate: "$800 - $1,000 / month",
    description:
      "Enter and verify records, clean up databases, and maintain accurate inventory data for a logistics firm.",
    tags: ["Data entry", "Database", "Inventory", "Accuracy"],
  },
  {
    id: "backoffice-ee-1",
    title: "Back Office Coordinator",
    category: "Back-Office",
    region: "Eastern Europe",
    type: "Full-time",
    rate: "$1,200 - $1,600 / month",
    description:
      "Coordinate document processing, compliance checks, and vendor onboarding for a US financial services company.",
    tags: ["Compliance", "Documents", "Vendor onboarding", "Finance"],
  },
];
