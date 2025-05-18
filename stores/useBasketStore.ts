import { defineStore } from "pinia";
import type { Product } from "~/types/products";

interface ProductBasket {
  product: Product;
  quantity: number;
}
interface useBasketStore {
  items: ProductBasket[];
}

export const useBasketStore = defineStore("basketStore", {
  state: (): useBasketStore => ({
    items: [],
  }),

  actions: {
    addToBasketStore(product: Product) {
      const exsitingItem = this.items.findIndex(
        (item) => item.product.id === product.id
      );

      if (exsitingItem !== -1) {
        const updatedItem = {
          ...this.items[exsitingItem],
          qunatity: (this.items[exsitingItem].quantity || 1) + 1,
        };

        this.items.splice(exsitingItem, 1, updatedItem);
      } else {
        this.items.push({ product, quantity: 1 });
      }

      localStorage.setItem("basketItems", JSON.stringify(this.items));
    },
    removeFromBasket(prodcut: Product) {
      const filteredItems = this.items.filter(
        (item) => item.product.id !== prodcut.id
      );

      this.items = filteredItems;
      localStorage.setItem("basketItems", JSON.stringify(this.items));
    },

    clearBasket() {
      this.items = [];
      localStorage.setItem("basketItems", JSON.stringify(this.items));
    },
  },

  getters: {
    getBasketItems: (state) => state.items,
    getBasketItemsSize: (state) => state.items.length,
  },
});
