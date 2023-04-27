import Image from "next/image";
import Button from "../navbar/Button";
import useSubmitOrder from "@/hooks/useSubmitOrder";

const MainBlock = () => {
  const submitOrder = useSubmitOrder();
  return (
    <div
      className="
    flex 
    overflow-hidden 
    bg-slate-100
     w-full 
     rounded-md 
     md:flex-row 
     flex-col 
     mb-4 
     xl:min-h-[500px]"
    >
      <div
        className="
      flex-auto 
      flex 
      flex-col 
      items-start  
      md:py-8  
      md:px-10 
      lg:px-16 
      sm:py-4 
      sm:px-8 
      py-2 
      px-4
      "
      >
        <h1
          className="
          lg:text-5xl 
          font-extrabold 
          text-slate-900 
          mb-6           
          sm:text-4xl
          text-3xl
        "
        >
          Установка кондиционеров в Москве и Московской области
        </h1>
        <h2
          className="
        lg:text-xl 
        mb-12 
        uppercase"
        >
          Подбираем и устанавливаем кондиционеры для вас в день заказа
        </h2>
        <div
          className="
        inline-block 
        mt-auto"
        >
          <Button onClick={submitOrder.onOpen} label="Получить консультацию" />
        </div>
      </div>
      <div
        className="
      flex-none 
      w-full 
      md:w-[40%] 
      relative 
      h-[300px] 
      md:h-auto"
      >
        <Image
          priority
          width={500}
          height={500}
          src="/image/main3.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          //   loading="lazy"
        />
      </div>
    </div>
  );
};

export default MainBlock;
