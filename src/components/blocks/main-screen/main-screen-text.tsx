import { SubmitOrderState } from "@/hooks/useSubmitOrder";
import Link from "next/link";

const MainScreenText: React.FC<{
  scroll: () => void;
  submitOrder: SubmitOrderState;
}> = ({ scroll, submitOrder }) => {
  return (
    <div className="relative px-6 py-32 sm:py-40 lg:pl-8 lg:py-56">
      <div className="mx-auto max-w-2xl lg:max-w-xl lg:mx-0">
        {/* <div className='hidden sm:mb-8 sm:flex sm:justify-start'>
          <div
            onClick={scroll}
            className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'
          >
            Более 3000 довольных клиентов за 11 лет.{" "}
            <span className='cursor-pointer font-semibold text-orange-500'>
              <span className='absolute inset-0' aria-hidden='true' />
              Смотреть работы <span aria-hidden='true'>&rarr;</span>
            </span>
          </div>
        </div> */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Продажа и установка кондиционеров
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Выберите надежную технику, и&nbsp;создайте климат у&nbsp;себя дома,
          с&nbsp;лучшей компанией в&nbsp;Москве и&nbsp;Московской области.
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
  );
};

export default MainScreenText;
