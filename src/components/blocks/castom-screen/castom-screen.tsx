import { SubmitOrderState } from "@/hooks/useSubmitOrder";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CastomScreen: React.FC<{
  bg: string;
  submitOrder: SubmitOrderState;
  title: string;
  description: string;
  button_type?: string;
}> = ({ bg, submitOrder, description, title, button_type }) => {
  return (
    <div className='mx-auto max-w-7xl pb-24 pt-8 sm:px-6 sm:pb-32 sm:pt-12 lg:px-8'>
      <div
        className={cn(
          "relative isolate overflow-hidden  -mx-4 px-6 py-24 sm:mx-0 sm:rounded-3xl sm:px-16 text-left",
          bg
        )}
      >
        <h1
          className={
            "max-w-2xl text-4xl font-bold tracking-tight  sm:text-5xl text-white"
          }
        >
          {title}
        </h1>
        <p className={"max-w-xl mt-6 text-lg leading-8 text-white/80"}>
          {description}
        </p>
        <div className='mt-10 flex items-center justify-start gap-x-6'>
          <button
            onClick={submitOrder.onOpen}
            className={`rounded-md  px-3.5 py-2.5 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              button_type
                ? button_type
                : "bg-orange-500 hover:bg-orange-400 text-white"
            }`}
          >
            Консультация
          </button>
          <Link
            href='/shop'
            className={"text-sm font-semibold leading-6 text-white"}
          >
            Выбрать кондиционер <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CastomScreen;
