import * as React from "react"

import { cn } from "@/lib/utils"
import { FbLabel } from "@/registry/fly-by/ui/fb-label"

/**
 * fly-by Field
 *
 * シンプルなフォームフィールドラッパー。ラベル、説明、エラーメッセージを統合。
 * react-hook-form に依存しない軽量版。
 *
 * クラス構造: fb-field, fb-field-label, fb-field-description, fb-field-error
 *
 * @example
 * <FbField>
 *   <FbFieldLabel>メールアドレス</FbFieldLabel>
 *   <FbInput type="email" />
 *   <FbFieldDescription>連絡先として使用します。</FbFieldDescription>
 * </FbField>
 *
 * @example
 * <FbField error="必須項目です">
 *   <FbFieldLabel>名前</FbFieldLabel>
 *   <FbInput />
 * </FbField>
 */

interface FbFieldContextValue {
  id: string
  hasError: boolean
}

const FbFieldContext = React.createContext<FbFieldContextValue | null>(null)

const useFbField = () => {
  const context = React.useContext(FbFieldContext)
  if (!context) {
    throw new Error("useFbField must be used within <FbField>")
  }
  return context
}

interface FbFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string
}

function FbField({ className, error, children, ...props }: FbFieldProps) {
  const id = React.useId()

  return (
    <FbFieldContext.Provider value={{ id, hasError: !!error }}>
      <div
        data-slot="fb-field"
        className={cn("fb-field space-y-2", className)}
        {...props}
      >
        {children}
        {error && (
          <p
            data-slot="fb-field-error"
            className="fb-field-error text-[0.8rem] font-medium text-red-600 dark:text-red-400"
          >
            {error}
          </p>
        )}
      </div>
    </FbFieldContext.Provider>
  )
}

function FbFieldLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof FbLabel>) {
  const { id, hasError } = useFbField()

  return (
    <FbLabel
      data-slot="fb-field-label"
      htmlFor={id}
      className={cn(
        "fb-field-label",
        hasError && "text-red-600 dark:text-red-400",
        className
      )}
      {...props}
    />
  )
}

function FbFieldDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="fb-field-description"
      className={cn(
        "fb-field-description text-[0.8rem] text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export { FbField, FbFieldLabel, FbFieldDescription, useFbField }
