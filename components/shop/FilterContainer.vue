<template>
  <div class="flex items-ceneter justify-start gap-5 my-5">
    <span
      :class="search && ' bg-white shadow-sm border-gray-600'"
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      >most relavent
    </span>
    <span
      @click="
        sort && order === 'desc'
          ? clearSortAndOrders()
          : changeSortByOrder('price', 'desc')
      "
      :class="
        order === 'desc' &&
        sort === 'price' &&
        ' bg-white shadow-sm border-gray-600'
      "
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      >most expensive
      <SortDesc :size="20" />
      <XCircle :size="20" v-if="order === 'desc' && sort === 'price'" />
    </span>
    <span
      @click="
        sort && order === 'asc'
          ? clearSortAndOrders()
          : changeSortByOrder('price', 'asc')
      "
      :class="
        order === 'asc' &&
        sort === 'price' &&
        ' bg-white shadow-sm border-gray-600'
      "
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      >cheapest
      <SortAsc :size="20" />
      <XCircle :size="20" v-if="order === 'asc' && sort === 'price'" />
    </span>

    <span
      :class="
        order === 'asc' &&
        sort === 'title' &&
        ' bg-white shadow-sm border-gray-600'
      "
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      @click="
        sort === 'title' && order === 'asc'
          ? clearSortAndOrders()
          : changeSortByOrder('title', 'asc')
      "
    >
      <ArrowDownAZ :size="20" />
    </span>
    <span
      :class="
        order === 'desc' &&
        sort === 'title' &&
        ' bg-white shadow-sm border-gray-600'
      "
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      @click="
        sort === 'title' && order === 'desc'
          ? clearSortAndOrders()
          : changeSortByOrder('title', 'desc')
      "
    >
      <ArrowDownZa :size="20" />
    </span>
  </div>
</template>

<script setup lang="ts">
import {
  XCircle,
  SortDesc,
  SortAsc,
  ArrowDownAZ,
  ArrowDownZa,
} from "lucide-vue-next";
const route = useRoute();
const router = useRouter();
const sort = computed(() => route.query.sort || "");
const order = computed(() => route.query.order || "");
const search = computed(() => route.query.search || "");

const changeSortByOrder = (sort: "price" | "title", order: "asc" | "desc") => {
  !route.query.search &&
    router.push({
      query: { ...route.query, sort: sort, order: order },
    });
};

const clearSortAndOrders = () => {
  router.push({
    query: undefined,
  });
};
</script>
