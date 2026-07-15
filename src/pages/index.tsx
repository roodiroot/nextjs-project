import Head from "next/head";
import { useCallback, useRef } from "react";

import Container from "@/components/Container";
import DescBlock from "@/components/hello-page/DescBlock";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Owerviews from "@/components/hello-page/Owerviews";
import PopularProducts from "@/components/hello-page/PopularProducts";
import StepsWorking from "@/components/hello-page/steps-working";
import TableServiceOne from "@/components/services/table-service-one";
import TableServiceTwo from "@/components/services/table-service-two";
import CommandBlock from "@/components/hello-page/command-block";
import BenefitsBlock from "@/components/hello-page/benefits-block";
import MainBlockV3 from "@/components/hello-page/MainBlockV3";
import MainBlockV4 from "@/components/hello-page/MainBlockV4";

export default function Home() {
  const element = useRef<HTMLInputElement>(null);
  const scrollToGallery = useCallback(() => {
    element?.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, []);
  return (
    <>
      <Head>
        <title>Kóndish установка кондиционеров в Москве и Московской области.</title>
        <meta
          name="description"
          content="Установка и подбор кондиционеров и сплит-систем в Москве и Московской области. | Более 12 лет устанавливаем климатическую технику в ваших домах."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="d35be75676e8516e" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <div className={`pb-24`}>
        <MainBlockV4 />
        <Container className="mt-10 sm:mt-20">
          <PopularProducts />
        </Container>
        <Container>
          {/* <Advantages title="С нами все получиться" /> */}
          <TableServiceOne />
          <TableServiceTwo />
          <DescBlock />
          {/* <Guarantee /> */}
        </Container>
        <CommandBlock />
        <BenefitsBlock />
        <StepsWorking element={element} />
        <Container>
          <Owerviews />

          <FeedbackForm />
          {/* <Bunner /> */}
        </Container>
      </div>
    </>
  );
}
