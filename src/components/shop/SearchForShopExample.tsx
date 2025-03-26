import { BiSearch } from "react-icons/bi";

const SearchForShopExample = () => {
  return (
    <div className="searchbooster w-full flex border-2 border-slate-700 rounded-md overflow-hidden items-center">
      <input className="w-full h-full flex-1 py-3 px-4 outline-none placeholder:text-sm" />
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

export default SearchForShopExample;
