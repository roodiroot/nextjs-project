import { useCallback } from "react";
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

const Gallery = () => {
  const showImage = useShowImage();

  const getImage = useCallback((src: string) => {
    showImage.onOpen(src);
  }, []);

  return (
    <>
      <div className="w-full">
        <Heading
          title="Одни из наших работ"
          subtitle="Здесь мы можете ознакомиться с несколькими из наших работ"
          className="mb-6"
        />
        <div
          className="
            w-full 
            h-auto
            grid 
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            "
        >
          {galleryList.map((i) => (
            <GalleryItem
              element={i}
              key={i.id}
              onClick={() => getImage(i.imgSrc)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
