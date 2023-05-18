import { HiOutlineFaceFrown } from "react-icons/hi2";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import BasketRow from "@/components/basket/BasketRow";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import useBasketStore from "@/hooks/useBasketStore";
import { toast } from "react-hot-toast";
import OrderList from "@/components/basket/OrderList";
import Path from "@/components/utils-component/Path";

const Basket = () => {
  const basket = useBasketStore();
  const getOrder = () => {
    toast.success("I have a border.", {
      style: {
        border: "1px solid black",
      },
    });
  };

  return (
    <div>
      <Container>
        <Path />
        <div className="w-full py-12">
          <Heading title="Моя корзина" />
        </div>
        <div className="flex flex-col gap-10 mb-16">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center sm:items-start">
            {/** PRODUCTS LIST */}
            <ul className="w-full flex-1 flex flex-col first:border-t">
              {basket?.basketList.length > 0 ? (
                basket.basketList.map((i, index) => (
                  <BasketRow
                    key={`${i.id}_${index}`}
                    id={i.id}
                    name={i.name}
                    type={i?.type?.typeName || i.typeId}
                    price={i.price}
                    imgSrc={i.logo}
                  />
                ))
              ) : (
                <div className="font-semibold text-slate-900 flex flex-row items-center gap-2 pt-6">
                  Пока в вашей корзине ни чего нет
                  <HiOutlineFaceFrown size={20} />
                </div>
              )}
            </ul>
            {/** ORDER LIST */}
            <OrderList
              count={basket.basketList.length}
              getOrder={getOrder}
              summ={basket.summ}
            />
          </div>
          <FeedbackForm />
        </div>
      </Container>
    </div>
  );
};

export default Basket;
