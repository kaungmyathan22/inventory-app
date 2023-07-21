import { useCartStore } from "@/stores/cart.store";
import { useMemo } from "react";

const useContainer = () => {
  const { isCartOpen, toggleCart, cartItems } = useCartStore();
  function handleToggle() {
    toggleCart(!isCartOpen);
  }
  const productCounts = useMemo(
    () => cartItems.reduce((prev, next) => prev + next.quantity, 0),
    [cartItems]
  );

  return {
    productCounts,
    handleToggle,
  };
};

export default useContainer;
