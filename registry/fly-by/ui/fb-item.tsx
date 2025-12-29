import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Item
 *
 * 汎用的なリストアイテムコンポーネント。メニュー、リスト、ナビゲーションなどで使用。
 *
 * クラス構造: fb-item, fb-item-leading, fb-item-content, fb-item-trailing
 *
 * @example
 * <FbItem>
 *   <FbItemLeading>
 *     <Avatar />
 *   </FbItemLeading>
 *   <FbItemContent>
 *     <FbItemTitle>タイトル</FbItemTitle>
 *     <FbItemDescription>説明文</FbItemDescription>
 *   </FbItemContent>
 *   <FbItemTrailing>
 *     <ChevronRight />
 *   </FbItemTrailing>
 * </FbItem>
 */

const fbItemVariants = cva(
  "fb-item flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
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

interface FbItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fbItemVariants> {
  asChild?: boolean
}

function FbItem({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: FbItemProps) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="fb-item"
      className={cn(fbItemVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function FbItemLeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-item-leading"
      className={cn("fb-item-leading flex shrink-0 items-center", className)}
      {...props}
    />
  )
}

function FbItemContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-item-content"
      className={cn("fb-item-content flex min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  )
}

function FbItemTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-item-title"
      className={cn(
        "fb-item-title truncate font-medium text-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbItemDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-item-description"
      className={cn(
        "fb-item-description truncate text-sm text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function FbItemTrailing({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-item-trailing"
      className={cn(
        "fb-item-trailing flex shrink-0 items-center text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export {
  FbItem,
  FbItemLeading,
  FbItemContent,
  FbItemTitle,
  FbItemDescription,
  FbItemTrailing,
  fbItemVariants,
}
