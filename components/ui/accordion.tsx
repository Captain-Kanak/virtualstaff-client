import * as React from "react"
import {
  Accordion as AccordionRoot,
  AccordionItem as AccordionItemPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionContent as AccordionContentPrimitive,
} from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionRoot>,
  React.ComponentPropsWithoutRef<typeof AccordionRoot>
>(({ className, ...props }, ref) => (
  <AccordionRoot
    ref={ref}
    className={cn("flex w-full flex-col space-y-2", className)}
    {...props}
  />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof AccordionItemPrimitive>
>(({ className, ...props }, ref) => (
  <AccordionItemPrimitive
    ref={ref}
    className={cn("overflow-hidden", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof AccordionTriggerPrimitive>
>(({ className, children, ...props }, ref) => (
  <AccordionTriggerPrimitive
    ref={ref}
    className={cn(
      "flex items-center justify-between py-4 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=open]:bg-muted",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className={cn(
        "ml-4 h-4 w-4 shrink-0 transition-transform duration-200",
        "data-[state=open]:rotate-180"
      )}
    />
  </AccordionTriggerPrimitive>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof AccordionContentPrimitive>
>(({ className, children, ...props }, ref) => (
  <AccordionContentPrimitive
    ref={ref}
    className={cn(
      "overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4">{children}</div>
  </AccordionContentPrimitive>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
