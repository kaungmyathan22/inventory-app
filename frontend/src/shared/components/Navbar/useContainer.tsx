import { useCartStore } from "@/stores/cart.store";
import { useSearchStore } from "@/stores/search.store";
import { useMemo } from "react";

const useContainer = () => {
  const { isCartOpen, toggleCart, cartItems } = useCartStore();
  const { setSearchKeyword } = useSearchStore();
  function handleToggle() {
    toggleCart(!isCartOpen);
  }
  const productCounts = useMemo(
    () => cartItems.reduce((prev, next) => prev + next.quantity, 0),
    [cartItems]
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return {
    productCounts,
    handleToggle,
    onChangeHandler,
  };
};

export default useContainer;
