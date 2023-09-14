import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbHandClick } from "react-icons/tb";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import SliderPhotos from "@/components/card-product/SliderPhotos.jsx";
import Button from "@/components/navbar/Button";
import Teg from "@/components/shop/Teg";
import useSelectProduct from "@/hooks/useSelectProduct";
import useBasketStore from "@/hooks/useBasketStore";
import { toast } from "react-hot-toast";
import { submitHaveBasket } from "@/components/shop/CardList";
import Path from "@/components/utils-component/Path";
import Head from "next/head";

// const product = {
//   id: 3,
//   name: "Royal Clima RCI-TWN22HN",
//   price: 33000,
//   logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/21/Triumph_Inverter_Royal_Clima_2021_dk46-fl_jyls-jf.jpg",
//   imges: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
//   brandId: 2,
//   typeId: 1,
//   descriptions: [
//     {
//       id: 45,
//       productId: 3,
//       title: "Габариты внутреннего блока: мм",
//       description: "715x285x194",
//     },
//     {
//       id: 44,
//       productId: 3,
//       title: "Мин. температура за окном",
//       description: "-15 С",
//     },
//     {
//       id: 43,
//       productId: 3,
//       title: "Тип Фреона:",
//       description: "R410A",
//     },
//     {
//       id: 42,
//       productId: 3,
//       title: "Вес внутреннего блока: кг.",
//       description: "7.5",
//     },
//     {
//       id: 41,
//       productId: 3,
//       title: "Ионизация воздуха:",
//       description: "да",
//     },
//     {
//       id: 40,
//       productId: 3,
//       title: "Дезодорирующий фильтр:",
//       description: "да",
//     },
//     {
//       id: 39,
//       productId: 3,
//       title: "Производитель:",
//       description: "Китай",
//     },
//     {
//       id: 38,
//       productId: 3,
//       title: "Тип компрессора:",
//       description: "не инвертор",
//     },
//     {
//       id: 37,
//       productId: 3,
//       title: "Наличие WiFi:",
//       description: "да (опция)",
//     },
//     {
//       id: 36,
//       productId: 3,
//       title: "Мощность охлаждения: кВт.",
//       description: "2.4",
//     },
//     {
//       id: 35,
//       productId: 3,
//       title: "Мощность обогрева: кВт.",
//       description: "2.6",
//     },
//     {
//       id: 34,
//       productId: 3,
//       title: "Макс. длина трубы: м.",
//       description: "25",
//     },
//     {
//       id: 33,
//       productId: 3,
//       title: "Уровень шума: дб.",
//       description: "26",
//     },
//     {
//       id: 32,
//       productId: 3,
//       title: "Класс энегроэффективности:",
//       description: "A++/A+",
//     },
//     {
//       id: 31,
//       productId: 3,
//       title: "Площадь помещения: м².",
//       description: "24",
//     },
//   ],
//   brand: {
//     id: 2,
//     name: "Royal Clima",
//     brandСountry: "Шведция",
//   },
//   type: {
//     id: 1,
//     typeName: "Сплит-Система",
//   },
// };

