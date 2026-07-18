import React from "react";

import useBanner from "@/hooks/useBanner";
import HeroCarousel from "./hero-carousel/hero-carousel";

interface MainBlockV4Props {}

const MainBlockV4: React.FC<MainBlockV4Props> = () => {
  const { isOpen } = useBanner();

  return (
    <div className={`relative px-2 sm:px-4 ${isOpen ? "-mt-24" : "-mt-16"}`}>
      <h1 className="sr-only text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Продажа и установка кондиционеров в Москве. Хорошие кондиционеры с доставкой и установкой
      </h1>
      <HeroCarousel />
    </div>
  );
};

export default MainBlockV4;
