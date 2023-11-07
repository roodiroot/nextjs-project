import Container from "@/components/Container";
import CastomScreen from "@/components/blocks/castom-screen/castom-screen";
import MainBlockClassic, {
  TypesStyleMainBlockClassic,
} from "@/components/classic-block/main-block";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Path from "@/components/utils-component/Path";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const BlackFriday = () => {
  const submitOrder = useSubmitOrder();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Акция: Черная пятница в KONDISH</title>
        <meta
          name='description'
          content='Kondish скидки на установку кондиционеров в черную пятницу'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Path />
        <CastomScreen
          title='Успейте установить кондиционер со скидкой!'
          description='Теперь вы&nbsp;можете воспользоваться эксклюзивной скидкой
          в&nbsp;размере&nbsp;20% на&nbsp;покупку кондиционера.'
          bg='bg-black-friday'
          submitOrder={submitOrder}
        />
        <div className='py-12 px-6 w-full max-w-5xl mx-auto'>
          <h3 className='text-2xl font-semibold mb-6'>
            На данный момент скидка распространяется на следующую группу товаров
          </h3>
          <div className='flex flex-col gap-4'>
            <div
              onClick={() => router.push("/shop/68")}
              className='cursor-pointer text-sky-800 underline'
            >
              ROYAL Clima Классические сплит-системы серии VELA NUOVA RC-VX22HN
            </div>
            <div
              onClick={() => router.push("/shop/69")}
              className='cursor-pointer text-sky-800 underline'
            >
              ROYAL Clima Классические сплит-системы серии VELA NUOVA RC-VX28HN
            </div>
            <div
              onClick={() => router.push("/shop/71")}
              className='cursor-pointer text-sky-800 underline'
            >
              ROYAL Clima Классические сплит-системы серии VELA NUOVA RC-VX35HN
            </div>
          </div>
        </div>

        <div className='-mx-6 py-12 px-6 md:mx-0'>
          <FeedbackForm className='mb-24 md:rounded-3xl' />
        </div>
      </Container>
    </>
  );
};

export default BlackFriday;
