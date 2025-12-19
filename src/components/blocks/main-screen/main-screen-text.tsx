import { SubmitOrderState } from "@/hooks/useSubmitOrder";
import Link from "next/link";

const MainScreenText: React.FC<{
  scroll: () => void;
  submitOrder: SubmitOrderState;
}> = ({ scroll, submitOrder }) => {
  return (
    <div className="relative px-6 py-16 sm:py-40 lg:pl-14 lg:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-xl lg:mx-0">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Продажа и установка кондиционеров
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Комфортный климат для жизни. Надёжная техника и профессиональный
          монтаж.
        </p>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <button
            onClick={submitOrder.onOpen}
            className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Консультация
          </button>
          <a
            target="_blank"
            href="https://shop.kondish.su/catalog/kondczionery/split-sistemy"
            className=" text-sm font-semibold leading-6 text-gray-900"
          >
            Выбрать кондиционер <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainScreenText;
