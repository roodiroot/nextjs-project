function Option({ children, onClick, active }) {
  return (
    <li
      onClick={onClick}
      className={`
      px-4 
      py-2 
      cursor-pointer 
      hover:bg-slate-200
      transition
      ${active && "bg-slate-100"}
      ${active && "font-medium"}
      `}
      data-select="option"
      data-value="volkswagen"
      data-index="0"
    >
      {children}
    </li>
  );
}

export default Option;
