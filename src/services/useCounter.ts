import { create } from "zustand";
interface CounterStore {
  counterVisible: boolean;
  setCounterVisible: () => void;
}

const useCounter = create<CounterStore>((set) => ({
  counterVisible: false,
  setCounterVisible: () =>
    set((state) => ({ counterVisible: !state.counterVisible })),
}));

export default useCounter;
