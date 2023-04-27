function OptionList({ children }) {
  return (
    <ul
      id="listWrapper"
      className="
      absolute
      z-10
      scrollbar
      overflow-x-hidden
      overflow-y-auto
      w-full
      max-h-40
      bg-white
      rounded-md
      shadow-md
      "
    >
      {children}
    </ul>
  );
}

export default OptionList;
