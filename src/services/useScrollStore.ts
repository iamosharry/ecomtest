import { create } from "zustand";

interface ScrollStore {
  sectionId: string | null;
  setSectionId: (id: string) => void;
}

const useScrollStore = create<ScrollStore>((set) => ({
  sectionId: null,
  setSectionId: (id) => set({ sectionId: id }),
}));

export default useScrollStore;
