<script setup lang="ts">
import { Toaster } from "vue-sonner";
</script>

<template>
  <div>
    <Toaster position="top-center" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
