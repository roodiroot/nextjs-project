import Image from "next/image";

const MainScreenImg: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className='lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-[50%]'>
      <Image
        src={path}
        alt='main photo'
        width={1110}
        height={890}
        className='w-full h-full object-cover block aspect-[4/3] lg:aspect-auto '
        priority
      />
    </div>
  );
};

export default MainScreenImg;
