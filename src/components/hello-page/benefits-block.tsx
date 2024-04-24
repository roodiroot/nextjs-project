const BenefitsBlock = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          С нами точно все получится
        </h2>
        <p className="mt-6 leading-7 text-gray-600">
          Мы гарантируем высокое качество установки благодаря нашей
          сертифицированной команде инженеров.
        </p>
      </div>
      <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-accent p-8 sm:w-[75%] sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
          <p className="flex-none text-3xl font-bold tracking-tight">550 +</p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-medium tracking-tight ">
              Положительных отзывов
            </p>
            <p className="mt-2 leading-7 text-gray-600">
              Про нас оставили наши клиенты
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">
            13 лет
          </p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg text-white font-medium tracking-tight ">
              Устанавливаем климатическое оборудование.
            </p>
            <p className="mt-2 leading-7 text-gray-400">
              За это время мы заслужили доверие тысяч клиентов, благодаря
              надежности и профессионализму нашей работы.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-orange-500 p-8 sm:w-[92%] sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">
            более 4500
          </p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg text-white font-medium tracking-tight ">
              Помещений домов и квартир
            </p>
            <p className="mt-2 leading-7 text-orange-200">
              Стали счастливыми обладателями климатической техники вместе с
              нами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BenefitsBlock;
