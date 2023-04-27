import Container from "@/components/Container";
import Heading from "@/components/Heading";

const Services = () => {
  return (
    <div>
      <Container>
        <div
          className="
            py-12
            w-full
            flex
            flex-col
            gap-6
            "
        >
          <Heading title="Стоимость установки приборов" />
          <table>
            <tbody>
              <tr>
                <th>Услуга</th>
                <th>Модели</th>
                <th>Цена*</th>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Закладка магистрали до 5м</td>
                <td className="p-2 font-semibold">07-09 BTU или до 26м²</td>
                <td className="p-2 ">13000 руб.</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Закладка магистрали до 5м</td>
                <td className="p-2 font-semibold">12 BTU или до 35м²</td>
                <td className="p-2 ">13000 руб.</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Закладка магистрали до 5м</td>
                <td className="p-2 font-semibold">18 BTU или до 52м²</td>
                <td className="p-2 ">17000 руб.</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Закладка магистрали до 5м</td>
                <td className="p-2 font-semibold">24 BTU или до 70м²</td>
                <td className="p-2 ">20000 руб.</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full text-sm text-slate-500">
            *Обращаем внимание на то что цены указаны с учетом преобретения
            техники у нас в магазине. Если прибор куплен в другом месте цена за
            установку может незначительно меняться. Это связано с тем что
            технически приборы могут иметь разные критерии установки, что
            неизменно повлияет на стоимость установки прибора.
          </div>
        </div>
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
                <td className="p-2 ">Штробление бетона</td>
                <td className="p-2 font-semibold">2500 руб. пог. метр</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Штробление кирпич-пеноблок</td>
                <td className="p-2 font-semibold">1000 руб. пог. метр</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Дополнительная трасса после 5 метров</td>
                <td className="p-2 font-semibold">1200 руб. пог. метр</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Услуги альпиниста</td>
                <td className="p-2 font-semibold">
                  7000 руб. за 1 кондиционер
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Работа с лестницы до 4 м.</td>
                <td className="p-2 font-semibold">2000 руб.</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Работа с лестницы до 5 м.</td>
                <td className="p-2 font-semibold">3000 руб.</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Работа с лестницы до 6 м.</td>
                <td className="p-2 font-semibold">4000 руб.</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">Работа с лестницы до 10 м.</td>
                <td className="p-2 font-semibold">6000 руб.</td>
              </tr>
              <tr className="bg-white even:bg-gray-100">
                <td className="p-2 ">
                  Услуга автовышки и монтаж на вентилируемый фасад
                </td>
                <td className="p-2 font-semibold">Договорная</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full text-sm text-slate-500">
            <span className="font-semibold">Внимание!</span> Услуга монтажа
            платная и выполняется не только с оборудованием, приобретённым у
            нас. Мы сделаем более точный расчёт стоимости монтажа после
            консультации в нашем магазине. Пожалуйста, уточняйте стоимость и
            наличие услуг по телефону{" "}
            <span className="font-semibold">8 915 329-42-09</span>.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
