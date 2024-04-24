import { Metrika } from "@/components/metrika";
import { Html, Head, Main, NextScript } from "next/document";
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
