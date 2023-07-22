import { ICategory } from "@/types/model";
import cn from "classnames";

interface IChipProps {
  category: ICategory;
  handleSelect: () => void;
  isSelected?: boolean;
}

export function Chip({ isSelected, category, handleSelect }: IChipProps) {
  return (
    <div
      className={cn("px-3 py-1 rounded-2xl bg-gray-100 cursor-pointer", {
        "bg-primary-500": isSelected,
      })}
      onClick={handleSelect}
      key={category.id}
    >
      <p
        className={cn("text-gray-700 text-sm font-medium leading-5", {
          "text-white": isSelected,
        })}
      >
        {category.name}
      </p>
    </div>
  );
}
