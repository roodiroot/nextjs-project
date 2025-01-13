import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductStore {
  products: any;
  count: number;
  loading: boolean;
  error: string | null;
  fetchProducts: (filters: {
    filtering: {
      between: number[];
    };
  }) => any;
}

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  count: 0,
  loading: false,
  error: null,
  fetchProducts: async (filters) => {
    try {
      set({ loading: true });
      // console.log(filters.filtering.between[0]);

      if (filters.filtering.between[0] === 0) {
        filters.filtering.between[0] = 1;
      }
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/products/pagin`,
        filters
      );
      set({ products: data.rows, count: data.count });
      return { products: get().products, count: get().count };
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
