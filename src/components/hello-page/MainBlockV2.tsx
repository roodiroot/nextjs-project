import useBanner from "@/hooks/useBanner";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";

interface MainBlockV2Props {
  scrollToGallery: () => void;
}

const MainBlockV2: React.FC<MainBlockV2Props> = ({ scrollToGallery }) => {
  const { isOpen } = useBanner();
  const submitOrder = useSubmitOrder();
  const scroll = useCallback(() => {
    scrollToGallery();
  }, []);
  return (
    <div
      className={`
    relative
    ${isOpen ? "-mt-24" : "-mt-16"}
    `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pt-14 w-full lg:max-w-2xl">
          <svg
            className="absolute hidden lg:block  top-0 bottom-0 right-8 h-full w-80 fill-white translate-x-[50%]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100"></polygon>
          </svg>
          <div className="relative px-6 py-32 sm:py-40 lg:pl-8 lg:py-56">
            <div className="mx-auto max-w-2xl lg:max-w-xl lg:mx-0">
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                <div
                  onClick={scroll}
                  className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Более 3000 довольных клиентов за 11 лет.{" "}
                  <span className="cursor-pointer font-semibold text-orange-500">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Смотреть работы <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Продажа и установка кондиционеров
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Выберите надежную технику, и&nbsp;создайте климат у&nbsp;себя
                дома, с&nbsp;лучшей компанией в&nbsp;Москве и&nbsp;Московской
                области.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <button
                  onClick={submitOrder.onOpen}
                  className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Консультация
                </button>
                <Link
                  href="/shop"
                  className=" text-sm font-semibold leading-6 text-gray-900"
                >
                  Выбрать кондиционер <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-[50%]">
        <Image
          src="/image/main31.jpg"
          alt="main"
          width={1110}
          height={890}
          className="w-full h-full object-cover block aspect-[4/3] lg:aspect-auto "
        />
      </div>
    </div>
  );
};

export default MainBlockV2;
