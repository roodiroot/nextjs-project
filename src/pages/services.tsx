import Head from "next/head";

import Container from "@/components/Container";
import Path from "@/components/utils-component/Path";
import TableServiceOne from "@/components/services/table-service-one";
import TableServiceTwo from "@/components/services/table-service-two";

const Services = () => {
  return (
    <>
      <Head>
        <title>Прайс на услуги</title>
        <meta
          name="description"
          content="Стоимость сопутствующих услуг и услуг устаноки кондиционеров."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Container className="h-full">
          <Path />
          <TableServiceOne />
          <TableServiceTwo />
        </Container>
      </div>
    </>
  );
};

export default Services;
