import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>
        <meta name='theme-color' content='#ffffff' />
        <meta
          name='описание'
          content='Услуги по установке кондиционеров в Москве и области'
        />
        {/* <script src="//code.jivo.ru/widget/7uH4NreLGt" async={true}></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
