import Link from "next/link";
import Button from "../navbar/Button";
import useSubmitOrder from "@/hooks/useSubmitOrder";

const Guarantee = () => {
  const { onOpen } = useSubmitOrder();
  return (
    <div className=''>
      <div className='w-full flex md:flex-row flex-col text-slate-900'>
        <h2
          className='
            text-2xl
            md:text-4xl
            font-bold 
            flex-1 
            md:py-8  
            md:px-10 
            lg:px-16 
            sm:py-4 
            sm:px-8 
            py-2 
            px-4'
        >
          Лучший сервис в Москве и Московской области
        </h2>
        <p
          className='
            text-lg 
            md:text-xl
            flex-1 

            md:py-8  
            md:px-10 
            lg:px-16 
            sm:py-4 
            sm:px-8 
            py-2 
            px-4
            '
        >
          Мы&nbsp;&mdash; профессионалы в&nbsp;климатической технике
          с&nbsp;11-летним опытом. Работаем без выходных с&nbsp;8:00
          до&nbsp;22:00. Гарантируем качественный результат.{" "}
          <Link
            href={"/services"}
            className='inline-block text-orange-500 hover:underline cursor-pointer'
          >
            Цены на&nbsp;установку тут ...
          </Link>
        </p>
      </div>
      <div
        className='md:py-8  
            md:px-10 
            lg:px-16 
            sm:py-4
            sm:px-8 
            py-5 
            px-4'
      >
        <Button
          className='max-w-[200px]'
          label='Заказать установку'
          onClick={onOpen}
        />
      </div>
    </div>
  );
};

export default Guarantee;
