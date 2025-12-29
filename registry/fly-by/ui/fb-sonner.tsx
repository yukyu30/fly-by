import { Toaster as Sonner, toast } from "sonner"

import { cn } from "@/lib/utils"

/**
 * fly-by Sonner (Toast notification)
 *
 * Sonnerライブラリのラッパー。fly-byスタイルを適用。
 *
 * @example
 * // App root
 * <FbSonner />
 *
 * // Usage
 * import { toast } from "sonner"
 * toast("Event has been created")
 * toast.success("Success!")
 * toast.error("Error!")
 */

type FbSonnerProps = React.ComponentProps<typeof Sonner>

function FbSonner({ className, ...props }: FbSonnerProps) {
  return (
    <Sonner
      data-slot="fb-sonner"
      className={cn("fb-sonner toaster group", className)}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-900 group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-gray-900 dark:group-[.toaster]:text-gray-100 dark:group-[.toaster]:border-gray-700",
          description: "group-[.toast]:text-gray-600 dark:group-[.toast]:text-gray-400",
          actionButton:
            "group-[.toast]:bg-[#002CED] group-[.toast]:text-white dark:group-[.toast]:bg-[#3361ef]",
          cancelButton:
            "group-[.toast]:bg-gray-100 group-[.toast]:text-gray-600 dark:group-[.toast]:bg-gray-800 dark:group-[.toast]:text-gray-400",
          success:
            "group-[.toaster]:bg-green-50 group-[.toaster]:text-green-700 group-[.toaster]:border-green-200 dark:group-[.toaster]:bg-green-900 dark:group-[.toaster]:text-green-300 dark:group-[.toaster]:border-green-800",
          error:
            "group-[.toaster]:bg-red-50 group-[.toaster]:text-red-700 group-[.toaster]:border-red-200 dark:group-[.toaster]:bg-red-900 dark:group-[.toaster]:text-red-300 dark:group-[.toaster]:border-red-800",
          info:
            "group-[.toaster]:bg-[#e6ebfd] group-[.toaster]:text-[#002CED] group-[.toaster]:border-[#ccd7fb] dark:group-[.toaster]:bg-[#001049] dark:group-[.toaster]:text-[#3361ef] dark:group-[.toaster]:border-[#001772]",
          warning:
            "group-[.toaster]:bg-yellow-50 group-[.toaster]:text-yellow-700 group-[.toaster]:border-yellow-200 dark:group-[.toaster]:bg-yellow-900 dark:group-[.toaster]:text-yellow-300 dark:group-[.toaster]:border-yellow-800",
        },
      }}
      {...props}
    />
  )
}

export { FbSonner, toast }
