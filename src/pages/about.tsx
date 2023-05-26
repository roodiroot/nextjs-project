import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Advantages from "@/components/hello-page/Advantages";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Path from "@/components/utils-component/Path";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>
          О компании Kondish, установка и продажа кондиционеров и сплит-систем в
          Москве и Московской области
        </title>
        <meta
          name="description"
          content="Наша компания предоставляет широкий спектр услуг по установке, ремонту и обслуживанию кондиционеров и сплит-систем. Мы готовы помочь вам выбрать оптимальное решение для создания комфортных условий в вашем доме или офисе в любое время года."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container>
          <Path />
          <Heading title="О компании" className="mb-8" />
          <div className="relative w-full overflow-hidden rounded-md pt-[30%] mb-8">
            <Image
              width={1500}
              height={300}
              src="/image/about/about.jpeg"
              alt="img"
              className="absolute top-0"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-6 mb-8">
            <p className="flex-1">
              Наша компания является лидером на рынке установки и продажи
              кондиционеров в Москве и Московской области. Мы предлагаем широкий
              ассортимент кондиционеров от ведущих мировых производителей, таких
              как Royal Clima, Energolux, Hisense, Funai, Daikin, Mitsubishi
              Electric, General Climate и другие. Мы работаем с клиентами всех
              типов - от частных лиц до крупных корпоративных клиентов, которые
              нуждаются в установке и обслуживании кондиционеров любой
              сложности.
            </p>
            <p className="flex-1">
              Наша команда состоит из высококвалифицированных специалистов,
              которые готовы помочь вам выбрать наилучшее решение для ваших
              потребностей по охлаждению и обогреву. Мы также предоставляем
              полный спектр услуг, включая консультации по выбору кондиционера,
              доставку и установку оборудования, а также последующее техническое
              обслуживание.
            </p>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="font-bold text-2xl mb-4">
                Мы являемся надежным поставщиком систем кондиционирования
              </div>
              <div className="text-lg mb-4">
                При всем при этом мы всегда рекомендуем нашим клиентам только ту
                технику которая проявляет себя наилучшим образом, с безупречной
                стороны
              </div>
              Мы гарантируем высокое качество всех наших услуг и оборудования, а
              также приемлемые цены на все продукты и услуги. Наша компания
              всегда готова предложить наиболее эффективные и экономичные
              решения для вас и вашего бизнеса. Обратитесь к нам сегодня, чтобы
              узнать больше о том, как мы можем помочь вам достичь комфортной
              атмосферы в любом помещении!
            </div>
            <div className="flex-1 relative overflow-hidden rounded-md">
              <Image
                width={500}
                height={300}
                src="/image/about/about.jpeg"
                alt="img"
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
          <Advantages />
          <FeedbackForm className="mb-8" />
        </Container>
      </div>
    </>
  );
};

export default About;
