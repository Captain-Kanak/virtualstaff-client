"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function FormItem({ className, children, ...props }: FormItemProps) {
  return (
    <div data-slot="form-item" className={cn("mb-5", className)} {...props}>
      {children}
    </div>
  );
}

interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

function FormLabel({ className, children, ...props }: FormLabelProps) {
  return (
    <label
      data-slot="form-label"
      className={cn("mb-2 text-sm font-medium text-foreground block", className)}
      {...props}
    >
      {children}
    </label>
  );
}

interface FormControlProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

function FormControl({ className, ...props }: FormControlProps) {
  return (
    <input
      data-slot="form-control"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

interface FormMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function FormMessage({ className, children, ...props }: FormMessageProps) {
  return (
    <div
      data-slot="form-message"
      className={cn("mt-1 text-sm text-destructive", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Form, FormItem, FormLabel, FormControl, FormMessage };
