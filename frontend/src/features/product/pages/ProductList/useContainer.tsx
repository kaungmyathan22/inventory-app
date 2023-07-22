import { ProductService } from "@/services/product.service";
import { useSearchStore } from "@/stores/search.store";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

const useContainer = () => {
  const { query } = useSearchStore();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  function handleCategorySelect(id: string) {
    const existingIndex = selectedCategories.findIndex(
      (category) => id === category
    );
    if (existingIndex > -1) {
      setSelectedCategories((categoryIds) =>
        categoryIds.filter((categoryId) => id !== categoryId)
      );
    } else {
      setSelectedCategories((categoryIds) => [...categoryIds, id]);
    }
  }

  function handleClearSelectedCategories() {
    setSelectedCategories([]);
  }
  const {
    isSuccess,
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    isLoading,
  } = useInfiniteQuery(
    ["product-list", query, selectedCategories.join(",")],
    ({ pageParam = 1 }) =>
      ProductService.getAllProducts(
        pageParam,
        query,
        selectedCategories.join(",")
      ),
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
  const categoriesQuery = useQuery("categories", ProductService.categories, {});
  return {
    isLoading: isLoading || categoriesQuery.isLoading,
    categories: categoriesQuery.data || [],
    products: productList,
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    handleCategorySelect,
    handleClearSelectedCategories,
    selectedCategories,
  };
};

export default useContainer;
