"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  hasMultipleSlides: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,

      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [hasMultipleSlides, setHasMultipleSlides] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setHasMultipleSlides(api.canScrollPrev() || api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    // React.useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (canScrollNext) {
    //       scrollNext();
    //     } else {
    //       // If at the end, scroll to the first slide
    //       const slideCount = api?.slidesInView()?.length || 0;
    //       if (slideCount > 0) {
    //         const firstSlideIndex = 0;
    //         const lastSlideIndex = slideCount - 1;
    //         api?.scrollTo(lastSlideIndex - firstSlideIndex, true);
    //       }
    //     }
    //   }, 5000);
    
    //   return () => clearInterval(interval);
    // }, [scrollNext, canScrollNext, api]);

    // React.useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (canScrollNext) {
    //       scrollNext();
    //     } else {
    //       const slideCount = api?.slidesInView()?.length || 0;
    //       if (slideCount > 0) {
    //         const lastSlideIndex = slideCount - 1;
    //         const isLastSlideInView = api?.slidesInView()?.includes(lastSlideIndex);
    //         if (isLastSlideInView) {
    //           // If last slide is in view, move it to the beginning
    //           api?.scrollTo(0, false);
    //         }
    //       }
    //     }
    //   }, 5000);
    
    //   return () => clearInterval(interval);
    // }, [scrollNext, canScrollNext, api]);
    
    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          hasMultipleSlides,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev, hasMultipleSlides } = useCarousel();

    if (!hasMultipleSlides) return <></>;

    return (
      <button
        ref={ref}
        className={cn(
          "absolute  h-8 w-8 bg-transparent border-none",
          orientation === "horizontal"
            ? "left-[1rem] top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <FaChevronLeft size={24} className="text-white" />
        <span className="sr-only">Previous slide</span>
      </button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext, hasMultipleSlides } = useCarousel();

    if (!hasMultipleSlides) return <></>;
    return (
      <button
        ref={ref}
        className={cn(
          "absolute h-8 w-8 bg-transparent border-none",
          orientation === "horizontal"
            ? "right-[1rem] top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <FaChevronRight size={24} className=" text-white " />
        <span className="sr-only">Next slide</span>
      </button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

const CarouselPrevious2 = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev, hasMultipleSlides } = useCarousel();

    if (!hasMultipleSlides) return <></>;

    return (
      // <button
      //   ref={ref}
      //   className={cn(
      //     "absolute h-8 w-8 bg-transparent border-none bottom-[-20px] left-[2rem] -translate-x-1/2",
      //     className
      //   )}
      //   disabled={!canScrollPrev}
      //   onClick={scrollPrev}
      //   {...props}
      // >
      //   <FaChevronLeft size={24} className="text-white" />
      //   <span className="text-white">Prev</span>
      // </button>
      <button
        ref={ref}
        className={cn(
          "absolute h-8 w-24 bg-transparent border-none bottom-[-20px] left-0 flex items-center space-x-2 justify-start",
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <FaChevronLeft size={24} className="text-white" />
        <span className="text-white">Prev</span>
      </button>
    );
  }
);
CarouselPrevious2.displayName = "CarouselPrevious2";

const CarouselNext2 = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext, hasMultipleSlides } = useCarousel();

    if (!hasMultipleSlides) return <></>;

    return (
      // <button
      //   ref={ref}
      //   className={cn(
      //     "absolute h-8 w-8 bg-transparent border-none bottom-[-20px] right-[-1rem] -translate-x-1/2",
      //     className
      //   )}
      //   disabled={!canScrollNext}
      //   onClick={scrollNext}
      //   {...props}
      // >
      //   <span className="text-white">Next</span>
      //   <FaChevronRight size={24} className="text-white" />
      // </button>
      <button
        ref={ref}
        className={cn(
          "absolute h-8 w-24 bg-transparent border-none bottom-[-20px] right-0 flex items-center space-x-2 justify-end",
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <span className="text-white">Next</span>
        <FaChevronRight size={24} className="text-white" />
      </button>
    );
  }
);
CarouselNext2.displayName = "CarouselNext2";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPrevious2,
  CarouselNext2,
};
