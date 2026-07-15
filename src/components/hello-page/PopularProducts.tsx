import Heading from "../Heading";
import useBasketStore from "@/hooks/useBasketStore";
import ProductsSaleCarousel from "./carousel/CarouselComponent";

import { useProducts } from "@/hooks/products/useProducts";
import { submitHaveBasket } from "../shop/CardList";

const PopularProducts = () => {
  const basketStore = useBasketStore();

  const paramsHit = new URLSearchParams({
    "filters[available]": "true",
    "filters[hit]": "true",
    // sort: "updatedAt:desc",
    sort: "updatedAt:asc",
    populate: "*",
  });

  const { products, loading } = useProducts(paramsHit.toString());

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
      <Heading className="pb-12" title="Kondish рекомендует" />
      {!loading && (
        <ProductsSaleCarousel
          products={products}
          submitHaveBasket={submitHaveBasket}
          addBasket={addBasket}
          basketStore={basketStore}
          remooveElement={remooveElement}
        />
      )}
      <div
        onClick={() =>
          window.open("https://shop.kondish.su/catalog/kondczionery/split-sistemy", "_blank")
        }
        className="text-orange-500 underline cursor-pointer text-xl mt-4"
      >
        Смотреть еще...
      </div>
    </div>
  );
};

export default PopularProducts;
