import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Toggle Group
 *
 * クラス構造: fb-toggle-group, fb-toggle-group-item -appearance-{value} -size-{value}
 *
 * @example
 * <FbToggleGroup type="single">
 *   <FbToggleGroupItem value="a">A</FbToggleGroupItem>
 *   <FbToggleGroupItem value="b">B</FbToggleGroupItem>
 * </FbToggleGroup>
 */

const fbToggleGroupVariants = cva(
  "fb-toggle-group inline-flex items-center justify-center gap-1",
  {
    variants: {
      appearance: {
        default: "-appearance-default",
        outlined: "-appearance-outlined rounded-lg border-2 border-gray-300 p-1 dark:border-gray-600",
      },
    },
    defaultVariants: {
      appearance: "default",
    },
  }
)

export interface FbToggleGroupProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
    VariantProps<typeof fbToggleGroupVariants> {}

function FbToggleGroup({
  className,
  appearance,
  children,
  ...props
}: FbToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="fb-toggle-group"
      className={cn(fbToggleGroupVariants({ appearance, className }))}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  )
}

const fbToggleGroupItemVariants = cva(
  "fb-toggle-group-item inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-200 data-[state=on]:text-gray-900 dark:data-[state=on]:bg-gray-700 dark:data-[state=on]:text-gray-100",
  {
    variants: {
      appearance: {
        default: "-appearance-default bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
        outlined: "-appearance-outlined bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
      },
      size: {
        s: "-size-s h-8 px-2.5",
        m: "-size-m h-9 px-3",
        l: "-size-l h-10 px-4",
      },
    },
    defaultVariants: {
      appearance: "default",
      size: "m",
    },
  }
)

export interface FbToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof fbToggleGroupItemVariants> {}

function FbToggleGroupItem({
  className,
  appearance,
  size,
  ...props
}: FbToggleGroupItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      data-slot="fb-toggle-group-item"
      className={cn(fbToggleGroupItemVariants({ appearance, size, className }))}
      {...props}
    />
  )
}

export { FbToggleGroup, FbToggleGroupItem, fbToggleGroupVariants, fbToggleGroupItemVariants }
