import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Inbox } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Empty
 *
 * 空の状態を表示するコンポーネント。
 * デフォルトでモダンなグラデーション円形背景のInboxアイコンを表示。
 *
 * クラス構造: empty, fb-empty-icon, fb-empty-title, fb-empty-description, fb-empty-action
 *
 * @example
 * // デフォルトアイコンを使用
 * <Empty>
 *   <EmptyIcon />
 *   <EmptyTitle>データがありません</EmptyTitle>
 *   <EmptyDescription>
 *     まだデータが登録されていません。新しいデータを追加してください。
 *   </EmptyDescription>
 *   <EmptyAction>
 *     <Button>データを追加</Button>
 *   </EmptyAction>
 * </Empty>
 *
 * @example
 * // カスタムアイコンを使用
 * <Empty>
 *   <EmptyIcon>
 *     <Search className="h-12 w-12 text-gray-400" />
 *   </EmptyIcon>
 *   <EmptyTitle>検索結果がありません</EmptyTitle>
 * </Empty>
 */

const emptyVariants = cva(
  "empty flex flex-col items-center justify-center text-center",
  {
    variants: {
      size: {
        s: "gap-2 py-6",
        m: "gap-3 py-10",
        l: "gap-4 py-16",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
)

interface EmptyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyVariants> {}

function Empty({ className, size, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty"
      className={cn(emptyVariants({ size }), className)}
      {...props}
    />
  )
}

function EmptyIcon({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const defaultIcon = (
    <div className="relative">
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full blur-lg opacity-50" />
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center border border-gray-300 dark:border-gray-600">
        <Inbox className="h-10 w-10 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  )

  return (
    <div
      data-slot="empty-icon"
      className={cn(
        "empty-icon flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children || defaultIcon}
    </div>
  )
}

function EmptyTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="empty-title"
      className={cn(
        "empty-title text-lg font-semibold text-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function EmptyDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="empty-description"
      className={cn(
        "empty-description max-w-md text-sm text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function EmptyAction({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="empty-action"
      className={cn("empty-action mt-2", className)}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyAction,
  emptyVariants,
}
