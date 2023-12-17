import Script from "next/script";
import Container from "@/components/Container";
import Bunner from "@/components/bunner/Bunner";
import Advantages from "@/components/hello-page/Advantages";
import DescBlock from "@/components/hello-page/DescBlock";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Guarantee from "@/components/hello-page/Guarantee";
import MainBlockV2 from "@/components/hello-page/MainBlockV2";
import Owerviews from "@/components/hello-page/Owerviews";
import PopularProducts from "@/components/hello-page/PopularProducts";
import Head from "next/head";
import { useRef } from "react";
import StepsWorking from "@/components/hello-page/steps-working";

export default function Home() {
  const element = useRef<HTMLInputElement>(null);
  const scrollToGallery = () => {
    element?.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Kondish</title>
        <meta
          name='description'
          content='Установка и подбор кондиционеров и сплит-систем в Москве и Московской области'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='yandex-verification' content='d35be75676e8516e' />
        <link rel='icon' href='/favicon2.ico' />
      </Head>
      <Script
        id='my-script'
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
      <div className={`pb-24`}>
        <MainBlockV2 scrollToGallery={scrollToGallery} />
        <Container>
          <Advantages title='C&nbsp;&laquo;Kondish&raquo; вы&nbsp;получите?' />
          <DescBlock />
          <Guarantee />
        </Container>
        <StepsWorking element={element} />
        <Container>
          <Owerviews />
          <PopularProducts />
          <FeedbackForm />
          <Bunner />
        </Container>
      </div>
    </>
  );
}
