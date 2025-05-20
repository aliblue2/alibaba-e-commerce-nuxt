<template>
  <section class="bg-white rounded-xl divide-y-2 p-5 shadow-sm my-5">
    <main class="w-full" v-if="cartItemsList.length > 0">
      <div
        v-for="item in cartItemsList"
        class="flex my-3 items-center relative py-2 border-dashed w-full gap-2 justify-between"
      >
        <img
          :src="item.product.thumbnail"
          class="w-20 h-20 rounded-full bg-gray-200 border border-primary"
          :alt="item.product.title"
          loading="lazy"
        />
        <div class="flex items-center w-full justify-center gap-5">
          <h6 class="font-medium truncate">{{ item.product.title }}</h6>
          <h5 class="text-2xl font-medium text-primary">
            {{ item.product.price }}
          </h5>
        </div>
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
    </main>

    <main
      class="flex flex-col p-5 items-center text-primary justify-center gap-10"
      v-else
    >
      <ShoppingBag :size="120" class="rotate-45" />
      <h6 class="text-2xl font-medium">your shopping cart is empty</h6>
      <CustomBtn v-on:click-handler="router.push('/')">
        see all products in shops
      </CustomBtn>
    </main>
  </section>
</template>

<script lang="ts" setup>
import { ShoppingBag, PlusCircle, MinusCircle } from "lucide-vue-next";

interface Props {
  cartItemsList: ProductItem[];
}

const router = useRouter();
const props = defineProps<Props>();
const { clearBasket, changeQuantity } = useBasketStore();
const finalPrice = computed(() => {
  let tempPrice = 0;
  props.cartItemsList.map((item) => {
    tempPrice += item.product.price * item.quantity;
  });
  return tempPrice;
});
</script>
