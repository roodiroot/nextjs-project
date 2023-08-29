"use client";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import Link from "next/link";

export enum TypesStyleMainBlockClassic {
  dark,
  light,
}

interface MainBlockClassicProps {
  h1: string;
  children: React.ReactNode;
  types?: TypesStyleMainBlockClassic;
}

const MainBlockClassic: React.FC<MainBlockClassicProps> = ({
  h1,
  children,
  types,
}) => {
  const submitOrder = useSubmitOrder();
  return (
    <div className='mx-auto max-w-7xl pb-24 pt-8 sm:px-6 sm:pb-32 sm:pt-12 lg:px-8'>
      <div
        className={`
      relative isolate overflow-hidden  -mx-4 px-6 py-24 text-center  sm:mx-0 sm:rounded-3xl sm:px-16
      ${types === TypesStyleMainBlockClassic.dark && "bg-slate-900 shadow-2xl"}
      ${types === TypesStyleMainBlockClassic.light && "bg-white/0 border"}
      `}
      >
        <h1
          className={`
        mx-auto max-w-2xl text-4xl font-bold tracking-tight  sm:text-5xl
        ${types === TypesStyleMainBlockClassic.dark && "text-white"}
        ${types === TypesStyleMainBlockClassic.light && "text-gray-900"}
        `}
        >
          {h1}
        </h1>
        <p
          className={`
        mx-auto max-w-xl mt-6 text-lg leading-8 
        ${types === TypesStyleMainBlockClassic.dark && "text-gray-300"}
        ${types === TypesStyleMainBlockClassic.light && "text-gray-600"}
        `}
        >
          {children}
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <button
            onClick={submitOrder.onOpen}
            className='rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Консультация
          </button>
          <Link
            href='/shop'
            className={`
            text-sm font-semibold leading-6 
            ${types === TypesStyleMainBlockClassic.dark && "text-white"}
            ${types === TypesStyleMainBlockClassic.light && "text-gray-600"}  
            `}
          >
            Выбрать кондиционер <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBlockClassic;
