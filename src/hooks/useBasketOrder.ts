import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BasketOrderState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setTotal: (r: any) => void;
  total: any;
  prod: [];
  setProd: (r: any) => void;
}

const useBasketOrder = create<BasketOrderState>((set, get) => ({
  isOpen: false,
  onOpen: () =>
    set((state) => ({
      isOpen: true,
    })),
  onClose: () => set({ isOpen: false }),
  total: {},
  setTotal: (summ) => set({ total: summ }),
  prod: [],
  setProd: (r) => {
    set({ prod: r });
  },
}));

export default useBasketOrder;
