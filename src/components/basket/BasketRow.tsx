import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdDeleteOutline } from "react-icons/md";

import useBasketStore from "@/hooks/useBasketStore";

interface BasketRowProps {
  id: number;
  name: string;
  type: string;
  price: number;
  imgSrc: string;
}

const BasketRow: React.FC<BasketRowProps> = ({
  id,
  name,
  type,
  price,
  imgSrc,
}) => {
  const router = useRouter();
  const basket = useBasketStore();
  const row = useRef<any>();

  const remooveElement = () => {
    gsap.to(row.current, {
      opacity: 0,
      x: -100,
      onComplete() {
        basket.remooveElement(id);
      },
    });
  };

  return (
    <li
      ref={row}
      className="py-6 border-b flex items-center justify-between gap-4"
    >
      {/** LOGO & IMAGE */}
      <div className="gap-4 flex items-center">
        <div className="hidden sm:block flex-none relative w-[100px] h-[80px] border rounded-md">
          <Image
            width={150}
            height={150}
            alt="logo"
            src={`${process.env.NEXT_PUBLIC_SERVER_URI}/prod/${imgSrc}.min.png`}
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
        <div className=" flex-1 flex flex-col">
          <div
            onClick={() => router.push(`/shop/${id}`)}
            className="cursor-pointer font-bold lg:text-lg text-slate-900 line-clamp-2 hover:underline max-w-[205px]"
          >
            {name}
          </div>
          <div className="text-zinc-500 text-sm">{type}</div>
        </div>
      </div>
      {/** COUNT */}
      <div className="hidden lg:block text-zinc-500 font-medium">1 шт.</div>
      {/** PRICE */}
      <div className="font-medium text-slate-900">{price} руб.</div>
      {/** DROP */}
      <div
        onClick={remooveElement}
        className="text-zinc-500 py-4 pl-1 cursor-pointer transition hover:scale-[1.1]"
      >
        <MdDeleteOutline size={22} />
      </div>
    </li>
  );
};

export default BasketRow;
