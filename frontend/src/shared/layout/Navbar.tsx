import { useCartStore } from "@/stores/cart.store";
import BagIcon from "../Icon/BagIcon";
import SearchIcon from "../Icon/SearchIcon";

export function Navbar() {
  const { isCartOpen, toggleCart } = useCartStore();
  function handleToggle() {
    toggleCart(!isCartOpen);
  }
  return (
    <div className="flex justify-between">
      <img src="/assets/klink-blue.png" alt="" />
      <div className="flex w-[448px]">
        <div className="input flex items-center w-full p-0 px-3 py-1 rounded-lg">
          <input type="Search" className="flex-1" placeholder="Search" />
          <button className="bg-primary-600 py-2 px-2 flex items-center justify-center w-20 rounded-full h-[38px]">
            <SearchIcon />
          </button>
        </div>
      </div>
      <button onClick={handleToggle} className="relative">
        <div className="bg-red-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center absolute -right-1 -top-1">
          4
        </div>
        <BagIcon />
      </button>
    </div>
  );
}
