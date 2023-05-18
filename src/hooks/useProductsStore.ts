import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductStore {
  products: any;
  loading: boolean;
  error: string | null;
  fetchProducts: (filters: {}) => any;
}

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async (filters) => {
    try {
      set({ loading: true });
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/products/pagin`,
        filters
      );
      set({ products: data.rows });
      return get().products;
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
