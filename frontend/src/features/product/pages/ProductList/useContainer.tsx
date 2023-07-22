import { ProductService } from "@/services/product.service";
import { useInfiniteQuery } from "react-query";

const useContainer = () => {
  const {
    isSuccess,
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    isLoading,
  } = useInfiniteQuery(
    ["product-list"],
    ({ pageParam = 1 }) => ProductService.getAllProducts(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination.nextPage;
      },
    }
  );
  const productList =
    isSuccess && Array.isArray(data?.pages)
      ? data.pages.map((page) => page.items).flat()
      : [];
  return {
    isLoading,
    products: productList,
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
  };
};

export default useContainer;
