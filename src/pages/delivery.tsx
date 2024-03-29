import Container from "@/components/Container";
import Path from "@/components/utils-component/Path";
import Head from "next/head";

const Delivery = () => {
  return (
    <>
      <Head>
        <title>Доставка</title>
        <meta
          name='description'
          content='Установка и подбор кондиционеров и сплит-систем в Москве и Московской области. | Более 400 положительных отзывов о нашей работе. | Более 12 лет устанавливаем климатическую технику в ваших домах. | Бесплатная консультация.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Path />
        <div className='w-full h-full'>
          <h1 className='text-3xl md:text-4xl font-bold text-center mb-10'>
            Условия доставки кондиционеров
          </h1>
          <div className='w-full flex flex-col lg:flex-row mb-10 gap-6'>
            <div className='w-full rounded-md bg-slate-100 p-7'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>1.</h2>
              <div className='text-md md:text-lg'>
                При оформлении заказа мы фиксируем время наиболее удобное для
                вас, и осуществляем привоз ежедневно с 10:00 до 20:00. При этом,
                мы гарантируем высокое качество наших услуг и быструю доставку,
                чтобы Вы могли наслаждаться прохладой в короткие сроки. О
                деталях доставки можно договориться с нашим менеджером при
                оформлении заказа.
              </div>
            </div>
            <div className='w-full rounded-md bg-slate-100 p-7'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>2.</h2>
              <div className='text-md md:text-lg'>
                Мы рады сообщить, что доставка до подъезда Вашего дома в
                пределах МКАД - совершенно бесплатна! А если Вам нужна доставка
                за пределы МКАД, не переживайте - мы готовы предоставить эту
                услугу по очень выгодной ставке всего 30 рублей за каждый
                километр. Насладитесь удобством и комфортом доставки прямо на
                порог Вашего дома, не тратя при этом лишних денег.
              </div>
            </div>
            <div className='w-full rounded-md bg-slate-100 p-7'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>3.</h2>
              <div className='text-md md:text-lg'>
                Если товар Вас устраивает и не имеет дефектов, Вы можете
                подтвердить его прием, подписав товарную накладную. Однако, если
                Вам будет обнаружен любой недостаток до подписания «Акта
                приема-передачи», Вы можете не оплачивать товар и вернуть его
                продавцу без каких-либо дополнительных расходов. Наша цель -
                обеспечить Вам лучший сервис и высокое качество товара.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Delivery;
