import Head from "next/head";

import Container from "@/components/Container";
import Path from "@/components/utils-component/Path";

const Services = () => {
  return (
    <>
      <Head>
        <title>Прайс на услуги</title>
        <meta
          name='description'
          content='Стоимость сопутствующих услуг и услуг устаноки кондиционеров.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=''>
        <Container className='h-full'>
          <Path />
          <div className='min-h-[300px] flex items-center justify-center text-xs text-slate-500'>
            На данный момент страница находится в разработке...
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
