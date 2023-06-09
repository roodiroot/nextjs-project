import Container from "@/components/Container";
import Heading from "@/components/Heading";
import CardList from "@/components/shop/CardList";
import Path from "@/components/utils-component/Path";
import axios from "axios";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const [productsList, setProductsList] = useState<any>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const brandQuery = searchParams.get("search");

  useEffect(() => {
    (async () => {
      setLoading(true);
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/products/search?search=${brandQuery}`
        )
        .then((d) => {
          console.log(d);
          setProductsList(d.data.rows);
          setCount(d.data.count);
        })
        .catch((e) => setError(JSON.stringify(e)))
        .finally(() => setLoading(false));
    })();
  }, [brandQuery]);
  return (
    <>
      <Head>
        <title>Результаты поиска</title>
        <meta
          name="description"
          content="Если вы ищите тех кто установит вам кондиционер, можете связаться с нами через электронную почту info@kondish.su, sale@kondish.su или позвонить нам по телефону 8 (915) 329-42-09. Мы работаем ежедневно, включая выходные и праздничные дни."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Path />
        <div
          className="
            w-full
            h-full
            py-8
            flex
            flex-col
            "
        >
          <Heading
            title={`Результаты поиска по запросу: "${brandQuery}"`}
            subtitle={`Всего найдено товаров - (${count})`}
          />
          <div
            className="
                grid
                justify-items-center
                grid-cols-auto
                gap-6
                "
          >
            <CardList
              loading={loading}
              error={error}
              products={productsList}
              search
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Search;
