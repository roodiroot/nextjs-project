import Container from "@/components/Container";
import Bunner from "@/components/bunner/Bunner";
import Advantages from "@/components/hello-page/Advantages";
import DescBlock from "@/components/hello-page/DescBlock";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Gallery from "@/components/hello-page/Gallery";
import Guarantee from "@/components/hello-page/Guarantee";
import MainBlock from "@/components/hello-page/MainBlock";
import Owerviews from "@/components/hello-page/Owerviews";
import PopularProducts from "@/components/hello-page/PopularProducts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Kondish: установка и подбор кондиционеров и сплит систем в Москве и
          Московской области
        </title>
        <meta
          name="description"
          content="Мы предлагаем широкий выбор кондиционеров и сплит-систем от ведущих производителей, которые отличаются не только высоким качеством, но и энергоэффективностью. Работаем в Москве и Московской области"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="d35be75676e8516e" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(93762617, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });
              `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`pb-24 pt-8`}>
        <Container>
          <MainBlock />
          <DescBlock />
          <Advantages />
          <Gallery />
          <Owerviews />
          <Guarantee />
          <PopularProducts />
          <FeedbackForm />
          <Bunner />
        </Container>
      </div>
    </>
  );
}
