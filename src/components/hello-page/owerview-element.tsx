import { OwerViewType } from "@/types";
import Image from "next/image";

const OwerviewElement: React.FC<{ i: OwerViewType }> = ({ i }) => {
  return (
    <div
      className='
            w-full 
            h-full 
            flex
            flex-col
            md:flex-row
            gap-6
            '
    >
      <div
        className='
              flex-none 
              flex 
              justify-center 
              items-center 
              md:items-start'
      >
        <Image
          src={i.img}
          alt='photo'
          width={100}
          height={100}
          className='
                  w-24 
                  h-24 
                  rounded-full 
                  mr-0'
        />
      </div>
      <div
        className='
              flex-auto 
              text-center 
              md:text-left 
              space-y-4'
      >
        <blockquote>
          <p
            className='
                  text-md 
                  md:text-lg 
                  font-medium 
                  line-clamp-4'
          >
            {i.text}
          </p>
        </blockquote>
        <figcaption>
          <div className='text-sky-700'>{i.name}</div>
          <div className='text-slate-500'>{i.service}</div>
        </figcaption>
      </div>
    </div>
  );
};

export default OwerviewElement;
