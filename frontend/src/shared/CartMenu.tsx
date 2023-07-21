import { PriceItem } from "@/features/product/components/PriceItem";
import { useCartStore } from "@/stores/cart.store";
import { ICartItem } from "@/types/model";
import { motion } from "framer-motion";
import { CartItem } from "./CartItem";
import { PrimaryButton } from "./PrimaryButton";

export const CartMenu = ({ isOpen }: { isOpen: boolean }) => {
  const { isCartOpen, toggleCart } = useCartStore();
  function onClose() {
    toggleCart(!isCartOpen);
  }
  const cartItems: ICartItem[] = Array(10)
    .fill(0)
    .map((_, i) => ({
      id: `${i}`,
      product: {
        image: "",
        id: `${i}`,
        name: `Couple Shoes 2021 New One Man and One Woman Spring Korean ${i}`,
        price: {
          amount: 3000 * i + 1,
          prepend: true,
          currency: "Ks",
        },
      },
      quantity: i + 1,
    }));
  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      {/* Add your menu items and content here */}
      <motion.div
        layout
        onClick={(e) => e.stopPropagation()}
        initial={{
          x: "100%",
        }}
        animate={{
          x: isOpen ? 0 : "100%",
        }}
        exit={{
          x: "100%",
        }}
        transition={{ duration: 0.1, delay: 0.1 }}
        style={{
          boxShadow: "32px 32px 64px 0px rgba(52, 64, 84, 0.08)",
        }}
        className="w-[460px] h-screen overflow-scroll border-l bg-white border-gray-300 flex flex-col  scrollbar-hide ml-auto"
      >
        <h6 className="text-black text-2xl font-bold leading-8 pl-8 py-8">
          Order Details
        </h6>
        <div className="pl-8 pr-4 py-8 flex-1 overflow-y-scroll scrollbar-hide flex flex-col gap-y-10">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
          {/* <div className="h-[900px] w-full bg-[blue]"></div> */}
          {/* <button onClick={onClose}>Close</button> */}
        </div>
        <div className="p-8 bg-primary-25 gap-y-6 flex flex-col">
          <div className="flex justify-between">
            <p className="text-gray-600 text-base font-normal leading-5">
              Subtotal
            </p>
            <PriceItem
              price={{
                currency: "Ks",
                amount: 9000,
                prepend: true,
              }}
            />
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 text-base font-normal leading-5">
              Subtotal
            </p>
            <PriceItem
              price={{
                currency: "Ks",
                amount: 450,
                prepend: true,
              }}
            />
          </div>
          <div className="border border-dotted border-gray-300" />
          <div className="flex justify-between">
            <p className="text-gray-600 text-base font-normal leading-5">
              Total
            </p>
            <PriceItem
              price={{
                currency: "Ks",
                amount: 9450,
                prepend: true,
              }}
            />
          </div>
          <PrimaryButton>Pay Now</PrimaryButton>
        </div>
      </motion.div>
    </motion.div>
  );
};
