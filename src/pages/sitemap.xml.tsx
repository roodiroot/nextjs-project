import * as fs from "fs";
import { GetServerSideProps } from "next";

// type Product = {
//   brand?: any;
//   brandId?: number;
//   descriptions?: any;
//   hit?: boolean | null;
//   id: number | string;
//   imges?: any;
//   logo?: any;
//   name?: string;
//   numberOfViews?: number;
//   price?: number;
//   type?: any;
//   typeId?: number;
//   vendorcode?: string;
// };

function getAllProducts(): number[] {
  return [
    14, 12, 81, 13, 98, 80, 99, 5, 4, 103, 68, 15, 77, 44, 34, 84, 69, 59, 104,
    45, 83, 19, 100, 76, 35, 28, 94, 6, 20, 95, 25, 29, 3, 26, 78, 37, 36, 71,
    30, 1, 46, 7, 9, 82, 75, 22, 106, 105, 61, 38, 73, 21, 65, 2, 31, 24, 96,
    62, 66, 8, 43, 63, 89, 74, 23, 91, 67, 48, 79, 49, 92, 27, 18, 101, 72, 47,
    64, 60, 17, 85, 102, 32, 86, 97, 16, 87, 33, 50, 93, 88, 51,
  ];
}

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = "https://kondish.su";

  const products: number[] = getAllProducts(); // Здесь может быть вызов с любого API

  const dynamicPaths = products.map((singleProduct) => {
    return `${BASE_URL}/shop/${singleProduct}`;
  });

  const staticPaths = fs
    .readdirSync("src/pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.tsx",
        "_document.tsx",
        "404.tsx",
        "sitemap.xml.tsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.split(".")[0]}`;
    });

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="${BASE_URL}/sitemap.xml">}">
      ${allPaths
        .map(
          (url) =>
            `<url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
