import { create } from "zustand";

interface BannerShow {
  isOpen: boolean;
  openBanner: () => void;
  closeBanner: () => void;
}

const useBanner = create<BannerShow>((set) => ({
  isOpen: false,
  openBanner: () => {
    set((state) => ({ isOpen: true }));
  },
  closeBanner: () => {
    set((state) => ({ isOpen: false }));
  },
}));

export default useBanner;
