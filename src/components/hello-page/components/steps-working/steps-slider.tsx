import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import Step from "./step";
import { ProjectSliderType } from "@/types";

const StepsSlider: React.FC<{ steps_list: ProjectSliderType[] }> = ({
  steps_list,
}) => {
  return (
    <Swiper
      slidesPerView='auto'
      spaceBetween={30}
      //   loop
      navigation={true}
      modules={[Navigation]}
      freeMode
      autoplay
      watchOverflow={true}
      className='w-auto'
    >
      {steps_list.map((i) => (
        <SwiperSlide key={i.img} className='md:max-w-[412px] p-4 pb-12'>
          <Step info={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StepsSlider;
