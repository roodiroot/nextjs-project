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
import { submitHaveBasket } from "@/components/shop/CardList";
import Path from "@/components/utils-component/Path";
import Head from "next/head";

const ProductPage = () => {
  const {
    fetchProduct,
    restor,
    product,
    loading: storeLoading,
    error: storeError,
  } = useSelectProduct();
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
    setLoading(storeLoading);
    setError(storeError);
  }, [storeError, storeLoading]);

  useEffect(() => {
    if (isNaN(Number(router.query.id))) {
      return;
    }
    fetchProduct(Number(router.query.id));
    return () => {
      restor();
    };
  }, [router.query.id]);

  const addToCart = () => {
    basket.addInBasket(product);
  };
  const remooveElemet = () => {
    basket.remooveElement(Number(router.query.id));
  };

  if (error) {
    return (
      <Container>
        <div className="text-slate-900 font-semibold ">
          Ошибка загрузки элемента
        </div>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta
          name="description"
          content={`Хотите купить ${
            product?.type?.typeName || product?.typeId
          } ${
            product.name
          } и получить профессиональную помощь в выборе и установке? Обращайтесь в нашу компанию по почте info@kondish.su, sale@kondish.su или звоните нам по телефону 8 (915) 329-42-09. Для вас мы работаем ежедневно, включая выходные и праздничные дни.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Path name={product.name} />
        <div
          className="
            w-full
            h-full
            py-8
            flex
            flex-col
            "
        >
          <div
            className="
        flex
        flex-col
        md:flex-row
        pb-6
        "
          >
            {/** IMAGE */}
            <div className="flex-1">
              <div className="w-full px-6 py-4">
                <SliderPhotos
                  list={product?.imges}
                  vendorcode={product?.vendorcode}
                />
              </div>
            </div>
            {/** TITLE PRODUCT */}
            <div
              className="
          flex-1
          flex
          flex-col-reverse
          lg:flex-row
          "
            >
              <div
                className="
            p-4
            flex-1
            flex
            flex-col
            "
              >
                {product.name ? (
                  <Heading
                    className="mb-6"
                    title={product.name}
                    subtitle={product?.type?.typeName || product?.typeId}
                  />
                ) : (
                  <div className="w-full h-16 mb-6 flex flex-col justify-between">
                    <div className="w-full h-8 rounded bg-slate-300 animate-pulse"></div>
                    <div className="w-40 h-6 rounded bg-slate-300 animate-pulse"></div>
                  </div>
                )}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-slate-800 font-bold">
                    {product.price ? (
                      "Цена:"
                    ) : (
                      <div className="w-20 h-6 rounded bg-slate-300 animate-pulse"></div>
                    )}
                  </div>
                  <div className="text-slate-800">
                    {product.price ? (
                      `${product.price} руб.`
                    ) : (
                      <div className="w-20 h-6 rounded bg-slate-300 animate-pulse"></div>
                    )}
                  </div>
                </div>
                {product.price ? (
                  <div className="flex gap-2 mb-6">
                    {!disabled ? (
                      <Button
                        onClick={addToCart}
                        Icon={HiOutlineShoppingCart}
                        label="В корзину"
                        disabled={disabled}
                      />
                    ) : (
                      <Button onClick={remooveElemet} label="Убрать" outline />
                    )}

                    <Button
                      onClick={() => router.push("/shop")}
                      outline
                      Icon={TbHandClick}
                      label="К выбору"
                    />
                  </div>
                ) : (
                  <div className="flex gap-2 mb-6 h-[44px]">
                    <div className="w-full h-full rounded bg-slate-300 animate-pulse"></div>
                    <div className="w-full h-full rounded bg-slate-300 animate-pulse"></div>
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="text-sm font-light text-zinc-500">
                    {product.price ? (
                      "Характеристики товара"
                    ) : (
                      <div className="w-40 h-6 rounded bg-slate-300 animate-pulse"></div>
                    )}
                  </div>

                  {product?.descriptions
                    ? product?.descriptions
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
                            className="flex flex-row justify-between py-2 border-b"
                          >
                            <div className="text-slate-700 font-light">
                              {r.title}
                            </div>
                            <div className="text-slate-900 font-semibold">
                              {r.description}
                            </div>
                          </div>
                        ))
                    : new Array(5).fill("").map((i, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-between py-2 border-b"
                        >
                          <div className="text-slate-700 font-light">
                            <div className="w-20 h-6 rounded bg-slate-300 animate-pulse"></div>
                          </div>
                          <div className="text-slate-900 font-semibold">
                            <div className="w-20 h-6 rounded bg-slate-300 animate-pulse"></div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
              <div
                className="
                p-4
                flex-none
                "
              >
                {product.price ? (
                  <Teg label="В наличии" green />
                ) : (
                  <div className="w-20 h-8 rounded bg-slate-300 animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
          {/** DESCRIPTION BLOCK */}
          <div className="w-full flex gap-6 flex-col md:flex-row justify-start">
            <div className="w-full flex-1 max-w-[600px] px-6 py-4">
              <div className="rounded-md bg-rose-300 text-white font-bold p-6 w-full mb-10">
                Подходит ли вам данный товар? Можете узнать по номеру{" "}
                <a href="tel:89153294209">8 (915) 329-42-09</a>
              </div>
              <h4 className="text-xl font-bold mb-4">
                Характеристики {product.name}
              </h4>
              {product?.descriptions?.map((i: any) => (
                <div
                  key={i.id}
                  className="flex flex-row justify-between py-2 border-b"
                >
                  <div className="text-slate-700 font-light">{i.title}</div>
                  <div className="text-slate-900 font-semibold">
                    {i.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 py-4 flex flex-col">
              <div className="w-full flex flex-col mb-4 gap-6">
                <div className="w-full rounded-md bg-slate-100 p-7">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Оплата наличными
                  </h2>
                  <div className="text-md md:text-lg">
                    Удобный способ расчета. Вы можете быстро и легко оплатить
                    товары или услуги, не завися от работы банковских систем и
                    не беспокоится о комиссиях за транзакции.
                  </div>
                </div>
                <div className="w-full rounded-md bg-slate-100 p-7">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Оплата картой{" "}
                  </h2>
                  <div className="text-md md:text-lg">
                    Возможны оплаты Visa/MasterCard/Мир - удобный, быстрый и
                    безопасный способ оплатить покупки. Просто вставьте карту в
                    терминал, который привезет наш курьер и наслаждайтесь
                    покупками без лишних хлопот.
                  </div>
                </div>
                <div className="w-full rounded-md bg-slate-100 p-7">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Безналичный способ
                  </h2>
                  <div className="text-md md:text-lg">
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
