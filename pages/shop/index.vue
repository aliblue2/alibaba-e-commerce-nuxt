<template>
  <ShopSearchbar v-if="data" />
  <ShopFilterContainer v-if="data" />
  <ProductsPorductListSkeleton v-if="isPending" class="my-10" />
  <ProductsProductList v-else-if="data" :products="data.products" />
  <ScopedErrorCompo v-else-if="isError" :refetch-fc="refetch" />
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getAllProductsWithQueries } from "~/requests/shop/getAllProductsWithQueries";
const route = useRoute();
const page = computed(() => route.query.page || "0");
const sort = computed(() => route.query.sort || "");
const order = computed(() => route.query.order || "");
const limit = computed(() => route.query.limit || "20");
const search = computed(() => route.query.search || "");
const { data, isPending, isError, refetch } = useQuery({
  queryKey: [
    "shop-products",
    "skip",
    page,
    "sort",
    sort,
    "order",
    order,
    "search",
    search,
  ],
  queryFn: () => getAllProductsWithQueries(sort, order, limit, page, search),
});
</script>
