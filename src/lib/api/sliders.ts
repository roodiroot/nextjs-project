import { ImageForProduct } from "./products";

export interface HeroScreens {
  documentId: string;
  // title?: string;
  // subtitle?: string;
  // description?: string;
  // link?: string;
  // buttonText?: string;
  image?: ImageForProduct;
}

export const getHeroScreens = async (params?: string): Promise<HeroScreens[] | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/api/hero-screens?${params}`,
    );

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.message || "Ошибка получения блока");
    }

    return (await response.json()).data;
  } catch (error) {}
};
