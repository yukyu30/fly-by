import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Spinner
 *
 * クラス構造: spinner -size-{value} -color-{value}
 *
 * @example
 * <Spinner />
 * <Spinner size="l" color="informative" />
 */

const spinnerVariants = cva(
  "spinner inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "-size-xs h-3 w-3",
        s: "-size-s h-4 w-4",
        m: "-size-m h-5 w-5",
        l: "-size-l h-6 w-6",
        xl: "-size-xl h-8 w-8",
      },
      color: {
        neutral: "-color-neutral text-gray-600 dark:text-gray-400",
        informative: "-color-informative text-[#002CED] dark:text-[#3361ef]",
        positive: "-color-positive text-green-600 dark:text-green-400",
        negative: "-color-negative text-red-600 dark:text-red-400",
        favorite: "-color-favorite text-pink-500 dark:text-pink-400",
        current: "-color-current text-current",
      },
    },
    defaultVariants: {
      size: "m",
      color: "neutral",
    },
  }
)

export interface SpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof spinnerVariants> {
  /** アクセシビリティ用のラベル */
  label?: string
}

function Spinner({
  className,
  size,
  color,
  label = "読み込み中",
  ...props
}: SpinnerProps) {
  return (
    <div
      data-slot="spinner"
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size, color, className }))}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  )
}

export { Spinner, spinnerVariants }
