import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SelectProductStore {
  product: any;
  loading: boolean;
  error: any;
  fetchProduct: (id: number) => void;
  restor: () => void;
}

const useSelectProduct = create<SelectProductStore>((set) => ({
  product: {},
  loading: false,
  error: null,
  fetchProduct: async (id) => {
    set({ loading: true });
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/products/${id}`
      );
      if (!data.ok) throw data;
      set({ product: await data.json() });
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
  restor: () => {
    set({ product: {} });
  },
}));

export default useSelectProduct;
