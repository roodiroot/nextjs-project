import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductStore {
  products: any[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    try {
      set({ loading: true });
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/products`
      );
      if (!data.ok) throw data;
      set({ products: await data.json() });
    } catch (e: any) {
      let error = e;
      // custom error
      if (e.status === 400) {
        error = await e.json();
      }
      set({ error });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
