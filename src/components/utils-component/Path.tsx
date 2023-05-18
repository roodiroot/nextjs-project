import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const ABOUT_PATH = "about";
const SHOP_PATH = "shop";
const SERVICE_PATH = "services";
const CONTACTS_PATH = "contacts";
const BASKET_PATH = "basket";

const PATH_ARRAY = [
  { path: ABOUT_PATH, name: "О нас" },
  { path: SHOP_PATH, name: "Каталог" },
  { path: SERVICE_PATH, name: "Цены" },
  { path: CONTACTS_PATH, name: "Контакты" },
  { path: BASKET_PATH, name: "Оформление заказа" },
];

interface PathProps {
  name?: string;
}

const Path: React.FC<PathProps> = ({ name }) => {
  const route = useRouter();
  const [path, setPath] = useState("");

  const link = useCallback(
    (link: string) => {
      if (name) {
        route.push(`/${link}`);
      }
      return;
    },
    [name]
  );

  return (
    <div className="py-6 flex text-sm font-medium">
      <div
        onClick={() => route.push("/")}
        className="inline-block text-orange-500 cursor-pointer hover:underline"
      >
        Главная
      </div>

      {name && (
        <div className="flex">
          <span className="px-2 text-slate-500">/</span>
          <span className=" text-slate-900">{name}</span>
        </div>
      )}
    </div>
  );
};

export default Path;

// {PATH_ARRAY.map(
//   (i) =>
//     route.asPath.split("/").includes(i.path) && (
//       <div key={i.path} className="flex">
//         <div
//           className="
//             inline-block
//             px-2
//             text-slate-500"
//         >
//           /
//         </div>
//         <div
//           onClick={() => link(i.path)}
//           className={`
//             inline-block
//             ${name ? "text-orange-500" : "text-slate-900"}
//             ${name && "cursor-pointer hover:underline"}
//               `}
//         >
//           {i.name}
//         </div>
//       </div>
//     )
// )}
