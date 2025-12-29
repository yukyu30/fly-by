import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * fly-by Table
 *
 * クラス構造: fb-table, fb-table-header, fb-table-body, fb-table-footer,
 *            fb-table-row, fb-table-head, fb-table-cell, fb-table-caption
 *
 * @example
 * <FbTable>
 *   <FbTableCaption>ユーザー一覧</FbTableCaption>
 *   <FbTableHeader>
 *     <FbTableRow>
 *       <FbTableHead>名前</FbTableHead>
 *       <FbTableHead>メール</FbTableHead>
 *     </FbTableRow>
 *   </FbTableHeader>
 *   <FbTableBody>
 *     <FbTableRow>
 *       <FbTableCell>山田太郎</FbTableCell>
 *       <FbTableCell>yamada@example.com</FbTableCell>
 *     </FbTableRow>
 *   </FbTableBody>
 * </FbTable>
 */

function FbTable({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        data-slot="fb-table"
        className={cn(
          "fb-table w-full caption-bottom text-sm",
          className
        )}
        {...props}
      />
    </div>
  )
}

function FbTableHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      data-slot="fb-table-header"
      className={cn("fb-table-header [&_tr]:border-b", className)}
      {...props}
    />
  )
}

function FbTableBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody
      data-slot="fb-table-body"
      className={cn(
        "fb-table-body [&_tr:last-child]:border-0",
        className
      )}
      {...props}
    />
  )
}

function FbTableFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot
      data-slot="fb-table-footer"
      className={cn(
        "fb-table-footer border-t bg-gray-50/50 font-medium dark:bg-gray-800/50 [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function FbTableRow({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      data-slot="fb-table-row"
      className={cn(
        "fb-table-row border-b border-gray-200 transition-colors hover:bg-gray-50/50 data-[state=selected]:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800",
        className
      )}
      {...props}
    />
  )
}

function FbTableHead({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      data-slot="fb-table-head"
      className={cn(
        "fb-table-head h-10 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function FbTableCell({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      data-slot="fb-table-cell"
      className={cn(
        "fb-table-cell p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function FbTableCaption({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      data-slot="fb-table-caption"
      className={cn(
        "fb-table-caption mt-4 text-sm text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export {
  FbTable,
  FbTableHeader,
  FbTableBody,
  FbTableFooter,
  FbTableHead,
  FbTableRow,
  FbTableCell,
  FbTableCaption,
}
