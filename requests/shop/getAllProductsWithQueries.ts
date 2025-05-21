import type { Product } from "~/types/products";

const baseUrl = "https://dummyjson.com/products";
export const getAllProductsWithQueries = async (
  sortBy: ComputedRef,
  order: ComputedRef,
  limit: number,
  searchParam: ComputedRef
): Promise<{ products: Product[]; total: number }> => {
  const targetUrl =
    searchParam.value !== ""
      ? `/search?q=${searchParam.value}`
      : `?sortBy=${sortBy.value}&&limit=${limit}&&order=${order.value}`;
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

export const getAllProductsWithParams = async (
  sortBy: ComputedRef,
  order: ComputedRef,
  limit: number,
  searchParam: ComputedRef,
  pageNumber: number = 1
): Promise<{
  products: Product[];
  total: number;
  hasMore: boolean;
  nextPage: number | undefined;
}> => {
  const skip = (pageNumber - 1) * limit;
  const targetUrl =
    searchParam.value !== ""
      ? `/search?q=${searchParam.value}`
      : `?sortBy=${sortBy.value}&&limit=${limit}&&order=${order.value}`;

  const response = await fetch(baseUrl + targetUrl, {
    headers: {
      "content-type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("cant get prodcuts with this params");
  }

  const { products, total } = await response.json();

  const hasMore = skip + products.length < total;
  const nextPage = hasMore ? pageNumber + 1 : undefined;

  return {
    products,
    total,
    hasMore,
    nextPage,
  };
};
