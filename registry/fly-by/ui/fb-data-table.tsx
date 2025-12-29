"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import {
  FbDropdownMenu,
  FbDropdownMenuCheckboxItem,
  FbDropdownMenuContent,
  FbDropdownMenuTrigger,
} from "@/registry/fly-by/ui/fb-dropdown-menu"
import { FbInput } from "@/registry/fly-by/ui/fb-input"
import {
  FbTable,
  FbTableBody,
  FbTableCell,
  FbTableHead,
  FbTableHeader,
  FbTableRow,
} from "@/registry/fly-by/ui/fb-table"

/**
 * fly-by Data Table
 *
 * @tanstack/react-table をラップしたデータテーブル。
 * ソート、フィルタリング、ページネーション、列の表示/非表示をサポート。
 *
 * クラス構造: fb-data-table
 *
 * @example
 * const columns: ColumnDef<User>[] = [
 *   {
 *     accessorKey: "name",
 *     header: "名前",
 *   },
 *   {
 *     accessorKey: "email",
 *     header: ({ column }) => (
 *       <FbDataTableColumnHeader column={column} title="メール" />
 *     ),
 *   },
 * ]
 *
 * <FbDataTable columns={columns} data={users} />
 */

interface FbDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchColumn?: string
  searchPlaceholder?: string
  showColumnToggle?: boolean
  showPagination?: boolean
  className?: string
}

function FbDataTable<TData, TValue>({
  columns,
  data,
  searchColumn,
  searchPlaceholder = "フィルター...",
  showColumnToggle = true,
  showPagination = true,
  className,
}: FbDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div data-slot="fb-data-table" className={cn("fb-data-table w-full", className)}>
      <div className="flex items-center gap-4 py-4">
        {searchColumn && (
          <FbInput
            placeholder={searchPlaceholder}
            value={
              (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(searchColumn)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        )}
        {showColumnToggle && (
          <FbDropdownMenu>
            <FbDropdownMenuTrigger asChild>
              <FbButton appearance="outlined" color="neutral" className="ml-auto">
                列 <ChevronDown className="ml-2 h-4 w-4" />
              </FbButton>
            </FbDropdownMenuTrigger>
            <FbDropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <FbDropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </FbDropdownMenuCheckboxItem>
                  )
                })}
            </FbDropdownMenuContent>
          </FbDropdownMenu>
        )}
      </div>
      <div className="rounded-md border border-gray-200 dark:border-gray-700">
        <FbTable>
          <FbTableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <FbTableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <FbTableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </FbTableHead>
                  )
                })}
              </FbTableRow>
            ))}
          </FbTableHeader>
          <FbTableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <FbTableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <FbTableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </FbTableCell>
                  ))}
                </FbTableRow>
              ))
            ) : (
              <FbTableRow>
                <FbTableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  データがありません
                </FbTableCell>
              </FbTableRow>
            )}
          </FbTableBody>
        </FbTable>
      </div>
      {showPagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-gray-500 dark:text-gray-400">
            {table.getFilteredSelectedRowModel().rows.length} /{" "}
            {table.getFilteredRowModel().rows.length} 行を選択中
          </div>
          <div className="space-x-2">
            <FbButton
              appearance="outlined"
              color="neutral"
              size="s"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              前へ
            </FbButton>
            <FbButton
              appearance="outlined"
              color="neutral"
              size="s"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              次へ
            </FbButton>
          </div>
        </div>
      )}
    </div>
  )
}

// Column header with sorting
interface FbDataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: import("@tanstack/react-table").Column<TData, TValue>
  title: string
}

function FbDataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: FbDataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <FbButton
      appearance="transparent"
      color="neutral"
      size="s"
      className="-ml-3 h-8"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </FbButton>
  )
}

export { FbDataTable, FbDataTableColumnHeader }
export type { FbDataTableProps }
