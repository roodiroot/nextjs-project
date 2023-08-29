import Image, { StaticImageData } from "next/image";

interface CtaBlockProps {
  h2: string;
  children: React.ReactNode;
  reverse?: boolean;
  img: StaticImageData | string;
}

const CtaBlock: React.FC<CtaBlockProps> = ({ h2, children, reverse, img }) => {
  return (
    <div
      className={`w-full flex flex-col-reverse gap-12 md:gap-0 md:flex-row text-slate-900 px-6 sm:px-8 py-24 sm:py-32 
        ${reverse ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className='relative w-full min-w-[50%] flex-1 bg-slate-300 rounded-3xl aspect-[5/3] overflow-hidden'>
        <Image
          alt='img'
          src={img}
          width={600}
          height={600}
          className='absolute w-full h-full inset-0'
        />
      </div>
      <div
        className='
            flex-1 
            flex 
            flex-col
            gap-4
            justify-center 
            items-center 
            md:py-8  
            md:px-10 
            lg:px-16 
            sm:py-4 
            sm:px-8 
            py-2 
            px-4'
      >
        <h2 className='text-2xl md:text-4xl font-bold w-full'>{h2}</h2>
        <div className='text-lg md:text-xl w-full'>{children}</div>
      </div>
    </div>
  );
};

export default CtaBlock;
