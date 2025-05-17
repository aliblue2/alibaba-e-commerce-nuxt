<template>
  <div class="flex items-center text-red-700 flex-col justify-start gap-2 my-5">
    <AlertCircleIcon :size="64" />
    <span>failed to get categories</span>
    <CustomBtn v-on:click-handler="refetch"> try again </CustomBtn>
  </div>
</template>

<script setup>
import { AlertCircleIcon } from 'lucide-vue-next';

</script>
