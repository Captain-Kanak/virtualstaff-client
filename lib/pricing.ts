export type RolePricing = {
  role: string;
  icon: string;
  gradient: string;
  iconColor: string;
  total: string;
  salary: string;
};

export const roles: RolePricing[] = [
  {
    role: "Customer Support",
    icon: "Headphones",
    gradient: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    total: "$1,200 - $1,600",
    salary: "$1,000 - $1,400",
  },
  {
    role: "Admin & Operations",
    icon: "ClipboardList",
    gradient: "from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
  },
  {
    role: "Bookkeeping",
    icon: "Calculator",
    gradient: "from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    total: "$1,600 - $2,100",
    salary: "$1,400 - $1,900",
  },
  {
    role: "Inbound Sales & CRM",
    icon: "PhoneCall",
    gradient: "from-sky-50 to-sky-100",
    iconColor: "text-sky-600",
    total: "$1,500 - $2,000",
    salary: "$1,300 - $1,800",
  },
  {
    role: "Back-Office",
    icon: "Briefcase",
    gradient: "from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
    total: "$1,300 - $1,700",
    salary: "$1,100 - $1,500",
  },
  {
    role: "Social Media & Marketing",
    icon: "Megaphone",
    gradient: "from-violet-50 to-violet-100",
    iconColor: "text-violet-600",
    total: "$1,400 - $1,900",
    salary: "$1,200 - $1,700",
  },
];
