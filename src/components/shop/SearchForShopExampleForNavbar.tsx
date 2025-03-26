import { BiSearch } from "react-icons/bi";

const SearchForShopExampleForNavbar = () => {
  return (
    <div className="searchbooster h-10 flex border-2 border-orange-500  rounded-md overflow-hidden items-center">
      <input className="hidden sm:block w-full h-full text-sm flex-1 py-1 px-4 outline-none placeholder:text-sm" />
      <button
        // onClick={searchPush}
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
