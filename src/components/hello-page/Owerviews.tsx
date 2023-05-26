"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { Navigation } from "swiper";
import Heading from "../Heading";

import "swiper/css";
import "swiper/css/navigation";
import st from "../../styles/slider.module.css";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";

const owerviewsList = [
  {
    id: 10,
    img: "/image/owervievs/m6.jpg",
    service: "Установка и продажа кондиционера",
    text: "Ребята сделали работу на отлично. С учетом того, что две из трех корзин находились сверху у соседа они сделали монтаж из моей квартиры(17 этаж) не беспокоя его. Рекомендую!",
    name: "Александр",
  },
  {
    id: 9,
    img: "/image/owervievs/m5.jpg",
    service: "Установка и продажа кондиционера",
    text: "Все чётко как в аптеке, приехали, смонтировали, опресовали,проверили, убрали, уехали. 5 баллов.",
    name: "Павел",
  },
  {
    id: 8,
    img: "/image/owervievs/g5.jpg",
    service: "Установка и продажа кондиционера",
    text: "Выбирала компанию для установки кондиционеров в загородный дом по отзывам и не прогадала, спасибо авито, а еще огромное спасибо Александру за качественную, быструю работу начиная от консультирования и подбора кондеев и до момента установки. Очень аккуратные, пунктуальные рабочие, мы очень довольны качеством. Рекомендую!",
    name: "Olga Tyumeneva",
  },
  {
    id: 1,
    img: "/image/owervievs/g1.jpg",
    service: "Установка и продажа кондиционера",
    text: "Спасибо большое за быстро, а главное качественно выполненную работу 👏🏻. Ребята профессионалы, не пожалела ни на минуту о выборе. Посоветовали какой и почему ставить, приобрела у них. Вся работа заняла менее 2х часов. Вы осчастливили еще одного человека ❤️",
    name: "Дарья",
  },
  {
    id: 2,
    img: "/image/owervievs/g2.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Все очень понравилось,выбрали кондиционер,подсказали,хотела черный поэтому ждала пару дней,не было в наличии.В день Х приехали установили быстро,за час!!Мусор убрали,за собой!Все рассказали,очень понравилось.Ребята огонь!!!Буду всем советовать,теперь подумываю о кондиционере на кухню 😀.Да цена за оборудование монтаж,не поменялась!И расчет все по факту!Без предоплат!!!",
    name: "Арина",
  },
  {
    id: 3,
    img: "/image/owervievs/84.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Четные 5 звезд! Монтаж в день заказа, ребята видно мастера своего дела! Все по уровню, шаблонам, одно удовольствие смотреть за работой. Объяснили, протестировали, за собой убрали. Огромное спасибо!",
    name: "Дмитрий",
  },
  {
    id: 4,
    img: "/image/owervievs/m1.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Все понравилось. Ребята мастера своего дела. Александру спасибо за подбор и совет по кондиционеру. Андрею за сборку и монтаж.",
    name: "Андрей",
  },
  {
    id: 5,
    img: "/image/owervievs/m3.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Бригада работает профессионально. Работы выполнены качественно и быстро. Компания занимается не только установкой, но и продажей кондиционеров.",
    name: "Григорий",
  },
  {
    id: 6,
    img: "/image/owervievs/m2.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Большое спасибо! Договорились, монтажники приехали в удобное время, даже немного раньше. Установили все как и обещали ровно за два часа! Отличная работа!",
    name: "Евгений",
  },
  {
    id: 7,
    img: "/image/owervievs/m4.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Ребята молодцы , делают качественно))))5++++,приехали в назначенное время, цена адекватная)супер) буду у них заказывать ежегодное обслуживание 🤘🤘🤘🤘",
    name: "Gleb Power",
  },
];

const Owerviews = () => {
  const { width } = useWindowWidth();

  return (
    <div
      className="
    flex
    flex-col
    py-24
    "
    >
      <Heading
        title="Отзывы наших клиентов"
        subtitle="Почитайте отзывы тех кто уже воспользовался нашими услугами"
        className="mb-8"
      />
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{
          hide: false,
          horizontalClass: st.castomscroll,
          dragClass: st.drag,
        }}
        modules={[Scrollbar, Navigation]}
        spaceBetween={30}
        slidesPerView={width > 900 ? 2 : 1}
        className={`w-full h-full ${st.swiperWrapper}`}
        style={{ paddingBottom: "30px" }}
      >
        {owerviewsList.map((i, index) => (
          <SwiperSlide
            key={index}
            className={`
            border 
            rounded-md 
            p-6
            min-h-[242px]
            md:p-8 
            relative
            `}
          >
            <div
              className="
            w-full 
            h-full 
            flex
            flex-col
            md:flex-row
            gap-6
            "
            >
              <div
                className="
              flex-none 
              flex 
              justify-center 
              items-center 
              md:items-start"
              >
                <Image
                  src={i.img}
                  alt="photo"
                  width={100}
                  height={100}
                  className="
                  w-24 
                  h-24 
                  rounded-full 
                  mr-0"
                />
              </div>
              <div
                className="
              flex-auto 
              text-center 
              md:text-left 
              space-y-4"
              >
                <blockquote>
                  <p
                    className="
                  text-md 
                  md:text-lg 
                  font-medium 
                  line-clamp-4"
                  >
                    {i.text}
                  </p>
                </blockquote>
                <figcaption>
                  <div className="text-sky-700">{i.name}</div>
                  <div className="text-slate-500">{i.service}</div>
                </figcaption>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Owerviews;
