import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Alert
 *
 * クラス構造: fb-alert, fb-alert-title, fb-alert-description
 *
 * @example
 * <FbAlert color="informative">
 *   <FbAlertTitle>お知らせ</FbAlertTitle>
 *   <FbAlertDescription>重要な情報があります。</FbAlertDescription>
 * </FbAlert>
 */

const fbAlertVariants = cva(
  "fb-alert relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current [&>svg~*]:pl-7",
  {
    variants: {
      color: {
        neutral:
          "border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
        informative:
          "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
        positive:
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
        negative:
          "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100",
      },
    },
    defaultVariants: {
      color: "neutral",
    },
  }
)

const alertIcons = {
  neutral: Info,
  informative: Info,
  positive: CheckCircle2,
  negative: AlertCircle,
  warning: AlertTriangle,
}

interface FbAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fbAlertVariants> {
  showIcon?: boolean
}

function FbAlert({
  className,
  color = "neutral",
  showIcon = true,
  children,
  ...props
}: FbAlertProps) {
  const Icon = alertIcons[color || "neutral"]

  return (
    <div
      data-slot="fb-alert"
      role="alert"
      className={cn(fbAlertVariants({ color }), className)}
      {...props}
    >
      {showIcon && <Icon className="h-4 w-4" />}
      {children}
    </div>
  )
}

function FbAlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      data-slot="fb-alert-title"
      className={cn(
        "fb-alert-title mb-1 font-medium leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function FbAlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div
      data-slot="fb-alert-description"
      className={cn(
        "fb-alert-description text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { FbAlert, FbAlertTitle, FbAlertDescription, fbAlertVariants }
