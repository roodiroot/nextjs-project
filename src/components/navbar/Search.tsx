import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="ml-auto  relative w-full max-w-sm rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Поиск..."
        className="w-full h-full p-2 outline-none bg-inherit focus:bg-slate-100 text-sm text-slate-900 placeholder:text-slate-500 placeholder:text-sm"
      />
      <BiSearch
        className="absolute right-3 top-[50%] translate-y-[-50%]"
        size={18}
        color="#3B3E51"
      />
    </div>
  );
};

export default Search;
