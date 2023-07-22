import BagIcon from "@/shared/Icon/BagIcon";
import SearchIcon from "@/shared/Icon/SearchIcon";
import useContainer from "./useContainer";

export function Navbar() {
  const { productCounts, handleToggle, onChangeHandler } = useContainer();
  return (
    <div className="flex flex-col gap-y-6 pb-3">
      <div className="flex justify-between">
        <img
          src="/assets/klink-blue.png"
          alt=""
          className="w-[150px] h-[30px] object-cover"
        />
        <div className="hidden md:flex sm:w-[448px]">
          <SearchInput onChange={onChangeHandler} />
        </div>
        <button onClick={handleToggle} className="relative">
          <div className="bg-red-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center absolute -right-1 -top-1">
            {productCounts}
          </div>
          <BagIcon />
        </button>
      </div>
      <div className="flex md:hidden w-full">
        <SearchInput onChange={onChangeHandler} />
      </div>
    </div>
  );
}

function SearchInput({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="input flex items-center w-full p-0 px-3 py-1 rounded-lg">
      <input
        onChange={onChange}
        type="Search"
        className="flex-1 outline-none"
        placeholder="Search"
      />
      <button className="bg-primary-600 py-2 px-2 flex items-center justify-center w-20 rounded-full h-[38px]">
        <SearchIcon />
      </button>
    </div>
  );
}
