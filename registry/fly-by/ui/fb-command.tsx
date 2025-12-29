import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  FbDialog,
  FbDialogContent,
  FbDialogTitle,
  FbDialogDescription,
} from "@/registry/fly-by/ui/fb-dialog"

/**
 * fly-by Command
 *
 * cmdk ベースのコマンドパレット。検索・フィルタリング機能付き。
 *
 * クラス構造: fb-command, fb-command-input, fb-command-list, fb-command-item, etc.
 *
 * @example
 * <FbCommand>
 *   <FbCommandInput placeholder="コマンドを検索..." />
 *   <FbCommandList>
 *     <FbCommandGroup heading="提案">
 *       <FbCommandItem>カレンダー</FbCommandItem>
 *       <FbCommandItem>検索</FbCommandItem>
 *     </FbCommandGroup>
 *   </FbCommandList>
 * </FbCommand>
 */

function FbCommand({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="fb-command"
      className={cn(
        "fb-command flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbCommandDialog({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof FbDialog>) {
  return (
    <FbDialog {...props}>
      <FbDialogContent className="overflow-hidden p-0">
        <FbDialogTitle className="sr-only">コマンドパレット</FbDialogTitle>
        <FbDialogDescription className="sr-only">
          コマンドを検索して実行できます
        </FbDialogDescription>
        <FbCommand
          data-slot="fb-command-dialog"
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 dark:[&_[cmdk-group-heading]]:text-gray-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
          {children}
        </FbCommand>
      </FbDialogContent>
    </FbDialog>
  )
}

function FbCommandInput({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>) {
  return (
    <div
      className="flex items-center border-b border-gray-200 px-3 dark:border-gray-700"
      cmdk-input-wrapper=""
    >
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="fb-command-input"
        className={cn(
          "fb-command-input flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-400",
          className
        )}
        {...props}
      />
    </div>
  )
}

function FbCommandList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="fb-command-list"
      className={cn(
        "fb-command-list max-h-[300px] overflow-y-auto overflow-x-hidden",
        className
      )}
      {...props}
    />
  )
}

function FbCommandEmpty({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="fb-command-empty"
      className={cn("fb-command-empty py-6 text-center text-sm", className)}
      {...props}
    />
  )
}

function FbCommandGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="fb-command-group"
      className={cn(
        "fb-command-group overflow-hidden p-1 text-gray-900 dark:text-gray-100 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 dark:[&_[cmdk-group-heading]]:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function FbCommandSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="fb-command-separator"
      className={cn(
        "fb-command-separator -mx-1 h-px bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    />
  )
}

function FbCommandItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="fb-command-item"
      className={cn(
        "fb-command-item relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-gray-100 data-[selected=true]:text-gray-900 data-[disabled=true]:opacity-50 dark:data-[selected=true]:bg-gray-800 dark:data-[selected=true]:text-gray-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function FbCommandShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="fb-command-shortcut"
      className={cn(
        "fb-command-shortcut ml-auto text-xs tracking-widest text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export {
  FbCommand,
  FbCommandDialog,
  FbCommandInput,
  FbCommandList,
  FbCommandEmpty,
  FbCommandGroup,
  FbCommandItem,
  FbCommandShortcut,
  FbCommandSeparator,
}
