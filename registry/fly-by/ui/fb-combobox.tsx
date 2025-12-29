import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import {
  FbCommand,
  FbCommandEmpty,
  FbCommandGroup,
  FbCommandInput,
  FbCommandItem,
  FbCommandList,
} from "@/registry/fly-by/ui/fb-command"
import {
  FbPopover,
  FbPopoverContent,
  FbPopoverTrigger,
} from "@/registry/fly-by/ui/fb-popover"

/**
 * fly-by Combobox
 *
 * 検索可能なセレクトコンポーネント。Popover + Command の組み合わせ。
 *
 * クラス構造: fb-combobox
 *
 * @example
 * const [value, setValue] = React.useState("")
 *
 * <FbCombobox
 *   options={[
 *     { value: "react", label: "React" },
 *     { value: "vue", label: "Vue" },
 *   ]}
 *   value={value}
 *   onValueChange={setValue}
 *   placeholder="フレームワークを選択..."
 *   searchPlaceholder="検索..."
 *   emptyMessage="見つかりません"
 * />
 */

export interface FbComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface FbComboboxProps {
  options: FbComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  className?: string
}

function FbCombobox({
  options,
  value,
  onValueChange,
  placeholder = "選択してください...",
  searchPlaceholder = "検索...",
  emptyMessage = "見つかりません",
  disabled = false,
  className,
}: FbComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const selectedOption = options.find((option) => option.value === value)

  return (
    <FbPopover open={open} onOpenChange={setOpen}>
      <FbPopoverTrigger asChild>
        <FbButton
          data-slot="fb-combobox"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "fb-combobox w-full justify-between font-normal",
            !value && "text-gray-500",
            className
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </FbButton>
      </FbPopoverTrigger>
      <FbPopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <FbCommand>
          <FbCommandInput placeholder={searchPlaceholder} />
          <FbCommandList>
            <FbCommandEmpty>{emptyMessage}</FbCommandEmpty>
            <FbCommandGroup>
              {options.map((option) => (
                <FbCommandItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  onSelect={(currentValue) => {
                    onValueChange?.(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </FbCommandItem>
              ))}
            </FbCommandGroup>
          </FbCommandList>
        </FbCommand>
      </FbPopoverContent>
    </FbPopover>
  )
}

export { FbCombobox }
