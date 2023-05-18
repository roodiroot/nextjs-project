import Container from "@/components/Container";
import Bunner from "@/components/bunner/Bunner";
import Advantages from "@/components/hello-page/Advantages";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Gallery from "@/components/hello-page/Gallery";
import MainBlock from "@/components/hello-page/MainBlock";
import Owerviews from "@/components/hello-page/Owerviews";
import PopularProducts from "@/components/hello-page/PopularProducts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta
          name="description"
          content="Установка кондиционеров в Москве и Московской области"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`pb-24 pt-8`}>
        <Container>
          <MainBlock />
          <Advantages />
          <Gallery />
          <Owerviews />
          <PopularProducts />
          <FeedbackForm />
          <Bunner />
        </Container>
      </div>
    </>
  );
}
