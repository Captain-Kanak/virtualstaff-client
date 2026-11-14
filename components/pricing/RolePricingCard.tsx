"use client";

import * as React from "react";
import {
  Headphones,
  ClipboardList,
  Calculator,
  PhoneCall,
  Briefcase,
  Megaphone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/site";
import type { RolePricing } from "@/lib/pricing";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Headphones,
  ClipboardList,
  Calculator,
  PhoneCall,
  Briefcase,
  Megaphone,
};

interface RolePricingCardProps {
  role: RolePricing;
}

export default function RolePricingCard({ role }: RolePricingCardProps) {
  const Icon = iconMap[role.icon] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return (
    <Card
      className="flex flex-col h-full rounded-2xl border border-slate-100 bg-white p-5 gap-3 shadow-[2px_4px_12px_#00000014] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className={`h-20 rounded-xl flex items-center justify-between px-4 bg-gradient-to-r ${role.gradient}`}>
        <div className="rounded-xl bg-white size-12 flex items-center justify-center">
          <Icon className={`size-24 ${role.iconColor}`} />
        </div>
        <Badge className="bg-white text-primary text-xs">
          Seat fee $99
        </Badge>
      </div>
      <h3 className="text-lg font-semibold text-foreground mt-4">{role.role}</h3>
      <div className="rounded-xl bg-[#F5F8FF] px-4 py-3 mt-3">
        <p className="text-xs uppercase tracking-wide text-slate-600">
          Total per month
        </p>
        <p className="text-2xl font-bold text-primary">{role.total}</p>
      </div>
      <div className="flex justify-between text-sm mt-3">
        <span className="text-slate-600">Staff salary</span>
        <span className="font-medium text-right">{role.salary}</span>
      </div>
      <Button
        variant="outline"
        size="xl"
        className="w-full h-11 rounded-xl border-primary text-primary transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out hover:bg-primary hover:text-white hover:shadow-[0_8px_18px_rgba(37,99,235,0.25)] active:scale-[0.98] mt-4"
        nativeButton={false}
        render={
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire this role
          </a>
        }
      />
    </Card>
  );
}
