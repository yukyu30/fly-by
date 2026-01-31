import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Text
 *
 * クラス構造: text -level-{xxs|xs|s|m|l|xl|xxl|xxxl} -density-{dense|normal|loose}
 *
 * @example
 * <Text level="l" density="normal">見出しテキスト</Text>
 */

const textVariants = cva("text text-gray-900 dark:text-gray-100", {
  variants: {
    level: {
      xxs: "-level-xxs text-[11px]",
      xs: "-level-xs text-xs",      // 12px
      s: "-level-s text-sm",        // 14px
      m: "-level-m text-base",      // 16px (default)
      l: "-level-l text-lg",        // 18px
      xl: "-level-xl text-xl",      // 21px
      xxl: "-level-xxl text-2xl",   // 26px
      xxxl: "-level-xxxl text-3xl", // 32px
    },
    density: {
      dense: "-density-dense leading-tight",
      normal: "-density-normal leading-normal",
      loose: "-density-loose leading-relaxed",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    level: "m",
    density: "normal",
    weight: "normal",
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  as?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

function Text({
  className,
  level,
  density,
  weight,
  as: Component = "span",
  ...props
}: TextProps) {
  return (
    <Component
      data-slot="text"
      className={cn(textVariants({ level, density, weight, className }))}
      {...props}
    />
  )
}

export { Text, textVariants }
