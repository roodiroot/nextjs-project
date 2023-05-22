import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const SearchForShop = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchPush = () => {
    if (search.length < 4) {
      return toast("⚠️ слишком короткая длина запроса");
    }
    router.push(`shop/search?search=${search}`);
  };
  const submit = (e: any) => {
    if (e.key === "Enter") {
      searchPush();
    }
  };
  return (
    <div className="w-full flex border-2 border-slate-700 rounded-md overflow-hidden items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-full flex-1 py-3 px-4 outline-none"
        type="text"
        onKeyDown={submit}
      />
      <button
        onClick={searchPush}
        className="w-[150px] h-full bg-zinc-400 hover:bg-orange-500 transition py-2 rounded-r-md mr-[2px] text-white"
      >
        Найти
      </button>
    </div>
  );
};

export default SearchForShop;
