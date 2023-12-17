import { useEffect } from "react";
import Button from "../navbar/Button";

interface OrderProps {
  count: number;
  summ: number;
  getOrder: () => void;
  installation: boolean;
  distance?: number;
  setTotal: (r: any) => void;
}

const OrderList: React.FC<OrderProps> = ({
  getOrder,
  count,
  summ,
  installation,
  distance,
  setTotal,
}) => {
  let total = summ;

  if (installation) {
    total += 14000;
  }
  if (distance) {
    total += 30 * distance;
  }
  useEffect(() => {
    setTotal({
      totalPrice: total,
      installation,
      distance,
    });
  }, [total]);

  return (
    <div className='flex-none w-full bg-slate-100 rounded-md md:max-w-[315px] h-auto p-8'>
      <div className='text-xl font-medium text-slate-900 mb-3'>В корзине</div>
      <div className='flex flex-row justify-between mb-1'>
        <div className='text-zinc-500'>{count} товар(a):</div>
        <div className='text-slate-900 font-semibold'>{summ} руб.</div>
      </div>
      <div className='flex flex-row justify-between mb-1'>
        <div className='text-zinc-500'>Доставка:</div>
        <div className='text-slate-900 font-semibold'>
          {distance ? `${distance}км. х 30руб*.` : "0 руб*."}
        </div>
      </div>
      <div className='flex flex-row justify-between mb-3 border-b pb-2'>
        <div className='text-zinc-500'>Установка:</div>
        <div className='text-slate-900 font-semibold'>
          {installation ? "14000" : "0"} руб*.
        </div>
      </div>
      <div className='flex flex-row justify-between mb-3'>
        <div className='text-slate-900 font-semibold '>Итого:</div>
        <div className='text-slate-900 font-semibold text-lg'>{total} руб.</div>
      </div>
      <Button onClick={getOrder} label='Оформить заказ' />
      <div className='text-sm mt-2'>
        *Стоимость доставки и установки может меняться после уточнения деталей
        заказа
      </div>
    </div>
  );
};

export default OrderList;
