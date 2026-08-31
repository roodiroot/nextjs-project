import React from "react";

import useBanner from "@/hooks/useBanner";
import HeroCarousel from "./hero-carousel/hero-carousel";
import { useSliders } from "@/hooks/sliders/useSliders";

interface MainBlockV4Props {}

const MainBlockV4: React.FC<MainBlockV4Props> = () => {
  const screensParams = new URLSearchParams({
    sort: "updatedAt:desc",
    populate: "*",
  });

  const { isOpen } = useBanner();
  const heroScreens = useSliders(screensParams.toString());

  return (
    <div className={`relative px-2 sm:px-4 ${isOpen ? "-mt-24" : "-mt-16"}`}>
      <h1 className="sr-only text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Продажа и установка кондиционеров в Москве. Хорошие кондиционеры с доставкой и установкой
      </h1>
      {heroScreens.sliders.length ? (
        <HeroCarousel heroScreens={heroScreens.sliders} />
      ) : (
        <div className="relative mx-auto mt-20 aspect-[11/5] max-w-7xl overflow-hidden rounded-lg shadow-sm md:rounded-3xl bg-gray-100"></div>
      )}
    </div>
  );
};

export default MainBlockV4;
