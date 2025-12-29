import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Sheet
 *
 * クラス構造: fb-sheet, fb-sheet-content -side-{value}
 *
 * @example
 * <FbSheet>
 *   <FbSheetTrigger>Open</FbSheetTrigger>
 *   <FbSheetContent side="right">
 *     <FbSheetHeader>
 *       <FbSheetTitle>Sheet Title</FbSheetTitle>
 *     </FbSheetHeader>
 *   </FbSheetContent>
 * </FbSheet>
 */

function FbSheet({
  ...props
}: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="fb-sheet" {...props} />
}

function FbSheetTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="fb-sheet-trigger" {...props} />
}

function FbSheetClose({
  ...props
}: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="fb-sheet-close" {...props} />
}

function FbSheetPortal({
  ...props
}: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal {...props} />
}

function FbSheetOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="fb-sheet-overlay"
      className={cn(
        "fb-sheet-overlay fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

const fbSheetContentVariants = cva(
  "fb-sheet-content fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-gray-900",
  {
    variants: {
      side: {
        top: "-side-top inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "-side-bottom inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "-side-left inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "-side-right inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface FbSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof fbSheetContentVariants> {}

function FbSheetContent({
  side = "right",
  className,
  children,
  ...props
}: FbSheetContentProps) {
  return (
    <FbSheetPortal>
      <FbSheetOverlay />
      <SheetPrimitive.Content
        data-slot="fb-sheet-content"
        className={cn(fbSheetContentVariants({ side }), className)}
        {...props}
      >
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-900 dark:focus:ring-gray-600">
          <X className="h-4 w-4" />
          <span className="sr-only">閉じる</span>
        </SheetPrimitive.Close>
        {children}
      </SheetPrimitive.Content>
    </FbSheetPortal>
  )
}

function FbSheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-sheet-header"
      className={cn("fb-sheet-header flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function FbSheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-sheet-footer"
      className={cn("fb-sheet-footer flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      {...props}
    />
  )
}

function FbSheetTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="fb-sheet-title"
      className={cn("fb-sheet-title text-lg font-semibold text-gray-900 dark:text-gray-100", className)}
      {...props}
    />
  )
}

function FbSheetDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="fb-sheet-description"
      className={cn("fb-sheet-description text-sm text-gray-600 dark:text-gray-400", className)}
      {...props}
    />
  )
}

export {
  FbSheet,
  FbSheetPortal,
  FbSheetOverlay,
  FbSheetTrigger,
  FbSheetClose,
  FbSheetContent,
  FbSheetHeader,
  FbSheetFooter,
  FbSheetTitle,
  FbSheetDescription,
}
