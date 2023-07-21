import { useCartStore } from "@/stores/cart.store";
import { IPrice } from "@/types/model";
import { useMemo } from "react";

const useContainer = () => {
  const { isCartOpen, toggleCart, cartItems, clearCart } = useCartStore();

  const subTotal: IPrice = useMemo(
    () =>
      cartItems.reduce(
        (prev, cur) => {
          return {
            ...prev,
            amount: prev.amount + cur.quantity * cur.product.price.amount,
          };
        },
        { amount: 0, currency: "Ks", prepend: true } as IPrice
      ),
    [cartItems]
  );
  const tax: IPrice = {
    prepend: true,
    currency: "Ks",
    amount: subTotal.amount * 0.05,
  };
  const total: IPrice = {
    prepend: true,
    currency: "Ks",
    amount: tax.amount + subTotal.amount,
  };

  // handler function
  function onClose() {
    toggleCart(!isCartOpen);
  }

  function payNowHandler() {
    clearCart();
  }

  return {
    onClose,
    cartItems,
    payNowHandler,
    subTotal,
    tax,
    total,
  };
};

export default useContainer;
