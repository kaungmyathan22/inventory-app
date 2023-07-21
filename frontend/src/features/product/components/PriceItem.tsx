import If from "@/shared/If";
import { IPrice } from "@/types/model";
import cn from "classnames";
import { HTMLAttributes } from "react";

interface IPriceItemProps extends HTMLAttributes<HTMLDivElement> {
  price: IPrice;
}

export function PriceItem({ price, ...props }: IPriceItemProps) {
  return (
    <div
      {...props}
      className={cn(
        `flex items-end font-bold text-primary-600 gap-x-1 ${props.className}`
      )}
    >
      <If
        isTrue={price.prepend}
        ifBlock={
          <p className="text-sm" style={{ verticalAlign: "baseline" }}>
            {price.currency}
          </p>
        }
      />
      <p className="text-xl">{price.amount.toLocaleString()}</p>
      <If
        isTrue={!price.prepend}
        ifBlock={
          <p
            className="text-sm font-bold"
            style={{ verticalAlign: "baseline" }}
          >
            {price.currency}
          </p>
        }
      />
    </div>
  );
}
