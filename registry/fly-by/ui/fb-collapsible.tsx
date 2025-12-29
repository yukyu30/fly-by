import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"

/**
 * fly-by Collapsible
 *
 * クラス構造: fb-collapsible, fb-collapsible-trigger, fb-collapsible-content
 *
 * @example
 * <FbCollapsible>
 *   <FbCollapsibleTrigger>Toggle</FbCollapsibleTrigger>
 *   <FbCollapsibleContent>
 *     Collapsible content
 *   </FbCollapsibleContent>
 * </FbCollapsible>
 */

function FbCollapsible({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="fb-collapsible"
      className={cn("fb-collapsible", className)}
      {...props}
    />
  )
}

function FbCollapsibleTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="fb-collapsible-trigger"
      className={cn("fb-collapsible-trigger", className)}
      {...props}
    />
  )
}

function FbCollapsibleContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>) {
  return (
    <CollapsiblePrimitive.Content
      data-slot="fb-collapsible-content"
      className={cn(
        "fb-collapsible-content overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className
      )}
      {...props}
    />
  )
}

export { FbCollapsible, FbCollapsibleTrigger, FbCollapsibleContent }
