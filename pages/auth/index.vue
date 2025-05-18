<template>
  <AuthLogin v-if="mode === 'login'" />
  <AuthSignup v-else-if="mode !== 'login'" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-container",
});
const route = useRoute();
const mode = computed(() => {
  return (route.query.mode as string) || "login";
});
</script>
