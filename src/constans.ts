import {
  ADVVentilaton,
  FAQsType,
  OwerViewType,
  ProjectSliderType,
  SalesType,
} from "./types";

export const ABOUT_PATH = "/about";
export const SHOP_PATH = "https://shop.kondish.su/catalog/kondczionery";
export const SERVICE_PATH = "/services";
export const VENTILATION_SISTEM = "/ventilation-systems";
export const CONTACTS_PATH = "/contacts";
export const BASKET_PATH = "/basket";
export const BRANDS_PATH = "/brands";
export const TYPES_PATH = "/types";
export const PAY_PATH = "/payment";
export const DELIVERY_PATH = "/delivery";
export const SEARCH_PATH = "/search";
export const PRYVACY_PATH = "/doc/privacy";
export const INSTALLATION_PIK = "/installation-pik";
export const INSTALLATION_CLIMBER = "/installation-climber";
export const MILITARY_DISCOUNT = "/sales/military-discount";
export const BLACK_DISCOUNT = "/sales/black-friday";
export const NEW_YEAR_DISCOUNT = "/sales/new-year-sale";

export const INSTALLATION = 15000;

export const PATH_ARRAY = [
  { path: ABOUT_PATH, name: "О нас" },
  { path: SHOP_PATH, name: "Каталог" },
  { path: SERVICE_PATH, name: "Цены" },
  { path: CONTACTS_PATH, name: "Контакты" },
  { path: BASKET_PATH, name: "Оформление заказа" },
  { path: BRANDS_PATH, name: "Бренды" },
  { path: TYPES_PATH, name: "Типы" },
  { path: PAY_PATH, name: "Условия оплаты" },
  { path: DELIVERY_PATH, name: "Условия доставки" },
  { path: SEARCH_PATH, name: "Поиск" },
  { path: PRYVACY_PATH, name: "Персональные данные" },
  { path: INSTALLATION_PIK, name: "Установка в дома ПИК" },
  { path: INSTALLATION_CLIMBER, name: "Промышленный альпенизм" },
  { path: MILITARY_DISCOUNT, name: "Скидка для участников СВО" },
  { path: BLACK_DISCOUNT, name: "Чёрная пятница -20%" },
  { path: NEW_YEAR_DISCOUNT, name: "Суперцены в Новый год" },
  { path: VENTILATION_SISTEM, name: "Проектирование и монтaж и  вентиляции" },
];

// SALES
export const sales_list: SalesType[] = [
  {
    title: "Супер цены в Новый год",
    href: NEW_YEAR_DISCOUNT,
    description: "Скидки на технику до 16 000 руб. в Новый год.",
  },
  {
    title: "Чёрная пятница -20%",
    href: BLACK_DISCOUNT,
    description: "Скидки на установку и монтаж техники до 20%.",
  },
];

// SLIDERS
export const proj_slider_1: ProjectSliderType[] = [
  { img: "/image/projects/1/1.jpg" },
  { img: "/image/projects/1/2.jpg" },
  { img: "/image/projects/1/3.jpg" },
  { img: "/image/projects/1/4.jpg" },
  { img: "/image/projects/1/5.jpg" },
  { img: "/image/projects/1/6.jpg" },
  { img: "/image/projects/1/7.jpg" },
  { img: "/image/projects/1/8.jpg" },
  { img: "/image/projects/1/9.jpg" },
  { img: "/image/projects/1/10.jpg" },
  { img: "/image/projects/1/11.jpg" },
];
export const proj_slider_3: ProjectSliderType[] = [
  { img: "/image/projects/3/1.jpg" },
  { img: "/image/projects/3/2.jpg" },
  { img: "/image/projects/3/3.jpg" },
  { img: "/image/projects/3/4.jpg" },
  { img: "/image/projects/3/5.jpg" },
];
export const proj_slider_2: ProjectSliderType[] = [
  { img: "/image/projects/2/1.jpg" },
  { img: "/image/projects/2/2.jpg" },
  { img: "/image/projects/2/3.jpg" },
];

export const sertifcates: { img: string; brand: string; data: string }[] = [
  { img: "/image/sert/1.jpg", brand: "ecostar", data: "Декабрь 31, 2024" },
  { img: "/image/sert/2.jpg", brand: "royal clima", data: "Декабрь 31, 2024" },
  { img: "/image/sert/3.jpg", brand: "hitachi", data: "Декабрь 31, 2024" },
  { img: "/image/sert/4.jpg", brand: "hisense", data: "Декабрь 31, 2024" },
  { img: "/image/sert/5.jpg", brand: "funai", data: "Декабрь 31, 2024" },
  { img: "/image/sert/6.jpg", brand: "lg", data: "Декабрь 31, 2024" },
];

