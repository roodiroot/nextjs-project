import useSubmitOrder from "@/hooks/useSubmitOrder";
import Link from "next/link";

const YaFeed = () => {
    const submitOrder = useSubmitOrder();
  return (
    <div className="w-full flex flex-col-reverse md:flex-row text-slate-900 mt-40 gap-10 md:gap-0">
      <div className="w-full min-w-[50%] flex-1">
        <div className="w-full max-w-[560px] h-[800px] overflow-hidden relative mx-auto">
            <iframe className="w-full h-full border rounded-2xl " src="https://yandex.ru/maps-reviews-widget/223415694122?comments"></iframe>
            <a href="https://yandex.ru/maps/org/kondish/223415694122/" target="_blank" >Кондиш на карте Москвы — Яндекс Карты</a>
        </div>
      </div>
      <div
        className="
            flex-1 
            flex 
            flex-col
            gap-4
            justify-center 
            items-start
            md:py-8  
            md:px-10 
            lg:px-16 
            sm:py-4 
            sm:px-4 
            py-2 
            px-2"
      >
        <div className="text-2xl md:text-4xl font-bold w-full">
          Можете оставить о нас отзыв.
        </div>
        <div className="text-lg md:text-xl w-full">
            Наши клиенты говорят лучше всех&nbsp;&mdash; доверьтесь их&nbsp;опыту и&nbsp;выберите надежного партнера для установки кондиционера.
        </div>
        <button
            onClick={submitOrder.onOpen}
            className="w-auto text-lg md:text-xl text-orange-500 hover:underline cursor-pointer"
        >
          Заказать установку.
        </button>
      </div>
    </div>
  )
};

export default YaFeed;


{/* <div style="width:560px;height:800px;overflow:hidden;position:relative;"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/223415694122?comments"></iframe><a href="https://yandex.ru/maps/org/kondish/223415694122/" target="_blank" 
style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Кондиш на карте Москвы — Яндекс Карты</a></div> */}
