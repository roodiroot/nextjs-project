import { useEffect, useState } from "react";
import { TbError404 } from "react-icons/tb";
import { HiOutlineFaceFrown } from "react-icons/hi2";
import { toast } from "react-hot-toast";
import CardProduct from "./CardProduct";
import CardProductDemo from "./CardProductDemo";
import useBasketStore from "@/hooks/useBasketStore";

export const submitHaveBasket = (id: number, list: any[]): boolean => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return true;
    }
  }
  return false;
};

interface CardList {
  list?: any[];
  smaxPrice?: any;
  loading: boolean;
  error: string | null;
  products: [];
}
const CardList: React.FC<CardList> = ({ loading, error, products }) => {
  const basketStore = useBasketStore();
  const [load, setLoad] = useState<boolean>(true);
  const [err, setErr] = useState<any>(null);

  useEffect(() => {
    setLoad(loading);
    setErr(error);
  }, [loading, error]);

  if (load) {
    return (
      <>
        {new Array(6).fill(0).map((_, index) => (
          <CardProductDemo key={index} />
        ))}
      </>
    );
  }

  if (err) {
    toast.error("Ошибка загрузки данных");
    return (
      <div className="font-semibold text-slate-900 flex flex-row items-center gap-2">
        Ошибка загрузки. Попробуйте позже
        <TbError404 size={20} />
      </div>
    );
  }

  const addBasket = (obj: any) => {
    basketStore.addInBasket(obj);
  };

  const remooveElement = (id: number) => {
    basketStore.remooveElement(id);
  };

  return (
    <>
      {products?.length > 0 ? (
        products.map((i: any) => (
          <CardProduct
            id={i?.id}
            vendorcode={i?.vendorcode}
            srcImg={`${process.env.NEXT_PUBLIC_SERVER_URI}/prod/${i?.logo}.png`}
            name={i?.name}
            type={i?.type?.typeName}
            brand={i?.brand?.name}
            price={i?.price}
            key={i?.id}
            square={
              i?.descriptions?.filter(
                (l: any) => l.title === "Площадь помещения: м²."
              )[0].description
            }
            compressor={
              i?.descriptions?.filter(
                (l: any) => l.title === "Тип компрессора:"
              )[0]?.description
            }
            disabled={submitHaveBasket(i?.id, basketStore?.basketList)}
            addBasket={() => addBasket(i)}
            remooveElement={() => remooveElement(i?.id)}
            hit={i?.hit}
          />
        ))
      ) : (
        <div className="font-semibold text-slate-900 flex flex-row items-center gap-2">
          Такие товары к сожалению закончились
          <HiOutlineFaceFrown size={20} />
        </div>
      )}
    </>
  );
};

export default CardList;