// ОТЗЫВЫ
export const owerviewsList: OwerViewType[] = [
  {
    id: 10,
    img: "/image/owervievs/m6.jpg",
    service: "Установка и продажа кондиционера",
    text: "Ребята сделали работу на отлично. С учетом того, что две из трех корзин находились сверху у соседа они сделали монтаж из моей квартиры(17 этаж) не беспокоя его. Рекомендую!",
    name: "Александр",
  },
  {
    id: 9,
    img: "/image/owervievs/m5.jpg",
    service: "Установка и продажа кондиционера",
    text: "Все чётко как в аптеке, приехали, смонтировали, опресовали,проверили, убрали, уехали. 5 баллов.",
    name: "Павел",
  },
  {
    id: 8,
    img: "/image/owervievs/g5.jpg",
    service: "Установка и продажа кондиционера",
    text: "Выбирала компанию для установки кондиционеров в загородный дом по отзывам и не прогадала, спасибо авито, а еще огромное спасибо Александру за качественную, быструю работу начиная от консультирования и подбора кондеев и до момента установки. Очень аккуратные, пунктуальные рабочие, мы очень довольны качеством. Рекомендую!",
    name: "Olga Tyumeneva",
  },
  {
    id: 1,
    img: "/image/owervievs/g1.jpg",
    service: "Установка и продажа кондиционера",
    text: "Спасибо большое за быстро, а главное качественно выполненную работу 👏🏻. Ребята профессионалы, не пожалела ни на минуту о выборе. Посоветовали какой и почему ставить, приобрела у них. Вся работа заняла менее 2х часов. Вы осчастливили еще одного человека ❤️",
    name: "Дарья",
  },
  {
    id: 2,
    img: "/image/owervievs/g2.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Все очень понравилось,выбрали кондиционер,подсказали,хотела черный поэтому ждала пару дней,не было в наличии.В день Х приехали установили быстро,за час!!Мусор убрали,за собой!Все рассказали,очень понравилось.Ребята огонь!!!Буду всем советовать,теперь подумываю о кондиционере на кухню 😀.Да цена за оборудование монтаж,не поменялась!И расчет все по факту!Без предоплат!!!",
    name: "Арина",
  },
  {
    id: 3,
    img: "/image/owervievs/84.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Четные 5 звезд! Монтаж в день заказа, ребята видно мастера своего дела! Все по уровню, шаблонам, одно удовольствие смотреть за работой. Объяснили, протестировали, за собой убрали. Огромное спасибо!",
    name: "Дмитрий",
  },
  {
    id: 4,
    img: "/image/owervievs/m1.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Все понравилось. Ребята мастера своего дела. Александру спасибо за подбор и совет по кондиционеру. Андрею за сборку и монтаж.",
    name: "Андрей",
  },
  {
    id: 5,
    img: "/image/owervievs/m3.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Бригада работает профессионально. Работы выполнены качественно и быстро. Компания занимается не только установкой, но и продажей кондиционеров.",
    name: "Григорий",
  },
  {
    id: 6,
    img: "/image/owervievs/m2.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Большое спасибо! Договорились, монтажники приехали в удобное время, даже немного раньше. Установили все как и обещали ровно за два часа! Отличная работа!",
    name: "Евгений",
  },
  {
    id: 7,
    img: "/image/owervievs/m4.jpg",
    service: "Установка вн.блока. (Продажа) кондиционеров",
    text: "Ребята молодцы , делают качественно))))5++++,приехали в назначенное время, цена адекватная)супер) буду у них заказывать ежегодное обслуживание 🤘🤘🤘🤘",
    name: "Gleb Power",
  },
];

// FAQs ventilation
export const faqsVentilation: FAQsType[] = [
  {
    question: "Сколько обойдется мне вентиляция и кондиционирование?",
    answer:
      "Вам лучше заказать выезд нашего эксперта. Который точно расчитает и предоставит для вас все сметы оборудования. На глаз сказать достаточно сложно.",
  },
  {
    question:
      "Мне нужно в квартире в туалете установить вытяжку. Вы это можете сделать?",
    answer:
      "Нет, к сожалению такие виды работ не выполняем,так как занимаемся профессионально системами вентиляции и кондиционирования.",
  },
  {
    question:
      "Мы ген.подрядчики и ищем надежного субподрядчика для выполнения работ",
    answer:
      "Смело можете отправить Ваш проект на оценку, либо связаться с нами для уточнения деталей. По договору субподряда мы также работаем.",
  },
  {
    question: "Какая цена выезда вашего инженера.",
    answer:
      "Если вы решите заказывать технику и монтаж у нас. То выезд для вас будет бесплатным. Если же вам просто нужна предварительная стоимость то выезд стоит 3000 р в пределах МКАД, за МКАД +30 руб. за один км..",
  },
];

//Presents advanture ventilation
export const advantureSectionVentilation: ADVVentilaton[] = [
  {
    id: 1,
    title: "Бытовая вентиляция",
    description:
      "Такая система не только улучшает качество воздуха, но и помогает снизить расходы на отопление и кондиционирование в вашем доме или квартире.",
    price: "На любые объекты",
    location: "от ₽20,000 RUB",
  },
  {
    id: 2,
    title: "Приточные установки",
    description:
      "Оснащены высокоэффективными фильтрами, удаляющими загрязнители и аллергены, что делает воздух безопасным даже для аллергиков и людей с чувствительным дыханием.",
    price: "Производства",
    location: "от ₽120,000 RUB",
  },
  {
    id: 3,
    title: "Приточно вытяжные установки",
    description:
      "Комплексное решение для создания идеального микроклимата в вашем помещении. Система обеспечивает  приток свежего воздуха, и эффективное удаление загрязнённого воздуха.",
    price: "Жилые дома, помещения",
    location: "от ₽60,000 RUB",
  },
];

//Список преимуществ на странице вентиляций
export const advList: { title: string; description: string }[] = [
  {
    title: "Cистемы вентиляции для",
    description: "Любого рабочего пространства",
  },
  {
    title: "Делаем качественную вентиляцию",
    description: "В квартирах, частных домах",
  },
  {
    title: "Разработка вентиляционных систем ",
    description: "Для производственных цехов",
  },
];
