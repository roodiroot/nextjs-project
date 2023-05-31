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
import Image from "next/image";
import doc from "../../../public/image/icons/doc.png";
import mic from "../../../public/image/icons/mic.png";
import ok from "../../../public/image/icons/ok.png";
import set from "../../../public/image/icons/set.png";

interface AdvantagesList {
  id: number;
  title: string;
  description: string;
  Icon: any;
}
// const advatagesList: AdvantagesList[] = [
//   {
//     id: 1,
//     title: "На рынке с 2012 года",
//     description: "Более 11 лет успешной работы и сотни довольных заказчиков",
//     Icon: FiThumbsUp,
//   },
//   {
//     id: 2,
//     title: "Удобные способы оплаты",
//     description: "Возможность оплаты товара наличным и по безналичному расчету",
//     Icon: FiDollarSign,
//   },
//   {
//     id: 3,
//     title: "Широкий ассортимент",
//     description:
//       "Полный набор всех кондиционеров и сплит систем разных брендов",
//     Icon: FiTruck,
//   },
// {
//   id: 4,
//   title: "Собственный склад",
//   description:
//     "Площадь 3000 м2 позволяет держать в наличии огромный ассортимент",
//   Icon: FiHome,
// },
// {
//   id: 5,
//   title: "Гибкая система скидок",
//   description: "Позволяет нашим клиентам экономить значительные суммы",
//   Icon: FiTag,
// },
// {
//   id: 6,
//   title: "Экспертный подбор",
//   description:
//     "Если необходимо для вас мы подберем наилучшие варианты приборов",
//   Icon: FiUserCheck,
// },
// ];

// const Advantages = () => {
//   return (
//     <div
//       className="
//       w-full
//       py-24
//       flex
//       flex-col
//       gap-4
//       "
//     >
//       <Heading
//         center
//         title="Мы всегда делаем честно нашу работу. Ваша выгода в нашем качественном труде"
//       />
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
//         {advatagesList.map((i) => (
//           <AdvatagItem
//             key={i.id}
//             title={i.title}
//             description={i.description}
//             Icon={i.Icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
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
      <div className="text-slate-900 text-3xl md:text-5xl font-bold w-full text-center mb-2">
        Что вы получите?
      </div>
      <div className="flex flex-col md:flex-row gap-6 text-slate-900">
        <div className="flex flex-col gap-6 w-full md:max-w-[50%]">
          <div className="flex-1 rounded-xl p-8 shadow-xl flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-bold w-full">
              Квалифицированных специалистов
            </div>
            <div className="text-lg md:text-xl w-full">
              Kondish имеет в&nbsp;штате только сертифицированных специалистов,
              чьи знания и&nbsp;профессиональная компетенция подтверждены
              официальными документами.
            </div>
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[60px] md:w-[100px] md:h-[100px]">
              <Image
                alt=" "
                src={doc}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex-1 rounded-xl p-8 shadow-xl  flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-bold w-full">
              Техническую поддержку
            </div>
            <div className="text-lg md:text-xl w-full">
              Если в&nbsp;течение гарантийного срока ваш кондиционер выйдет
              из&nbsp;строя, мы&nbsp;установим вам новый в&nbsp;тот&nbsp;же
              день. Вы&nbsp;можете быть уверены, что мы&nbsp;всегда отвечаем
              за&nbsp;нашу продукцию и&nbsp;готовы обеспечить вас отличным
              сервисом.
            </div>
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[60px] md:w-[100px] md:h-[100px]">
              <Image
                alt=" "
                src={mic}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full md:max-w-[50%]">
          <div className="flex-1 rounded-xl p-8 shadow-xl  flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-bold w-full">
              Установку и настройку
            </div>
            <div className="text-lg md:text-xl w-full">
              Наши опытные профессионалы с&nbsp;многолетним опытом могут быстро
              и&nbsp;качественно установить и&nbsp;настроить оборудование
              благодаря своим знаниям и&nbsp;умениям в&nbsp;данной области.
            </div>
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[60px] md:w-[100px] md:h-[100px]">
              <Image
                alt=" "
                src={set}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex-1 rounded-xl p-8 shadow-xl  flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-bold w-full">
              Гарантию качества
            </div>
            <div className="text-lg md:text-xl w-full">
              Наша компания предлагает кондиционеры только от&nbsp;известных
              производителей с&nbsp;гарантией качества. Это дает Вам уверенность
              в&nbsp;том, что&nbsp;Вы получите надежный продукт.
            </div>
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[60px] md:w-[100px] md:h-[100px]">
              <Image
                alt=" "
                src={ok}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
