import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Menubar
 *
 * クラス構造: fb-menubar, fb-menubar-menu, fb-menubar-trigger, etc.
 *
 * @example
 * <FbMenubar>
 *   <FbMenubarMenu>
 *     <FbMenubarTrigger>File</FbMenubarTrigger>
 *     <FbMenubarContent>
 *       <FbMenubarItem>New</FbMenubarItem>
 *     </FbMenubarContent>
 *   </FbMenubarMenu>
 * </FbMenubar>
 */

function FbMenubar({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="fb-menubar"
      className={cn(
        "fb-menubar flex h-9 items-center space-x-1 rounded-md border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-900",
        className
      )}
      {...props}
    />
  )
}

function FbMenubarMenu({
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="fb-menubar-menu" {...props} />
}

function FbMenubarTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="fb-menubar-trigger"
      className={cn(
        "fb-menubar-trigger flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100 focus:text-gray-900 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 dark:focus:bg-gray-800 dark:focus:text-gray-100 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbMenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="fb-menubar-sub-trigger"
      className={cn(
        "fb-menubar-sub-trigger flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 dark:focus:bg-gray-800 dark:focus:text-gray-100 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-100",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function FbMenubarSubContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="fb-menubar-sub-content"
      className={cn(
        "fb-menubar-sub-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbMenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        data-slot="fb-menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "fb-menubar-content z-50 min-w-[12rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
}

function FbMenubarItem({
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="fb-menubar-item"
      className={cn(
        "fb-menubar-item relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function FbMenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="fb-menubar-checkbox-item"
      className={cn(
        "fb-menubar-checkbox-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function FbMenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="fb-menubar-radio-item"
      className={cn(
        "fb-menubar-radio-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-4 w-4 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function FbMenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="fb-menubar-label"
      className={cn(
        "fb-menubar-label px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function FbMenubarSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="fb-menubar-separator"
      className={cn("fb-menubar-separator -mx-1 my-1 h-px bg-gray-200 dark:bg-gray-700", className)}
      {...props}
    />
  )
}

function FbMenubarShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="fb-menubar-shortcut"
      className={cn(
        "fb-menubar-shortcut ml-auto text-xs tracking-widest text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

const FbMenubarGroup = MenubarPrimitive.Group
const FbMenubarPortal = MenubarPrimitive.Portal
const FbMenubarSub = MenubarPrimitive.Sub
const FbMenubarRadioGroup = MenubarPrimitive.RadioGroup

export {
  FbMenubar,
  FbMenubarMenu,
  FbMenubarTrigger,
  FbMenubarContent,
  FbMenubarItem,
  FbMenubarSeparator,
  FbMenubarLabel,
  FbMenubarCheckboxItem,
  FbMenubarRadioGroup,
  FbMenubarRadioItem,
  FbMenubarPortal,
  FbMenubarSubContent,
  FbMenubarSubTrigger,
  FbMenubarGroup,
  FbMenubarSub,
  FbMenubarShortcut,
}
