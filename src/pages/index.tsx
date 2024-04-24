import Head from "next/head";
import Script from "next/script";
import { useCallback, useRef } from "react";

import Container from "@/components/Container";
import Bunner from "@/components/bunner/Bunner";
import Advantages from "@/components/hello-page/Advantages";
import DescBlock from "@/components/hello-page/DescBlock";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import MainBlockV2 from "@/components/hello-page/MainBlockV2";
import Owerviews from "@/components/hello-page/Owerviews";
import PopularProducts from "@/components/hello-page/PopularProducts";
import StepsWorking from "@/components/hello-page/steps-working";
import TableServiceOne from "@/components/services/table-service-one";
import TableServiceTwo from "@/components/services/table-service-two";

export default function Home() {
  const element = useRef<HTMLInputElement>(null);
  const scrollToGallery = useCallback(() => {
    element?.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, []);
  return (
    <>
      <Head>
        <title>
          Kóndish установка кондиционеров в Москве и Московской области.
        </title>
        <meta
          name="description"
          content="Установка и подбор кондиционеров и сплит-систем в Москве и Московской области. | Более 12 лет устанавливаем климатическую технику в ваших домах."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="d35be75676e8516e" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      {/* <Script
        id="my-script"
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
      /> */}
      <div className={`pb-24`}>
        <MainBlockV2 scrollToGallery={scrollToGallery} />
        <Container>
          <Advantages title="C&nbsp;&laquo;Ko&#x301;ndish&raquo; вы&nbsp;получите?" />
          <TableServiceOne />
          <TableServiceTwo />
          <DescBlock />
          {/* <Guarantee /> */}
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
