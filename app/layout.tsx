import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    template: "%s | RemoteStaff365",
    default: "RemoteStaff365 — Offshore Virtual Assistants for US Companies",
  },
  description:
    "Hire pre-vetted offshore virtual assistants for your US business. Healthcare, logistics, legal, accounting, real estate, ecommerce and more. Book a call today.",
  openGraph: {
    title: "RemoteStaff365 — Offshore Virtual Assistants for US Companies",
    description:
      "Connect with pre-vetted global virtual assistants and build your remote team in 48 hours.",
    type: "website",
    url: siteUrl,
    siteName: "RemoteStaff365",
    images: [
      {
        url: "/logo.png",
        width: 32,
        height: 32,
        alt: "RemoteStaff365 logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RemoteStaff365 — Offshore Virtual Assistants for US Companies",
    description:
      "Hire pre-vetted offshore virtual assistants for your US business. Book a call today.",
  },
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
