import Head from "next/head";

import FAQsBlock from "@/components/ventilation/FAQs-block";
import CtaSection from "@/components/ventilation/cta-section";
import GridList from "@/components/ventilation/grid-list";
import HeroBlock from "@/components/ventilation/hero-block";
import NavigationLine from "@/components/ventilation/navigation-line";
import PresentationSection from "@/components/ventilation/presentation-section";
import PromptForm from "@/components/ventilation/prompt-form";
import { sertifcates } from "@/constans";

const VentilationSystems = () => {
  return (
    <>
      <Head>
        <title>Проектирование и монтаж вентиляции в Москве и области</title>
        <meta
          name='description'
          content='Работаем от создания проекта, до монтажа "под ключ" | Более 400 положительных отзывов о нашей работе. | Более 12 лет устанавливаем климатическую технику в ваших домах. | Бесплатная консультация.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroBlock />
      <NavigationLine />
      <PresentationSection />
      <CtaSection />
      <PromptForm className='mt-0 sm:mt-32' />
      <FAQsBlock />
      <GridList list={sertifcates} />
    </>
  );
};

export default VentilationSystems;
