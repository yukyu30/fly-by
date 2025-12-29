import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

/**
 * fly-by Tooltip
 *
 * クラス構造: fb-tooltip, fb-tooltip-content
 *
 * @example
 * <FbTooltipProvider>
 *   <FbTooltip>
 *     <FbTooltipTrigger>Hover me</FbTooltipTrigger>
 *     <FbTooltipContent>Tooltip content</FbTooltipContent>
 *   </FbTooltip>
 * </FbTooltipProvider>
 */

function FbTooltipProvider({
  delayDuration = 200,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="fb-tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function FbTooltip({
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="fb-tooltip" {...props} />
}

function FbTooltipTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="fb-tooltip-trigger" {...props} />
}

function FbTooltipContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="fb-tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "fb-tooltip-content z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-gray-100 dark:text-gray-900",
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}

export { FbTooltip, FbTooltipTrigger, FbTooltipContent, FbTooltipProvider }
