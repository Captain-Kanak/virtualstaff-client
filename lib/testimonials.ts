export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  logo?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    title: "Operations Manager",
    company: "HealthBridge Clinic",
    quote: "Finding a reliable VA used to take weeks. Now we hire in 48 hours and the quality is outstanding.",
    logo: "/images/partners/cardfactory.png",
  },
  {
    name: "Marcus Reed",
    title: "Founder",
    company: "SwiftLogistics",
    quote: "Our logistics VA handles dispatch and tracking flawlessly. We've added two more seats this year.",
    logo: "/images/partners/culture_amp.png",
  },
  {
    name: "Elena Torres",
    title: "Office Manager",
    company: "Prime Realty Group",
    quote: "The back-office support has been a game-changer for our closings. Highly recommended.",
    logo: "/images/partners/safety_culture.png",
  },
  {
    name: "David Kim",
    title: "Practice Administrator",
    company: "Cedarwood Medical",
    quote: "HIPAA-trained virtual assistants who actually understand healthcare billing. Worth every penny.",
    logo: "/images/partners/sky_scanner.png",
  },
  {
    name: "Jessica Moore",
    title: "Owner",
    company: "Main Street Accounting",
    quote: "Bookkeeping support that's responsive and affordable. No long-term contracts needed.",
    logo: "/images/partners/virgin.png",
  },
  {
    name: "Robert Liang",
    title: "COO",
    company: "Nexus Ecommerce",
    quote: "Customer support coverage across time zones has let us scale without burning out our local team.",
    logo: "",
  },
];
