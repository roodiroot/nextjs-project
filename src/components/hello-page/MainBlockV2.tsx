import React, { useCallback } from "react";

import useBanner from "@/hooks/useBanner";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import MainScreenText from "../blocks/main-screen/main-screen-text";
import MainScreenImg from "../blocks/main-screen/main-screen-img";

interface MainBlockV2Props {
  scrollToGallery: () => void;
}

const MainBlockV2: React.FC<MainBlockV2Props> = ({ scrollToGallery }) => {
  const { isOpen } = useBanner();
  const submitOrder = useSubmitOrder();
  const scroll = useCallback(() => {
    scrollToGallery();
  }, []);
  return (
    <div
      className={`
    relative
    ${isOpen ? "-mt-24" : "-mt-16"}
    `}
    >
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pt-14 w-full lg:max-w-2xl'>
          <svg
            className='absolute hidden lg:block  top-0 bottom-0 right-8 h-full w-80 fill-white translate-x-[50%]'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='0,0 90,0 50,100 0,100'></polygon>
          </svg>
          <MainScreenText scroll={scroll} submitOrder={submitOrder} />
        </div>
      </div>
      <MainScreenImg path='/image/ny-sale3.jpg' />
    </div>
  );
};

export default MainBlockV2;
