import { toast } from "react-hot-toast";
import { create } from "zustand";

interface BasketStore {
  basketList: any[];
  summ: number;
  addInBasket: (obj: any) => void;
  remooveElement: (id: number) => void;
  reset: () => void;
  _updateStore: (list: any, text: string) => void;
}

const useBasketStore = create<BasketStore>((set, get) => ({
  basketList: [],
  summ: 0,
  _updateStore: (basketList: any, text: string) => {
    set({ basketList });
    set({ summ: get().basketList.reduce((s, i) => (s = s + i.price), 0) });
    toast.success(text);
  },
  addInBasket: (obj: any) => {
    const basket = get().basketList;
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === obj.id) {
        toast.error("Товар уже есть в корзине");
        return;
      }
    }
    const basketList = [...get().basketList, obj];
    get()._updateStore(basketList, "Товар добавлен в корзину");
  },
  remooveElement: (id) => {
    const basketList = get().basketList.filter((i) => i.id !== id);
    get()._updateStore(basketList, "Товар удален из корзины");
  },
  reset: () => {
    set({ basketList: [], summ: 0 });
  },
}));

export default useBasketStore;
