import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

/**
 * fly-by Scroll Area
 *
 * クラス構造: fb-scroll-area, fb-scroll-area-viewport, fb-scroll-area-scrollbar, fb-scroll-area-thumb
 *
 * @example
 * <FbScrollArea className="h-[200px] w-[350px]">
 *   <div className="p-4">Scrollable content</div>
 * </FbScrollArea>
 */

function FbScrollArea({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="fb-scroll-area"
      className={cn("fb-scroll-area relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="fb-scroll-area-viewport"
        className="fb-scroll-area-viewport h-full w-full rounded-[inherit]"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <FbScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function FbScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="fb-scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "fb-scroll-area-scrollbar flex touch-none select-none transition-colors",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="fb-scroll-area-thumb"
        className="fb-scroll-area-thumb relative flex-1 rounded-full bg-gray-300 dark:bg-gray-600"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { FbScrollArea, FbScrollBar }
