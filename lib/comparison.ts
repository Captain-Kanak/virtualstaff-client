export type Tone = "bad" | "neutral";

export interface ComparisonCell {
  lead: string;
  rest: string;
  tone?: Tone;
}

export interface ComparisonRow {
  icon: string;
  title: string;
  caption: string;
  ours: ComparisonCell;
  agency: ComparisonCell;
  boards: ComparisonCell;
}

export const comparisonRows: ComparisonRow[] = [
  {
    icon: "/images/icons/np-icon1.png",
    title: "What you're building",
    caption: "What you actually get",
    ours: {
      lead: "A dedicated team you choose yourself,",
      rest: "with an ongoing support partner behind you.",
    },
    agency: {
      lead: "Staff assigned by the agency,",
      rest: "you don't pick the person who joins your team.",
      tone: "neutral",
    },
    boards: {
      lead: "You find and screen everyone yourself,",
      rest: "then manage the hire on your own.",
      tone: "neutral",
    },
  },
  {
    icon: "/images/icons/np-icon2.png",
    title: "Who controls the team",
    caption: "How your staff work",
    ours: {
      lead: "You choose, direct and manage your assistants.",
      rest: "We stay behind the relationship, so you can keep adding people with confidence.",
    },
    agency: {
      lead: "You direct the daily work, but the agency still runs the structure.",
      rest: "Control and flexibility depend on the agency's setup.",
      tone: "bad",
    },
    boards: {
      lead: "You manage everything yourself.",
      rest: "Once someone is hired there is no partner behind the relationship.",
      tone: "bad",
    },
  },
  {
    icon: "/images/icons/np-icon3.png",
    title: "What you pay",
    caption: "Salary, fees and total cost",
    ours: {
      lead: "$99 per seat per month plus salary.",
      rest: "The salary you agree goes straight to your assistant, with no hidden markups.",
    },
    agency: {
      lead: "The price is often bundled.",
      rest: "It is hard to see what the staff member earns versus what the agency keeps.",
      tone: "bad",
    },
    boards: {
      lead: "Low listing fees, high time cost.",
      rest: "You pay to find people, then carry payroll and admin yourself.",
      tone: "bad",
    },
  },
  {
    icon: "/images/icons/np-icon4.png",
    title: "What happens after they start",
    caption: "Ongoing support and structure",
    ours: {
      lead: "An ongoing partnership,",
      rest: "with onboarding, payroll support, time tracking and help replacing a team member if needed.",
    },
    agency: {
      lead: "Support depends on the contract.",
      rest: "Help after placement is often limited.",
      tone: "neutral",
    },
    boards: {
      lead: "No structure or support.",
      rest: "You handle issues on your own and carry the risk.",
      tone: "bad",
    },
  },
  {
    icon: "/images/icons/np-icon5.png",
    title: "As your team grows",
    caption: "Adding more team members",
    ours: {
      lead: "Add another seat for each new team member.",
      rest: "A simple, repeatable way to grow.",
    },
    agency: {
      lead: "New contracts for each hire.",
      rest: "Each addition usually means going back through the agency.",
      tone: "neutral",
    },
    boards: {
      lead: "Repeat the hiring process.",
      rest: "Post another job and start screening again.",
      tone: "neutral",
    },
  },
  {
    icon: "/images/icons/WarningIconBlue.png",
    title: "When something goes wrong",
    caption: "Who helps you deal with it",
    ours: {
      lead: "You get a partner, not just a placement.",
      rest: "We stay involved, so problems get fixed without you starting over.",
    },
    agency: {
      lead: "Goes through account managers.",
      rest: "Replacement terms depend on your agreement.",
      tone: "neutral",
    },
    boards: {
      lead: "You handle the problem and find the replacement.",
      rest: "If someone leaves, you restart the hiring process.",
      tone: "bad",
    },
  },
];

export const comparisonColumns = [
  {
    key: "ours",
    label: "RemoteStaff365",
    icon: "/images/icons/np-icon6.png",
    caption: "Your staffing partner. One seat per team member.",
  },
  {
    key: "agency",
    label: "Traditional agencies",
    icon: "/images/icons/np-icon7.png",
    caption: "Staff supplied through bundled agency arrangements.",
  },
  {
    key: "boards",
    label: "Job boards",
    icon: "/images/icons/np-icon8.png",
    caption: "DIY hiring and ongoing risk. No expert partner behind you.",
  },
];

export const checkIcon = "/images/icons/check-icon.png";
export const crossIcon = "/images/icons/red-cross.png";
