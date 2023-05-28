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
        mb-20 
        min-h-[70vh]
        sm:min-h-[500px]"
    >
      <div
        className="
          flex-auto 
          flex 
          flex-col 
          justify-center
          gap-4
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
            sm:text-4xl
            font-bold 
            text-slate-900 
            mb-2 
            text-3xl
            text-center
            md:text-left
        "
        >
          Продажа и установка кондиционеров
        </h1>
        <h2
          className="
            lg:text-2xl 
            text-xl
            mb-2 
            text-center
            md:text-left"
        >
          Выберите надежную технику, и создайте климат у себя дома.
        </h2>
        <div
          className="
        inline-block 
        mx-auto
        md:mx-0
        "
        >
          <Button onClick={submitOrder.onOpen} label="Получить консультацию" />
        </div>
      </div>
      <div
        className="
      flex-none 
      w-full 
      md:w-[40%] 
      relative "
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
