import Container from "@/components/Container";
import CtaBlock from "@/components/classic-block/cta-block";
import MainBlockClassic, {
  TypesStyleMainBlockClassic,
} from "@/components/classic-block/main-block";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Path from "@/components/utils-component/Path";
import Head from "next/head";
import Advantages from "@/components/hello-page/Advantages";

const InstallationClimber = () => {
  return (
    <>
      <Head>
        <title>Установка кондиционера альпинистом</title>
        <meta
          name='description'
          content='Kondish специализируется на установке кондиционеров промышленными альпинистами'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Path />
        <MainBlockClassic
          h1='Установка альпинистом'
          types={TypesStyleMainBlockClassic.dark}
        >
          Наша команда состоит из&nbsp;сертифицированных экспертов, которые
          готовы решать задачи любой сложности.
        </MainBlockClassic>
        <CtaBlock
          img={"/image/climber/climber3.jpg"}
          h2='Индивидуальный подход'
        >
          Наши альпинисты всегда готовы разработать индивидуальные решения,
          нацеленные на&nbsp;конкретные потребности клиента, и&nbsp;предложить
          оптимальные варианты выполнения работ.
        </CtaBlock>
        <CtaBlock
          img='/image/climber/climber1.jpg'
          h2='Сертификация и обучение'
          reverse
        >
          Наша команда альпинистов имеет актуальные сертификаты
          и&nbsp;специализированное, проффесиональное оборудование, что
          гарантирует соблюдение стандартов безопасности и&nbsp;профессиональных
          навыков.
        </CtaBlock>
        <CtaBlock
          img='/image/climber/climber2.jpg'
          h2='Комплексный спектр услуг'
        >
          Aльпинисты &laquo;Kondish&raquo; способны предоставить не&nbsp;только
          базовые услуги, но&nbsp;и&nbsp;выполнить более сложные задачи, такие
          как ремонт, обслуживание кондиционеров.
        </CtaBlock>
        <Advantages title='Что еще вы получите?' />
        <div className='-mx-6 py-12 px-6 md:mx-0'>
          <FeedbackForm className='mb-24 md:rounded-3xl' />
        </div>
      </Container>
    </>
  );
};

export default InstallationClimber;
