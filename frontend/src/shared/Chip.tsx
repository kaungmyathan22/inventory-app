import { ICategory } from "@/types/model";

export function Chip({ category }: { category: ICategory }) {
  return (
    <div className="px-3 py-1 rounded-2xl bg-gray-100" key={category.id}>
      <p className="text-gray-700 text-sm font-medium leading-5">
        {category.name}
      </p>
    </div>
  );
}
