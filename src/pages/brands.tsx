import Container from "@/components/Container";
import Path from "@/components/utils-component/Path";
import useTypeAndBrand from "@/hooks/useTypeAndBrand";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Brands = () => {
  const router = useRouter();
  const { fetchBrands, brands } = useTypeAndBrand();
  useEffect(() => {
    if (!brands.length) {
      fetchBrands();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Производители с которыми мы сотрудничаем</title>
        <meta
          name="description"
          content="Мы предлагаем широкий ассортимент кондиционеров от ведущих мировых производителей, таких как Royal Clima, Energolux, Hisense, Funai, Daikin, Mitsubishi Electric, General Climate и другие."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Path />
        <div className="w-full grid grid-cols-auto gap-10 mb-20">
          {brands?.map((i: any) => (
            <div
              onClick={() => router.push(`/shop?brand=${i.id}`)}
              key={i.id}
              className="
            shadow-sm
            hover:shadow-md
            w-full 
            h-40 
            rounded-md 
            border 
            text-slate-400
            hover:text-orange-500 
            cursor-pointer
            flex
            justify-center
            items-center
            transition
            "
            >
              <div className="flex flex-col">
                <span
                  className="
                          cursor-pointer 
                          text-[28px]  
                          uppercase 
                          font-bold
              "
                >
                  {i.name}
                </span>
                <span
                  className="
                          cursor-pointer 
                          text-sm 
                          uppercase 
                          -mt-2
              "
                >
                  {i.brandСountry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Brands;
