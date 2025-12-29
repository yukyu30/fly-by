import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Breadcrumb
 *
 * クラス構造: fb-breadcrumb, fb-breadcrumb-list, fb-breadcrumb-item, etc.
 *
 * @example
 * <FbBreadcrumb>
 *   <FbBreadcrumbList>
 *     <FbBreadcrumbItem>
 *       <FbBreadcrumbLink href="/">Home</FbBreadcrumbLink>
 *     </FbBreadcrumbItem>
 *     <FbBreadcrumbSeparator />
 *     <FbBreadcrumbItem>
 *       <FbBreadcrumbPage>Current</FbBreadcrumbPage>
 *     </FbBreadcrumbItem>
 *   </FbBreadcrumbList>
 * </FbBreadcrumb>
 */

function FbBreadcrumb({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      data-slot="fb-breadcrumb"
      aria-label="breadcrumb"
      className={cn("fb-breadcrumb", className)}
      {...props}
    />
  )
}

function FbBreadcrumbList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      data-slot="fb-breadcrumb-list"
      className={cn(
        "fb-breadcrumb-list flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-600 sm:gap-2.5 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function FbBreadcrumbItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li
      data-slot="fb-breadcrumb-item"
      className={cn("fb-breadcrumb-item inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function FbBreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="fb-breadcrumb-link"
      className={cn(
        "fb-breadcrumb-link transition-colors hover:text-gray-900 dark:hover:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function FbBreadcrumbPage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="fb-breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("fb-breadcrumb-page font-medium text-gray-900 dark:text-gray-100", className)}
      {...props}
    />
  )
}

function FbBreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li
      data-slot="fb-breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("fb-breadcrumb-separator [&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function FbBreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="fb-breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("fb-breadcrumb-ellipsis flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  FbBreadcrumb,
  FbBreadcrumbList,
  FbBreadcrumbItem,
  FbBreadcrumbLink,
  FbBreadcrumbPage,
  FbBreadcrumbSeparator,
  FbBreadcrumbEllipsis,
}
