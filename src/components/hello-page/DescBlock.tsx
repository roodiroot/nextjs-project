import Image from "next/image";
import img from "../../../public/image/feed.png";
import Link from "next/link";

const DescBlock = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row text-slate-900 mb-20">
      <div className="w-full min-w-[50%] flex-1">
        <Image
          alt="img"
          src={img}
          width={700}
          height={700}
          className="mx-auto"
        />
      </div>
      <div
        className="
            flex-1 
            flex 
            flex-col
            gap-4
            justify-center 
            items-center 
            md:py-8  
            md:px-10 
            lg:px-16 
            sm:py-4 
            sm:px-8 
            py-2 
            px-4"
      >
        <h2 className="text-2xl md:text-4xl font-bold w-full">
          Почитайте реальные отзывы о нас.
        </h2>
        <p className="text-lg md:text-xl w-full">
          <span className="font-bold">13</span>&nbsp;лет опыта и&nbsp;
          <span className="font-bold">550+</span> положительных отзывов.
          Мы&nbsp;всегда стремимся превзойти ожидания наших клиентов
          и&nbsp;гарантируем результат в&nbsp;короткие сроки.
        </p>
        <div className="self-start w-full">
          <a
            href="https://www.avito.ru/moskva/predlozheniya_uslug/ustanovka_vn.bloka._prodazha_konditsionerov_2431678456"
            target="blank"
            className="text-orange-500 hover:underline cursor-pointer w-full"
          >
            Отзывы на Авито.
          </a>
          <a
            href="https://yandex.ru/maps/org/kondish/223415694122/reviews/?ll=38.874756%2C55.531232&utm_content=add_review&utm_medium=reviews&utm_source=maps-reviews-widget&z=7"
            target="blank"
            className="ml-6 text-orange-500 hover:underline cursor-pointer w-full"
          >
            Отзывы на Яндексе.
          </a>
        </div>
      </div>
    </div>
  );
};

export default DescBlock;
