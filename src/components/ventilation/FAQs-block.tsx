import useSubmitOrder from "@/hooks/useSubmitOrder";
import { faqsVentilation } from "@/constans";
import { FAQsType } from "@/types";

const FAQsBlock = () => {
  const { onOpen } = useSubmitOrder();
  return (
    <div className='mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40'>
      <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
        <div className='col-span-5'>
          <h2 className='font-bold text-2xl leading-6 tracking-tight'>
            Часто задаваемые вопросы.
          </h2>
          <p className='mt-4 leading-7 text-gray-600'>
            Если у вас вопрос, требующий более точного ответа задайте его нашим{" "}
            <span
              onClick={onOpen}
              className='cursor-pointer text-orange-500 font-semibold'
            >
              специалистам
            </span>{" "}
            лично.
          </p>
        </div>
        <div className='col-span-7 mt-10 lg:mt-0'>
          <dl className='m-0 space-y-10'>
            {faqsVentilation.map((i: FAQsType) => (
              <div key={i.question}>
                <dt className='font-semibold  leading-7'>{i?.question}</dt>
                <dd className='mt-2 leading-7 text-gray-600'>{i?.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQsBlock;
