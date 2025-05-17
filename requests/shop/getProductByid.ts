import type { Product } from "~/types/products";

export const getProductsInfoById = async (
  productId: number
): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!response.ok) {
    throw new Error("cant get product info ");
  }

  const product = await response.json();

  return product;
};
