import { create } from "zustand";

interface ShowMobilMenu {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
}

const useShowMobilMenu = create<ShowMobilMenu>((set, get) => ({
  isOpen: false,
  toggle: () => {
    set({
      isOpen: !get().isOpen,
    });
  },
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
}));

export default useShowMobilMenu;
