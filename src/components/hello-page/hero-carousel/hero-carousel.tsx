"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import useSubmitOrder from "@/hooks/useSubmitOrder";
import ProgressIndicator from "./progress-indikator";
import { HeroScreens } from "@/lib/api/sliders";

const AUTOPLAY_DELAY = 5000;

interface HeroCarouselProps {
  heroScreens?: HeroScreens[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ heroScreens }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const submitOrder = useSubmitOrder();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
    autoplay.current.reset();
  };

  if (!heroScreens?.length) {
    return null;
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-full overflow-hidden"
    >
      <div className="relative mx-auto mt-20 aspect-[11/5] max-w-7xl overflow-hidden rounded-lg shadow-sm md:rounded-3xl">
        <CarouselContent>
          {heroScreens.map((slide) => (
            <CarouselItem key={slide.documentId}>
              <button
                type="button"
                onClick={() => submitOrder.onOpen()}
                className="block h-full w-full"
              >
                <div className="overflow-hidden rounded-lg md:rounded-3xl">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_URI}${slide.image?.url}`}
                    alt="main photo"
                    width={1402}
                    height={637}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

      <div className="py-2 sm:py-3">
        <div className="flex justify-center gap-1">
          {heroScreens.map((slide, index) => (
            <ProgressIndicator
              key={slide.documentId}
              active={current === index}
              duration={AUTOPLAY_DELAY}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
