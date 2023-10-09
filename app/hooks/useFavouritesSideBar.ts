import { create } from "zustand";

interface UseFavouritesSideBar {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFavouritesSideBar = create<UseFavouritesSideBar>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFavouritesSideBar;
