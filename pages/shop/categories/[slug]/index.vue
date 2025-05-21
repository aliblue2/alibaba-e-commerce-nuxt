<template>
  <ProductsPorductListSkeleton v-if="isPending" />
  <ScopedErrorCompo v-else-if="isError" :refetch-fc="refetch" />
  <section v-else-if="data">
    <ProductsProductList :products="data.products" />
  </section>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getAllProductsCategory } from "~/requests/shop/getAllCategories";

const route = useRoute();
const slug = route.params.slug.toString();

const { data, isPending, isError, refetch } = useQuery({
  queryKey: ["category-slug", slug],
  queryFn: () => getAllProductsCategory(slug),
});
</script>
