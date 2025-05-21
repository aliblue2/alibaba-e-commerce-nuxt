<template>
  <section v-if="data">
    <ShopSearchbar />
    <ShopFilterContainer />
    <ProductsProductList :products="allProdcuts!" />
    <button @click="fetchNextPage()">load more</button>
  </section>
  <ProductsPorductListSkeleton v-else-if="isPending" />

  <ScopedErrorCompo v-else :refetch-fc="refetch" />
</template>

<script setup lang="ts">
import { useInfiniteQuery } from "@tanstack/vue-query";
import { getAllProductsWithParams } from "~/requests/shop/getAllProductsWithQueries";
const route = useRoute();
const sort = computed(() => route.query.sort || "");
const order = computed(() => route.query.order || "");
const currentLimit = ref(Number(route.query.limit || 20));
const search = computed(() => route.query.search || "");

const { data, isPending, fetchNextPage, refetch } = useInfiniteQuery({
  queryKey: ["shop-products", sort, order, search, currentLimit],
  queryFn: ({ pageParam }) =>
    getAllProductsWithParams(
      sort,
      order,
      currentLimit.value,
      search,
      pageParam
    ),
  initialPageParam: 1,
  getNextPageParam: (lastPage) => lastPage.nextPage,
});

const allProdcuts = computed(() =>
  data.value?.pages.flatMap((page) => page.products || [])
);

console.log(data.value?.pages.map((page) => page.nextPage));
</script>
