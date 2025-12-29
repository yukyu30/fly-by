import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

/**
 * fly-by Drawer
 *
 * クラス構造: fb-drawer, fb-drawer-content
 *
 * @example
 * <FbDrawer>
 *   <FbDrawerTrigger>Open</FbDrawerTrigger>
 *   <FbDrawerContent>
 *     <FbDrawerHeader>
 *       <FbDrawerTitle>Drawer Title</FbDrawerTitle>
 *     </FbDrawerHeader>
 *   </FbDrawerContent>
 * </FbDrawer>
 */

function FbDrawer({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return (
    <DrawerPrimitive.Root
      data-slot="fb-drawer"
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  )
}

function FbDrawerTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="fb-drawer-trigger" {...props} />
}

function FbDrawerPortal({
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal {...props} />
}

function FbDrawerClose({
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="fb-drawer-close" {...props} />
}

function FbDrawerOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="fb-drawer-overlay"
      className={cn("fb-drawer-overlay fixed inset-0 z-50 bg-black/50", className)}
      {...props}
    />
  )
}

function FbDrawerContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>) {
  return (
    <FbDrawerPortal>
      <FbDrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="fb-drawer-content"
        className={cn(
          "fb-drawer-content fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700" />
        {children}
      </DrawerPrimitive.Content>
    </FbDrawerPortal>
  )
}

function FbDrawerHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-drawer-header"
      className={cn("fb-drawer-header grid gap-1.5 p-4 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function FbDrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-drawer-footer"
      className={cn("fb-drawer-footer mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function FbDrawerTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="fb-drawer-title"
      className={cn("fb-drawer-title text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100", className)}
      {...props}
    />
  )
}

function FbDrawerDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="fb-drawer-description"
      className={cn("fb-drawer-description text-sm text-gray-600 dark:text-gray-400", className)}
      {...props}
    />
  )
}

export {
  FbDrawer,
  FbDrawerPortal,
  FbDrawerOverlay,
  FbDrawerTrigger,
  FbDrawerClose,
  FbDrawerContent,
  FbDrawerHeader,
  FbDrawerFooter,
  FbDrawerTitle,
  FbDrawerDescription,
}
