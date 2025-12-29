import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Accordion
 *
 * クラス構造: fb-accordion, fb-accordion-item, fb-accordion-trigger, fb-accordion-content
 *
 * @example
 * <FbAccordion type="single" collapsible>
 *   <FbAccordionItem value="item-1">
 *     <FbAccordionTrigger>Section 1</FbAccordionTrigger>
 *     <FbAccordionContent>Content 1</FbAccordionContent>
 *   </FbAccordionItem>
 * </FbAccordion>
 */

function FbAccordion({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="fb-accordion"
      className={cn("fb-accordion", className)}
      {...props}
    />
  )
}

function FbAccordionItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="fb-accordion-item"
      className={cn("fb-accordion-item border-b border-gray-200 dark:border-gray-700", className)}
      {...props}
    />
  )
}

function FbAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="fb-accordion-trigger"
        className={cn(
          "fb-accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium text-gray-900 transition-all hover:underline dark:text-gray-100 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 dark:text-gray-400" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function FbAccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="fb-accordion-content"
      className="fb-accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0 text-gray-600 dark:text-gray-400", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { FbAccordion, FbAccordionItem, FbAccordionTrigger, FbAccordionContent }
