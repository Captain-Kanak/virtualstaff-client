// SAMPLE DATA — placeholder profiles for illustration only.
// Replace with real candidate profiles before launch. Do not copy text or images from /reference.
export type SampleProfile = {
  id: string;
  firstName: string;
  initial: string;
  role: string;
  country: string;
  years: number;
  skills: string[];
  salary: string;
  seatFee: number;
};

const SEAT_FEE = 99;

export const sampleProfiles: SampleProfile[] = [
  {
    id: "sample-1",
    firstName: "Aisha",
    initial: "A",
    role: "Customer Support",
    country: "Philippines",
    years: 4,
    skills: ["Zendesk", "Live chat", "Email support"],
    salary: "$1,000 - $1,400",
    seatFee: SEAT_FEE,
  },
  {
    id: "sample-2",
    firstName: "Rohan",
    initial: "R",
    role: "Back-Office",
    country: "India",
    years: 3,
    skills: ["Data entry", "Excel", "Scheduling"],
    salary: "$1,100 - $1,500",
    seatFee: SEAT_FEE,
  },
  {
    id: "sample-3",
    firstName: "Wanjiku",
    initial: "W",
    role: "Bookkeeping",
    country: "Kenya",
    years: 5,
    skills: ["QuickBooks", "Xero", "Payroll"],
    salary: "$1,400 - $1,900",
    seatFee: SEAT_FEE,
  },
  {
    id: "sample-4",
    firstName: "Mateo",
    initial: "M",
    role: "Inbound Sales & CRM",
    country: "Colombia",
    years: 4,
    skills: ["HubSpot", "Salesforce", "Lead qualification"],
    salary: "$1,300 - $1,800",
    seatFee: SEAT_FEE,
  },
  {
    id: "sample-5",
    firstName: "Agnieszka",
    initial: "A",
    role: "Admin & Operations",
    country: "Poland",
    years: 6,
    skills: ["Notion", "Asana", "Travel coordination"],
    salary: "$1,200 - $1,700",
    seatFee: SEAT_FEE,
  },
  {
    id: "sample-6",
    firstName: "Lena",
    initial: "L",
    role: "Social Media & Marketing",
    country: "Mexico",
    years: 3,
    skills: ["Meta Ads", "Content scheduling", "Canva"],
    salary: "$1,200 - $1,700",
    seatFee: SEAT_FEE,
  },
];

const parseRange = (s: string): [number, number] => {
  const nums = s.match(/\d+/g);
  if (!nums) return [0, 0];
  return [Number(nums[0]), Number(nums[1])] as [number, number];
};

export const computeMonthlyInvestment = (
  salary: string,
  seatFee: number
): { min: number; max: number } => {
  const [min, max] = parseRange(salary);
  return { min: min + seatFee, max: max + seatFee };
};

export const formatUsd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
