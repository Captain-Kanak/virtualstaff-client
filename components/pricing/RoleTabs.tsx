"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface RoleTabsProps {
  roles: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function RoleTabs({
  roles,
  selected,
  onChange,
}: RoleTabsProps) {
  const tabs = ["All roles", ...roles];

  return (
    <div
      role="tablist"
      aria-label="Filter roles"
      className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide pb-1"
    >
      {tabs.map((tab) => {
        const isSelected = selected === tab;
        return (
          <Button
            key={tab}
            role="tab"
            aria-selected={isSelected}
            variant={isSelected ? "brand" : "outline"}
            size="sm"
            className="whitespace-nowrap shrink-0 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => onChange(tab)}
          >
            {tab}
          </Button>
        );
      })}
    </div>
  );
}
