<template>
  <div
    v-if="products.length > 0"
    class="grid grid-cols-2 md:grid-cols-5 gap-5 my-5"
  >
    <motion.div
      @click="openProductInfoPage(product.id)"
      :while-hover="{
        scale: 1.08,
      }"
      :key="product.id"
      class="bg-white p-2 rounded-xl shadow-sm cursor-pointer group relative overflow-hidden"
      v-for="(product, _) in products"
    >
      <div
        class="bg-gray-200 rounded-lg h-44 flex items-center overflow-hidden p-3 justify-center"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="group-hover:scale-115 transition-all ease-in-out duration-900"
        />
      </div>
      <div class="flex flex-col h-52 items-start p-2 justify-start gap-2">
        <h6 class="line-clamp-1 font-medium">{{ product.title }}</h6>
        <h5 class="text-xl font-medium text-primary">
          {{ product.price.toLocaleString() + " $ " }}
        </h5>
        <span class="text-[10px] p-1 bg-gray-100 rounded-md text-gray-700">{{
          product.brand
        }}</span>
        <p class="text-xs line-clamp-3">
          {{ product.description }}
        </p>
      </div>
      <button
        class="bg-primary flex items-center justify-between w-full absolute bottom-0 left-0 p-2 text-white"
      >
        see details
        <ArrowRight :size="20" />
      </button>
    </motion.div>
  </div>
  <div v-else class="flex flex-col items-center justify-center gap-5 p-5">
    <ShoppingBag :size="72" class="rotate-45 text-primary" />
    <p class="text-2xl font-medium my-2">no items found</p>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ShoppingBag } from "lucide-vue-next";
import { motion } from "motion-v";
import type { Product } from "~/types/products";

const router = useRouter();
interface Props {
  products: Product[];
}

defineProps<Props>();

const openProductInfoPage = (productId: number) => {
  router.push(`/shop/${productId}`);
};
</script>
