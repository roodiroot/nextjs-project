import { cn } from "@/lib/utils";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function FilterElement({ children, title, sleep, className }) {
  const [showFilter, setShowFilter] = useState(sleep ? false : true);

  return (
    <div className={cn("mb-6", className)}>
      <div
        className='
        flex 
        justify-between 
        items-center
        '
      >
        <div
          className='
           text-sm 
           text-slate-500
           mb-2
          '
        >
          {title}
        </div>
        <div onClick={(e) => setShowFilter(!showFilter)}>
          <FiChevronDown
            size={18}
            className={`
            text-slate-600
            cursor-pointer
            transition
            ${showFilter ? "rotate-0" : "rotate-180"}
            `}
          />
        </div>
      </div>
      {showFilter && children}
    </div>
  );
}

export default FilterElement;
