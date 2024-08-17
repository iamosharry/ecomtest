import { create } from "zustand";

interface Store {
  store: string[];
  setStore: (items: string[]) => void;
}

const useCategory = create<Store>((set) => ({
  store: [],
  // Replace the existing items in the store with the new items
  setStore: (items) => set({ store: items }), // Replaces existing categories
}));

export default useCategory;
