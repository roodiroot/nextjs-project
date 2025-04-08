import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BiSearch } from "react-icons/bi";

const SearchForShop = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

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
  return (
    <div className="searchbooster w-full flex border-2 border-slate-700 rounded-md overflow-hidden items-center">
      <input
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        className="w-full h-full flex-1 py-3 px-4 outline-none placeholder:text-sm"
        // type="text"
        // onKeyDown={submit}
        // placeholder="Введите минимум 4 символа"
      />
      <button
        // onClick={searchPush}
        className="relative sm:w-[120px] w-[70px] h-full bg-zinc-400 hover:bg-orange-500 transition py-2 rounded-r-md mr-[2px] text-white"
      >
        <span className="hidden sm:block">Найти</span>
        <BiSearch size={24} className="sm:hidden mx-auto" />
      </button>
    </div>
  );
};

export default SearchForShop;
