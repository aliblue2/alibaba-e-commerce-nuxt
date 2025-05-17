<template>
  <div class="flex items-center text-primary flex-col justify-start gap-2 my-5">
    <LoaderIcon :size="64" class="animate-spin" />
    <span>loading ...</span>
  </div>
</template>

<script setup lang="ts">
import { LoaderIcon } from "lucide-vue-next";
</script>
