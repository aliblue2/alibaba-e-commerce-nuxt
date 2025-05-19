import type { Product } from "~/types/products";

export interface ProductItem {
  product: Product;
  quantity: number;
}

export interface BasketStore {
  items: ProductItem[];
}

export const useBasketStore = defineStore("basket", {
  state: (): BasketStore => ({
    items: [],
  }),
  actions: {
    addToBasket(product: Product) {
      const existingItemIndex = this.items.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        const updatedItem = {
          ...this.items[existingItemIndex],
          quantity: this.items[existingItemIndex].quantity + 1,
        };

        this.items.splice(existingItemIndex, 1, updatedItem);
      } else {
        this.items.push({ product, quantity: 1 });
      }
      localStorage.setItem("basketItems", JSON.stringify(this.items));
    },
    removeFromBasket(product: Product) {
      const finalItems = this.items.filter(
        (item) => item.product.id !== product.id
      );

      this.items = finalItems;
      localStorage.setItem("basketItems", JSON.stringify(this.items));
    },
    changeQuantity(productId: number, flag: "increase" | "decrease") {
      const targetItemIndex = this.items.findIndex(
        (item) => item.product.id === productId
      );

      if (flag === "increase") {
        this.items[targetItemIndex].quantity += 1;
      } else {
        if (this.items[targetItemIndex].quantity > 1) {
          this.items[targetItemIndex].quantity -= 1;
        }
      }
      localStorage.setItem("basketItems", JSON.stringify(this.items));
    },
    clearBasket() {
      this.items = [];
      localStorage.setItem("basketItems", JSON.stringify(this.items));
    },

    loadBasket() {
      const savedBasket = localStorage.getItem("basketItems");

      if (savedBasket) {
        const basketItems = JSON.parse(savedBasket);
        this.items = [...basketItems];
      }
    },
  },
  getters: {
    getBasketItems(): ProductItem[] {
      return this.items;
    },
  },
});
