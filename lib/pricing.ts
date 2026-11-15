export type RolePricing = {
  role: string;
  icon: string;
  gradient: string;
  iconColor: string;
  total: string;
  salary: string;
  seatFee: number;
  image?: string;
};

export const roles: RolePricing[] = [
  {
    role: "Customer Support",
    icon: "Headphones",
    gradient: "from-brand-primary to-brand-primary-light",
    iconColor: "text-brand-primary",
    total: "$1,200 - $1,600",
    salary: "$1,000 - $1,400",
    seatFee: 99,
  },
  {
    role: "Admin & Operations",
    icon: "ClipboardList",
    gradient: "from-brand-success to-brand-primary",
    iconColor: "text-brand-success",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    seatFee: 99,
  },
  {
    role: "Bookkeeping",
    icon: "Calculator",
    gradient: "from-brand-tag-blue to-brand-primary-light",
    iconColor: "text-brand-tag-blue",
    total: "$1,600 - $2,100",
    salary: "$1,400 - $1,900",
    seatFee: 99,
  },
  {
    role: "Inbound Sales & CRM",
    icon: "PhoneCall",
    gradient: "from-brand-primary to-brand-primary-light",
    iconColor: "text-brand-primary",
    total: "$1,500 - $2,000",
    salary: "$1,300 - $1,800",
    seatFee: 99,
  },
  {
    role: "Back-Office",
    icon: "Briefcase",
    gradient: "from-brand-success to-brand-primary",
    iconColor: "text-brand-success",
    total: "$1,300 - $1,700",
    salary: "$1,100 - $1,500",
    seatFee: 99,
  },
  {
    role: "Social Media & Marketing",
    icon: "Megaphone",
    gradient: "from-brand-accent to-brand-accent",
    iconColor: "text-brand-secondary",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
    seatFee: 99,
  },
];
