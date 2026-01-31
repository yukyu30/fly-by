import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Item
 *
 * 汎用的なリストアイテムコンポーネント。メニュー、リスト、ナビゲーションなどで使用。
 *
 * クラス構造: item, fb-item-leading, fb-item-content, fb-item-trailing
 *
 * @example
 * <Item>
 *   <ItemLeading>
 *     <Avatar />
 *   </ItemLeading>
 *   <ItemContent>
 *     <ItemTitle>タイトル</ItemTitle>
 *     <ItemDescription>説明文</ItemDescription>
 *   </ItemContent>
 *   <ItemTrailing>
 *     <ChevronRight />
 *   </ItemTrailing>
 * </Item>
 */

const itemVariants = cva(
  "item flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
  {
    variants: {
      variant: {
        default: "",
        interactive:
          "cursor-pointer hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-500",
        selected:
          "bg-gray-100 dark:bg-gray-800",
      },
      size: {
        s: "px-2 py-1.5 text-sm",
        m: "px-3 py-2",
        l: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "m",
    },
  }
)

interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {
  asChild?: boolean
}

function Item({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ItemProps) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="item"
      className={cn(itemVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function ItemLeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-leading"
      className={cn("item-leading flex shrink-0 items-center", className)}
      {...props}
    />
  )
}

function ItemContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-content"
      className={cn("item-content flex min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  )
}

function ItemTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "item-title truncate font-medium text-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function ItemDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-description"
      className={cn(
        "item-description truncate text-sm text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function ItemTrailing({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-trailing"
      className={cn(
        "item-trailing flex shrink-0 items-center text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemLeading,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemTrailing,
  itemVariants,
}
