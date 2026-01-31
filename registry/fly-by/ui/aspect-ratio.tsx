import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

import { cn } from "@/lib/utils"

/**
 * fly-by Aspect Ratio
 *
 * クラス構造: aspect-ratio
 *
 * @example
 * <AspectRatio ratio={16 / 9}>
 *   <img src="/image.jpg" alt="Image" className="object-cover" />
 * </AspectRatio>
 */

export interface AspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {}

function AspectRatio({
  className,
  ...props
}: AspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root
      data-slot="aspect-ratio"
      className={cn("aspect-ratio", className)}
      {...props}
    />
  )
}

export { AspectRatio }
