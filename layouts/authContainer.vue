<template>
  <section
    class="w-full bg-white-custom flex-col gap-5 h-full min-h-screen flex items-center justify-center"
  >
    <img :src="Logo" alt="main-logo" class="max-w-52" />
    <slot />
  </section>
</template>

<script lang="ts" setup>
import Logo from "~/public/logo.png";
</script>
