<template>
  <motion.div
    :initial="{
      top: -200,
      opacity: 0,
    }"
    :exit="{
      top: -200,
      opacity: 0,
    }"
    :animate="{
      top: 75,
      opacity: 1,
    }"
    :transition="{
      type: 'spring',
      bounce: 0.5,
      duration: 0.5,
    }"
    class="absolute flex-col items-center justify-start gap-3 divide-y-2 divide-primary/50 md:flex hidden z-30 w-[450px] bg-white p-5 rounded-xl shadow-xl border border-primary"
  >
    <div
      v-if="items.length > 0"
      v-for="item in items"
      class="flex my-3 items-center relative py-2 border-dashed w-full gap-2 justify-between"
    >
      <img
        :src="item.product.thumbnail"
        class="max-w-16 rounded-full bg-gray-200 border border-primary"
        :alt="item.product.title"
        loading="lazy"
      />
      <h6 class="font-medium truncate max-w-44">{{ item.product.title }}</h6>
      <div class="flex items-center gap-2">
        <PlusCircle
          :size="20"
          class="hover:bg-primary hover:text-white hover:scale-110 rounded-full transition-colors duration-300"
          v-on:click="changeQuantity(item.product.id, 'increase')"
        />
        {{ item.quantity }}
        <MinusCircle
          v-on:click="changeQuantity(item.product.id, 'decrease')"
          :size="20"
          class="hover:bg-primary hover:text-white hover:scale-110 rounded-full transition-colors duration-300"
        />
      </div>
      <div class="flex items-center justify-between gap-5 w-full">
        <CustomBtn
          class="w-3/12"
          @click-handler="clearBasket"
          btn-type="outline"
          >clear all</CustomBtn
        >
        <CustomBtn class="w-9/12"> Pay {{ finalPrice }} </CustomBtn>
      </div>
    </div>
    <div v-else class="flex flex-col text-primary items-center gap-5">
      <ShoppingBag class="rotate-45" :size="64" />
      <span class="text-2xl font-medium">سبد خرید شما خالی است</span>
    </div>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import { PlusCircle, MinusCircle, ShoppingBag } from "lucide-vue-next";

interface Props {
  items: ProductItem[];
}

const props = defineProps<Props>();
const { changeQuantity, clearBasket } = useBasketStore();

const finalPrice = computed(() => {
  let tempPrice = 0;
  props.items.map((item) => {
    tempPrice += item.product.price * item.quantity;
  });
  return tempPrice;
});
</script>
