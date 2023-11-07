"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../Heading";

import "swiper/css";
import "swiper/css/navigation";
import st from "../../styles/slider.module.css";
import { owerviewsList } from "@/constans";
import { OwerViewType } from "@/types";
import OwerviewElement from "./owerview-element";

const Owerviews = () => {
  return (
    <div
      className='
    flex
    flex-col
    py-40
    '
    >
      <Heading
        title='Отзывы наших клиентов'
        subtitle='Почитайте отзывы тех кто уже воспользовался нашими услугами'
        className='mb-8'
      />
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={30}
        slidesPerView='auto'
        className={`w-full h-full ${st.swiperWrapper}`}
        style={{ paddingBottom: "30px" }}
      >
        {owerviewsList.map((i: OwerViewType) => (
          <SwiperSlide
            key={i.id}
            className={`
              cursor-pointer
              rounded-3xl 
              p-6
              min-h-[242px]
              md:p-8 
              relative
              max-w-[500px]
            `}
          >
            <OwerviewElement i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Owerviews;
