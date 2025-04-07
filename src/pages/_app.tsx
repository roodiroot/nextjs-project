import { Suspense } from "react";
import { Router } from "next/router";
import type { AppProps } from "next/app";
import { Golos_Text } from "next/font/google";
import { Metrika } from "@/components/metrika";

import useBanner from "@/hooks/useBanner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MobilMemu from "@/components/navbar/MobilMemu";
import BasketModal from "@/components/modal/BasketModal";
import CallWidget from "@/components/widgets/call-widget";
import ToasterProvider from "@/providers/ToasterProvider";
import ImageShowComponent from "@/components/ImageShowComponent";
import SubmitOrderModel from "@/components/modal/SubmitOrderModel";

import "@/styles/globals.css";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import CookieConsentBanner from "@/components/advantages/CookieConsentBanner";

const golos = Golos_Text({ subsets: ["cyrillic"], display: "swap" });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const { isOpen } = useBanner();
  return (
    <>
      <Suspense>
        <Metrika />
      </Suspense>
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
      <CookieConsentBanner />
    </>
  );
}
