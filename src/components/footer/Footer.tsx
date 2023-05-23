import Link from "next/link";
import Container from "../Container";
import Logo from "../navbar/Logo";
import SocialIcons from "../utils-component/SocialIcons";

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
            <div className="mb-4">
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
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4 text-lg font-medium">Каталог</div>
            <div className="mb-4">
              <Link href="/shop?type=3" className="block hover:underline">
                Внутренние блоки
              </Link>
              <Link href="/shop?type=1" className="block hover:underline">
                Сплит-системы
              </Link>
              <Link href="/shop?type=2" className="block hover:underline">
                Мульти сплит-системы
              </Link>
            </div>
            <div className="mb-4 text-lg font-medium">Магазин</div>
            <div className="mb-4">
              <Link href="/brands" className="block hover:underline">
                Бренды
              </Link>
              <Link href="/types" className="block hover:underline">
                Типы усстойств
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4 text-lg font-medium">Покупателю</div>
            <div className="mb-4">
              <Link href="/payment" className="block hover:underline">
                Оплата
              </Link>
              <Link href="/services" className="block hover:underline">
                Стоимость услуг
              </Link>
              <Link href="/delivery" className="block hover:underline">
                Доставка
              </Link>
            </div>
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
            </div>
            <div className="flex-1 items-start mb-2">
              <div className="">Электронная почта:</div>
              <div className="text-slate-300 font-semibold">
                <a href="mailto:info@kondish.su">info@kondish.su</a>
              </div>
              <div className="text-slate-300 font-semibold">
                <a href="mailto:sale@kondish.su">sale@kondish.su</a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 flex md:flex-row flex-col justify-between text-white/30">
          <div className="text-sm">© KONDISH, 2021-2023</div>
          <div className="text-sm">ИНН 132401061863 ОГРН 321774600804595</div>
          <div className="text-sm">Политика конфиденциальности</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
