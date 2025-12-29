import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Dropdown Menu
 *
 * クラス構造: fb-dropdown-menu, fb-dropdown-menu-content, etc.
 *
 * @example
 * <FbDropdownMenu>
 *   <FbDropdownMenuTrigger>Open</FbDropdownMenuTrigger>
 *   <FbDropdownMenuContent>
 *     <FbDropdownMenuItem>Item 1</FbDropdownMenuItem>
 *     <FbDropdownMenuItem>Item 2</FbDropdownMenuItem>
 *   </FbDropdownMenuContent>
 * </FbDropdownMenu>
 */

function FbDropdownMenu({
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="fb-dropdown-menu" {...props} />
}

function FbDropdownMenuTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="fb-dropdown-menu-trigger" {...props} />
}

function FbDropdownMenuGroup({
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="fb-dropdown-menu-group" {...props} />
}

function FbDropdownMenuPortal({
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal {...props} />
}

function FbDropdownMenuSub({
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="fb-dropdown-menu-sub" {...props} />
}

function FbDropdownMenuRadioGroup({
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="fb-dropdown-menu-radio-group" {...props} />
}

function FbDropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="fb-dropdown-menu-sub-trigger"
      className={cn(
        "fb-dropdown-menu-sub-trigger flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100 dark:focus:bg-gray-800 dark:data-[state=open]:bg-gray-800",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function FbDropdownMenuSubContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="fb-dropdown-menu-sub-content"
      className={cn(
        "fb-dropdown-menu-sub-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbDropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="fb-dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "fb-dropdown-menu-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function FbDropdownMenuItem({
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="fb-dropdown-menu-item"
      className={cn(
        "fb-dropdown-menu-item relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100 [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function FbDropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="fb-dropdown-menu-checkbox-item"
      className={cn(
        "fb-dropdown-menu-checkbox-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function FbDropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="fb-dropdown-menu-radio-item"
      className={cn(
        "fb-dropdown-menu-radio-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function FbDropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="fb-dropdown-menu-label"
      className={cn(
        "fb-dropdown-menu-label px-2 py-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function FbDropdownMenuSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="fb-dropdown-menu-separator"
      className={cn("fb-dropdown-menu-separator -mx-1 my-1 h-px bg-gray-200 dark:bg-gray-700", className)}
      {...props}
    />
  )
}

function FbDropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="fb-dropdown-menu-shortcut"
      className={cn("fb-dropdown-menu-shortcut ml-auto text-xs tracking-widest text-gray-500 dark:text-gray-400", className)}
      {...props}
    />
  )
}

export {
  FbDropdownMenu,
  FbDropdownMenuTrigger,
  FbDropdownMenuContent,
  FbDropdownMenuItem,
  FbDropdownMenuCheckboxItem,
  FbDropdownMenuRadioItem,
  FbDropdownMenuLabel,
  FbDropdownMenuSeparator,
  FbDropdownMenuShortcut,
  FbDropdownMenuGroup,
  FbDropdownMenuPortal,
  FbDropdownMenuSub,
  FbDropdownMenuSubContent,
  FbDropdownMenuSubTrigger,
  FbDropdownMenuRadioGroup,
}
