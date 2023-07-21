import { useCartStore } from "@/stores/cart.store";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";
import { CartMenu } from "../CartMenu";
import If from "../If";
import { Navbar } from "./Navbar";

const AdminLayout = () => {
  const { isCartOpen, toggleCart } = useCartStore();
  function handleToggle() {
    toggleCart(!isCartOpen);
  }
  return (
    <div className="px-[41px] pt-[30px] relative overflow-hidden h-screen flex flex-col font-inter">
      <Navbar toggleMenu={toggleCart} />
      <div className="flex-1 overflow-auto scrollbar-hide">
        <Outlet />
      </div>
      <AnimatePresence>
        <If
          isTrue={isCartOpen}
          ifBlock={<CartMenu isOpen={isCartOpen} onClose={handleToggle} />}
        />
      </AnimatePresence>
    </div>
  );
};

export default AdminLayout;
