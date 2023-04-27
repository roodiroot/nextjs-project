import useBasketStore from "@/hooks/useBasketStore";

const NotificationProduct = () => {
  const { basketList } = useBasketStore((store) => store);
  const count = basketList.length;

  if (!count) {
    return null;
  }

  return (
    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-rose-500 rounded-full z-20 border-2 border-white flex justify-center items-center">
      <span className="text-white font-semibold text-[12px] leading-[80%]">
        {count}
      </span>
    </div>
  );
};

export default NotificationProduct;
