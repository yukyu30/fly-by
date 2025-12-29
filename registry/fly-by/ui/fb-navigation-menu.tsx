import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Navigation Menu
 *
 * クラス構造: fb-navigation-menu, fb-navigation-menu-list, etc.
 *
 * @example
 * <FbNavigationMenu>
 *   <FbNavigationMenuList>
 *     <FbNavigationMenuItem>
 *       <FbNavigationMenuTrigger>Item 1</FbNavigationMenuTrigger>
 *       <FbNavigationMenuContent>Content 1</FbNavigationMenuContent>
 *     </FbNavigationMenuItem>
 *   </FbNavigationMenuList>
 * </FbNavigationMenu>
 */

function FbNavigationMenu({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="fb-navigation-menu"
      className={cn(
        "fb-navigation-menu relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <FbNavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
}

function FbNavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="fb-navigation-menu-list"
      className={cn(
        "fb-navigation-menu-list group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
}

const FbNavigationMenuItem = NavigationMenuPrimitive.Item

const fbNavigationMenuTriggerStyle = cva(
  "fb-navigation-menu-trigger group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
)

function FbNavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="fb-navigation-menu-trigger"
      className={cn(fbNavigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function FbNavigationMenuContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="fb-navigation-menu-content"
      className={cn(
        "fb-navigation-menu-content left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  )
}

function FbNavigationMenuLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="fb-navigation-menu-link"
      className={cn(fbNavigationMenuTriggerStyle(), className)}
      {...props}
    />
  )
}

function FbNavigationMenuViewport({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="fb-navigation-menu-viewport"
        className={cn(
          "fb-navigation-menu-viewport origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-gray-200 bg-white text-gray-900 shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function FbNavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="fb-navigation-menu-indicator"
      className={cn(
        "fb-navigation-menu-indicator top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200 shadow-md dark:bg-gray-700" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  FbNavigationMenu,
  FbNavigationMenuList,
  FbNavigationMenuItem,
  FbNavigationMenuContent,
  FbNavigationMenuTrigger,
  FbNavigationMenuLink,
  FbNavigationMenuIndicator,
  FbNavigationMenuViewport,
  fbNavigationMenuTriggerStyle,
}
