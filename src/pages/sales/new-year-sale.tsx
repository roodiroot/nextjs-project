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

const product_sales = [
  {
    name: "PERFETTO Inverter Royal Clima RCI-PF30HN",
    sale_price: "8 090 руб.",
    link: "/shop/48",
  },
  {
    name: "PERFETTO Inverter Royal Clima RCI-PF40HN",
    sale_price: "5 990 руб.",
    link: "/shop/49",
  },
  {
    name: "PERFETTO Inverter Royal Clima RCI-PF55HN",
    sale_price: "8 790 руб.",
    link: "/shop/50",
  },
  {
    name: "PERFETTO Inverter Royal Clima RCI-PF75HN",
    sale_price: "16 090 руб.",
    link: "/shop/51",
  },
];

const NewYearSale = () => {
  const submitOrder = useSubmitOrder();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Суперцены в Новый год в Kondish</title>
        <meta name='description' content='Kondish скидки на технику' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Path />
        <CastomScreen
          title='Успейте установить кондиционер со скидкой!'
          description='Теперь вы&nbsp;можете воспользоваться эксклюзивной скидкой
          в&nbsp;размере&nbsp;20% на&nbsp;покупку кондиционера.'
          bg='bg-ny-sale'
          submitOrder={submitOrder}
        />
        <div className='py-12 px-6 w-full max-w-5xl mx-auto'>
          <h3 className='text-2xl font-semibold mb-6'>
            Скидки распростряняются на следующие товары.
          </h3>
          <div className='flex flex-col gap-4'>
            {product_sales.map((l) => (
              <div key={l.link} className='flex gap-4'>
                <div
                  onClick={() => router.push(l.link)}
                  className='cursor-pointer text-sky-800 underline'
                >
                  {l.name}
                </div>
                <div className=''>
                  скидка{" "}
                  <span className='inline whitespace-nowrap font-semibold'>
                    {l.sale_price}
                  </span>{" "}
                </div>
              </div>
            ))}
          </div>
          <div className='mt-4'>Цена на сайте указана без скидки.</div>
        </div>

        <div className='-mx-6 py-12 px-6 md:mx-0'>
          <FeedbackForm className='mb-24 md:rounded-3xl' />
        </div>
      </Container>
    </>
  );
};

export default NewYearSale;
