<template>
  <ShopCartContainer :cart-items-list="basketItems" />
</template>

<script lang="ts" setup>
const basketStore = useBasketStore();

const basketItems = computed(() => basketStore.getBasketItems);

onMounted(() => {
  basketStore.loadBasket();
});
</script>
