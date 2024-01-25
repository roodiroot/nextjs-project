import React, { RefObject, useCallback } from "react";
import Heading from "../Heading";
import GalleryItem from "../gallery/GalleryItem";
import useShowImage from "@/hooks/useShowImage";

export interface GaleryList {
  id: number;
  imgSrc: string;
  product: string;
  adress: string;
}
const galleryList: GaleryList[] = [
  {
    id: 1,
    imgSrc: "/image/gallery/1.jpg",
    product: "Royal Clima RC-PD35HN",
    adress: "Чулково Club",
  },
  {
    id: 2,
    imgSrc: "/image/gallery/2.jpg",
    product: "Energolux SAS07B3-A/SAU07B3-A",
    adress: "Коттеджный посёлок Довиль",
  },
  {
    id: 3,
    imgSrc: "/image/gallery/13.jpg",
    product: "Energolux SAS12G2-AI/SAU12G2-AI",
    adress: "Коттеджный поселок Стольный",
  },
  {
    id: 4,
    imgSrc: "/image/gallery/4.jpg",
    product: "Royal Clima RCI-PF40HN",
    adress: "ЖК Зиларт",
  },
  {
    id: 5,
    imgSrc: "/image/gallery/5.jpg",
    product: "Royal Clima RC-GR35HN",
    adress: "Квартира в Новой Москве",
  },
  {
    id: 6,
    imgSrc: "/image/gallery/6.jpg",
    product: "Royal Clima RC-GR35HN",
    adress: "Квартира в Зеленограде",
  },
  {
    id: 7,
    imgSrc: "/image/gallery/7.jpg",
    product: "Royal Clima RCI-PF40HN",
    adress: "Коттеджный поселок Красные пруды",
  },
  {
    id: 8,
    imgSrc: "/image/gallery/8.jpg",
    product: "Royal Clima RC-GR35HN",
    adress: "Коттеджный поселок Стольный",
  },
  {
    id: 9,
    imgSrc: "/image/gallery/9.jpg",
    product: "Royal Clima RC-GR35HN",
    adress: "ЖК Зиларт",
  },
  {
    id: 10,
    imgSrc: "/image/gallery/10.jpg",
    product: "Royal Clima RCI-PF40HN",
    adress: "Коттеджный поселок Красные пруды",
  },
  {
    id: 11,
    imgSrc: "/image/gallery/11.jpg",
    product: "HISENSE AS-12HR4SYDDJ3",
    adress: "Коттеджный поселок Красные пруды",
  },
  {
    id: 12,
    imgSrc: "/image/gallery/12.jpg",
    product: "Haier HSU-07HPL103/R3",
    adress: "Деревня Сельская Новь",
  },
];

interface GalleryProps {
  element?: RefObject<HTMLInputElement>;
}

const Gallery: React.FC<GalleryProps> = ({ element }) => {
  const showImage = useShowImage();

  const getImage = useCallback(
    (src: string) => {
      showImage.onOpen(src);
    },
    [showImage]
  );

  return (
    <>
      <div ref={element} className='w-full mt-40'>
        <Heading
          title='Одни из наших работ'
          subtitle='Здесь мы можете ознакомиться с несколькими из наших работ'
          className='mb-6'
        />
        <div
          className='
            w-full 
            h-auto
            grid 
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            '
        >
          {galleryList.map((i) => (
            <GalleryItem
              element={i}
              key={i.id}
              onClick={() => getImage(i.imgSrc)}
            />
          ))}
        </div>
        <div className='mt-10 w-full text-base text-slate-900'>
          Для консультации или заказа установки звоните по телефонам{" "}
          <a className='text-orange-500' href='tel:89153294209'>
            8 (915) 329-42-09
          </a>
          ,{" "}
          <a className='text-orange-500' href='tel:84956752699'>
            8 (495) 675-26-99
            <span className='text-sm text-slate-900'> c 9:00 до 21:00</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery;
