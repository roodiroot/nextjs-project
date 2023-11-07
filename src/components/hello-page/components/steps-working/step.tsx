import { ProjectSliderType } from "@/types";
import Image from "next/image";

const Step: React.FC<{
  info: ProjectSliderType;
}> = ({ info }) => {
  return (
    <div className='w-full flex flex-col gap-2 md:max-w-[380px] md:gap-5'>
      <div className='relative bg-slate-200 shadow-2xl rounded-3.5xl aspect-[6/3] overflow-hidden'>
        <Image
          loading='lazy'
          width='500'
          height='500'
          decoding='async'
          data-nimg='1'
          src={info.img}
          alt='step'
          className='absolute w-full h-full object-cover'
        />
      </div>
      {/* <div className='font-bold'>{info.title}</div>
      <div className='w-full flex justify-between'>
        <div className='text-sm text-slate-400'>Этап 1</div>
        <div
          //   onClick={onOpen}
          className='text-sm text-mgreen font-medium cursor-pointer'
        >
          Подробнее
        </div>
      </div> */}
    </div>
  );
};

export default Step;
