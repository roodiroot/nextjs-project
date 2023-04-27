import st from "./CastomSelect.module.css";

function DropDown({ children }) {
  return (
    <button
      type="button"
      className="
      w-full 
      px-4 
      py-2 
      rounded-lg 
      text-md 
      outline-none
      border-2
      text-start
      font-medium
      bg-white
      border-slate-300
      text-slate-900
      focus:border-slate-800"
      name="car"
      value="ford"
      data-select="toggle"
      data-index="1"
    >
      {children}
    </button>
  );
}

export default DropDown;
