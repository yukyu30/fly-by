import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Radio Group
 *
 * クラス構造: radio-group, fb-radio-group-item -size-{value} -color-{value}
 *
 * @example
 * <RadioGroup defaultValue="option1">
 *   <RadioGroupItem value="option1" />
 *   <RadioGroupItem value="option2" />
 * </RadioGroup>
 */

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

function RadioGroup({
  className,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("radio-group grid gap-2", className)}
      {...props}
    />
  )
}

const fbRadioGroupItemVariants = cva(
  "radio-group-item aspect-square rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        s: "-size-s h-4 w-4",
        m: "-size-m h-5 w-5",
        l: "-size-l h-6 w-6",
      },
      color: {
        neutral: "-color-neutral border-gray-300 data-[state=checked]:border-gray-600 dark:border-gray-600 dark:data-[state=checked]:border-gray-400",
        informative: "-color-informative border-gray-300 data-[state=checked]:border-[#002CED] dark:border-gray-600 dark:data-[state=checked]:border-[#3361ef]",
        positive: "-color-positive border-gray-300 data-[state=checked]:border-green-600 dark:border-gray-600 dark:data-[state=checked]:border-green-500",
        negative: "-color-negative border-gray-300 data-[state=checked]:border-red-600 dark:border-gray-600 dark:data-[state=checked]:border-red-500",
      },
    },
    defaultVariants: {
      size: "m",
      color: "informative",
    },
  }
)

const fbRadioGroupIndicatorVariants = cva(
  "flex items-center justify-center",
  {
    variants: {
      color: {
        neutral: "text-gray-600 dark:text-gray-400",
        informative: "text-[#002CED] dark:text-[#3361ef]",
        positive: "text-green-600 dark:text-green-500",
        negative: "text-red-600 dark:text-red-500",
      },
    },
    defaultVariants: {
      color: "informative",
    },
  }
)

export interface RadioGroupItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, "color">,
    VariantProps<typeof fbRadioGroupItemVariants> {}

function RadioGroupItem({
  className,
  size,
  color,
  ...props
}: RadioGroupItemProps) {
  const iconSize = size === "s" ? "h-2 w-2" : size === "l" ? "h-3 w-3" : "h-2.5 w-2.5"

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(fbRadioGroupItemVariants({ size, color, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={cn(fbRadioGroupIndicatorVariants({ color }))}
      >
        <Circle className={cn(iconSize, "fill-current")} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, fbRadioGroupItemVariants }
