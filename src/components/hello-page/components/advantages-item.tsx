import Image from "next/image";

interface AdvantagesItemProps {
  title: string;
  description: string;
  Icon: string;
}

const AdvantagesItem: React.FC<AdvantagesItemProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className='flex-1 rounded-xl p-6 sm:p-10 md:p-12 flex flex-col gap-4 border'>
      <h3 className='text-xl md:text-2xl font-bold w-full'>{title}</h3>
      <p className='md:text-lg md:leading-8 w-full text-gray-600'>
        {description}
      </p>
      <div className='w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px]'>
        <Image
          alt='icon'
          src={Icon}
          width={60}
          height={60}
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  );
};

export default AdvantagesItem;
