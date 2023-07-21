import { useCartStore } from "@/stores/cart.store";
import { ICartItem } from "@/types/model";

interface ICartItemProps {
  cartItem: ICartItem;
}
const useContainer = ({ cartItem }: ICartItemProps) => {
  const { product } = cartItem;
  const { updateCartItem, removeItem } = useCartStore();
  function incrementCartHandler() {
    updateCartItem({ product, action: "increment" });
  }
  function decrementCartHandler() {
    updateCartItem({ product, action: "decrement" });
  }
  return {
    product,
    incrementCartHandler,
    decrementCartHandler,
    removeItem,
  };
};

export default useContainer;
