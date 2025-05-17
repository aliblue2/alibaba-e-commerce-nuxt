<template>
  <ScopedLoading v-if="isPending" />
  <ScopedErrorCompo v-else-if="isError" />

  <div v-else-if="data" class="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
    <motion.div
      :while-hover="{
        scale: 1.1,
      }"
      @click="categoryClickHandler(category.slug)"
      v-for="(category, index) in data"
      :key="category.name + index"
      class="flex flex-col hover:bg-primary/5 transition-colors border-2 border-transparent hover:border-primary hover:text-primary items-start justify-start gap-5 bg-white p-5 rounded-xl shadow-sm cursor-pointer"
    >
      <Library :size="32" />
      <div class="flex items-center w-full justify-between">
        <span>{{ category.name }}</span>
        <ArrowRightCircle :size="24" />
      </div>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getAllCategories } from "~/requests/shop/getAllCategories";
import { Library, ArrowRightCircle } from "lucide-vue-next";
import { motion } from "motion-v";

const router = useRouter();

const { data, isError, isPending, refetch } = useQuery({
  queryKey: ["categories"],
  queryFn: getAllCategories,
});

const categoryClickHandler = (slug: string) => {
  router.replace("/shop/categories/" + slug);
};
</script>
