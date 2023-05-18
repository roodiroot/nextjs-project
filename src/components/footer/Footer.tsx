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
              <div className="">Цены на услуги</div>
              <div className="">Магазин</div>
              <div className="">Контакты</div>
              <div className="">О нас</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4 text-lg font-medium">Каталог</div>
            <div className="mb-4">
              <div className="">Внутренние блоки</div>
              <div className="">Сплит-системы</div>
              <div className="">Мульти сплит-системы</div>
            </div>
            <div className="mb-4 text-lg font-medium">Магазин</div>
            <div className="mb-4">
              <div className="">Бренды</div>
              <div className="">Типы усстойств</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4 text-lg font-medium">Покупателю</div>
            <div className="mb-4">
              <div className="">Оплата</div>
              <div className="">Стоимость услуг</div>
              <div className="">Доставка</div>
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
          <div className="text-sm">© KONDISH, 2022-2023</div>
          <div className="text-sm">ИНН 132401061863 ОГРН 321774600804595</div>
          <div className="text-sm">Политика конфиденциальности</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
