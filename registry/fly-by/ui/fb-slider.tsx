import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Slider
 *
 * クラス構造: fb-slider, fb-slider-track, fb-slider-range, fb-slider-thumb
 *
 * @example
 * <FbSlider defaultValue={[50]} max={100} step={1} />
 *
 * @example
 * // Range slider
 * <FbSlider defaultValue={[25, 75]} max={100} step={1} />
 */

const fbSliderVariants = cva("fb-slider relative flex w-full touch-none select-none items-center", {
  variants: {
    size: {
      s: "[&_[data-slot=fb-slider-track]]:h-1 [&_[data-slot=fb-slider-thumb]]:h-3 [&_[data-slot=fb-slider-thumb]]:w-3",
      m: "[&_[data-slot=fb-slider-track]]:h-1.5 [&_[data-slot=fb-slider-thumb]]:h-4 [&_[data-slot=fb-slider-thumb]]:w-4",
      l: "[&_[data-slot=fb-slider-track]]:h-2 [&_[data-slot=fb-slider-thumb]]:h-5 [&_[data-slot=fb-slider-thumb]]:w-5",
    },
    color: {
      neutral: "[&_[data-slot=fb-slider-range]]:bg-gray-900 dark:[&_[data-slot=fb-slider-range]]:bg-gray-100",
      informative: "[&_[data-slot=fb-slider-range]]:bg-[#002CED]",
      positive: "[&_[data-slot=fb-slider-range]]:bg-green-600",
      negative: "[&_[data-slot=fb-slider-range]]:bg-red-600",
    },
  },
  defaultVariants: {
    size: "m",
    color: "neutral",
  },
})

interface FbSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof fbSliderVariants> {}

function FbSlider({
  className,
  size,
  color,
  ...props
}: FbSliderProps) {
  return (
    <SliderPrimitive.Root
      data-slot="fb-slider"
      className={cn(fbSliderVariants({ size, color }), className)}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="fb-slider-track"
        className="fb-slider-track relative w-full grow overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
      >
        <SliderPrimitive.Range
          data-slot="fb-slider-range"
          className="fb-slider-range absolute h-full"
        />
      </SliderPrimitive.Track>
      {(props.defaultValue || props.value || [0]).map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="fb-slider-thumb"
          className="fb-slider-thumb block rounded-full border border-gray-200 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:focus-visible:ring-gray-500"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { FbSlider, fbSliderVariants }
