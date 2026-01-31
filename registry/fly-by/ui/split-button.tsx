import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "./fb-button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./fb-dropdown-menu"

/**
 * fly-by Split Button
 *
 * メインアクションとドロップダウンメニューを組み合わせたボタン。
 *
 * クラス構造: split-button
 *
 * @example
 * <SplitButton
 *   appearance="solid"
 *   color="informative"
 *   size="m"
 *   onAction={() => console.log('保存')}
 * >
 *   <SplitButtonLabel>保存</SplitButtonLabel>
 *   <SplitButtonMenu>
 *     <DropdownMenuItem onSelect={() => console.log('保存して閉じる')}>
 *       保存して閉じる
 *     </DropdownMenuItem>
 *     <DropdownMenuItem onSelect={() => console.log('別名で保存')}>
 *       別名で保存
 *     </DropdownMenuItem>
 *   </SplitButtonMenu>
 * </SplitButton>
 */

interface SplitButtonContextValue {
  appearance?: ButtonProps["appearance"]
  color?: ButtonProps["color"]
  size?: ButtonProps["size"]
  onAction?: () => void
}

const SplitButtonContext = React.createContext<SplitButtonContextValue>({})

interface SplitButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<ButtonProps, "appearance" | "color" | "size"> {
  /**
   * メインボタンのクリックハンドラー
   */
  onAction?: () => void
  /**
   * ドロップダウンメニューの位置
   * @default "bottom-end"
   */
  align?: "start" | "center" | "end"
}

function SplitButton({
  className,
  appearance = "solid",
  color = "informative",
  size = "m",
  onAction,
  align = "end",
  children,
  ...props
}: SplitButtonProps) {
  const [label, menu] = React.Children.toArray(children)

  return (
    <SplitButtonContext.Provider value={{ appearance, color, size, onAction }}>
      <div
        data-slot="split-button"
        className={cn("split-button inline-flex", className)}
        {...props}
      >
        <DropdownMenu>
          <div className="inline-flex">
            {label}
            <DropdownMenuTrigger asChild>
              <Button
                appearance={appearance}
                color={color}
                size={size}
                className="rounded-l-none border-l border-white/20 px-2"
                leadingIcon={<ChevronDown className="h-4 w-4" />}
              />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent align={align}>{menu}</DropdownMenuContent>
        </DropdownMenu>
      </div>
    </SplitButtonContext.Provider>
  )
}

interface SplitButtonLabelProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

function SplitButtonLabel({ disabled, ...props }: SplitButtonLabelProps) {
  const { appearance, color, size, onAction } = React.useContext(SplitButtonContext)

  return (
    <Button
      appearance={appearance}
      color={color}
      size={size}
      onClick={onAction}
      disabled={disabled}
      className="rounded-r-none"
      {...props}
    />
  )
}

interface SplitButtonMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

function SplitButtonMenu({ children }: SplitButtonMenuProps) {
  return <>{children}</>
}

export { SplitButton, SplitButtonLabel, SplitButtonMenu }
