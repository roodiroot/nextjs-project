import ImageShowComponent from "@/components/ImageShowComponent";
import Footer from "@/components/footer/Footer";
import SubmitOrderModel from "@/components/modal/SubmitOrderModel";
import MobilMemu from "@/components/navbar/MobilMemu";
import Navbar from "@/components/navbar/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Golos_Text } from "next/font/google";
import { Router } from "next/router";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

const golos = Golos_Text({ subsets: ["cyrillic"], display: "swap" });

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`min-h-[100vh] flex flex-col justify-between ${golos.className}`}
    >
      <ToasterProvider />
      <ImageShowComponent />
      <SubmitOrderModel />
      <MobilMemu />
      <Navbar />
      <div className="flex-1 pt-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
