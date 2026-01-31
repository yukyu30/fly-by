"use client"

import * as React from "react"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/fly-by/ui/fb-button"
import { Calendar } from "@/registry/fly-by/ui/fb-calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/fly-by/ui/fb-popover"

/**
 * fly-by Date Picker
 *
 * カレンダーとポップオーバーを組み合わせた日付選択コンポーネント。
 *
 * クラス構造: date-picker
 *
 * @example
 * const [date, setDate] = React.useState<Date>()
 *
 * <DatePicker
 *   date={date}
 *   onDateChange={setDate}
 *   placeholder="日付を選択"
 * />
 *
 * @example
 * // Range selection
 * const [dateRange, setDateRange] = React.useState<DateRange | undefined>()
 *
 * <DatePickerWithRange
 *   dateRange={dateRange}
 *   onDateRangeChange={setDateRange}
 * />
 */

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "日付を選択",
  disabled = false,
  className,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          data-slot="date-picker"
          appearance="outlined"
          color="neutral"
          disabled={disabled}
          className={cn(
            "date-picker w-[280px] justify-start text-left font-normal",
            !date && "text-gray-500",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP", { locale: ja }) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

interface DatePickerWithRangeProps {
  dateRange?: DateRange
  onDateRangeChange?: (dateRange: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function DatePickerWithRange({
  dateRange,
  onDateRangeChange,
  placeholder = "日付範囲を選択",
  disabled = false,
  className,
}: DatePickerWithRangeProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            data-slot="date-picker-range"
            id="date"
            appearance="outlined"
            color="neutral"
            disabled={disabled}
            className={cn(
              "date-picker-range w-[300px] justify-start text-left font-normal",
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
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { DatePicker, DatePickerWithRange }
export type { DatePickerProps, DatePickerWithRangeProps }
