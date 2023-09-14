import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import loader from "../../../public/image/loader.jpg";
import blur from "../../../public/image/blur.png";
import Button from "../navbar/Button";
import Teg from "./Teg";

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

const CardProduct: React.FC<CardProductProps> = ({
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
        min-w-[270px]
        w-full
        ${search ? "min-h-[404px]" : "min-h-[470.44px]"}
        ${search ? "h-[404px]" : "h-[470.44px]"}
        rounded-3xl
        border
        flex
        flex-col
        shadow-sm
        overflow-hidden
      `}
    >
      {/**IMAGE BLOCK */}
      <div
        className='
          flex-1
          min-h-[230px]
          relative
          overflow-hidden
          '
      >
        <Image
          loader={myLoader}
          unoptimized={true}
          src={srcImg}
          width={290}
          height={230}
          alt='img'
          className='
            absolute
            w-full
            h-full
            object-contain
            '
        />
        {/**LABELS CONTANIER */}
        <div
          className='
            absolute
            top-6
            left-6
            flex
            gap-1
            w-auto
            h-auto
            '
        >
          {brand && <Teg classic label={brand} />}
          {/* {id && <Teg classic label={id} />} */}
          {compressor === "инвертор" && <Teg nw label={"invertor"} />}
          {hit && <Teg hit label={"hit"} />}
        </div>
        <div className='absolute bottom-3 left-6 text-sm text-zinc-400'>
          Код товара: {vendorcode}
        </div>
      </div>
      {/**TEXT BLOCk */}
      <div
        className='
        bg-slate-100
        flex
        flex-col
        justify-between
        gap-3
        flex-1
        p-6
        '
      >
        {/**TITLE ROW */}
        <div className='flex flex-col'>
          <div
            title={name}
            onClick={(e) => router.push(`/shop/${id}`)}
            className='
            text-slate-900
            font-bold
            cursor-pointer
            hover:underline
            line-clamp-2
            '
          >
            {name}
          </div>
          <div
            className='
            text-zinc-500
            texts-sm
            font-light
        
        '
          >
            {type}
          </div>
        </div>
        {/** STANDARD ROW */}
        <div className='flex flex-col text-sm'>
          <div
            className='
            flex
            flex-row
            w-full
            justify-between
            '
          >
            <span className='text-slate-900'>Цена:</span>
            <span className='text-slate-900'>{price} руб.</span>
          </div>
          {/** STANDARD ROW */}
          {compressor && (
            <div
              className='
            flex
            flex-row
            w-full
            justify-between
            '
            >
              <span className='text-slate-900'>Тип компрессора:</span>
              <span className='text-slate-900 font-semibold'>{compressor}</span>
            </div>
          )}
          {square && (
            <div
              className='
            flex
            flex-row
            w-full
            justify-between
            '
            >
              <span className='text-slate-900'>Площадь помещения: м².</span>
              <span className='text-slate-900 font-semibold'>{square}</span>
            </div>
          )}
        </div>
        {/**BUTTON ROW */}
        <div
          className='
            flex 
            flex-row 
            w-full
            gap-2
            '
        >
          {!disabledS ? (
            <Button
              onClick={addBasket}
              disabled={disabledS}
              label='В корзину'
            />
          ) : (
            <Button outline onClick={remooveElement} label='Удалить' />
          )}

          <div
            onClick={(e) => router.push(`/shop/${id}`)}
            className='
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
              flex
              flex-row
              items-center
              '
          >
            Посмотреть
            <RxArrowTopRight className='text-zinc-500' size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
