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
 * クラス構造: fb-empty, fb-empty-icon, fb-empty-title, fb-empty-description, fb-empty-action
 *
 * @example
 * // デフォルトアイコンを使用
 * <FbEmpty>
 *   <FbEmptyIcon />
 *   <FbEmptyTitle>データがありません</FbEmptyTitle>
 *   <FbEmptyDescription>
 *     まだデータが登録されていません。新しいデータを追加してください。
 *   </FbEmptyDescription>
 *   <FbEmptyAction>
 *     <FbButton>データを追加</FbButton>
 *   </FbEmptyAction>
 * </FbEmpty>
 *
 * @example
 * // カスタムアイコンを使用
 * <FbEmpty>
 *   <FbEmptyIcon>
 *     <Search className="h-12 w-12 text-gray-400" />
 *   </FbEmptyIcon>
 *   <FbEmptyTitle>検索結果がありません</FbEmptyTitle>
 * </FbEmpty>
 */

const fbEmptyVariants = cva(
  "fb-empty flex flex-col items-center justify-center text-center",
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

interface FbEmptyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fbEmptyVariants> {}

function FbEmpty({ className, size, ...props }: FbEmptyProps) {
  return (
    <div
      data-slot="fb-empty"
      className={cn(fbEmptyVariants({ size }), className)}
      {...props}
    />
  )
}

function FbEmptyIcon({
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
      data-slot="fb-empty-icon"
      className={cn(
        "fb-empty-icon flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children || defaultIcon}
    </div>
  )
}

function FbEmptyTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="fb-empty-title"
      className={cn(
        "fb-empty-title text-lg font-semibold text-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbEmptyDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="fb-empty-description"
      className={cn(
        "fb-empty-description max-w-md text-sm text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function FbEmptyAction({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-empty-action"
      className={cn("fb-empty-action mt-2", className)}
      {...props}
    />
  )
}

export {
  FbEmpty,
  FbEmptyIcon,
  FbEmptyTitle,
  FbEmptyDescription,
  FbEmptyAction,
  fbEmptyVariants,
}
