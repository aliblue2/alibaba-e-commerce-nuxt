import { defineStore } from "pinia";
import type { Product } from "~/types/products";

interface useBasketStore {
  items: Product[];
}

export const useBasketStore = defineStore("basketStore", {
  state: (): useBasketStore => ({
    items: [],
  }),

  actions: {
    addToBasketStore: (product: Product) => {},
    removeFromBasket: (prodcut: Product) => {},
    clearBasket: () => {},
  },
});
