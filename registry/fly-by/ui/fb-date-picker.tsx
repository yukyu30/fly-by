"use client"

import * as React from "react"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import { FbCalendar } from "@/registry/fly-by/ui/fb-calendar"
import {
  FbPopover,
  FbPopoverContent,
  FbPopoverTrigger,
} from "@/registry/fly-by/ui/fb-popover"

/**
 * fly-by Date Picker
 *
 * カレンダーとポップオーバーを組み合わせた日付選択コンポーネント。
 *
 * クラス構造: fb-date-picker
 *
 * @example
 * const [date, setDate] = React.useState<Date>()
 *
 * <FbDatePicker
 *   date={date}
 *   onDateChange={setDate}
 *   placeholder="日付を選択"
 * />
 *
 * @example
 * // Range selection
 * const [dateRange, setDateRange] = React.useState<DateRange | undefined>()
 *
 * <FbDatePickerWithRange
 *   dateRange={dateRange}
 *   onDateRangeChange={setDateRange}
 * />
 */

interface FbDatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function FbDatePicker({
  date,
  onDateChange,
  placeholder = "日付を選択",
  disabled = false,
  className,
}: FbDatePickerProps) {
  return (
    <FbPopover>
      <FbPopoverTrigger asChild>
        <FbButton
          data-slot="fb-date-picker"
          variant="outline"
          disabled={disabled}
          className={cn(
            "fb-date-picker w-[280px] justify-start text-left font-normal",
            !date && "text-gray-500",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP", { locale: ja }) : placeholder}
        </FbButton>
      </FbPopoverTrigger>
      <FbPopoverContent className="w-auto p-0">
        <FbCalendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          initialFocus
        />
      </FbPopoverContent>
    </FbPopover>
  )
}

interface FbDatePickerWithRangeProps {
  dateRange?: DateRange
  onDateRangeChange?: (dateRange: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function FbDatePickerWithRange({
  dateRange,
  onDateRangeChange,
  placeholder = "日付範囲を選択",
  disabled = false,
  className,
}: FbDatePickerWithRangeProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <FbPopover>
        <FbPopoverTrigger asChild>
          <FbButton
            data-slot="fb-date-picker-range"
            id="date"
            variant="outline"
            disabled={disabled}
            className={cn(
              "fb-date-picker-range w-[300px] justify-start text-left font-normal",
              !dateRange && "text-gray-500"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y", { locale: ja })} -{" "}
                  {format(dateRange.to, "LLL dd, y", { locale: ja })}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y", { locale: ja })
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </FbButton>
        </FbPopoverTrigger>
        <FbPopoverContent className="w-auto p-0" align="start">
          <FbCalendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
          />
        </FbPopoverContent>
      </FbPopover>
    </div>
  )
}

export { FbDatePicker, FbDatePickerWithRange }
export type { FbDatePickerProps, FbDatePickerWithRangeProps }
