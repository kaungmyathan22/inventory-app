import { ProductItem } from "@/features/product/components/ProductItem";
import { Chip } from "@/shared/Chip";
import If from "@/shared/If";
import IfElse from "@/shared/IfElse";
import { Loader } from "@/shared/Loader";
import { PrimaryButton } from "@/shared/PrimaryButton";
import { ICategory } from "@/types/model";
import useContainer from "./useContainer";

const ProductList = () => {
  const {
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useContainer();
  const categories: ICategory[] = Array(20)
    .fill(0)
    .map((_, i) => ({ id: `${i}`, name: `Category ${i}` }));
  console.log({ product: products[0] });
  return (
    <div>
      <div className="flex flex-wrap mt-8 gap-2 pb-6">
        <Chip
          key={0}
          category={{
            id: `${Date.now()}`,
            name: "All",
          }}
        />
        {categories.map((category) => (
          <Chip key={category.id} category={category} />
        ))}
      </div>
      <IfElse
        isTrue={isLoading}
        ifBlock={
          <div className="w-full min-h-[300px] flex items-center justify-center">
            <Loader className="border-black" />
          </div>
        }
        elseBlock={
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 lg:grid-cols-6 gap-x-2 gap-y-2">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        }
      />

      <If
        isTrue={!!(hasNextPage && !isLoading)}
        ifBlock={
          <div className="w-full mx-auto">
            <PrimaryButton
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="my-4 mx-auto w-fit"
            >
              {isFetchingNextPage ? "Loading more..." : "Load More"}
            </PrimaryButton>
          </div>
        }
      />
    </div>
  );
};

export default ProductList;
