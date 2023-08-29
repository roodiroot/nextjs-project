import Container from "@/components/Container";
import MainBlockClassic, {
  TypesStyleMainBlockClassic,
} from "@/components/classic-block/main-block";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Path from "@/components/utils-component/Path";
import Head from "next/head";

const MilitaryDiscount = () => {
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
          types={TypesStyleMainBlockClassic.light}
          h1='Мы&nbsp;благодарны Вам за&nbsp;службу!!!'
        >
          Теперь вы&nbsp;можете воспользоваться эксклюзивной скидкой
          в&nbsp;размере&nbsp;20% на&nbsp;установку кондиционера.
        </MainBlockClassic>

        <div className='-mx-6 py-12 px-6 md:mx-0'>
          <FeedbackForm className='mb-24 md:rounded-3xl' />
        </div>
      </Container>
    </>
  );
};

export default MilitaryDiscount;
