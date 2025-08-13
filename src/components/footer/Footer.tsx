import Link from "next/link";
import Container from "../Container";
import Logo from "../navbar/Logo";
import SocialIcons from "../utils-component/SocialIcons";
import { INSTALLATION_CLIMBER, INSTALLATION_PIK } from "@/constans";

const Footer = () => {
  return (
    <div className="bg-slate-900  text-white/60 pt-12">
      <Container>
        <div className="grid grid-cols-auto border-b-2 border-white/30 pb-2 gap-6">
          <div className="flex flex-col">
            <Logo />
            <div className="mb-4 text-lg font-medium">
              Продажа и установка сплит-систем и систем кондиционирования
            </div>
            <nav className="mb-4 space-y-2">
              <Link href="/services" className="block hover:underline">
                Цены на услуги
              </Link>
              <Link href="/shop" className="block hover:underline">
                Магазин
              </Link>
              <Link href="/contacts" className="block hover:underline">
                Контакты
              </Link>
              <Link href="/about" className="block hover:underline">
                О нас
              </Link>
              <a
                target="_blank"
                href="https://home-expert.su"
                className="block hover:underline"
              >
                Отделка и ремонт
              </a>
            </nav>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4 text-lg font-medium">Каталог</div>
            <nav className="mb-4 space-y-2">
              <Link href="/shop?type=3" className="block hover:underline">
                Внутренние блоки
              </Link>
              <Link href="/shop?type=1" className="block hover:underline">
                Сплит-системы
              </Link>
              <Link href="/shop?type=2" className="block hover:underline">
                Мульти сплит-системы
              </Link>
            </nav>
            <div className="mb-4 text-lg font-medium">Магазин</div>
            <nav className="mb-4 space-y-2">
              <Link href="/brands" className="block hover:underline">
                Бренды
              </Link>
              <Link href="/types" className="block hover:underline">
                Типы устройств
              </Link>
            </nav>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4 text-lg font-medium">Покупателю</div>
            <nav className="mb-4 space-y-2">
              <Link href="/payment" className="block hover:underline">
                Оплата
              </Link>
              <Link href="/services" className="block hover:underline">
                Стоимость услуг
              </Link>
              <Link href={INSTALLATION_PIK} className="block hover:underline">
                Установка в дома ПИК
              </Link>
              <Link
                href={INSTALLATION_CLIMBER}
                className="block hover:underline"
              >
                Промышленный альпинизм
              </Link>
              <Link href="/delivery" className="block hover:underline">
                Доставка
              </Link>
              <Link
                href="/doc/privacy-policy"
                className="block hover:underline"
              >
                Политика конфиденциальности
              </Link>
              <Link href="/doc/pd-consent" className="block hover:underline">
                Согласие на обработку персональных данных
              </Link>
              <Link href="/doc/oferta" className="block hover:underline">
                Оферта
              </Link>
            </nav>
            <div className="flex-1 items-start mb-2">
              <div className="mb-2 font-semibold">Мессенджеры:</div>
              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4 text-lg font-medium">Контакты</div>
            <div className="flex-1 items-start mb-2">
              <div className="">Телефоны:</div>
              <div className="text-slate-300 font-medium text-lg  inline-block cursor-pointer">
                <a href="tel:89153294209">8 (915) 329-42-09</a>
              </div>
              <div className="text-slate-300 font-medium text-lg  inline-block cursor-pointer">
                <a href="tel:84956752555">
                  8 (495) 675-25-55
                  <span className="text-sm"> c 9:00 до 21:00</span>
                </a>
              </div>
            </div>
            <div className="flex-1 items-start mb-2">
              <div className="">Электронная почта:</div>
              <div className="text-slate-300 font-semibold">
                <a href="mailto:info@kondish.su">info@kondish.su</a>
              </div>
              <div className="text-slate-300 font-semibold">
                <a href="mailto:sale@kondish.su">sale@kondish.su</a>
              </div>
              <div className="text-slate-300 mt-8 text-xs">
                <a href="https://matryoshka-studio.ru/">
                  Дизайн и&nbsp;разработка сайта{" "}
                  <span className="text-orange-500">
                    веб студия &laquo;Матрёшка&raquo;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 flex md:flex-row flex-col justify-between text-white/30">
          <div className="text-sm">© KONDISH, 2021-2025</div>
          <div className="text-sm">ИНН 132401061863 ОГРН 321774600804595</div>
          <Link href="/doc/privacy-policy" className="text-sm">
            Политика конфиденциальности
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
