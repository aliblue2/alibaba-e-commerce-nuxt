<template>
  <ShopSearchbar />
  <ProductsPorductListSkeleton v-if="isPending" class="my-10" />
  <ProductsProductList v-else-if="data" :products="data" class="my-10" />
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getAllProductsWithQueries } from "~/requests/shop/getAllProductsWithQueries";
const route = useRoute();
const page = route.query.page || "0";
const sort = route.query.sort || "";
const order = route.query.order || "";
const limit = route.query.limit || "10";
const search = route.query.search;

const { data, isPending, isError, refetch } = useQuery({
  queryKey: ["shop-products", "skip", page, "sort", sort, "order", order],
  queryFn: () => getAllProductsWithQueries(sort, order, limit, page),
});
</script>
