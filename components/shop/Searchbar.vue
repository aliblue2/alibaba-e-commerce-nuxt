<template>
  <div
    class="flex items-center px-2 max-w-[600px] mx-auto justify-between gap-2 bg-gray-200 rounded-xl"
  >
    <input
      class="w-full p-2 outline-none"
      type="text"
      name="searchbar"
      placeholder="search somthing ..."
    />
    <SearchIcon :size="24" />
  </div>
</template>

<script lang="ts" setup>
import { SearchIcon } from "lucide-vue-next";
</script>
