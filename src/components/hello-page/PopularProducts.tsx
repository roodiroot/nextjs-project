import { useEffect, useState } from "react";
import Heading from "../Heading";
import axios from "axios";
import CardProduct from "../shop/CardProduct";
import Container from "../Container";
import { useRouter } from "next/router";
import useBasketStore from "@/hooks/useBasketStore";
import { submitHaveBasket } from "../shop/CardList";

const PopularProducts = () => {
  const basketStore = useBasketStore();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  let filter: any = {
    filtering: {
      limit: 4,
      order: [["numberOfViews", "DESC"]],
    },
  };

  useEffect(() => {
    (async () => {
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URI}/products/pagin`, filter)
        .then((d: any) => setProducts(d.data.rows));
    })();
  });

  const addBasket = (obj: any) => {
    basketStore.addInBasket(obj);
  };

  const remooveElement = (id: number) => {
    basketStore.remooveElement(id);
  };

  return (
    <div className='w-full pb-40'>
      <Heading className='pb-12' title='Часто смотрят' />
      <div
        className='
            grid
            justify-items-center
            grid-cols-auto
            gap-6
            mb-6
            '
      >
        {products.map((i: any) => (
          <CardProduct
            id={i?.id}
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
        ))}
      </div>
      <div
        onClick={(e) => router.push("/shop")}
        className='text-orange-500 underline cursor-pointer text-xl'
      >
        Смотреть еще...
      </div>
    </div>
  );
};

export default PopularProducts;
