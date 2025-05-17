<template>
  <ScopedLoading v-if="isPending" />
  <ScopedErrorCompo v-else-if="isError" />
  <section v-else-if="data" class="oveflow-hidden">
    <ProductsProductLanding :product="data" />
  </section>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getProductsInfoById } from "~/requests/shop/getProductByid";

const route = useRoute();

const productId = parseInt(route.params.id.toString());

const { data, isPending, isError } = useQuery({
  queryKey: ["product-id", productId],
  queryFn: () => getProductsInfoById(productId),
});
</script>
