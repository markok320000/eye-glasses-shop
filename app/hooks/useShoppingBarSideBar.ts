import { create } from "zustand";

interface UseShoppingBagSideBarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useShoppingBagSideBar = create<UseShoppingBagSideBarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useShoppingBagSideBar;
