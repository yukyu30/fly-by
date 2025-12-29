import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

/**
 * fly-by Hover Card
 *
 * クラス構造: fb-hover-card, fb-hover-card-content
 *
 * @example
 * <FbHoverCard>
 *   <FbHoverCardTrigger>Hover me</FbHoverCardTrigger>
 *   <FbHoverCardContent>
 *     Hover card content
 *   </FbHoverCardContent>
 * </FbHoverCard>
 */

function FbHoverCard({
  ...props
}: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="fb-hover-card" {...props} />
}

function FbHoverCardTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>) {
  return <HoverCardPrimitive.Trigger data-slot="fb-hover-card-trigger" {...props} />
}

function FbHoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Content
      data-slot="fb-hover-card-content"
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "fb-hover-card-content z-50 w-64 rounded-md border border-gray-200 bg-white p-4 text-gray-900 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

export { FbHoverCard, FbHoverCardTrigger, FbHoverCardContent }
