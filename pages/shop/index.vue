<template>
  <section v-if="data">
    <ShopSearchbar />
    <ShopFilterContainer />
    <ProductsProductList :products="allProducts" />
    <div ref="loadMoreRef" class="sentinel"></div>
  </section>
  <ProductsPorductListSkeleton v-else-if="isPending" />
  <ScopedErrorCompo v-else :refetch-fc="refetch" />
</template>

<script setup lang="ts">
import { useInfiniteQuery } from "@tanstack/vue-query";
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { getAllProductsWithQueries } from "~/requests/shop/getAllProductsWithQueries";

const route = useRoute();
const sort = computed(() => route.query.sort || "title");
const order = computed(() => route.query.order || "asc");
const search = computed(() => route.query.search || "");
const limit = ref(Number(route.query.limit || 10));

const loadMoreRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const {
  data,
  isPending,
  isFetchingNextPage,
  fetchNextPage,
  refetch,
  hasNextPage,
} = useInfiniteQuery({
  queryKey: ["shop-products", sort, order, search, limit],
  queryFn: ({ pageParam }) =>
    getAllProductsWithQueries(order, sort, limit.value, search, pageParam),
  initialPageParam: 1,
  getNextPageParam: (lastPage) => lastPage.nextPage,
});

const allProducts = computed(
  () => data.value?.pages.flatMap((page) => page.products) || []
);

onMounted(() => {
  observer = new IntersectionObserver(
    (entires) => {
      if (
        entires[0].isIntersecting &&
        hasNextPage.value &&
        !isFetchingNextPage.value
      ) {
        fetchNextPage();
      }
    },
    {
      rootMargin: "100px",
    }
  );

  if (loadMoreRef.value) {
    observer.observe(loadMoreRef.value);
  }
});

onUnmounted(() => {
  if (observer && loadMoreRef.value) {
    observer.unobserve(loadMoreRef.value);
  }

  observer = null;
});
</script>
