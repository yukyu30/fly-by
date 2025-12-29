import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Input OTP
 *
 * ワンタイムパスワード入力用コンポーネント。
 *
 * クラス構造: fb-input-otp, fb-input-otp-group, fb-input-otp-slot, fb-input-otp-separator
 *
 * @example
 * <FbInputOTP maxLength={6}>
 *   <FbInputOTPGroup>
 *     <FbInputOTPSlot index={0} />
 *     <FbInputOTPSlot index={1} />
 *     <FbInputOTPSlot index={2} />
 *   </FbInputOTPGroup>
 *   <FbInputOTPSeparator />
 *   <FbInputOTPGroup>
 *     <FbInputOTPSlot index={3} />
 *     <FbInputOTPSlot index={4} />
 *     <FbInputOTPSlot index={5} />
 *   </FbInputOTPGroup>
 * </FbInputOTP>
 */

function FbInputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentPropsWithoutRef<typeof OTPInput>) {
  return (
    <OTPInput
      data-slot="fb-input-otp"
      containerClassName={cn(
        "fb-input-otp flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function FbInputOTPGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="fb-input-otp-group"
      className={cn("fb-input-otp-group flex items-center", className)}
      {...props}
    />
  )
}

function FbInputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const slot = inputOTPContext.slots[index]

  if (!slot) {
    return null
  }

  const { char, hasFakeCaret, isActive } = slot

  return (
    <div
      data-slot="fb-input-otp-slot"
      className={cn(
        "fb-input-otp-slot relative flex h-9 w-9 items-center justify-center border-y border-r border-gray-200 text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-gray-700",
        isActive &&
          "z-10 ring-1 ring-gray-400 dark:ring-gray-500",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-gray-900 duration-1000 dark:bg-gray-100" />
        </div>
      )}
    </div>
  )
}

function FbInputOTPSeparator({
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="fb-input-otp-separator"
      role="separator"
      className="fb-input-otp-separator"
      {...props}
    >
      <Minus className="h-4 w-4 text-gray-400" />
    </div>
  )
}

export { FbInputOTP, FbInputOTPGroup, FbInputOTPSlot, FbInputOTPSeparator }
