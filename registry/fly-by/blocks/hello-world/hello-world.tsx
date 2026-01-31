import { Text } from "@/registry/fly-by/ui/text"
import { Button } from "@/registry/fly-by/ui/button"

export function HelloWorld() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Text level="xxxl" weight="bold" as="h1">
        Hello World
      </Text>
      <Text level="m" density="normal" className="text-gray-500">
        fly-by デザインシステムへようこそ
      </Text>
      <Button appearance="solid" color="informative" size="m">
        はじめる
      </Button>
    </div>
  )
}
