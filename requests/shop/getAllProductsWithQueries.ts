import type { LocationQueryValue } from "vue-router";
import type { Product } from "~/types/products";

const baseUrl = "https://dummyjson.com/products";
export const getAllProductsWithQueries = async (
  sortBy: string | LocationQueryValue[],
  order: string | LocationQueryValue[],
  limit: string | LocationQueryValue[],
  skip: string | LocationQueryValue[],
  searchParam: string | LocationQueryValue[]
): Promise<Product[]> => {
  const targetUrl = searchParam
    ? `/search?q=${searchParam}`
    : `?sortBy=${sortBy}&&limit=${limit}&&skip=${skip}&&order=${order}`;
  const response = await fetch(baseUrl + targetUrl);

  console.log(baseUrl + targetUrl);

  if (!response.ok) {
    throw new Error("cant get prodcuts ");
  }

  const { products } = await response.json();
  return products;
};
