import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Context Menu
 *
 * クラス構造: fb-context-menu, fb-context-menu-content, etc.
 *
 * @example
 * <FbContextMenu>
 *   <FbContextMenuTrigger>Right click here</FbContextMenuTrigger>
 *   <FbContextMenuContent>
 *     <FbContextMenuItem>Item 1</FbContextMenuItem>
 *   </FbContextMenuContent>
 * </FbContextMenu>
 */

function FbContextMenu({
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="fb-context-menu" {...props} />
}

function FbContextMenuTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger>) {
  return <ContextMenuPrimitive.Trigger data-slot="fb-context-menu-trigger" {...props} />
}

function FbContextMenuGroup({
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group>) {
  return <ContextMenuPrimitive.Group data-slot="fb-context-menu-group" {...props} />
}

function FbContextMenuPortal({
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Portal>) {
  return <ContextMenuPrimitive.Portal {...props} />
}

function FbContextMenuSub({
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="fb-context-menu-sub" {...props} />
}

function FbContextMenuRadioGroup({
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioGroup>) {
  return <ContextMenuPrimitive.RadioGroup data-slot="fb-context-menu-radio-group" {...props} />
}

function FbContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="fb-context-menu-sub-trigger"
      className={cn(
        "fb-context-menu-sub-trigger flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100 dark:focus:bg-gray-800 dark:data-[state=open]:bg-gray-800",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function FbContextMenuSubContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="fb-context-menu-sub-content"
      className={cn(
        "fb-context-menu-sub-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbContextMenuContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="fb-context-menu-content"
        className={cn(
          "fb-context-menu-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function FbContextMenuItem({
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="fb-context-menu-item"
      className={cn(
        "fb-context-menu-item relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100 [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function FbContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="fb-context-menu-checkbox-item"
      className={cn(
        "fb-context-menu-checkbox-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function FbContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="fb-context-menu-radio-item"
      className={cn(
        "fb-context-menu-radio-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function FbContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="fb-context-menu-label"
      className={cn(
        "fb-context-menu-label px-2 py-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function FbContextMenuSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="fb-context-menu-separator"
      className={cn("fb-context-menu-separator -mx-1 my-1 h-px bg-gray-200 dark:bg-gray-700", className)}
      {...props}
    />
  )
}

function FbContextMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="fb-context-menu-shortcut"
      className={cn("fb-context-menu-shortcut ml-auto text-xs tracking-widest text-gray-500 dark:text-gray-400", className)}
      {...props}
    />
  )
}

export {
  FbContextMenu,
  FbContextMenuTrigger,
  FbContextMenuContent,
  FbContextMenuItem,
  FbContextMenuCheckboxItem,
  FbContextMenuRadioItem,
  FbContextMenuLabel,
  FbContextMenuSeparator,
  FbContextMenuShortcut,
  FbContextMenuGroup,
  FbContextMenuPortal,
  FbContextMenuSub,
  FbContextMenuSubContent,
  FbContextMenuSubTrigger,
  FbContextMenuRadioGroup,
}
