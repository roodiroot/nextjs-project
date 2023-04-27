import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

import Button from "../navbar/Button";
import Teg from "./Teg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface CardProductProps {
  id: number;
  name: string;
  type: string;
  brand: string;
  srcImg: string;
  price: string;
  compressor?: string;
  square?: string;
  disabled: boolean;
  addBasket: () => void;
  remooveElement: () => void;
}

const CardProduct: React.FC<CardProductProps> = ({
  id,
  name,
  type,
  brand,
  srcImg,
  price,
  square,
  compressor = "Не инвертор",
  disabled,
  addBasket,
  remooveElement,
}) => {
  const [disabledS, setDisabledS] = useState(disabled);
  const router = useRouter();

  useEffect(() => {
    setDisabledS(disabled);
  }, [disabled]);

  return (
    <div
      className="
        w-full
        rounded-md
        border
        flex
        flex-col
        overflow-hidden
        "
    >
      {/**IMAGE BLOCK */}
      <div
        className="
          flex-1
          min-h-[230px]
          relative
          overflow-hidden
          "
      >
        <Image
          src={srcImg}
          width={300}
          height={300}
          priority={true}
          alt="img"
          className="
            absolute
            w-full
            h-full
            object-contain
            "
        />
        {/**LABELS CONTANIER */}
        <div
          className="
            absolute
            top-3
            left-3
            flex
            gap-1
            w-auto
            h-auto
            "
        >
          <Teg classic label={brand} />
          <Teg nw label={"new"} />
          <Teg hit label={"hit"} />
        </div>
      </div>
      {/**TEXT BLOCk */}
      <div
        className="
        bg-slate-100
        flex
        flex-col
        justify-between
        gap-3
        flex-1
        p-3
        "
      >
        {/**TITLE ROW */}
        <div className="flex flex-col">
          <div
            onClick={(e) => router.push(`/shop/${id}`)}
            className="
            text-slate-900
            font-bold
            text-lg
            cursor-pointer
            hover:underline
            "
          >
            {name}
          </div>
          <div
            className="
            text-zinc-500
            font-light
        
        "
          >
            {type}
          </div>
        </div>
        {/** STANDARD ROW */}
        <div className="flex flex-col">
          <div
            className="
            flex
            flex-row
            w-full
            justify-between
            "
          >
            <span className="text-slate-900">Цена:</span>
            <span className="text-slate-900">{price} руб.</span>
          </div>
          {/** STANDARD ROW */}
          <div
            className="
            flex
            flex-row
            w-full
            justify-between
            "
          >
            <span className="text-slate-900">Тип компрессора:</span>
            <span className="text-slate-900 font-semibold">{compressor}</span>
          </div>
          <div
            className="
            flex
            flex-row
            w-full
            justify-between
            "
          >
            <span className="text-slate-900">Площадь помещения: м².</span>
            <span className="text-slate-900 font-semibold">{square}</span>
          </div>
        </div>
        {/**BUTTON ROW */}
        <div
          className="
            flex 
            flex-row 
            w-full
            gap-2
            "
        >
          {!disabledS ? (
            <Button
              onClick={addBasket}
              disabled={disabledS}
              label="В корзину"
            />
          ) : (
            <Button outline onClick={remooveElement} label="Удалить" />
          )}

          <div
            onClick={(e) => router.push(`/shop/${id}`)}
            className="
              cursor-pointer
              relative
              rounded-lg
              hover:opacity-80
              transition
              w-full
              whitespace-nowrap
              text-md
              font-semibold
              py-2 px-4
              flex
              flex-row
              items-center
              "
          >
            Посмотреть
            <RxArrowTopRight className="text-zinc-500" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
