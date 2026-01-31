import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Separator
 *
 * クラス構造: separator -orientation-{value}
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" />
 */

const separatorVariants = cva(
  "separator shrink-0 bg-gray-200 dark:bg-gray-700",
  {
    variants: {
      orientation: {
        horizontal: "-orientation-horizontal h-px w-full",
        vertical: "-orientation-vertical h-full w-px",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof separatorVariants> {}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ orientation, className }))}
      {...props}
    />
  )
}

export { Separator, separatorVariants }
