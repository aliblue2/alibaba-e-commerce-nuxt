<template>
  <motion.div
    :initial="{ scale: 0, opacity: 0, top: -200 }"
    :animate="{ scale: 1, opacity: 1, top: 75 }"
    :exit="{ scale: 0, opacity: 0, top: -200 }"
    :while-hover="{
      scale: 1.05,
    }"
    class="flex items-center px-2 max-w-[600px] mx-auto justify-between gap-2 bg-gray-200 rounded-xl"
  >
    <input
      class="w-full p-2 outline-none"
      type="text"
      name="searchbar"
      placeholder="search somthing ..."
      v-model="searchQ"
    />
    <SearchIcon :size="24" />
  </motion.div>
</template>

<script lang="ts" setup>
import { SearchIcon } from "lucide-vue-next";
import { motion } from "motion-v";
import { useDebounceFn } from "@vueuse/core";
const route = useRoute();
const router = useRouter();
const searchQ = ref(route.query.search || "");

watch(
  searchQ,
  useDebounceFn((newVal) => {
    router.push({
      query: { search: newVal },
    });
  }, 500)
);
</script>
