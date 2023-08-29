import Container from "@/components/Container";
import CtaBlock from "@/components/classic-block/cta-block";
import MainBlockClassic from "@/components/classic-block/main-block";
import Advantages from "@/components/hello-page/Advantages";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Path from "@/components/utils-component/Path";
import Head from "next/head";

const InstallationPik = () => {
  return (
    <>
      <Head>
        <title>Установка кондиционера в домах ПИК</title>
        <meta
          name='description'
          content='Kondish специализируется на установке кондиционеров в домах ПИК'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className='overflow-hidden'>
        <Path />
        <MainBlockClassic h1='Установка кондиционера в&nbsp;доме ПИК'>
          Для большинства монтажников эта задача представляется сложной, однако
          мы&nbsp;обладаем обширным опытом установки в&nbsp;данном сегменте.
        </MainBlockClassic>
        <CtaBlock
          h2='Сложный доступ к корзине кондиционера'
          img={"/image/pik/pik1.jpg"}
        >
          Специалисты &laquo;Kondish&raquo; готовы справляться с&nbsp;установкой
          в&nbsp;труднодоступных местах, включая высотные и&nbsp;ограниченные
          пространства.
        </CtaBlock>
        <CtaBlock
          h2='Заломы и&nbsp;недочеты трассы кондиционера'
          reverse
          img={"/image/pik/pik2.jpg"}
        >
          Благодаря опыту и&nbsp;внимательности, наши установщики способны
          обнаружить недочеты в&nbsp;прокладке трассы, что важно для эффективной
          работы кондиционера.
        </CtaBlock>
        <CtaBlock h2='Индивидуальный подход' img={"/image/pik/pik3.jpg"}>
          Наши специалисты готовы разрабатывать индивидуальные решения, учитывая
          особенности каждого проекта.
        </CtaBlock>
        <Advantages title='Что еще вы получите?' />
        <div className='-mx-6 py-12 px-6 md:mx-0'>
          <FeedbackForm className='mb-24 md:rounded-3xl' />
        </div>
      </Container>
    </>
  );
};

export default InstallationPik;
