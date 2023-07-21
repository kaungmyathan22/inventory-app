import { create } from "zustand";
type State = {
  isCartOpen: boolean;
};

type Action = {
  toggleCart: (isCartOpen: State["isCartOpen"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useCartStore = create<State & Action>((set) => ({
  isCartOpen: false,
  toggleCart: (isCartOpen) => set(() => ({ isCartOpen: isCartOpen })),
}));
