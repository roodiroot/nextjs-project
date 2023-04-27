import Button from "../navbar/Button";

interface OrderProps {
  count: number;
  summ: number;
  getOrder: () => void;
}

const OrderList: React.FC<OrderProps> = ({ getOrder, count, summ }) => {
  return (
    <div className="flex-none w-full bg-slate-100 rounded-md md:max-w-[315px] h-auto p-8">
      <div className="text-xl font-medium text-slate-900 mb-3">В корзине</div>
      <div className="flex flex-row justify-between mb-1">
        <div className="text-zinc-500">{count} товар(a):</div>
        <div className="text-slate-900 font-semibold">{summ} руб.</div>
      </div>
      <div className="flex flex-row justify-between mb-1">
        <div className="text-zinc-500">Доставка:</div>
        <div className="text-slate-900 font-semibold">0 руб.</div>
      </div>
      <div className="flex flex-row justify-between mb-3 border-b pb-2">
        <div className="text-zinc-500">Установка:</div>
        <div className="text-slate-900 font-semibold">14000 руб.</div>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <div className="text-slate-900 font-semibold ">Итого:</div>
        <div className="text-slate-900 font-semibold text-lg">56000 руб.</div>
      </div>
      <Button onClick={getOrder} label="Оформить заказ" />
    </div>
  );
};

export default OrderList;
