import ReactSlider from "react-slider";
import st from "./range.module.css";
import { useState } from "react";

interface RangeFilterProps {
  price: any;
  setPrice: any;
}

const RangeFilter: React.FC<RangeFilterProps> = ({ setPrice, price }) => {
  const [momentPrice, setMomentPrice] = useState(price);

  return (
    <div className='py-1 relative'>
      <div className='absolute left-0 text-xs top-0 h-8 rounded-md  p-2 cursor-pointer border-2 flex justify-center items-center bg-white border-gray-200'>
        от {momentPrice[0]} руб.
      </div>
      <div className='absolute right-0 text-xs top-0 h-8 rounded-md  p-2 cursor-pointer border-2 flex justify-center items-center bg-white border-gray-200'>
        до {momentPrice[1]} руб.
      </div>
      <ReactSlider
        className={st.horizontalSlider}
        thumbClassName={st.exampleThumb}
        trackClassName={st.exampleTrack}
        min={0}
        max={150000}
        minDistance={10000}
        value={momentPrice}
        onChange={setMomentPrice}
        onAfterChange={(v: any) => setPrice(v)}
        defaultValue={price}
        pearling
      />
    </div>
  );
};

export default RangeFilter;
