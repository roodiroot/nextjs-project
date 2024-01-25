import { advList } from "@/constans";

const NavigationLine = () => {
  return (
    <div className='border-y'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 '>
          {advList.map((i) => (
            <div
              key={i.title}
              className='flex flex-col  even:border-x even:border-gray-200 even:border-y lg:even:border-y-0'
            >
              <a
                href=''
                className='relative flex flex-1 flex-col justify-center bg-white px-4 py-6 items-center'
              >
                <p className='text-sx text-gray-500 whitespace-nowrap'>
                  {i.title}
                </p>
                <p className='font-semibold whitespace-nowrap'>
                  {i.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationLine;
