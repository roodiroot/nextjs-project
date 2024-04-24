import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Advantages from "@/components/hello-page/Advantages";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Gallery from "@/components/hello-page/Gallery";
import Path from "@/components/utils-component/Path";
import GridList from "@/components/ventilation/grid-list";
import PromptForm from "@/components/ventilation/prompt-form";
import YaFeed from "@/components/ya/YaFeed";
import { sertifcates } from "@/constans";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>О компании | Kóndish установка кондиционеров в Москве</title>
        <meta
          name="description"
          content="Наша компания предоставляет широкий спектр услуг по установке, ремонту и обслуживанию кондиционеров. | Более 12 лет устанавливаем климатическую технику."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container>
          <Path />
          <Heading title="О компании" className="mb-8" h1 />
          <div className="relative w-full min-h-[40vh] overflow-hidden rounded-md mb-8">
            <Image
              width={1500}
              height={300}
              src="/image/7.jpg"
              alt="img"
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-6 mb-8 sm:text-lg sm:leading-8">
            <p className="flex-1">
              <span className="font-bold">Kóndish</span> является лидером
              на&nbsp;рынке установки и&nbsp;продажи кондиционеров в&nbsp;Москве
              и&nbsp;Московской области. Мы&nbsp;предлагаем широкий ассортимент
              кондиционеров от&nbsp;ведущих мировых производителей, таких как
              Royal Clima, Energolux, Hisense, Funai, Daikin, Mitsubishi
              Electric, General Climate и&nbsp;другие. Мы&nbsp;работаем
              с&nbsp;клиентами всех типов&nbsp;&mdash; от&nbsp;частных лиц
              до&nbsp;крупных корпоративных клиентов, которые нуждаются
              в&nbsp;установке и&nbsp;обслуживании кондиционеров любой
              сложности.
            </p>
            <p className="flex-1">
              Наша команда состоит из&nbsp;высококвалифицированных специалистов,
              которые готовы помочь вам выбрать наилучшее решение для ваших
              потребностей по&nbsp;охлаждению и&nbsp;обогреву. Мы&nbsp;также
              предоставляем полный спектр услуг, включая консультации
              по&nbsp;выбору кондиционера, доставку и&nbsp;установку
              оборудования, а&nbsp;также последующее техническое обслуживание.
            </p>
          </div>
          <div className="w-full flex flex-col-reverse sm:flex-row gap-6 mb-8 sm:text-lg">
            <div className="flex-1">
              <h2 className="font-bold text-2xl mb-4">
                Мы являемся надежным поставщиком кондиционеров в Москве и
                области.
              </h2>
              <div className="sm:text-xl sm:leading-8 text-lg mb-4">
                При всем при этом мы&nbsp;всегда рекомендуем нашим клиентам
                только ту технику которая проявляет себя наилучшим образом,
                с&nbsp;безупречной стороны
              </div>
              Мы&nbsp;гарантируем высокое качество всех наших услуг
              и&nbsp;оборудования, а также приемлемые цены на&nbsp;все продукты
              и&nbsp;услуги. Наша компания всегда готова предложить наиболее
              эффективные и&nbsp;экономичные решения для вас и&nbsp;вашего
              бизнеса. Обратитесь к&nbsp;нам сегодня, чтобы узнать больше
              о&nbsp;том, как мы&nbsp;можем помочь вам достичь комфортной
              атмосферы в&nbsp;любом помещении!
            </div>
            <div className="flex-1 relative overflow-hidden rounded-md min-h-[40vh]">
              <Image
                width={500}
                height={300}
                src="/image/about/about2.jpg"
                alt="img"
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
          <Gallery />
          <YaFeed />
          <Advantages title="Работаем честно" />
          {/* <FeedbackForm className='mb-8' /> */}
        </Container>
        <PromptForm className="mb-32" />
        <GridList list={sertifcates} />
      </div>
    </>
  );
};

export default About;
