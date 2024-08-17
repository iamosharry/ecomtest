import { create } from "zustand";
interface CounterStore {
  show: boolean;
  setShow: () => void;
}

const useToggle = create<CounterStore>((set) => ({
  show: false,
  setShow: () => set((state) => ({ show: !state.show })),
}));

export default useToggle;
