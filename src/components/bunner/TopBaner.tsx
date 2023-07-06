import React from "react";
import { IoMdClose } from "react-icons/io";

interface TopBanerProps {
  title: string;
  text: string;
  button: string;
  onClick: () => void;
  closeBunner: () => void;
}
const TopBaner: React.FC<TopBanerProps> = ({
  title,
  text,
  button,
  onClick,
  closeBunner,
}) => {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-indigo-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white">
          <strong className="font-semibold">{title}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {text}
        </p>
        <span
          onClick={onClick}
          className="cursor-pointer flex-none text-sm font-semibold text-white hover:text-white/80"
        >
          {button} <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          onClick={closeBunner}
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Закрыть</span>
          <IoMdClose size={18} className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TopBaner;
