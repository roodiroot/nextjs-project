import { useEffect, useState } from "react";
import Heading from "../Heading";
import axios from "axios";
import CardProductForHero from "./CardProductForHero";
import { useRouter } from "next/router";
import useBasketStore from "@/hooks/useBasketStore";
import { submitHaveBasket } from "../shop/CardList";
import ProductsSaleCarousel from "./carousel/CarouselComponent";

const PopularProducts = () => {
  const basketStore = useBasketStore();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  let filter: any = {
    filtering: {
      descriptionFilters: [
        {
          title: "Хит",
          description: ["Да"],
        },
      ],
      between: [1, 150000],
      limit: 20,
      order: [["numberOfViews", "DESC"]],
    },
  };

  useEffect(() => {
    (async () => {
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URI}/products/pagin`, filter)
        .then((d: any) => setProducts(d.data.rows));
    })();
  }, []);

  // console.log(products);

  const addBasket = (obj: any) => {
    basketStore.addInBasket(obj);
  };

  const remooveElement = (id: number) => {
    basketStore.remooveElement(id);
  };

  return (
    <div className="w-full">
      <Heading className="pb-12" title="Популярные сплит-системы" />
      <ProductsSaleCarousel
        products={products}
        submitHaveBasket={submitHaveBasket}
        addBasket={addBasket}
        basketStore={basketStore}
        remooveElement={remooveElement}
      />
      {/* {products.map((i: any) => (
          <CardProductForHero
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
            vendorcode={i?.vendorcode}
          />
        ))} */}
      <div
        onClick={(e) => router.push("/shop")}
        className="text-orange-500 underline cursor-pointer text-xl mt-4"
      >
        Смотреть еще...
      </div>
    </div>
  );
};

export default PopularProducts;
{
  /* <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"></div> */
}
