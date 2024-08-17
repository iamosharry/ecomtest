import { create } from "zustand";
interface User {
  signUp: boolean;
  setSignUp: () => void;
  toggleSignUp: () => void;
}

const useHere = create<User>((set) => ({
  signUp: false,
  setSignUp: () => set({ signUp: true }),
  toggleSignUp: () => set((state) => ({ signUp: !state.signUp })),
}));

export default useHere;
