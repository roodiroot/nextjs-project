import Footer from "@/components/footer/Footer";
import Modal from "@/components/modal/Modal";
import SubmitOrderModel from "@/components/modal/SubmitOrderModel";
import Navbar from "@/components/navbar/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <ToasterProvider />
      <SubmitOrderModel />
      <Navbar />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
