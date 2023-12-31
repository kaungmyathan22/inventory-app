import { CartMenu } from "@/shared/components/CartMenu/CartMenu";
import { Navbar } from "@/shared/components/Navbar/Navbar";
import If from "@/shared/If";
import { useCartStore } from "@/stores/cart.store";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";

const AdminLayout = () => {
  const { isCartOpen } = useCartStore();
  return (
    <div className="px-6 sm:px-[41px] pt-[30px] relative overflow-hidden h-screen flex flex-col font-inter">
      <Navbar />
      <div className="flex-1 overflow-auto scrollbar-hide">
        <Outlet />
      </div>
      <AnimatePresence>
        <If isTrue={isCartOpen} ifBlock={<CartMenu isOpen={isCartOpen} />} />
      </AnimatePresence>
    </div>
  );
};

export default AdminLayout;
