import { PriceItem } from "@/features/product/components/PriceItem";
import { CartItem } from "@/shared/components/CartItem/CartItem";
import BoxIcon from "@/shared/Icon/BoxIcon";
import IfElse from "@/shared/IfElse";
import { PrimaryButton } from "@/shared/PrimaryButton";
import { motion } from "framer-motion";
import useContainer from "./useContainer";

export const CartMenu = ({ isOpen }: { isOpen: boolean }) => {
  const { onClose, cartItems } = useContainer();
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
        <IfElse
          isTrue={cartItems.length === 0}
          ifBlock={
            <div className="flex items-center justify-center flex-col flex-1 gap-y-6">
              <BoxIcon />
              <p className="text-2xl font-medium">Uhhh ohhh...it's empty 😢</p>
            </div>
          }
          elseBlock={
            <>
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
                    Tax (5%)
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
            </>
          }
        />
      </motion.div>
    </motion.div>
  );
};
