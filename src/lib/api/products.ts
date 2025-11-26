import axios from "axios";

export interface ProductsData {
  data: Product[];
  meta: Meta;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string | null;
  hit: boolean;
  available: boolean | null;
  area_of_room?: string;
  energy_efficiency_class?: string;
  compressor_type?: string;
  noise_level?: string;
  wifi_availability?: string;
  series?: string;
  sale?: number;
  heating_power?: string;
  cooling_power?: string;
  country_of_manufacturer?: string;
  warranty_period?: string;
  refrigerant?: string;
  max_pipe_length?: string | null;
  cooling_capacity?: string | null;
  color?: string;
  price?: string;
  old_price?: string | null;
  popularity?: number;
  images?: ImageForProduct[] | null;
  category?: Category;
  brand?: Brand;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  chars: CharsArray[] | [];
  reviews: ReviewsPropduct;
}

interface ReviewsPropduct {
  grade: number;
  count?: number;
}

interface CharsArray {
  Title: string;
  description?: string;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  description: string;
  slug: string;
  available: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product_catalog: ProductCatalog;
  brands: Brand[];
}

export interface ProductCatalog {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  available: boolean | null;
  image?: ImageForProduct | null;
  createdAt: string; // ISO 8601 format date string
  updatedAt: string; // ISO 8601 format date string
  publishedAt: string; // ISO 8601 format date string
}

export interface Brand {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  image?: ImageForProduct | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageForProduct {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export const fetchProducts = async (
  params: string = ""
): Promise<ProductsData | null> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URI}/api/products?${params}`;

    const response = await axios.get<ProductsData>(url);

    return response.data ?? null;
  } catch (error: any) {
    console.error("Ошибка получения списка продуктов:", error);
    return null;
  }
};
