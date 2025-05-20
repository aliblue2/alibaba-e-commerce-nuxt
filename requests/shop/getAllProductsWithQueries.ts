import type { Product } from "~/types/products";

const baseUrl = "https://dummyjson.com/products";
export const getAllProductsWithQueries = async (
  sortBy: ComputedRef,
  order: ComputedRef,
  limit: ComputedRef,
  skip: ComputedRef,
  searchParam: ComputedRef
): Promise<{ products: Product[]; total: number }> => {
  const targetUrl =
    searchParam.value !== ""
      ? `/search?q=${searchParam.value}`
      : `?sortBy=${sortBy.value}&&limit=${limit.value}&&skip=${skip.value}&&order=${order.value}`;
  const response = await fetch(baseUrl + targetUrl);

  console.log(baseUrl + targetUrl);

  if (!response.ok) {
    throw new Error("cant get prodcuts ");
  }

  const { products, total } = await response.json();
  return {
    products,
    total,
  };
};
