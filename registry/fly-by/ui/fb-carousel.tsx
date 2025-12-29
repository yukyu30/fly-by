"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { FbButton } from "@/registry/fly-by/ui/fb-button"

/**
 * fly-by Carousel
 *
 * embla-carousel-react ベースのカルーセルコンポーネント。
 *
 * クラス構造: fb-carousel, fb-carousel-content, fb-carousel-item,
 *            fb-carousel-previous, fb-carousel-next
 *
 * @example
 * <FbCarousel>
 *   <FbCarouselContent>
 *     <FbCarouselItem>
 *       <img src="slide1.jpg" alt="Slide 1" />
 *     </FbCarouselItem>
 *     <FbCarouselItem>
 *       <img src="slide2.jpg" alt="Slide 2" />
 *     </FbCarouselItem>
 *   </FbCarouselContent>
 *   <FbCarouselPrevious />
 *   <FbCarouselNext />
 * </FbCarousel>
 */

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <FbCarousel />")
  }

  return context
}

function FbCarousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        data-slot="fb-carousel"
        onKeyDownCapture={handleKeyDown}
        className={cn("fb-carousel relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function FbCarouselContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        data-slot="fb-carousel-content"
        className={cn(
          "fb-carousel-content flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function FbCarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel()

  return (
    <div
      data-slot="fb-carousel-item"
      role="group"
      aria-roledescription="slide"
      className={cn(
        "fb-carousel-item min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function FbCarouselPrevious({
  className,
  appearance = "outlined",
  color = "neutral",
  ...props
}: React.ComponentProps<typeof FbButton>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <FbButton
      data-slot="fb-carousel-previous"
      appearance={appearance}
      color={color}
      size="s"
      className={cn(
        "fb-carousel-previous absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">前のスライド</span>
    </FbButton>
  )
}

function FbCarouselNext({
  className,
  appearance = "outlined",
  color = "neutral",
  ...props
}: React.ComponentProps<typeof FbButton>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <FbButton
      data-slot="fb-carousel-next"
      appearance={appearance}
      color={color}
      size="s"
      className={cn(
        "fb-carousel-next absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">次のスライド</span>
    </FbButton>
  )
}

export {
  type CarouselApi,
  FbCarousel,
  FbCarouselContent,
  FbCarouselItem,
  FbCarouselPrevious,
  FbCarouselNext,
}
