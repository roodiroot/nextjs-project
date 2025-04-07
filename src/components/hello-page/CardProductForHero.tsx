import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import loader from "../../../public/image/loader.jpg";
import blur from "../../../public/image/blur.png";
import Button from "../navbar/Button";
import Teg from "../shop/Teg";
import { ExternalLink, ShoppingCart } from "lucide-react";

interface CardProductProps {
  id: number;
  name: string;
  type?: string;
  brand?: string;
  srcImg: string;
  price: string;
  compressor?: string;
  square?: string;
  disabled: boolean;
  hit?: boolean;
  vendorcode?: number | string;
  addBasket: () => void;
  remooveElement: () => void;
  search?: boolean;
}

const CardProductForHero: React.FC<CardProductProps> = ({
  id,
  name,
  type,
  brand,
  srcImg,
  price,
  square,
  compressor,
  disabled,
  hit,
  vendorcode,
  addBasket,
  remooveElement,
  search,
}) => {
  const [disabledS, setDisabledS] = useState(disabled);
  const router = useRouter();

  const myLoader = () => {
    return srcImg;
  };

  useEffect(() => {
    setDisabledS(disabled);
  }, [disabled]);

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
          loader={myLoader}
          unoptimized={true}
          src={srcImg}
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
          {brand && <Teg classic label={brand} />}
          {/* {id && <Teg classic label={id} />} */}
          {compressor === "инвертор" && <Teg nw label={"invertor"} />}
          {hit && <Teg hit label={"hit"} />}
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-6 text-xs sm:text-sm text-zinc-400">
          Код товара: {vendorcode}
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
            onClick={(e) => router.push(`/shop/${id}`)}
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
              <span className="text-slate-900">Помещение до: м².</span>
              <span className="text-slate-900 font-semibold">{square}</span>
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
          {!disabledS ? (
            <>
              <Button
                onClick={addBasket}
                disabled={disabledS}
                label="В корзину"
                className="hidden md:block"
              />
              <button
                onClick={addBasket}
                disabled={disabledS}
                className="md:hidden p-2 rounded-lg bg-orange-500 text-white"
              >
                <ShoppingCart className="size-5 " />
              </button>
            </>
          ) : (
            <Button outline onClick={remooveElement} label="Удалить" />
          )}

          {/* <div
            
            className="
              hidden
              md:flex
              cursor-pointer
              relative
              rounded-lg
              hover:opacity-80
              transition
              w-full
              whitespace-nowrap
              text-sm
              font-semibold
              py-2 px-4
              flex-row
              items-center
              "
          >
            Посмотреть
            <RxArrowTopRight className="text-zinc-500" size={18} />
          </div> */}
          <div
            onClick={(e) => router.push(`/shop/${id}`)}
            className="p-2 border rounded-lg bg-white text-zinc-500 hover:bg-gray-100 cursor-pointer hidden md:flex"
          >
            <ExternalLink className="size-5 text-zinc-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductForHero;
