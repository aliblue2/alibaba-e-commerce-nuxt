<template>
  <div class="w-full flex flex-col items-start justify-start gap-5">
    <h6 class="text-2xl font-medium border-b-2 border-dashed">Comments</h6>
    <div
      v-for="review in reviews"
      class="bg-white font-medium p-5 w-full shadow-sm border-2 border-gray-600 border-dashed rounded-xl"
    >
      <div class="flex items-center justify-between gap-2 w-full">
        <div class="flex items-start justify-start gap-2">
          <User2
            :size="24"
            class="bg-primary w-10 h-10 p-2 text-white rounded-full"
          />
          <div class="flex flex-col items-start justify-center gap-2 text-sm">
            <span>
              {{ review.reviewerName }}
            </span>
            <span>
              {{ review.reviewerEmail }}
            </span>
          </div>
        </div>
        <span>{{ new Date(review.date).toLocaleDateString() }}</span>
      </div>
      <div class="my-2">
        <span
          class="flex text-primary font-bold items-center justify-start gap-2"
        >
          <Stars :size="20" />
          {{ review.rating }}
        </span>
        {{ review.comment }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Review } from "~/types/products";
import { User2, Stars } from "lucide-vue-next";

defineProps<{ reviews: Review[] }>();
</script>
