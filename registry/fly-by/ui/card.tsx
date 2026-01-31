import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Card
 *
 * クラス構造: card -elevation-{0|1|2|3}
 * スロット: _header, _body, _footer
 *
 * @example
 * <Card elevation={1}>
 *   <CardHeader>
 *     <CardTitle>タイトル</CardTitle>
 *   </CardHeader>
 *   <CardBody>コンテンツ</CardBody>
 *   <CardFooter>フッター</CardFooter>
 * </Card>
 */

const cardVariants = cva(
  "card flex flex-col rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
  {
    variants: {
      elevation: {
        0: "-elevation-0",
        1: "-elevation-1",
        2: "-elevation-2",
        3: "-elevation-3",
      },
    },
    defaultVariants: {
      elevation: 1,
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({ className, elevation, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ elevation, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("_header px-6 py-4 border-b border-gray-100 dark:border-gray-800", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-gray-500 dark:text-gray-400 mt-1", className)}
      {...props}
    />
  )
}

function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-body"
      className={cn("_body px-6 py-4 flex-1", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn("_footer px-6 py-4 border-t border-gray-100 dark:border-gray-800", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  cardVariants,
}