const ProductPage = () => {
  const store = useSelectProduct();
  const basket = useBasketStore();
  const router = useRouter();
  const [disabled, setDisabled] = useState(
    submitHaveBasket(Number(router.query.id), basket.basketList)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDisabled(submitHaveBasket(Number(router.query.id), basket.basketList));
  }, [submitHaveBasket(Number(router.query.id), basket.basketList)]);

  useEffect(() => {
    setLoading(store.loading);
    setError(store.error);
  }, [store.error, store.loading]);

  useEffect(() => {
    if (isNaN(Number(router.query.id))) {
      return;
    }
    store.fetchProduct(Number(router.query.id));
    return () => {
      store.restor();
    };
  }, [router.query.id]);

  const addToCart = () => {
    basket.addInBasket(store?.product);
  };
  const remooveElemet = () => {
    basket.remooveElement(Number(router.query.id));
  };

  if (error) {
    return (
      <Container>
        <div className='text-slate-900 font-semibold '>
          Ошибка загрузки элемента
        </div>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{store?.product.name}</title>
        <meta
          name='description'
          content={`Хотите купить ${
            store?.product?.type?.typeName || store?.product?.typeId
          } ${
            store?.product.name
          } и получить профессиональную помощь в выборе и установке? Обращайтесь в нашу компанию по почте info@kondish.su, sale@kondish.su или звоните нам по телефону 8 (915) 329-42-09. Для вас мы работаем ежедневно, включая выходные и праздничные дни.`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Path name={store?.product.name} />
        <div
          className='
            w-full
            h-full
            py-8
            flex
            flex-col
            '
        >
          <div
            className='
        flex
        flex-col
        md:flex-row
        pb-6
        '
          >
            {/** IMAGE */}
            <div className='flex-1'>
              <div className='w-full px-6 py-4'>
                <SliderPhotos
                  list={store?.product?.imges}
                  vendorcode={store?.product?.vendorcode}
                />
              </div>
            </div>
            {/** TITLE PRODUCT */}
            <div
              className='
          flex-1
          flex
          flex-col-reverse
          lg:flex-row
          '
            >
              <div
                className='
            p-4
            flex-1
            flex
            flex-col
            '
              >
                {store?.product.name ? (
                  <Heading
                    className='mb-6'
                    title={store?.product.name}
                    subtitle={
                      store?.product?.type?.typeName || store?.product?.typeId
                    }
                  />
                ) : (
                  <div className='w-full h-16 mb-6 flex flex-col justify-between'>
                    <div className='w-full h-8 rounded bg-slate-300 animate-pulse'></div>
                    <div className='w-40 h-6 rounded bg-slate-300 animate-pulse'></div>
                  </div>
                )}
                <div className='flex justify-between items-center mb-6'>
                  <div className='text-slate-800 font-bold'>
                    {store.product.price ? (
                      "Цена:"
                    ) : (
                      <div className='w-20 h-6 rounded bg-slate-300 animate-pulse'></div>
                    )}
                  </div>
                  <div className='text-slate-800'>
                    {store.product.price ? (
                      `${store.product.price} руб.`
                    ) : (
                      <div className='w-20 h-6 rounded bg-slate-300 animate-pulse'></div>
                    )}
                  </div>
                </div>
                {store.product.price ? (
                  <div className='flex gap-2 mb-6'>
                    {!disabled ? (
                      <Button
                        onClick={addToCart}
                        Icon={HiOutlineShoppingCart}
                        label='В корзину'
                        disabled={disabled}
                      />
                    ) : (
                      <Button onClick={remooveElemet} label='Убрать' outline />
                    )}

                    <Button
                      onClick={() => router.push("/shop")}
                      outline
                      Icon={TbHandClick}
                      label='К выбору'
                    />
                  </div>
                ) : (
                  <div className='flex gap-2 mb-6 h-[44px]'>
                    <div className='w-full h-full rounded bg-slate-300 animate-pulse'></div>
                    <div className='w-full h-full rounded bg-slate-300 animate-pulse'></div>
                  </div>
                )}
                <div className='flex flex-col'>
                  <div className='text-sm font-light text-zinc-500'>
                    {store?.product.price ? (
                      "Характеристики товара"
                    ) : (
                      <div className='w-40 h-6 rounded bg-slate-300 animate-pulse'></div>
                    )}
                  </div>

                  {store?.product?.descriptions
                    ? store?.product?.descriptions
                        ?.filter(
                          (l: any) =>
                            l.title === "Тип компрессора:" ||
                            l.title === "Площадь помещения: м²." ||
                            l.title === "Уровень шума: дб." ||
                            l.title === "Наличие WiFi:" ||
                            l.title === "Класс энегроэффективности:"
                        )
                        ?.map((r: any) => (
                          <div
                            key={r.id}
                            className='flex flex-row justify-between py-2 border-b'
                          >
                            <div className='text-slate-700 font-light'>
                              {r.title}
                            </div>
                            <div className='text-slate-900 font-semibold'>
                              {r.description}
                            </div>
                          </div>
                        ))
                    : new Array(5).fill("").map((i, index) => (
                        <div
                          key={index}
                          className='flex flex-row justify-between py-2 border-b'
                        >
                          <div className='text-slate-700 font-light'>
                            <div className='w-20 h-6 rounded bg-slate-300 animate-pulse'></div>
                          </div>
                          <div className='text-slate-900 font-semibold'>
                            <div className='w-20 h-6 rounded bg-slate-300 animate-pulse'></div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
              <div
                className='
                p-4
                flex-none
                '
              >
                {store.product.price ? (
                  <Teg label='В наличии' green />
                ) : (
                  <div className='w-20 h-8 rounded bg-slate-300 animate-pulse'></div>
                )}
              </div>
            </div>
          </div>
          {/** DESCRIPTION BLOCK */}
          <div className='w-full flex gap-6 flex-col md:flex-row justify-start'>
            <div className='w-full flex-1 max-w-[600px] px-6 py-4'>
              <div className='rounded-md bg-rose-300 text-white font-bold p-6 w-full mb-10'>
                Подходит ли вам данный товар? Можете узнать по номеру{" "}
                <a href='tel:89153294209'>8 (915) 329-42-09</a>
              </div>
              <h4 className='text-xl font-bold mb-4'>
                Характеристики {store?.product.name}
              </h4>
              {store?.product?.descriptions?.map((i: any) => (
                <div
                  key={i.id}
                  className='flex flex-row justify-between py-2 border-b'
                >
                  <div className='text-slate-700 font-light'>{i.title}</div>
                  <div className='text-slate-900 font-semibold'>
                    {i.description}
                  </div>
                </div>
              ))}
            </div>
            <div className='flex-1 py-4 flex flex-col'>
              <div className='w-full flex flex-col mb-4 gap-6'>
                <div className='w-full rounded-md bg-slate-100 p-7'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                    Оплата наличными
                  </h2>
                  <div className='text-md md:text-lg'>
                    Удобный способ расчета. Вы можете быстро и легко оплатить
                    товары или услуги, не завися от работы банковских систем и
                    не беспокоится о комиссиях за транзакции.
                  </div>
                </div>
                <div className='w-full rounded-md bg-slate-100 p-7'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                    Оплата картой{" "}
                  </h2>
                  <div className='text-md md:text-lg'>
                    Возможны оплаты Visa/MasterCard/Мир - удобный, быстрый и
                    безопасный способ оплатить покупки. Просто вставьте карту в
                    терминал, который привезет наш курьер и наслаждайтесь
                    покупками без лишних хлопот.
                  </div>
                </div>
                <div className='w-full rounded-md bg-slate-100 p-7'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                    Безналичный способ
                  </h2>
                  <div className='text-md md:text-lg'>
                    После создания заказа мы незамедлительно составим счет на
                    оплату, а как только получим деньги или исполненное
                    платежное поручение, мы согласуем с Вами день доставки и
                    монтажа. Вы получите высококачественный товар и отличный
                    сервис!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
