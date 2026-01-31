"use client"

import * as React from "react"
import { z } from "zod"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from "@/registry/fly-by/ui/card"
import { Input } from "@/registry/fly-by/ui/input"
import { Label } from "@/registry/fly-by/ui/label"
import { Button } from "@/registry/fly-by/ui/button"
import { Textarea } from "@/registry/fly-by/ui/textarea"
import { Text } from "@/registry/fly-by/ui/text"

const exampleFormSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージを入力してください"),
})

export function ExampleForm() {
  const [pending, setPending] = React.useState(false)
  const [state, setState] = React.useState({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    success: false,
    errors: {
      name: "",
      email: "",
      message: "",
    },
  })

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPending(true)

      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      const result = exampleFormSchema.safeParse(data)

      if (!result.success) {
        setState({
          ...state,
          errors: Object.fromEntries(
            Object.entries(result.error.flatten().fieldErrors).map(
              ([key, value]) => [key, value?.[0] ?? ""]
            )
          ) as Record<keyof typeof state.errors, string>,
        })
        setPending(false)
        return
      }

      setState({
        ...state,
        success: true,
        errors: { name: "", email: "", message: "" },
      })
      setPending(false)
    },
    [state]
  )

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <Card elevation={1}>
        <CardHeader>
          <CardTitle>お問い合わせ</CardTitle>
          <CardDescription>
            ご質問やご要望がございましたら、お気軽にお問い合わせください。
          </CardDescription>
        </CardHeader>
        <CardBody className="flex flex-col gap-6">
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.name}
          >
            <Label
              htmlFor="name"
              className="group-data-[invalid=true]/field:text-red-600"
            >
              お名前 <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="山田 太郎"
              appearance="outlined"
              size="m"
              className="group-data-[invalid=true]/field:border-red-500"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <Text level="xs" className="text-red-600">
                {state.errors.name}
              </Text>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.email}
          >
            <Label
              htmlFor="email"
              className="group-data-[invalid=true]/field:text-red-600"
            >
              メールアドレス <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              appearance="outlined"
              size="m"
              className="group-data-[invalid=true]/field:border-red-500"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <Text level="xs" className="text-red-600">
                {state.errors.email}
              </Text>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.message}
          >
            <Label
              htmlFor="message"
              className="group-data-[invalid=true]/field:text-red-600"
            >
              メッセージ <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="お問い合わせ内容をご記入ください..."
              appearance="outlined"
              size="m"
              className="group-data-[invalid=true]/field:border-red-500"
              disabled={pending}
              aria-invalid={!!state.errors?.message}
              defaultValue={state.defaultValues.message}
            />
            {state.errors?.message && (
              <Text level="xs" className="text-red-600">
                {state.errors.message}
              </Text>
            )}
          </div>
        </CardBody>
        <CardFooter>
          <Button
            type="submit"
            appearance="solid"
            color="informative"
            size="m"
            disabled={pending}
          >
            {pending ? "送信中..." : "送信する"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
