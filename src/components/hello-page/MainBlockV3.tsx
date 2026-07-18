import React, { useCallback } from "react";

import useBanner from "@/hooks/useBanner";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import MainScreenText from "../blocks/main-screen/main-screen-text";
import MainScreenImg from "../blocks/main-screen/main-screen-img";

interface MainBlockV3Props {
  scrollToGallery?: () => void;
}

const MainBlockV3: React.FC<MainBlockV3Props> = ({ scrollToGallery }) => {
  const { isOpen } = useBanner();
  const submitOrder = useSubmitOrder();
  const scroll = useCallback(() => {
    scrollToGallery?.();
  }, [scrollToGallery]);
  return (
    <div className={`relative px-2 sm:px-4 ${isOpen ? "-mt-24" : "-mt-16"}`}>
      <div className="relative max-w-7xl mx-auto mt-20 overflow-hidden rounded-3xl bg-gray-50 shadow-sm">
        <div className="relative z-10 pt-14 w-full lg:max-w-2xl">
          <svg
            className="absolute hidden lg:block  top-0 bottom-0 right-8 h-full w-[28rem] fill-gray-50 translate-x-[40%]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100"></polygon>
          </svg>
          <MainScreenText scroll={scroll} submitOrder={submitOrder} />
        </div>
        <MainScreenImg path="/image/screen.jpg" />
      </div>
    </div>
  );
};

export default MainBlockV3;
