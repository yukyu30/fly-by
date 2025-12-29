import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { FbLabel } from "@/registry/fly-by/ui/fb-label"

/**
 * fly-by Form
 *
 * react-hook-form のラッパー。バリデーション、エラー表示を統合。
 *
 * クラス構造: fb-form, fb-form-item, fb-form-label, fb-form-control, fb-form-description, fb-form-message
 *
 * @example
 * const form = useForm<FormValues>()
 *
 * <FbForm {...form}>
 *   <form onSubmit={form.handleSubmit(onSubmit)}>
 *     <FbFormField
 *       control={form.control}
 *       name="email"
 *       render={({ field }) => (
 *         <FbFormItem>
 *           <FbFormLabel>メールアドレス</FbFormLabel>
 *           <FbFormControl>
 *             <FbInput {...field} />
 *           </FbFormControl>
 *           <FbFormDescription>連絡先として使用します。</FbFormDescription>
 *           <FbFormMessage />
 *         </FbFormItem>
 *       )}
 *     />
 *   </form>
 * </FbForm>
 */

const FbForm = FormProvider

type FbFormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FbFormFieldContext = React.createContext<FbFormFieldContextValue>(
  {} as FbFormFieldContextValue
)

function FbFormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <FbFormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FbFormFieldContext.Provider>
  )
}

const useFbFormField = () => {
  const fieldContext = React.useContext(FbFormFieldContext)
  const itemContext = React.useContext(FbFormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFbFormField should be used within <FbFormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FbFormItemContextValue = {
  id: string
}

const FbFormItemContext = React.createContext<FbFormItemContextValue>(
  {} as FbFormItemContextValue
)

function FbFormItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const id = React.useId()

  return (
    <FbFormItemContext.Provider value={{ id }}>
      <div
        data-slot="fb-form-item"
        className={cn("fb-form-item space-y-2", className)}
        {...props}
      />
    </FbFormItemContext.Provider>
  )
}

function FbFormLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFbFormField()

  return (
    <FbLabel
      data-slot="fb-form-label"
      className={cn(
        "fb-form-label",
        error && "text-red-600 dark:text-red-400",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FbFormControl({
  ...props
}: React.ComponentPropsWithoutRef<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFbFormField()

  return (
    <Slot
      data-slot="fb-form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FbFormDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { formDescriptionId } = useFbFormField()

  return (
    <p
      data-slot="fb-form-description"
      id={formDescriptionId}
      className={cn(
        "fb-form-description text-[0.8rem] text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function FbFormMessage({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { error, formMessageId } = useFbFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="fb-form-message"
      id={formMessageId}
      className={cn(
        "fb-form-message text-[0.8rem] font-medium text-red-600 dark:text-red-400",
        className
      )}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFbFormField,
  FbForm,
  FbFormItem,
  FbFormLabel,
  FbFormControl,
  FbFormDescription,
  FbFormMessage,
  FbFormField,
}
