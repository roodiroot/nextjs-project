import React from "react";

import useBanner from "@/hooks/useBanner";
import Image from "next/image";

interface MainBlockV4Props {}

const MainBlockV4: React.FC<MainBlockV4Props> = () => {
  const { isOpen } = useBanner();
  // const submitOrder = useSubmitOrder();
  // const scroll = useCallback(() => {
  //   scrollToGallery();
  // }, [scrollToGallery]);
  return (
    <div className={`relative px-2 sm:px-4 ${isOpen ? "-mt-24" : "-mt-16"}`}>
      <div className="relative max-w-7xl mx-auto mt-20 overflow-hidden rounded-lg md:rounded-3xl shadow-sm aspect-[2/1]">
        <Image
          src="/image/hero-l.jpg"
          alt="main photo"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default MainBlockV4;
