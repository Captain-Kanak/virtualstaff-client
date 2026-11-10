"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface JobFiltersProps {
  filters: {
    search: string;
    category: string;
    region: string;
    type: string;
  };
  onChange: (filters: {
    search: string;
    category: string;
    region: string;
    type: string;
  }) => void;
  categories: string[];
  regions: string[];
  types: string[];
}

export default function JobFilters({
  filters,
  onChange,
  categories,
  regions,
  types,
}: JobFiltersProps) {
  const hasAnyFilter =
    filters.search.length > 0 ||
    filters.category !== "all" ||
    filters.region !== "all" ||
    filters.type !== "all";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Search
          </label>
          <Input
            placeholder="Search jobs by title or keyword"
            value={filters.search}
            onChange={(e) =>
              onChange({ ...filters, search: e.target.value })
            }
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Category
          </label>
          <Select
            value={filters.category}
            onValueChange={(value) =>
              onChange({ ...filters, category: value ?? "all" })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All categories">{filters.category}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Region
          </label>
          <Select
            value={filters.region}
            onValueChange={(value) =>
              onChange({ ...filters, region: value ?? "all" })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All regions">{filters.region}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Region</SelectLabel>
                <SelectItem value="all">All regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Job type
          </label>
          <Select
            value={filters.type}
            onValueChange={(value) =>
              onChange({ ...filters, type: value ?? "all" })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All types">{filters.type}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Job type</SelectLabel>
                <SelectItem value="all">All types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {hasAnyFilter && (
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            onChange({ search: "", category: "all", region: "all", type: "all" })
          }
        >
          <X className="mr-2 h-4 w-4" /> Clear filters
        </Button>
      )}
    </div>
  );
}
