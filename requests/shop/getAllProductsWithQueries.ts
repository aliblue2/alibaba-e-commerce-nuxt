import type { LocationQueryValue } from "vue-router";
import type { ComputedRef } from "vue";
import type { Product } from "~/types/products";

const baseUrl = "https://dummyjson.com/products";

export const getAllProductsWithQueries = async (
  order: ComputedRef<string | LocationQueryValue[]>,
  sortBy: ComputedRef<string | LocationQueryValue[]>,
  limit: number,
  searchParam: ComputedRef<string | LocationQueryValue[]>,
  pageNumber: number = 1
): Promise<{
  products: Product[];
  hasMore: boolean;
  nextPage: number | null;
}> => {
  const skip = (pageNumber - 1) * limit;
  const targetUrl =
    searchParam.value !== ""
      ? `/search?q=${encodeURIComponent(
          searchParam.value as string
        )}&limit=${limit}&skip=${skip}`
      : `?sortBy=${encodeURIComponent(
          sortBy.value as string
        )}&order=${encodeURIComponent(
          order.value as string
        )}&limit=${limit}&skip=${skip}`;

  const response = await fetch(baseUrl + targetUrl);

  if (!response.ok) {
    throw new Error("cant get all shop products");
  }

  const { products, total } = await response.json();
  const hasMore = skip + products.length < total;
  const nextPage = hasMore ? pageNumber + 1 : null;

  console.log(hasMore);
  console.log(nextPage);

  return {
    products,
    hasMore,
    nextPage,
  };
};
