<template>
  <RouterLink
    :to="targetPath"
    class="flex items-center justify-start gap-2 hover:bg-primary/10 hover:text-primary p-2 rounded-xl font-medium transition-color duration-300"
    active-class="bg-primary/10 text-primary"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
interface Props {
  targetPath: string;
}

defineProps<Props>();
</script>
