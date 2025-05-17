import type { Category } from "~/types/category";
import type { Product } from "~/types/products";

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch("https://dummyjson.com/products/categories");

  if (!response.ok) {
    throw new Error("cant get all products");
  }

  const result = await response.json();

  return result;
};

export const getAllProductsCategory = async (
  slug: string
): Promise<{ products: Product[]; total: number; limit: number }> => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${slug}`
  );

  if (!response.ok) {
    throw new Error("cant get all products with slug");
  }

  const { products, total, limit } = await response.json();
  return {
    products,
    total,
    limit,
  };
};
