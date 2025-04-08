import { useMediaQuery } from "@/hooks/useMediaQuery";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";

const SearchForShopExampleForNavbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isMobilSearch, setIsMobilSearch] = useState(false);
  const param = useSearchParams();
  const searchparam = param.get("search");
  const isMobil = useMediaQuery("(max-width: 480px)");

  console.log(isMobil);

  useEffect(() => {
    if (!searchparam) {
      setSearch("");
    }
    setIsMobilSearch(false);
  }, [searchparam]);

  const searchPush = () => {
    if (search.length < 3) {
      return toast("⚠️ слишком короткая длина запроса");
    }
    router.push(`/shop/search?search=${search}`);
  };
  const submit = (e: any) => {
    if (e.key === "Enter") {
      searchPush();
    }
  };

  if (isMobil) {
    return (
      <>
        {isMobilSearch && (
          <div className="absolute z-50 top-0 inset-x-0 h-20 bg-gray-100">
            <div className="top-1/2 absolute -translate-y-1/2 ml-2 right-12 pl-10 h-8 flex rounded-md overflow-hidden items-center">
              <input
                onKeyDown={submit}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Мин. 3 символа"
                className=" w-full h-full bg-white text-sm flex-1 py-1 px-4 outline-none placeholder:text-sm"
              />
              <button
                onClick={searchPush}
                placeholder="Поиск на сайте"
                className="relative w-[70px] h-full bg-orange-200 transition  text-orange-500 placeholder:text-gray-400"
              >
                {/* <span className="hidden sm:block">Найти</span> */}
                <BiSearch size={24} className="mx-auto" />
              </button>
            </div>
            <button
              onClick={() => setIsMobilSearch(false)}
              className="top-1/2 absolute -translate-y-1/2 ml-2"
            >
              <X size={24} className="mx-auto" />
            </button>
          </div>
        )}
        <button onClick={() => setIsMobilSearch(true)} className="px-2">
          <BiSearch size={24} className="mx-auto" />
        </button>
      </>
    );
  }

  return (
    <div className="searchbooster h-8 flex   rounded-md overflow-hidden items-center">
      <input
        onKeyDown={submit}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Мин 3 символа"
        className=" w-full h-full bg-gray-100 text-sm flex-1 py-1 px-4 outline-none placeholder:text-sm"
      />
      <button
        onClick={searchPush}
        placeholder="Поиск на сайте"
        className="relative w-[70px] h-full bg-orange-200 transition  text-orange-500 placeholder:text-gray-400"
      >
        {/* <span className="hidden sm:block">Найти</span> */}
        <BiSearch size={24} className="mx-auto" />
      </button>
    </div>
  );
};

export default SearchForShopExampleForNavbar;
