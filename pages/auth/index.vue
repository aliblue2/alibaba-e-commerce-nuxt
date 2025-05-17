<template>
  <AuthLogin v-if="mode === 'login'" />
  <AuthSignup v-else-if="mode !== 'login'" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-container",
});
const route = useRoute();
let mode = route.query.mode || "login";
</script>
