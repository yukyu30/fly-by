import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Input Group
 *
 * Input にプレフィックス/サフィックスを付けるラッパー。
 *
 * クラス構造: input-group, fb-input-group-prefix, fb-input-group-suffix
 *
 * @example
 * <InputGroup>
 *   <InputGroupPrefix>https://</InputGroupPrefix>
 *   <Input placeholder="example.com" />
 * </InputGroup>
 *
 * @example
 * <InputGroup>
 *   <InputGroupPrefix>
 *     <Search className="h-4 w-4" />
 *   </InputGroupPrefix>
 *   <Input placeholder="検索..." />
 *   <InputGroupSuffix>
 *     <Kbd>⌘K</Kbd>
 *   </InputGroupSuffix>
 * </InputGroup>
 */

const inputGroupVariants = cva(
  "input-group flex items-stretch rounded-md border-2 border-gray-300 shadow-sm focus-within:ring-1 focus-within:ring-gray-400 dark:border-gray-600 dark:focus-within:ring-gray-500",
  {
    variants: {
      size: {
        s: "h-8 [&_input]:h-8 [&_input]:text-xs text-xs",
        m: "h-9 [&_input]:h-9 [&_input]:text-sm text-sm",
        l: "h-10 [&_input]:h-10 [&_input]:text-base text-base",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
)

interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {}

function InputGroup({ className, size, ...props }: InputGroupProps) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        inputGroupVariants({ size }),
        "[&>input]:border-0 [&>input]:shadow-none [&>input]:focus-visible:ring-0",
        className
      )}
      {...props}
    />
  )
}

function InputGroupPrefix({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group-prefix"
      className={cn(
        "input-group-prefix flex items-center border-r border-gray-300 bg-gray-50 px-3 text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function InputGroupSuffix({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group-suffix"
      className={cn(
        "input-group-suffix flex items-center border-l border-gray-300 bg-gray-50 px-3 text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupPrefix,
  InputGroupSuffix,
  inputGroupVariants,
}
