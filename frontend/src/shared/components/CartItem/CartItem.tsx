import { PriceItem } from "@/features/product/components/PriceItem";
import ImageWithFallback from "@/shared/components/ImageWithFallback/ImageWithFallback";
import { EmptyImagePlaceholder } from "@/shared/EmptyImagePlaceholder";
import CloseIcon from "@/shared/Icon/CloseIcon";
import MinusIcon from "@/shared/Icon/MinusIcon";
import PlusIcon from "@/shared/Icon/PlusIcon";
import { ICartItem } from "@/types/model";
import useContainer from "./useContainer";

interface ICartItemProps {
  cartItem: ICartItem;
}
export function CartItem({ cartItem }: ICartItemProps) {
  const { product, incrementCartHandler, decrementCartHandler, removeItem } =
    useContainer({ cartItem });
  return (
    <div className="flex gap-x-3">
      {/* product image */}
      <div className="h-[104px] min-w-[104px]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          fallback={
            <EmptyImagePlaceholder iconSize={{ width: 48, height: 48 }} />
          }
        />
      </div>
      {/* product meta */}
      <div className="flex flex-col">
        <p className="text-black text-base font-medium leading-5">
          {product.name}
        </p>
        <div className="flex gap-x-3 mt-3">
          <div className="flex items-center">
            <button
              onClick={decrementCartHandler}
              className="p-3 rounded-l-lg border border-r-0 border-gray-300"
            >
              <MinusIcon />
            </button>
            <div className="p-4 py-[10px] border border-gray-300">
              {cartItem.quantity}
            </div>
            <button
              onClick={incrementCartHandler}
              className="p-3 border rounded-r-lg border-l-0 border-gray-300"
            >
              <PlusIcon />
            </button>
          </div>
          <PriceItem className="font-medium" price={product.price} />
        </div>
      </div>
      <div>
        <CloseIcon
          className="cursor-pointer"
          onClick={() => removeItem(product.id)}
        />
      </div>
    </div>
  );
}
