import { BotControl } from "@/components/BotControl";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ru">
      <BotControl />
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="описание"
          content="Kóndish - услуги по установке кондиционеров в Москве и области | Более 12 лет устанавливаем климатическую технику в ваших домах. | Свой склад товаров, всегда низкие цены и качественный монтаж."
        />
        {/* <link
          rel="preconnect"
          href="https://api.searchbooster.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn2.searchbooster.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://api4.searchbooster.io"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.searchbooster.io"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Script
          id="searchbooster-widget"
          strategy="afterInteractive"
          data-skip-moving="true"
          dangerouslySetInnerHTML={{
            __html: `
              var sbRegionId = '';
              var sbUserId = '';
              var sbSegmentId = '';
              var sbScript = document.createElement('script');
              sbScript.src = 'https://cdn2.searchbooster.net/scripts/widget/8db2f108-adcd-49cf-91ed-77db373a6f95/main.js';
              sbScript.setAttribute("data-sb-init-script", 1);
              sbScript.async = true;
              document.body.appendChild(sbScript);
            `,
          }}
        /> */}
      </body>
    </Html>
  );
}
