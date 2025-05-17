<template>
  <div class="grid grid-cols-2 md:grid-cols-5 gap-5">
    <motion.div
      @click="openProductInfoPage(product.id)"
      :while-hover="{
        scale: 1.08,
      }"
      :key="product.id + index"
      class="bg-white p-2 rounded-xl shadow-sm cursor-pointer group relative overflow-hidden"
      v-for="(product, index) in products"
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
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { motion } from "motion-v";
import type { Product } from "~/types/products";

interface Props {
  products: Product[];
}

defineProps<Props>();

const router = useRouter();

const openProductInfoPage = (productId: number) => {
  router.push(`/shop/${productId}`);
};
</script>
