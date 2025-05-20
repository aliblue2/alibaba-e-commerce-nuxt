<template>
  <div class="flex flex-col items-start justify-stat gap-3 animate-pulse">
    <div
      class="flex items-center text-gray-500 bg-gray-300 w-full h-44 rounded-xl justify-center"
    >
      <Image :size="44" />
    </div>
    <span class="w-full p-2 rounded-xl bg-gray-300"></span>
    <span class="w-8/12 p-2 rounded-xl bg-gray-300"></span>
    <span class="w-10/12 p-2 rounded-xl bg-gray-300"></span>
    <span class="w-3/12 p-2 rounded-xl bg-gray-300"></span>
  </div>
</template>

<script lang="ts" setup>
import { Image } from "lucide-vue-next";
</script>
