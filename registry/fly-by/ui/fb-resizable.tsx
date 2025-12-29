import * as React from "react"
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

/**
 * fly-by Resizable
 *
 * クラス構造: fb-resizable-panel-group, fb-resizable-panel, fb-resizable-handle
 *
 * @example
 * <FbResizablePanelGroup direction="horizontal">
 *   <FbResizablePanel>Panel 1</FbResizablePanel>
 *   <FbResizableHandle />
 *   <FbResizablePanel>Panel 2</FbResizablePanel>
 * </FbResizablePanelGroup>
 */

function FbResizablePanelGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="fb-resizable-panel-group"
      className={cn(
        "fb-resizable-panel-group flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function FbResizablePanel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel>) {
  return (
    <ResizablePrimitive.Panel
      data-slot="fb-resizable-panel"
      className={cn("fb-resizable-panel", className)}
      {...props}
    />
  )
}

function FbResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="fb-resizable-handle"
      className={cn(
        "fb-resizable-handle relative flex w-px items-center justify-center bg-gray-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 dark:bg-gray-700 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
          <GripVertical className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { FbResizablePanelGroup, FbResizablePanel, FbResizableHandle }
