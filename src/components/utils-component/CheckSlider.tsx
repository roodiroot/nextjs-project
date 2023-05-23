import { Dispatch, SetStateAction } from "react";

interface CheckSliderProps {
  label?: string;
  value: boolean;
  setvalue: any;
}
const CheckSlider: React.FC<CheckSliderProps> = ({
  value,
  setvalue,
  label,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <div
        onClick={() => setvalue(!value)}
        className={`
                  ${value ? "bg-orange-500" : "bg-slate-200"}
                  flex-none
                  rounded-full 
                  w-[45px] 
                  h-[30px]  
                  relative 
                  border-2 
                  transition
                  border-slate-200`}
      >
        <div
          className={`
                    left-0
                    ${value ? "translate-x-[15px]" : "translate-x-0"}
                    transition
                    absolute 
                    top-[50%]
                    translate-y-[-50%]
                    rounded-full 
                    shadow-sm 
                    bg-white 
                    cursor-pointer
                    w-[27px] 
                    h-[27px]
                  `}
        ></div>
      </div>
      {label && (
        <div
          onClick={() => setvalue(!value)}
          className="line-clamp-1 text-zinc-500 hover:underline cursor-pointer text-lg"
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default CheckSlider;
