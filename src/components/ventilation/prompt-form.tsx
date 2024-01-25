import Image from "next/image";
import Input from "../inputs/Input";
import FormBl from "./form-bl";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PromptFormProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const PromptForm: React.FC<PromptFormProps> = ({ className, ...props }) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 lg:px-8", className)} {...props}>
      <div className='lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8'>
        <div className='flex items-center rounded-lg bg-gray-100 p-6 sm:p-10'>
          <div className='mx-auto max-w-sm'>
            <h3 className='font-semibold'>Остались вопросы?</h3>
            <p className='mt-2 text-sm text-gray-500'>
              Задайте их нашим экспертам. Оставьте номер, они свяжутся в течении
              пары минут.
            </p>
            <FormBl />
          </div>
        </div>
        <div className='relative mt-6 flex items-center px-6 py-12 sm:px-10 sm:py-12 lg:mt-0'>
          <div className='absolute inset-0 overflow-hidden rounded-lg'>
            <Image
              width={600}
              height={250}
              src='/image/vent/4.jpg'
              alt='background'
              className='h-full w-full object-cover object-center filter saturate-0'
            />
            <div className='absolute inset-0 bg-orange-500 opacity-90'></div>
          </div>
          <div className='relative mx-auto max-w-sm text-center'>
            <h3 className='text-2xl font-bold text-white'>
              Kondish: Комфорт Дома
            </h3>
            <p className='mt-2 text-gray-200'>
              Прекрасных 12 лет мы создаём климат у вас дома. Подробнее{" "}
              <Link href='/about' className='whitespace-nowrap font-bold'>
                О Kondish <span aria-hidden='true'>→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptForm;
