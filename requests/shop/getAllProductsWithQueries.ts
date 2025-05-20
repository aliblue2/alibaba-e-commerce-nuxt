import type { LocationQueryValue } from "vue-router";
import type { Product } from "~/types/products";

export const getAllProductsWithQueries = async (
  sortBy: string | LocationQueryValue[],
  order: string | LocationQueryValue[],
  limit: string | LocationQueryValue[],
  skip: string | LocationQueryValue[]
): Promise<Product[]> => {
  const response = await fetch(
    `https://dummyjson.com/products?sortBy=${sortBy}&&limit=${limit}&&skip=${skip}&&order=${order}`
  );

  if (!response.ok) {
    throw new Error("cant get prodcuts ");
  }

  const { products } = await response.json();
  return products;
};
