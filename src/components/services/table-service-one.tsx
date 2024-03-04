import Heading from "../Heading";

const TableServiceOne = () => {
  return (
    <div
      className="
            pb-12
            w-full
            flex
            flex-col
            gap-6
            "
    >
      <Heading h1 title="Стоимость установки приборов" />
      <table>
        <tbody>
          <tr>
            <th>Услуга</th>
            <th>Модели</th>
            <th>Цена*</th>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h2>Закладка магистрали до 5м</h2>
            </td>
            <td className="p-2 font-semibold">07-09 BTU или до 26м²</td>
            <td className="p-2 ">15000 руб.</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h2>Закладка магистрали до 5м</h2>
            </td>
            <td className="p-2 font-semibold">12 BTU или до 35м²</td>
            <td className="p-2 ">16000 руб.</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h2>Закладка магистрали до 5м</h2>
            </td>
            <td className="p-2 font-semibold">18 BTU или до 52м²</td>
            <td className="p-2 ">17000 руб.</td>
          </tr>
          <tr className="bg-white even:bg-gray-100">
            <td className="p-2 ">
              <h2>Закладка магистрали до 5м</h2>
            </td>
            <td className="p-2 font-semibold">24 BTU или до 70м²</td>
            <td className="p-2 ">20000 руб.</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full text-base text-slate-900">
        Для консультации или заказа установки звоните по телефонам{" "}
        <a className="text-orange-500 whitespace-nowrap" href="tel:89153294209">
          8 (915) 329-42-09
        </a>
        ,{" "}
        <a className="text-orange-500 whitespace-nowrap" href="tel:84956752699">
          8 (495) 675-26-99
          <span className="text-sm text-slate-900"> c 9:00 до 21:00</span>
        </a>
      </div>
      <div className="w-full text-xs text-slate-500">
        *Обращаем внимание на то что цены указаны с учетом преобретения техники
        у нас в магазине. Если прибор куплен в другом месте цена за установку
        может незначительно меняться. Это связано с тем что технически приборы
        могут иметь разные критерии установки, что неизменно повлияет на
        стоимость установки прибора.
      </div>
    </div>
  );
};

export default TableServiceOne;
