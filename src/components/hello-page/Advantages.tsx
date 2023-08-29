import AdvantagesItem from "./components/advantages-item";

const advantages: AdvantagesList[] = [
  {
    id: 1,
    title: "Квалифицированных специалистов",
    description: `Kondish имеет в штате только сертифицированных специалистов, чьи знания и профессиональная компетенция подтверждены официальными документами.`,
    Icon: "/image/icons/doc.png",
  },
  {
    id: 2,
    title: "Техническую поддержку",
    description:
      "Если в течение гарантийного срока ваш кондиционер выйдет из строя, мы установим вам новый в тот же день. Мы всегда отвечаем за нашу продукцию и готовы обеспечить вас отличным сервисом.",
    Icon: "/image/icons/mic.png",
  },
  {
    id: 3,
    title: "Установку и настройку",
    description:
      "Наши опытные профессионалы с многолетним опытом могут быстро и качественно установить и настроить оборудование благодаря своим знаниям и умениям в данной области.",
    Icon: "/image/icons/set.png",
  },
  {
    id: 4,
    title: "Гарантию качества",
    description:
      "Наша компания предлагает кондиционеры только от известных производителей с гарантией качества. Это дает Вам уверенность в том, что Вы получите надежный продукт.",
    Icon: "/image/icons/doc.png",
  },
];

interface AdvantagesList {
  id: number;
  title: string;
  description: string;
  Icon: string;
}

interface AdvantagesProps {
  title: string;
}

const Advantages: React.FC<AdvantagesProps> = ({ title }) => {
  return (
    <div
      className='
      w-full 
      py-40
      flex
      flex-col
      gap-4
      '
    >
      <h2 className='text-slate-900 text-3xl md:text-5xl font-bold w-full text-center mb-2'>
        {title}
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
        {advantages?.map((i) => (
          <AdvantagesItem
            key={i.id}
            title={i.title}
            description={i.description}
            Icon={i.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
