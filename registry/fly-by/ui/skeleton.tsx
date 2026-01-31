import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Skeleton
 *
 * クラス構造: skeleton -shape-{value}
 *
 * @example
 * <Skeleton className="h-4 w-32" />
 * <Skeleton shape="circle" className="h-12 w-12" />
 */

const skeletonVariants = cva(
  "skeleton animate-pulse bg-gray-200 dark:bg-gray-700",
  {
    variants: {
      shape: {
        rectangle: "-shape-rectangle rounded-md",
        circle: "-shape-circle rounded-full",
        text: "-shape-text rounded h-4",
      },
    },
    defaultVariants: {
      shape: "rectangle",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({
  className,
  shape,
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn(skeletonVariants({ shape, className }))}
      {...props}
    />
  )
}

export { Skeleton, skeletonVariants }
