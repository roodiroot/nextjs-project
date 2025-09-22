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
      order: [["id", "DESC"]],
    },
  };

  useEffect(() => {
    (async () => {
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URI}/products/pagin`, filter)
        .then((d: any) => setProducts(d.data.rows));
    })();
  }, []);

  const addBasket = (obj: any) => {
    // @ts-ignore
    window.ym(93762617, "reachGoal", "addToCart");
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
