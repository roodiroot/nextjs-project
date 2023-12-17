import { HiOutlineFaceFrown } from "react-icons/hi2";

import Container from "@/components/Container";
import BasketRow from "@/components/basket/BasketRow";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import useBasketStore from "@/hooks/useBasketStore";
import { toast } from "react-hot-toast";
import OrderList from "@/components/basket/OrderList";
import Path from "@/components/utils-component/Path";
import { useEffect, useState } from "react";
import CheckSlider from "@/components/utils-component/CheckSlider";
import useBasketOrder from "@/hooks/useBasketOrder";
import Head from "next/head";

const Basket = () => {
  const { onOpen, setTotal, setProd } = useBasketOrder();
  const [installation, setInstallation] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [distance, setDistance] = useState(0);

  const basket = useBasketStore();
  const getOrder = () => {
    if (basket?.basketList.length) {
      onOpen();
      return;
    }
    toast("Сначала положите товр в корзину");
  };

  useEffect(() => {
    if (!delivery) {
      setDistance(0);
    }
    if (!basket?.basketList.length) {
      setInstallation(false);
      setDelivery(false);
      setDistance(0);
    }
  }, [basket?.basketList.length, delivery]);

  useEffect(() => {
    setProd(basket?.basketList);
  }, [basket?.basketList.length]);

  const getDistance = (e: any) => {
    if (isNaN(Number(e.target.value))) {
      return toast.error("Расстояние должно быть цифрой");
    }
    if (Number(e.target.value) < 0 || Number(e.target.value) > 100) {
      return toast.error("Пока это не доступные для заказа расстояния");
    }
    setDistance(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Корзина</title>
        <meta name='description' content='Оформление заказа.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Container>
          <Path />
          <h1 className='w-full py12 text-3xl md:text-4xl font-bold text-start mb-2'>
            Моя корзина
          </h1>
          <div className='text-md md:text-lg max-w-xl mb-6'>
            После оформления заказа, оставайтесь на связи. Наш менеджер вскоре
            свяжется с вами, для уточнения деталей
          </div>
          <div className='flex flex-col gap-10 mb-16'>
            <div className='relative pb-24 flex flex-col-reverse md:flex-row gap-10 items-center sm:items-start'>
              {/** PRODUCTS LIST */}
              <ul className='w-full flex-1 flex flex-col first:border-t '>
                {basket?.basketList.length ? (
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
                  <div className='font-semibold text-slate-900 flex flex-row items-center gap-2 py-6'>
                    Пока в вашей корзине ни чего нет
                    <HiOutlineFaceFrown size={20} />
                  </div>
                )}
                {basket?.basketList.length ? (
                  <div className='absolute flex flex-col gap-6 left-0 bottom-0'>
                    <div className='w-full flex flex-row gap-6'>
                      <CheckSlider
                        label='Доставка за МКАД'
                        value={delivery}
                        setvalue={setDelivery}
                      />
                      {delivery && (
                        <div className='flex gap-1 items-center'>
                          <input
                            value={distance}
                            onChange={getDistance}
                            type='text'
                            className='outline-none border px-2 max-w-[40px]'
                          />
                          км.
                        </div>
                      )}
                    </div>
                    <CheckSlider
                      label='Установка'
                      value={installation}
                      setvalue={setInstallation}
                    />
                  </div>
                ) : (
                  ""
                )}
              </ul>
              {/** ORDER LIST */}
              <OrderList
                setTotal={setTotal}
                count={basket.basketList.length}
                getOrder={getOrder}
                summ={basket.summ}
                installation={installation}
                distance={distance}
              />
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-start mb-2'>
              Порядок доставки
            </h2>
            <div className='w-full flex flex-col lg:flex-row mb-10 gap-6'>
              <div className='w-full rounded-md bg-slate-100 p-7'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>1.</h2>
                <div className='text-md md:text-lg'>
                  При оформлении заказа мы фиксируем время наиболее удобное для
                  вас, и осуществляем привоз ежедневно с 10:00 до 20:00. При
                  этом, мы гарантируем высокое качество наших услуг и быструю
                  доставку, чтобы Вы могли наслаждаться прохладой в короткие
                  сроки. О деталях доставки можно договориться с нашим
                  менеджером при оформлении заказа.
                </div>
              </div>
              <div className='w-full rounded-md bg-slate-100 p-7'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>2.</h2>
                <div className='text-md md:text-lg'>
                  Мы рады сообщить, что доставка до подъезда Вашего дома в
                  пределах МКАД - совершенно бесплатна! А если Вам нужна
                  доставка за пределы МКАД, не переживайте - мы готовы
                  предоставить эту услугу по очень выгодной ставке всего 30
                  рублей за каждый километр. Насладитесь удобством и комфортом
                  доставки прямо на порог Вашего дома, не тратя при этом лишних
                  денег.
                </div>
              </div>
              <div className='w-full rounded-md bg-slate-100 p-7'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>3.</h2>
                <div className='text-md md:text-lg'>
                  Если товар Вас устраивает и не имеет дефектов, Вы можете
                  подтвердить его прием, подписав товарную накладную. Однако,
                  если Вам будет обнаружен любой недостаток до подписания «Акта
                  приема-передачи», Вы можете не оплачивать товар и вернуть его
                  продавцу без каких-либо дополнительных расходов. Наша цель -
                  обеспечить Вам лучший сервис и высокое качество товара.
                </div>
              </div>
            </div>
            <FeedbackForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Basket;
