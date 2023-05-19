import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

import Heading from "@/components/Heading";
import FilterBlock from "@/components/shop/FilterBlock";
import Container from "@/components/Container";
import useProductStore from "@/hooks/useProductsStore";
import CardList from "@/components/shop/CardList";
import Path from "@/components/utils-component/Path";

// ПРИМЕР ОБЪЕКТА DTO ДЛЯ СОРТИРОВКИ, КОТОРЫЙ УХОДИТ НА СЕРВЕР
// {
//   filtering: {
//     brandId: 6,
//     typeId: 3,
//     between: [1000, 100000]
//     descriptionFilters: [
//       { title: "Площадь помещения: м².", description: ["20"] },
//       { title: "Мин. температура за окном", description: ["-15 С"] },
//       { title: "Цвет", description: ["черный"] },
//       {
//         title: "Тип компрессора:",
//         description: ["инвертор", "не инвертор"],
//       },
//       { title: "Площадь помещения: м².", description: ["25", "35"] },
//       { title: "Наличие WiFi:", description: ["нет"] },
//       { title: "Класс энегроэффективности:", description: ["A++/A+"] },
//     ],
//   },
// }

const HAVE_COMPRESSOR_TYPE = "Тип компрессора:";
const HAVE_WIFI = "Наличие WiFi:";
const HAVE_COLOR = "Цвет";
const HAVE_SQUARE = "Площадь помещения: м².";

function Shop() {
  const { fetchProducts, loading, error, products } = useProductStore();
  const searchParams = useSearchParams();

  const [oldProductList, setOldProductList] = useState([]);
  const [productsScroll, setProductsScroll] = useState([]);
  const [productsList, setProductsList] = useState<any>([]);

  const [sortStart, setSortStart] = useState(true);
  const [sort, setSort] = useState(true);
  const [showLimit, setShowLimit] = useState(6);
  const [price, setPrice] = useState<any>([0, 150000]);
  const [fetching, setFetching] = useState(false);

  const brandQuery = searchParams.get("brand");
  const typeQuery = searchParams.get("type");
  const squareQuery = searchParams.get("square");
  const compressorQuery = searchParams.get("compressor");
  const wifiQuery = searchParams.get("wifi");
  const colorQuery = searchParams.get("color");

  const filters = {
    brand: brandQuery,
    type: typeQuery,
    square: squareQuery,
    compressor: compressorQuery,
    wifi: wifiQuery,
    color: colorQuery,
  };

  let page = 1;
  let showOffset = page * showLimit - showLimit;

  let filter: any = {
    filtering: {
      brandId: filters.brand,
      typeId: filters.type,
      descriptionFilters: [],
      limit: showLimit,
      offset: showOffset,
      order: [[sort ? "price" : "name", sortStart ? "ASC" : "DESC"]],
      between: price,
    },
  };

  useEffect(() => {
    if (filters.compressor) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_COMPRESSOR_TYPE,
        description: [filters.compressor],
      });
    }
    if (filters.color) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_COLOR,
        description: [filters.color],
      });
    }
    if (filters.wifi) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_WIFI,
        description: [filters.wifi],
      });
    }
    if (filters.square) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_SQUARE,
        description: filters.square.split(","),
      });
    }

    (async () => {
      console.log(filter);
      console.log(page);
      await fetchProducts(filter).then((d: any) => {
        setProductsList(d);
      });
    })();
  }, [
    filters.brand,
    filters.type,
    filters.compressor,
    filters.color,
    filters.wifi,
    filters.square,
    showLimit,
    sort,
    sortStart,
    price,
    page,
  ]);

  return (
    <>
      <Head>
        <title>Каталог товаров</title>
        <meta name="description" content="Каталог товаров на наших складах." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Path />
        <div
          className="
            w-full 
            pb-12 
            flex
            flex-col
            gap-4
            sm:items-start
            sm:flex-row
            "
        >
          <FilterBlock
            className="
              bg-slate-100
              rounded-md
              flex-none 
              w-full 
              sm:max-w-[300px]
              p-7
              shadow-sm
              "
            price={price}
            setPrice={setPrice}
          />
          <div className="flex-1">
            <Heading
              title="Каталог"
              subtitle="Весь список товаров по выбранным параметрам"
            />
            <div
              className="
                mb-1
                flex gap-2
                "
            >
              <div className="py-4 px-2 rounded-sm text-sm flex gap-4 items-center">
                <span className="font-semibold">Сортироваь по:</span>
                <span
                  onClick={() => setSort(false)}
                  className="cursor-pointer py-1 px-2 rounded-sm bg-slate-100"
                >
                  названию
                </span>
                <span
                  onClick={() => setSort(true)}
                  className="cursor-pointer py-1 px-2 rounded-sm bg-slate-100"
                >
                  цене
                </span>
                <span
                  onClick={() => setSortStart(!sortStart)}
                  className="cursor-pointer py-1 px-2 rounded-sm bg-slate-100"
                >
                  <HiOutlineArrowsUpDown size={18} />
                </span>
              </div>
            </div>
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
              />
              {/* <div
                onClick={addProducts}
                className="px-2 py-1 h-8 bg-slate-500 rounded-sm cursor-pointer hover:bg-orange-500"
              >
                Показать еще
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Shop;
