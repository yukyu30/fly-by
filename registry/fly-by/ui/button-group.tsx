import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Button Group
 *
 * ボタンをグループ化するラッパー。隣接するボタンの角丸を調整。
 *
 * クラス構造: button-group
 *
 * @example
 * <ButtonGroup>
 *   <Button appearance="outlined" color="neutral">左</Button>
 *   <Button appearance="outlined" color="neutral">中央</Button>
 *   <Button appearance="outlined" color="neutral">右</Button>
 * </ButtonGroup>
 *
 * @example
 * <ButtonGroup orientation="vertical">
 *   <Button appearance="outlined" color="neutral">上</Button>
 *   <Button appearance="outlined" color="neutral">中</Button>
 *   <Button appearance="outlined" color="neutral">下</Button>
 * </ButtonGroup>
 */

const buttonGroupVariants = cva("button-group inline-flex", {
  variants: {
    orientation: {
      horizontal: [
        "flex-row",
        "[&>button]:rounded-none",
        "[&>button:first-child]:rounded-l-md",
        "[&>button:last-child]:rounded-r-md",
        "[&>button:not(:first-child)]:-ml-px",
      ],
      vertical: [
        "flex-col",
        "[&>button]:rounded-none",
        "[&>button:first-child]:rounded-t-md",
        "[&>button:last-child]:rounded-b-md",
        "[&>button:not(:first-child)]:-mt-px",
      ],
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

function ButtonGroup({
  className,
  orientation,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      data-slot="button-group"
      role="group"
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

export { ButtonGroup, buttonGroupVariants }
