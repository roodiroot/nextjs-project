import useSubmitOrder from "@/hooks/useSubmitOrder";
import Image from "next/image";

const CtaSection = () => {
  const submitOrder = useSubmitOrder();

  return (
    <div className='relative'>
      <div className='relative h-80 overflow-hidden md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2'>
        <Image
          className='h-full w-full object-cover'
          src='/image/vent/3.jpg'
          width={1920}
          height={1080}
          alt='scrin cta block'
        />
      </div>
      <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='ml-6 mr-6 md:mr-auto md:w-2/3 md:pr-16 lg:w-1/2 lg:ml-0 lg:pr-24 lg:pl-0'>
          {/* <h2 className='text-orange-500 font-semibold leading-7 text-accent-600 text-balance'>
            Разработка проекта
          </h2> */}
          <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance'>
            Персональный осмотр объекта
          </p>
          <div className='mt-6 leading-7 text-gray-600 text-balance'>
            Инженеры выезжают непосредственно на&nbsp;ваш объект для тщательного
            изучения и&nbsp;анализа условий. Этот шаг позволяет составить точный
            план работ, и&nbsp;предварительную смету стоимости проекта.
          </div>
          <div className='mt-8'>
            <button
              onClick={submitOrder.onOpen}
              className='rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Заказать осмотр
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
