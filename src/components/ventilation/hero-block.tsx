import Image from "next/image";

import useBanner from "@/hooks/useBanner";
import useSubmitOrder from "@/hooks/useSubmitOrder";

const HeroBlock = () => {
  const { isOpen } = useBanner();
  const { onOpen } = useSubmitOrder();
  return (
    <div
      className={`
    relative
    ${isOpen ? "lg:-mt-24" : "lg:-mt-16"}
    `}
    >
      <div className='relative bg-white'>
        <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
          <div className='px-6 pb-24 pt-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-[17rem] lg:pt-[17rem] xl:col-span-6'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                Проектирование и монтaж вентиляции
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Пpоизвoдим прoектированиe,пpoдaжу, мoнтaж и&nbsp;тexническое
                oбслуживание бытoвых и&nbsp;прoмышлeнныx сиcтeм
                кондициониpовaния и вентиляции.
              </p>
              <div className='mt-10 flex items-center justify-start gap-x-6'>
                <button
                  onClick={onOpen}
                  className='rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Заказать проектировку
                </button>
                <div
                  onClick={onOpen}
                  className='cursor-pointer text-sm font-semibold leading-6 text-gray-900'
                >
                  Консультация <span aria-hidden='true'>→</span>
                </div>
              </div>
            </div>
          </div>
          <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
            <Image
              width={1000}
              height={1000}
              className='aspect-[3/2] w-full bg-gray-200 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
              src='/image/vent/1.jpg'
              alt='main_img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
