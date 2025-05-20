<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
    <ProductsProductSkeletonCard v-for="i in tempArr" :key="i" />
  </div>
</template>

<script lang="ts" setup>
const tempArr = new Array(10);
</script>
