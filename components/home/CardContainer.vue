<template>
  <div
    class="flex flex-col items-start justify-center gap-5 rounded-xl p-5 border-2 border-primary hover:bg-primary transition-colors duration-300 hover:text-white"
  >
    <slot></slot>
    <h6 class="md:text-xl text-lg font-bold">{{ title }}</h6>
    <p class="md:text-lg">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

defineProps<Props>();
</script>
