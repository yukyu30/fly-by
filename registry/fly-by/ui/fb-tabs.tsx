import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Tabs
 *
 * クラス構造: fb-tabs, fb-tabs-list -appearance-{value}, fb-tabs-trigger, fb-tabs-content
 *
 * @example
 * <FbTabs defaultValue="tab1">
 *   <FbTabsList>
 *     <FbTabsTrigger value="tab1">Tab 1</FbTabsTrigger>
 *     <FbTabsTrigger value="tab2">Tab 2</FbTabsTrigger>
 *   </FbTabsList>
 *   <FbTabsContent value="tab1">Content 1</FbTabsContent>
 *   <FbTabsContent value="tab2">Content 2</FbTabsContent>
 * </FbTabs>
 */

function FbTabs({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="fb-tabs"
      className={cn("fb-tabs", className)}
      {...props}
    />
  )
}

const fbTabsListVariants = cva(
  "fb-tabs-list inline-flex items-center justify-center",
  {
    variants: {
      appearance: {
        line: "-appearance-line h-9 gap-4 border-b border-gray-200 dark:border-gray-700",
        solid: "-appearance-solid h-9 gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800",
        outline: "-appearance-outline h-10 gap-1 rounded-lg border border-gray-200 p-1 dark:border-gray-700",
      },
    },
    defaultVariants: {
      appearance: "line",
    },
  }
)

export interface FbTabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof fbTabsListVariants> {}

function FbTabsList({
  className,
  appearance,
  ...props
}: FbTabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="fb-tabs-list"
      className={cn(fbTabsListVariants({ appearance, className }))}
      {...props}
    />
  )
}

const fbTabsTriggerVariants = cva(
  "fb-tabs-trigger inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      appearance: {
        line: "-appearance-line px-1 pb-3 text-gray-600 hover:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-[#002CED] data-[state=active]:text-[#002CED] dark:text-gray-400 dark:hover:text-gray-100 dark:data-[state=active]:border-[#3361ef] dark:data-[state=active]:text-[#3361ef]",
        solid: "-appearance-solid rounded-md px-3 py-1 text-gray-600 hover:text-gray-900 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow dark:text-gray-400 dark:hover:text-gray-100 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-gray-100",
        outline: "-appearance-outline rounded-md px-3 py-1.5 text-gray-600 hover:text-gray-900 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-gray-100",
      },
    },
    defaultVariants: {
      appearance: "line",
    },
  }
)

export interface FbTabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof fbTabsTriggerVariants> {}

function FbTabsTrigger({
  className,
  appearance,
  ...props
}: FbTabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="fb-tabs-trigger"
      className={cn(fbTabsTriggerVariants({ appearance, className }))}
      {...props}
    />
  )
}

function FbTabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="fb-tabs-content"
      className={cn(
        "fb-tabs-content mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
}

export { FbTabs, FbTabsList, FbTabsTrigger, FbTabsContent, fbTabsListVariants, fbTabsTriggerVariants }
