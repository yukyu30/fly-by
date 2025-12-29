import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Button Group
 *
 * ボタンをグループ化するラッパー。隣接するボタンの角丸を調整。
 *
 * クラス構造: fb-button-group
 *
 * @example
 * <FbButtonGroup>
 *   <FbButton appearance="outlined" color="neutral">左</FbButton>
 *   <FbButton appearance="outlined" color="neutral">中央</FbButton>
 *   <FbButton appearance="outlined" color="neutral">右</FbButton>
 * </FbButtonGroup>
 *
 * @example
 * <FbButtonGroup orientation="vertical">
 *   <FbButton appearance="outlined" color="neutral">上</FbButton>
 *   <FbButton appearance="outlined" color="neutral">中</FbButton>
 *   <FbButton appearance="outlined" color="neutral">下</FbButton>
 * </FbButtonGroup>
 */

const fbButtonGroupVariants = cva("fb-button-group inline-flex", {
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

interface FbButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fbButtonGroupVariants> {}

function FbButtonGroup({
  className,
  orientation,
  ...props
}: FbButtonGroupProps) {
  return (
    <div
      data-slot="fb-button-group"
      role="group"
      className={cn(fbButtonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

export { FbButtonGroup, fbButtonGroupVariants }
