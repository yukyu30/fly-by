import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Dialog
 *
 * クラス構造: fb-dialog, fb-dialog-content, fb-dialog-header, etc.
 *
 * @example
 * <FbDialog>
 *   <FbDialogTrigger>Open</FbDialogTrigger>
 *   <FbDialogContent>
 *     <FbDialogHeader>
 *       <FbDialogTitle>Dialog Title</FbDialogTitle>
 *       <FbDialogDescription>Dialog description</FbDialogDescription>
 *     </FbDialogHeader>
 *   </FbDialogContent>
 * </FbDialog>
 */

function FbDialog({
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="fb-dialog" {...props} />
}

function FbDialogTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="fb-dialog-trigger" {...props} />
}

function FbDialogPortal({
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />
}

function FbDialogClose({
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="fb-dialog-close" {...props} />
}

function FbDialogOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="fb-dialog-overlay"
      className={cn(
        "fb-dialog-overlay fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function FbDialogContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  return (
    <FbDialogPortal>
      <FbDialogOverlay />
      <DialogPrimitive.Content
        data-slot="fb-dialog-content"
        className={cn(
          "fb-dialog-content fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-gray-700 dark:bg-gray-900",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-900 dark:focus:ring-gray-600 dark:data-[state=open]:bg-gray-800">
          <X className="h-4 w-4" />
          <span className="sr-only">閉じる</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </FbDialogPortal>
  )
}

function FbDialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-dialog-header"
      className={cn("fb-dialog-header flex flex-col space-y-1.5 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function FbDialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-dialog-footer"
      className={cn("fb-dialog-footer flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      {...props}
    />
  )
}

function FbDialogTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="fb-dialog-title"
      className={cn("fb-dialog-title text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100", className)}
      {...props}
    />
  )
}

function FbDialogDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="fb-dialog-description"
      className={cn("fb-dialog-description text-sm text-gray-600 dark:text-gray-400", className)}
      {...props}
    />
  )
}

export {
  FbDialog,
  FbDialogPortal,
  FbDialogOverlay,
  FbDialogTrigger,
  FbDialogClose,
  FbDialogContent,
  FbDialogHeader,
  FbDialogFooter,
  FbDialogTitle,
  FbDialogDescription,
}
