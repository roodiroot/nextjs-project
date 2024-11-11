import Container from "@/components/Container";
import Heading from "@/components/Heading";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import MapComponent from "@/components/utils-component/Map";
import Path from "@/components/utils-component/Path";
import SocialIcons from "@/components/utils-component/SocialIcons";
import Head from "next/head";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Контакты | Kóndish установка кондиционеров в Москве</title>
        <meta
          name="description"
          content="Контакты для связи с нами | Более 12 лет устанавливаем климатическую технику в ваших домах."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container>
          <Path />
          <div className="pb-12">
            <Heading h1 title="Контакты" />
          </div>
          <div className="flex flex-col md:flex-row  items-start gap-8 mb-12">
            <div className="w-full flex-1 flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-1 items-start">
                <div className="text-slate-500 mb-4">Телефоны:</div>
                <div className="text-slate-900 font-medium text-lg  inline-block cursor-pointer">
                  <a href="tel:89153294209">8 (915) 329-42-09</a>
                </div>
                <div className="text-slate-900 font-medium text-lg  inline-block cursor-pointer">
                  <a href="tel:84956752555">
                    8 (495) 675-25-55
                    <span className="text-sm"> c 9:00 до 21:00</span>
                  </a>
                </div>
              </div>
              <div className="flex-1 items-start">
                <div className="text-slate-500 mb-4">Электронная почта:</div>
                <div className="text-slate-900 font-semibold">
                  <a href="mailto:info@kondish.su">info@kondish.su</a>
                </div>
                <div className="text-slate-900 font-semibold">
                  <a href="mailto:sale@kondish.su">sale@kondish.su</a>
                </div>
              </div>
            </div>
            <div className="w-full flex-1 flex  flex-col sm:flex-row items-start gap-4">
              <div className="flex-1 items-start">
                <div className="text-slate-500 mb-4">Мессенджеры:</div>
                <SocialIcons dark />
              </div>
              <div className="flex-1 items-start">
                <div className="text-slate-500 mb-4">График работы:</div>
                <div className="text-slate-900 font-semibold">
                  Ежедневно с 08:00 до 22:00
                </div>
                <div className="text-slate-500 text-sm">
                  без праздников и выходных
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-12">
            <div className="w-full h-[400px] bg-gradient-to-r from-green-500/10 to-green-500/20 rounded-md mb-4 relative overflow-hidden">
              <MapComponent />
            </div>
            <div className="text-slate-500">Адрес сервисного цента:</div>
            <div className="text-slate-900 font-semibold">
              1-й Кожуховский пр-д, 11, офис 127, Москва, Россия
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 flex flex-col justify-between">
              <div className="text-2xl mb-5 font-medium">Оплата</div>
              <div className="mb-3">
                Нашими клиентами могут стать как физические лица, так и
                юридические.
              </div>
              <ul className="mb-3">
                <li className="mb-1">Для физических лиц:</li>
                <li className="mb-1">— Наличный расчет;</li>
                <li className="mb-1">
                  — Наличный расчет при получении товара;
                </li>
                <li className="mb-1">— Денежный перевод на карту Сбербанка;</li>
              </ul>
              <ul className="mb-3">
                <li className="mb-1">Для юридических лиц:</li>
                <li className="mb-1">— Наличный расчет;</li>
                <li className="mb-1">— Безналичный расчет;</li>
                <li className="mb-1">— Оплата картой;</li>
              </ul>
            </div>
            <div className="flex-1 flex-col justify-between">
              <div className="text-2xl mb-5 font-medium">Наши реквизиты</div>
              <div className="mb-3">
                Полное наименование предприятия: «Индивидуальный предприниматель
                Семочкина Наталья Николаевна»
              </div>
              <div className="mb-3">
                Краткое наименование предприятия: ИП Семочкина Наталья
                Николаевна
              </div>
              <div className="mb-3">
                Юридический адрес: 1-й Кожуховский пр-д, 11, офис 127
              </div>
              <div className="mb-3">
                Фактический адрес: 1-й Кожуховский пр-д, 11, офис 127
              </div>
              <div className="mb-3">ИНН: 132401061863</div>
              <div className="mb-3">ОГРН: 321774600804595</div>
              <div className="mb-3">
                Руководитель: Семочкина Наталья Николаевна
              </div>
            </div>
          </div>
          <FeedbackForm className="mb-12" />
        </Container>
      </div>
    </>
  );
};

export default Contacts;
