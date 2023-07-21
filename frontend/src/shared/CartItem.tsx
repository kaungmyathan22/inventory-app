import { PriceItem } from "@/features/product/components/PriceItem";
import { ICartItem } from "@/types/model";
import { EmptyImagePlaceholder } from "./EmptyImagePlaceholder";
import CloseIcon from "./Icon/CloseIcon";
import MinusIcon from "./Icon/MinusIcon";
import PlusIcon from "./Icon/PlusIcon";
import ImageWithFallback from "./ImageWithFallback";

interface ICartItemProps {
  cartItem: ICartItem;
}
export function CartItem({ cartItem }: ICartItemProps) {
  const { product } = cartItem;
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
            <div className="p-3 rounded-l-lg border border-r-0 border-gray-300">
              <MinusIcon />
            </div>
            <div className="p-4 py-[10px] border border-gray-300">
              {cartItem.quantity}
            </div>
            <div className="p-3 border rounded-r-lg border-l-0 border-gray-300">
              <PlusIcon />
            </div>
          </div>
          <PriceItem className="font-medium" price={product.price} />
        </div>
      </div>
      <div>
        <CloseIcon />
      </div>
    </div>
  );
}
