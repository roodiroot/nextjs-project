import Heading from "../Heading";
import {
  FiHome,
  FiTruck,
  FiUserCheck,
  FiThumbsUp,
  FiTag,
  FiDollarSign,
} from "react-icons/fi";
import AdvatagItem from "../advantages/AdvatagItem";

interface AdvantagesList {
  id: number;
  title: string;
  description: string;
  Icon: any;
}
const advatagesList: AdvantagesList[] = [
  {
    id: 1,
    title: "На рынке с 2012 года",
    description: "Более 11 лет успешной работы и сотни довольных заказчиков",
    Icon: FiThumbsUp,
  },
  {
    id: 2,
    title: "Удобные способы оплаты",
    description: "Возможность оплаты товара наличным и по безналичному расчету",
    Icon: FiDollarSign,
  },
  {
    id: 3,
    title: "Широкий ассортимент",
    description:
      "Полный набор всех кондиционеров и сплит систем разных брендов",
    Icon: FiTruck,
  },
  {
    id: 4,
    title: "Собственный склад",
    description:
      "Площадь 3000 м2 позволяет держать в наличии огромный ассортимент",
    Icon: FiHome,
  },
  {
    id: 5,
    title: "Гибкая система скидок",
    description: "Позволяет нашим клиентам экономить значительные суммы",
    Icon: FiTag,
  },
  {
    id: 6,
    title: "Экспертный подбор",
    description:
      "Если необходимо для вас мы подберем наилучшие варианты приборов",
    Icon: FiUserCheck,
  },
];

const Advantages = () => {
  return (
    <div
      className="
      w-full 
      py-24
      flex
      flex-col
      gap-4
      "
    >
      <Heading
        center
        title="Мы всегда делаем честно нашу работу. Ваша выгода в нашем качественном труде"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {advatagesList.map((i) => (
          <AdvatagItem
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
