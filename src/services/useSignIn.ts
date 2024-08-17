import { create } from "zustand";
interface User {
  signIn: boolean;
  setSignIn: () => void;
  toggleSignIn: () => void;
}

const useSignIn = create<User>((set) => ({
  signIn: false,
  setSignIn: () => set({ signIn: true }),
  toggleSignIn: () => set((state) => ({ signIn: !state.signIn })),
}));

export default useSignIn;
