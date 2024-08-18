import Heading from "../Heading";

const TableServiceTwo = () => {
  return (
    <div
      className="
            w-full
            flex
            flex-col
            gap-6
            py-12
            "
    >
      <Heading title="Дополнительные услуги" />
      <table className="md:max-w-[700px]">
        <tbody>
          <tr className="bg-white even:bg-gray-100">
            <th>Услуга</th>
            <th>Стоимость работ</th>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Штробление бетона</h3>
            </td>
            <td className="p-2 font-semibold">2 500 руб. пог. метр</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Штробление кирпич-пеноблок</h3>
            </td>
            <td className="p-2 font-semibold">1 500 руб. пог. метр</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Дополнительная трасса после 5 метров</h3>
            </td>
            <td className="p-2 font-semibold">2 000 руб. пог. метр</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Услуги альпиниста</h3>
            </td>
            <td className="p-2 font-semibold">12 000 руб. за 1 кондиционер</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Работа с лестницы до 4 м.</h3>
            </td>
            <td className="p-2 font-semibold">2 000 руб.</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Работа с лестницы до 5 м.</h3>
            </td>
            <td className="p-2 font-semibold">3 000 руб.</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Работа с лестницы до 6 м.</h3>
            </td>
            <td className="p-2 font-semibold">4 000 руб.</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Работа с лестницы до 10 м.</h3>
            </td>
            <td className="p-2 font-semibold">6 000 руб.</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h3>Услуга автовышки и монтаж на вентилируемый фасад</h3>
            </td>
            <td className="p-2 font-semibold">Договорная</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full text-base text-slate-900">
        Для консультации или заказа установки звоните по телефонам{" "}
        <a className="text-orange-500" href="tel:89153294209">
          8 (915) 329-42-09
        </a>
        ,{" "}
        <a className="text-orange-500" href="tel:84956752699">
          8 (495) 675-26-99
          <span className="text-sm text-slate-900"> c 9:00 до 21:00</span>
        </a>
      </div>
      <div className="w-full text-xs text-slate-500">
        <span className="font-semibold">Внимание!</span> Услуга монтажа платная
        и выполняется только с оборудованием, приобретённым у нас. Мы сделаем
        более точный расчёт стоимости монтажа после консультации. Пожалуйста,
        уточняйте стоимость и наличие услуг по телефону{" "}
        <span className="font-semibold">8 915 329-42-09</span>.
      </div>
    </div>
  );
};

export default TableServiceTwo;
