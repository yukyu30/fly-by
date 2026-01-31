import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "@/registry/fly-by/ui/fb-label"

/**
 * fly-by Field
 *
 * シンプルなフォームフィールドラッパー。ラベル、説明、エラーメッセージを統合。
 * react-hook-form に依存しない軽量版。
 *
 * クラス構造: field, fb-field-label, fb-field-description, fb-field-error
 *
 * @example
 * <Field>
 *   <FieldLabel>メールアドレス</FieldLabel>
 *   <Input type="email" />
 *   <FieldDescription>連絡先として使用します。</FieldDescription>
 * </Field>
 *
 * @example
 * <Field error="必須項目です">
 *   <FieldLabel>名前</FieldLabel>
 *   <Input />
 * </Field>
 */

interface FieldContextValue {
  id: string
  hasError: boolean
}

const FieldContext = React.createContext<FieldContextValue | null>(null)

const useField = () => {
  const context = React.useContext(FieldContext)
  if (!context) {
    throw new Error("useField must be used within <Field>")
  }
  return context
}

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string
}

function Field({ className, error, children, ...props }: FieldProps) {
  const id = React.useId()

  return (
    <FieldContext.Provider value={{ id, hasError: !!error }}>
      <div
        data-slot="field"
        className={cn("field space-y-2", className)}
        {...props}
      >
        {children}
        {error && (
          <p
            data-slot="field-error"
            className="field-error text-[0.8rem] font-medium text-red-600 dark:text-red-400"
          >
            {error}
          </p>
        )}
      </div>
    </FieldContext.Provider>
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Label>) {
  const { id, hasError } = useField()

  return (
    <Label
      data-slot="field-label"
      htmlFor={id}
      className={cn(
        "field-label",
        hasError && "text-red-600 dark:text-red-400",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "field-description text-[0.8rem] text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export { Field, FieldLabel, FieldDescription, useField }
