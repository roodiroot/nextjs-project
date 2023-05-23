import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SelectTypeAndBrandStore {
  types: any;
  brands: any;
  loadingT: boolean;
  loadingB: boolean;
  errorT: any;
  errorB: any;
  fetchBrands: () => void;
  fetchTypes: () => void;
  restor: () => void;
}

const useTypeAndBrand = create<SelectTypeAndBrandStore>((set) => ({
  types: [],
  brands: [],
  loadingT: false,
  loadingB: false,
  errorT: null,
  errorB: null,
  fetchBrands: async () => {
    set({ loadingB: true });
    await axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URI}/brand`)
      .then((d) => {
        set({ brands: d.data });
      })
      .catch((d) => set({ errorB: d }))
      .finally(() => set({ loadingB: false }));
  },
  fetchTypes: async () => {
    set({ loadingT: true });
    await axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URI}/type`)
      .then((d) => {
        set({ types: d.data });
      })
      .catch((d) => set({ errorT: d }))
      .finally(() => set({ loadingT: false }));
  },
  restor: () => {
    set({ types: {}, brands: {} });
  },
}));

export default useTypeAndBrand;
