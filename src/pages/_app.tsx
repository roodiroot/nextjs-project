import ImageShowComponent from "@/components/ImageShowComponent";
import Footer from "@/components/footer/Footer";
import BasketModal from "@/components/modal/BasketModal";
import SubmitOrderModel from "@/components/modal/SubmitOrderModel";
import MobilMemu from "@/components/navbar/MobilMemu";
import Navbar from "@/components/navbar/Navbar";
import CallWidget from "@/components/widgets/call-widget";
import useBanner from "@/hooks/useBanner";
import ToasterProvider from "@/providers/ToasterProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Golos_Text } from "next/font/google";
import { Router } from "next/router";
import Script from "next/script";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

const golos = Golos_Text({ subsets: ["cyrillic"], display: "swap" });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const { isOpen } = useBanner();
  return (
    <>
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
      <div
        className={`min-h-[100vh] flex flex-col justify-between overflow-hidden ${golos.className}`}
      >
        <ToasterProvider />
        <ImageShowComponent />
        <CallWidget />
        <BasketModal />
        <SubmitOrderModel />
        <MobilMemu />
        <Navbar />
        <div className={`${isOpen ? "pt-32" : "pt-16"} flex-1`}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
