import axios from "axios";
import { GetServerSideProps } from "next";

type Description = {
  id: number;
  productId: number;
  title: string;
  description: string;
};

// {
//   id: 173,
//   productId: 16,
//   title: 'Мощность охлаждения: кВт.',
//   description: '6.1'
// },
// {
//   id: 174,
//   productId: 16,
//   title: 'Тип компрессора:',
//   description: 'не инвертор'
// },

type Brand = { id: number; name: string; brandСountry: string };
// { id: 6, name: 'Energolux', 'brandСountry': 'Швейцария' }
type Type = { id: number; typeName: string };
// { id: 2, typeName: 'Мульти сплит-система' }
type Product = {
  id: number;
  name: string;
  vendorcode: string;
  price: number;
  logo: string;
  numberOfViews: number;
  hit: boolean;
  imges: string[];
  brandId: number;
  typeId: number;
  descriptions: Description[];
  brand: Brand;
  type: Type;
};

type ApiResponse = {
  count: number;
  rows: Product[];
};

const getAllProducts = async (): Promise<ApiResponse> => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/products/pagin`,
    {
      filtering: {
        limit: 1000,
        offset: 0,
      },
    }
  );

  return data;
};

const getBrands = async (): Promise<Brand[]> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/brand`
  );
  return data;
};
const getTypes = async (): Promise<Type[]> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/type`
  );
  return data;
};

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = "https://kondish.su";

  const data = await getAllProducts();
  const types = await getTypes();
  const brands = await getBrands();

  const sitemap = `
  <yml_catalog date="${new Date()
    .toISOString()
    .slice(0, 16)
    .replace("T", " ")}">
    <shop>
        <name>KONDISH</name>
        <company>Kondish</company>
        <url>${BASE_URL}/</url>
        <brands>
          ${brands
            .map(
              (brand) =>
                `<brand url="${BASE_URL}/shop?brand=${brand.id}">${brand.name}</brand>`
            )
            .join("")}
        </brands>
        <categories>
          ${types
            .map(
              (type) =>
                `<category url="${BASE_URL}/shop?type=${type.id}" id="${type.id}">${type.typeName}</category>`
            )
            .join("")}
        </categories>
        <offers>
        ${data.rows
          .map(
            (product) =>
              `<offer type="vendor.model" available="${
                product.price > 0 ? "true" : "false"
              }" id="${product.id}">
            <url>${BASE_URL}/shop/${product.id}</url>
            <price>${product.price}.00</price>
            <currencyId>RUR</currencyId>
            <categoryId>${product.type.id}</categoryId>
            <picture>${process.env.NEXT_PUBLIC_SERVER_URI}/prod/${
                product?.logo
              }.png</picture>
            <typePrefix>${product.type.typeName}</typePrefix>
            <vendor>${product.brand.name}</vendor>
            <model>${product.name}</model>
            <sales_notes>Можем установить</sales_notes>
            <manufacturer_warranty>true</manufacturer_warranty>
            <vendorCode>${product.vendorcode}</vendorCode>
            ${product.hit ? "<label>Хит</label>" : ""}
            <param name="popularity">${product.numberOfViews}</param>
            ${product.descriptions
              .map(
                (description) =>
                  `<param name="${description.title}">${description.description}</param>`
              )
              .join("")}
          </offer>`
          )
          .join("")}
          
        </offers>
    </shop>
  </yml_catalog>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
