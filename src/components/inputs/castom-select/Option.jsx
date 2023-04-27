function Option({ children, onClick }) {
  return (
    <li
      onClick={onClick}
      className="
      px-4 
      py-2 
      font-light 
      cursor-pointer 
      hover:bg-slate-100
      transition
      "
      data-select="option"
      data-value="volkswagen"
      data-index="0"
    >
      {children}
    </li>
  );
}

export default Option;
