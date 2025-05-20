<template>
  <div class="flex items-ceneter justify-start gap-5 my-5">
    <span
      :class="search && ' bg-white shadow-sm border-gray-600'"
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      >most relavent
    </span>
    <span
      :class="order === 'expensive' && ' bg-white shadow-sm border-gray-600'"
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      >most expensive
      <XCircle :size="20" v-if="order === 'expensive'" />
    </span>
    <span
      :class="order === 'cheapest' && ' bg-white shadow-sm border-gray-600'"
      class="p-2 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-white border border-transparent"
      >cheapest
      <XCircle :size="20" v-if="order === 'cheapest'" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { XCircle } from "lucide-vue-next";
const route = useRoute();
const page = computed(() => route.query.page || "0");
const sort = computed(() => route.query.sort || "");
const order = computed(() => route.query.order || "");
const limit = computed(() => route.query.limit || "20");
const search = computed(() => route.query.search || "");
</script>
