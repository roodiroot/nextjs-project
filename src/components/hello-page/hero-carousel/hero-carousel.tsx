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

const AUTOPLAY_DELAY = 5000;
const heroScreens = [
  "/image/hero-carousel/hero2.jpg",
  "/image/hero-carousel/hero.jpg",
  "/image/hero-carousel/hero3.jpg",
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
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
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
    autoplay.current.reset();
  };

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
      <div className="relative max-w-7xl mx-auto mt-20 overflow-hidden rounded-lg md:rounded-3xl shadow-sm aspect-[11/5]">
        <CarouselContent>
          {heroScreens.map((i) => (
            <CarouselItem key={i}>
              <div onClick={() => submitOrder.onOpen()}>
                <div className="rounded-lg md:rounded-3xl overflow-hidden">
                  <Image
                    src={i}
                    alt="main photo"
                    width={1402}
                    height={637}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <div className="py-2 sm:py-3">
        <div className="flex gap-1 sm:gap-2 justify-center">
          {new Array(count).fill("").map((_, index) => {
            const isActive = current === index + 1;
            return (
              <ProgressIndicator
                key={index}
                active={isActive}
                duration={AUTOPLAY_DELAY}
                onClick={() => scrollToSlide(index)}
              />
            );
          })}
        </div>
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
