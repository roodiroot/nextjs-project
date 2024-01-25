// ТИПЫ ДЛЯ СПИСКА АКЦИЙ
export type SalesType = { title: string; href: string; description: string };

// ТИПЫ ДЛЯ ПРОЕКТА СЛАЙДЕРА
export type ProjectSliderType = {
  img: string;
};

// ОТЗЫВЫ
export type OwerViewType = {
  id: number;
  img: string;
  service: string;
  text: string;
  name: string;
};

//FAQs Вентиляции
export type FAQsType = {
  question: string;
  answer: string;
};

//ADV Вентиляции
export type ADVVentilaton = {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
};
