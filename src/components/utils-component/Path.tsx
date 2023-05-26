import { PATH_ARRAY } from "@/constans";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface PathProps {
  name?: string;
}

const Path: React.FC<PathProps> = ({ name }) => {
  const route = useRouter();

  let P = "";
  let N = "";

  for (let path in PATH_ARRAY) {
    if (route.asPath.includes(PATH_ARRAY[path].path)) {
      P = PATH_ARRAY[path].name;
      N = PATH_ARRAY[path].path;
    }
  }

  const routeInPage = useCallback(() => {
    if (name) {
      route.push(N);
    }
  }, [name]);

  const routeInMain = useCallback(() => {
    route.push("/");
  }, []);

  return (
    <div className="py-6 flex text-sm font-medium">
      <div
        onClick={routeInMain}
        className="inline-block text-orange-500 cursor-pointer hover:underline"
      >
        Главная
      </div>
      {P !== "" ? (
        <div onClick={routeInPage} className="flex">
          <span className="px-1 text-slate-500">/</span>
          <span
            className={`
            ${name ? "text-orange-500" : "text-slate-900"}
            ${name && "cursor-pointer"}
            ${name && "hover:underline"}
            `}
          >
            {P}
          </span>
        </div>
      ) : (
        ""
      )}
      {name && (
        <div className="flex">
          <span className="px-1 text-slate-500">/</span>
          <span className=" text-slate-900">{name}</span>
        </div>
      )}
    </div>
  );
};

export default Path;
