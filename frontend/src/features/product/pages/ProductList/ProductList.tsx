import { ProductItem } from "@/features/product/components/ProductItem";
import { Chip } from "@/shared/Chip";
import If from "@/shared/If";
import IfElse from "@/shared/IfElse";
import { Loader } from "@/shared/Loader";
import { PrimaryButton } from "@/shared/PrimaryButton";
import useContainer from "./useContainer";

const ProductList = () => {
  const {
    selectedCategories,
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    categories,
    handleCategorySelect,
    handleClearSelectedCategories,
  } = useContainer();
  return (
    <div>
      <div className="flex flex-wrap mt-8 gap-2 pb-6">
        <Chip
          isSelected={
            selectedCategories.length === 0 ||
            selectedCategories.length === categories.length
          }
          handleSelect={handleClearSelectedCategories}
          key={0}
          category={{
            id: `${Date.now()}`,
            name: "All",
          }}
        />
        {categories.map((category) => (
          <Chip
            key={category.id}
            isSelected={selectedCategories.includes(category.id)}
            handleSelect={() => handleCategorySelect(category.id)}
            category={category}
          />
        ))}
      </div>
      <IfElse
        isTrue={isLoading}
        ifBlock={
          <div className="w-full min-h-[300px] flex items-center justify-center">
            <Loader borderColor="border-black" />
          </div>
        }
        elseBlock={
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-2">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        }
      />

      <If
        isTrue={!!(hasNextPage && !isLoading)}
        ifBlock={
          <div className="mx-auto w-fit">
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
