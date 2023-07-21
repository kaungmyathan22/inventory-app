import ImageWithFallback from "@/shared/ImageWithFallback";
import { IProduct } from "@/types/model";
import { EmptyImagePlaceholder } from "../../../shared/EmptyImagePlaceholder";
import { PriceItem } from "./PriceItem";

interface IProductItemProps {
  product: IProduct;
}
export function ProductItem({ product }: IProductItemProps) {
  return (
    <div className="product">
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
