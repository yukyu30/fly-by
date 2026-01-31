import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Kbd (Keyboard)
 *
 * クラス構造: kbd -size-{value}
 *
 * @example
 * <Kbd>⌘</Kbd>
 * <Kbd>K</Kbd>
 * <Kbd size="s">Ctrl</Kbd>
 */

const kbdVariants = cva(
  "kbd inline-flex items-center justify-center rounded border border-gray-300 bg-gray-100 font-mono font-medium text-gray-700 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300",
  {
    variants: {
      size: {
        s: "-size-s h-5 min-w-5 px-1 text-xs",
        m: "-size-m h-6 min-w-6 px-1.5 text-xs",
        l: "-size-l h-7 min-w-7 px-2 text-sm",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
)

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

function Kbd({
  className,
  size,
  ...props
}: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(kbdVariants({ size, className }))}
      {...props}
    />
  )
}

export { Kbd, kbdVariants }
