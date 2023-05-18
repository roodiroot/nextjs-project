import ImageShowComponent from "@/components/ImageShowComponent";
import Footer from "@/components/footer/Footer";
import SubmitOrderModel from "@/components/modal/SubmitOrderModel";
import MobilMemu from "@/components/navbar/MobilMemu";
import Navbar from "@/components/navbar/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Golos_Text } from "next/font/google";

const golos = Golos_Text({ subsets: ["cyrillic"] });

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
