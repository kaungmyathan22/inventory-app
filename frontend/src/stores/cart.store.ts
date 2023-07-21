import { ICartItem, IProduct } from "@/types/model";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

type State = {
  cartItems: ICartItem[];
  isCartOpen: boolean;
};

type UpdateCartPayload = {
  product: IProduct;
  action: "increment" | "decrement";
};

type Action = {
  toggleCart: (isCartOpen: State["isCartOpen"]) => void;
  addItem: (product: IProduct) => void;
  removeItem: (productId: string) => void;
  updateCartItem: (payload: UpdateCartPayload) => void;
};

export const useCartStore = create<State & Action>((set) => ({
  isCartOpen: false,
  cartItems: [],
  toggleCart: (isCartOpen) => set(() => ({ isCartOpen: isCartOpen })),
  addItem: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, { id: uuidv4(), product, quantity: 1 }],
    })),
  removeItem: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.product.id !== productId
      ),
    })),
  updateCartItem: ({ product, action }: UpdateCartPayload) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        const updatedItems = [...state.cartItems];
        if (action === "increment") {
          updatedItems[existingItemIndex].quantity += 1;
        } else if (action === "decrement") {
          updatedItems[existingItemIndex].quantity -= 1;
          console.log(updatedItems[existingItemIndex].quantity);
          if (updatedItems[existingItemIndex].quantity <= 0) {
            // If quantity becomes zero or negative, remove the item from the cart
            updatedItems.splice(existingItemIndex, 1);
          }
        }
        return { cartItems: updatedItems };
      } else {
        // If the item is new, add it to the cart
        return {
          cartItems: [
            ...state.cartItems,
            { product, quantity: 1, id: uuidv4() },
          ],
        };
      }
    }),
}));
