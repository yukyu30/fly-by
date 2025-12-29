import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Pagination
 *
 * クラス構造: fb-pagination, fb-pagination-content, fb-pagination-item, etc.
 *
 * @example
 * <FbPagination>
 *   <FbPaginationContent>
 *     <FbPaginationItem>
 *       <FbPaginationPrevious href="#" />
 *     </FbPaginationItem>
 *     <FbPaginationItem>
 *       <FbPaginationLink href="#">1</FbPaginationLink>
 *     </FbPaginationItem>
 *     <FbPaginationItem>
 *       <FbPaginationNext href="#" />
 *     </FbPaginationItem>
 *   </FbPaginationContent>
 * </FbPagination>
 */

function FbPagination({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      data-slot="fb-pagination"
      role="navigation"
      aria-label="pagination"
      className={cn("fb-pagination mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function FbPaginationContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      data-slot="fb-pagination-content"
      className={cn("fb-pagination-content flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function FbPaginationItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li
      data-slot="fb-pagination-item"
      className={cn("fb-pagination-item", className)}
      {...props}
    />
  )
}

type FbPaginationLinkProps = {
  isActive?: boolean
} & React.ComponentPropsWithoutRef<"a">

function FbPaginationLink({
  className,
  isActive,
  ...props
}: FbPaginationLinkProps) {
  return (
    <a
      data-slot="fb-pagination-link"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "fb-pagination-link inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
        isActive && "bg-[#002CED] text-white hover:bg-[#0025c4] dark:bg-[#3361ef] dark:hover:bg-[#002CED]",
        className
      )}
      {...props}
    />
  )
}

function FbPaginationPrevious({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof FbPaginationLink>) {
  return (
    <FbPaginationLink
      data-slot="fb-pagination-previous"
      aria-label="前のページへ"
      className={cn("fb-pagination-previous gap-1 pl-2.5", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>前へ</span>
    </FbPaginationLink>
  )
}

function FbPaginationNext({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof FbPaginationLink>) {
  return (
    <FbPaginationLink
      data-slot="fb-pagination-next"
      aria-label="次のページへ"
      className={cn("fb-pagination-next gap-1 pr-2.5", className)}
      {...props}
    >
      <span>次へ</span>
      <ChevronRight className="h-4 w-4" />
    </FbPaginationLink>
  )
}

function FbPaginationEllipsis({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="fb-pagination-ellipsis"
      aria-hidden
      className={cn("fb-pagination-ellipsis flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  FbPagination,
  FbPaginationContent,
  FbPaginationItem,
  FbPaginationLink,
  FbPaginationPrevious,
  FbPaginationNext,
  FbPaginationEllipsis,
}
