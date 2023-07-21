import { useCartStore } from "@/stores/cart.store";

const useContainer = () => {
  const { isCartOpen, toggleCart, cartItems } = useCartStore();
  function onClose() {
    toggleCart(!isCartOpen);
  }
  return {
    onClose,
    cartItems,
  };
};

export default useContainer;
