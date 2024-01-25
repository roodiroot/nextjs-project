import { advantureSectionVentilation } from "@/constans";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import Image from "next/image";

import { ADVVentilaton } from "@/types";

const PresentationSection = () => {
  const { onOpen } = useSubmitOrder();
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto flex flex-col items-end max-w-2xl justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row'>
          <div className='w-full lg:max-w-lg lg:flex-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold -space-x-1'>
              Вентиляция на&nbsp;100%: Проектировка, Установка, Запуск
            </h2>
            <p className='mt-10 text-lg leading-8 text-gray-600'>
              Мы&nbsp;гарантируем высококачественный монтаж&nbsp;и, обеспечим
              для вас надежность и&nbsp;эффективность вентиляционных систем.
            </p>
            <Image
              src='/image/vent/5.jpg'
              alt=''
              width={1000}
              height={1000}
              className='mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]'
            />
          </div>
          <div className='w-full lg:max-w-lg lg:flex-auto'>
            <h3 className='sr-only'>Наши работы</h3>
            <ul className='-my-8'>
              {advantureSectionVentilation.map((f: ADVVentilaton) => (
                <li key={f.id} className='py-8 border-b border-gray-100'>
                  <div className='relative flex flex-wrap gap-x-3'>
                    <div className='sr-only'>Название</div>
                    <div className='w-full font-semibold text-lg text-gray-900 -space-x-1'>
                      {f.title}
                    </div>
                    <div className='sr-only'>Описание</div>
                    <div className='mt-2 w-full leading-8 text-gray-600'>
                      {f.description}
                    </div>
                    <div className='sr-only'>Цена</div>
                    <div className='mt-4 leading-7 font-semibold text-gray-900'>
                      {f.price}
                    </div>
                    <div className='sr-only'>Локация</div>
                    <div className='mt-4 flex items-center gap-3 leading-7 text-gray-600'>
                      <svg
                        viewBox='0 0 2 2'
                        className='flex-none w-0.5 h-0.5 fill-gray-600'
                        aria-hidden='true'
                      >
                        <circle cx='1' cy='1' r='1'></circle>
                      </svg>
                      {f.location}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='mt-8 flex pt-8'>
              <div
                onClick={onOpen}
                className='cursor-pointer font-semibold text-sm leading-6 text-orange-500'
              >
                Подобрать вентиляцию
                <span aria-hidden='true'>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;
