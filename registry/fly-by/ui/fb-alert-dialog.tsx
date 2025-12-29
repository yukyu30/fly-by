import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"

/**
 * fly-by Alert Dialog
 *
 * クラス構造: fb-alert-dialog, fb-alert-dialog-content, etc.
 *
 * @example
 * <FbAlertDialog>
 *   <FbAlertDialogTrigger>Delete</FbAlertDialogTrigger>
 *   <FbAlertDialogContent>
 *     <FbAlertDialogHeader>
 *       <FbAlertDialogTitle>Are you sure?</FbAlertDialogTitle>
 *       <FbAlertDialogDescription>This action cannot be undone.</FbAlertDialogDescription>
 *     </FbAlertDialogHeader>
 *     <FbAlertDialogFooter>
 *       <FbAlertDialogCancel>Cancel</FbAlertDialogCancel>
 *       <FbAlertDialogAction>Continue</FbAlertDialogAction>
 *     </FbAlertDialogFooter>
 *   </FbAlertDialogContent>
 * </FbAlertDialog>
 */

function FbAlertDialog({
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="fb-alert-dialog" {...props} />
}

function FbAlertDialogTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="fb-alert-dialog-trigger" {...props} />
}

function FbAlertDialogPortal({
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal {...props} />
}

function FbAlertDialogOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="fb-alert-dialog-overlay"
      className={cn(
        "fb-alert-dialog-overlay fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function FbAlertDialogContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>) {
  return (
    <FbAlertDialogPortal>
      <FbAlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="fb-alert-dialog-content"
        className={cn(
          "fb-alert-dialog-content fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-gray-700 dark:bg-gray-900",
          className
        )}
        {...props}
      />
    </FbAlertDialogPortal>
  )
}

function FbAlertDialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-alert-dialog-header"
      className={cn("fb-alert-dialog-header flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function FbAlertDialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-alert-dialog-footer"
      className={cn("fb-alert-dialog-footer flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      {...props}
    />
  )
}

function FbAlertDialogTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="fb-alert-dialog-title"
      className={cn("fb-alert-dialog-title text-lg font-semibold text-gray-900 dark:text-gray-100", className)}
      {...props}
    />
  )
}

function FbAlertDialogDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="fb-alert-dialog-description"
      className={cn("fb-alert-dialog-description text-sm text-gray-600 dark:text-gray-400", className)}
      {...props}
    />
  )
}

function FbAlertDialogAction({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      data-slot="fb-alert-dialog-action"
      className={cn(
        "fb-alert-dialog-action inline-flex h-10 items-center justify-center rounded-md bg-[#002CED] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0025c4] focus:outline-none focus:ring-2 focus:ring-[#002CED] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#3361ef] dark:hover:bg-[#002CED]",
        className
      )}
      {...props}
    />
  )
}

function FbAlertDialogCancel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="fb-alert-dialog-cancel"
      className={cn(
        "fb-alert-dialog-cancel mt-2 inline-flex h-10 items-center justify-center rounded-md border-2 border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 sm:mt-0",
        className
      )}
      {...props}
    />
  )
}

export {
  FbAlertDialog,
  FbAlertDialogPortal,
  FbAlertDialogOverlay,
  FbAlertDialogTrigger,
  FbAlertDialogContent,
  FbAlertDialogHeader,
  FbAlertDialogFooter,
  FbAlertDialogTitle,
  FbAlertDialogDescription,
  FbAlertDialogAction,
  FbAlertDialogCancel,
}
