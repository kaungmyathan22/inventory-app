import ImageWithFallback from "@/shared/components/ImageWithFallback/ImageWithFallback";
import { EmptyImagePlaceholder } from "@/shared/EmptyImagePlaceholder";
import { useCartStore } from "@/stores/cart.store";
import { IProduct } from "@/types/model";
import { PriceItem } from "./PriceItem";

interface IProductItemProps {
  product: IProduct;
}
export function ProductItem({ product }: IProductItemProps) {
  const { updateCartItem } = useCartStore();
  return (
    <div
      className="product"
      onClick={() => {
        updateCartItem({ product, action: "increment" });
      }}
    >
      {/* image section */}
      <div>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          fallback={
            <div className="h-[200px] w-full">
              <EmptyImagePlaceholder />
            </div>
          }
        />
      </div>
      <p className="text-base font-medium leading-5">{product.name}</p>
      <PriceItem price={product.price} />
    </div>
  );
}
