import Image from "next/image";
import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Scrollbar } from "swiper";

import st from "../../styles/slider.module.css";

import "swiper/css";
import useShowImage from "@/hooks/useShowImage";

interface SliderProps {
  list: string[];
}
const SliderPhotos: React.FC<SliderProps> = ({ list }) => {
  const showImagePopap = useShowImage();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getImage = useCallback((src: string) => {
    showImagePopap.onOpen(src);
  }, []);

  return (
    <div
      className="
                w-full 
                h-full
                min-h-[400px] 
                relative
                "
    >
      <div className="absolute inset-0 bg-white flex flex-col justify-between gap-2">
        {/** SLIDER MAIN */}
        <Swiper
          loop={true}
          spaceBetween={30}
          className="w-full h-[calc(100% - 150px)]"
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs]}
        >
          {list?.map((i) => (
            <SwiperSlide
              onClick={() =>
                getImage(`${process.env.NEXT_PUBLIC_SERVER_URI}/prod/${i}.png`)
              }
              key={i}
              className="relative bg-white"
            >
              <Image
                className="w-full h-full object-contain"
                src={`${process.env.NEXT_PUBLIC_SERVER_URI}/prod/${i}.png`}
                width={500}
                height={500}
                alt="photo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/** SLIDER FOR */}
        <Swiper
          onSwiper={setThumbsSwiper}
          scrollbar={{
            hide: true,
            horizontalClass: st.castomscroll,
            dragClass: st.drag,
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Scrollbar]}
          loop={true}
          spaceBetween={8}
          slidesPerView={3}
          className="w-full max-h-[150px] pb-1"
          style={{ paddingBottom: "10px" }}
        >
          {list?.map((i) => (
            <SwiperSlide
              key={i}
              className="overflow-hidden relative border-2 rounded-md bg-white w-[33%] cursor-pointer"
            >
              <Image
                className="w-full h-full object-contain"
                src={`${process.env.NEXT_PUBLIC_SERVER_URI}/prod/${i}.min.png`}
                width={500}
                height={500}
                alt="photo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderPhotos;
