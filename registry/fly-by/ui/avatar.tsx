import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Avatar
 *
 * クラス構造: avatar -size-{value} -shape-{value}
 *
 * @example
 * <Avatar>
 *   <AvatarImage src="/avatar.png" alt="User" />
 *   <AvatarFallback>UN</AvatarFallback>
 * </Avatar>
 */

const avatarVariants = cva(
  "avatar relative flex shrink-0 overflow-hidden",
  {
    variants: {
      size: {
        xs: "-size-xs h-6 w-6 text-xs",
        s: "-size-s h-8 w-8 text-xs",
        m: "-size-m h-10 w-10 text-sm",
        l: "-size-l h-12 w-12 text-base",
        xl: "-size-xl h-16 w-16 text-lg",
      },
      shape: {
        circle: "-shape-circle rounded-full",
        square: "-shape-square rounded-md",
      },
    },
    defaultVariants: {
      size: "m",
      shape: "circle",
    },
  }
)

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

function Avatar({
  className,
  size,
  shape,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, shape, className }))}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex h-full w-full items-center justify-center bg-gray-200 font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants }
