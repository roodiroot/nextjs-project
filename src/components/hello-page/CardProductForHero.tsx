import Image from "next/image";
import { useEffect, useState } from "react";

import Button from "../navbar/Button";
import Teg from "../shop/Teg";

interface CardProductProps {
  slug: string;
  name: string;
  type?: string;
  brand?: string;
  srcImg?: string;
  wifi?: string;
  price: string;
  compressor?: string;
  square?: string;
  disabled: boolean;
  hit?: boolean;
}

const CardProductForHero: React.FC<CardProductProps> = ({
  slug,
  name,
  type,
  brand,
  srcImg,
  wifi,
  price,
  square,
  compressor,
  disabled,
  hit,
}) => {
  const [disabledS, setDisabledS] = useState(disabled);

  useEffect(() => {
    setDisabledS(disabled);
  }, [disabled]);

  const placeholder = "/img/placeholder.jpg";

  const imageURL =
    process.env.NEXT_PUBLIC_SERVER_URI && srcImg
      ? process.env.NEXT_PUBLIC_SERVER_URI + srcImg
      : placeholder;

  console.log(srcImg);

  return (
    <div
      className={`
        w-full
        h-full
        rounded-sm
        border
        flex
        flex-col
        shadow-sm
        overflow-hidden
      `}
    >
      {/**IMAGE BLOCK */}
      <div
        className="
          flex-1
          relative
          overflow-hidden
          aspect-[290/230]
          "
      >
        <Image
          unoptimized={true}
          src={imageURL}
          width={290}
          height={230}
          alt="img"
          className="
            absolute
            w-full
            h-full
            object-contain
            "
        />
        <div className="absolute inset-0 bg-gray-900/5"></div>
        {/**LABELS CONTANIER */}
        <div
          className="
            absolute
            flex-wrap
            top-2
            left-2
            sm:top-6
            sm:left-6
            flex
            items-start
            gap-1
            w-auto
            h-auto
            "
        >
          {/* {brand && <Teg classic label={brand} />} */}
          {wifi === "Да" && <Teg yellow label={"Управление WiFi"} />}
          {compressor === "Инвертор" && <Teg nw label={"invertor"} />}
          {hit && <Teg hit label={"hit"} />}
        </div>
      </div>
      {/**TEXT BLOCk */}
      <div
        className="
        bg-white
        flex
        gap-y-2
        sm:gap-y-3
        md:gap-y-4
        p-2
        flex-col
        justify-between
        md:gap-3
        flex-1
        md:p-6
        "
      >
        {/**TITLE ROW */}
        <div className="flex flex-col flex-1">
          <div
            title={name}
            onClick={() =>
              window.open(`https://shop.kondish.su/product/${slug}`, "_blank")
            }
            className="
            text-slate-900
            text-sm
            sm:text-base
            font-bold
            cursor-pointer
            hover:underline
            line-clamp-2
            "
          >
            {name}
          </div>
          <div
            className="
            text-zinc-500
            text-xs
            sm:text-sm
            font-light
        
        "
          >
            {type}
          </div>
        </div>
        {/** STANDARD ROW */}
        <div className="flex flex-col text-xs sm:text-sm">
          {/** STANDARD ROW */}
          {compressor && (
            <div
              className="
            flex
            flex-row
            w-full
            justify-between
            "
            >
              {/* <span className="text-slate-900">Тип компрессора:</span> */}
              <span className="text-slate-900 font-semibold">{compressor}</span>
            </div>
          )}
          {square && (
            <div
              className="
            flex
            flex-row
            w-full
            justify-between
            "
            >
              <span className="text-slate-900">Помещение до:</span>
              <span className="text-slate-900 font-semibold">{square} м².</span>
            </div>
          )}
          <div
            className="
            flex
            flex-row
            w-full
            justify-between
            "
          >
            <span className="text-slate-900">Цена:</span>
            <span className="text-slate-900 font-bold">{price} руб.</span>
          </div>
        </div>

        {/**BUTTON ROW */}
        <div
          className="
            flex 
            flex-row 
            items-center
            w-full
            gap-2
            "
        >
          <Button
            onClick={() =>
              window.open(`https://shop.kondish.su/product/${slug}`, "_blank")
            }
            disabled={disabledS}
            label="Перейти"
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProductForHero;
