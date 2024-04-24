import { Metrika } from "@/components/metrika";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Suspense } from "react";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="описание"
          content="Kóndish - услуги по установке кондиционеров в Москве и области | Более 12 лет устанавливаем климатическую технику в ваших домах. | Свой склад товаров, всегда низкие цены и качественный монтаж."
        />
      </Head>
      <Script
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
      />
      <body>
        <Main />
        <NextScript />
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </Html>
  );
}
