<template>
  <div class="bg-white w-full max-w-[600px] mxa-auto p-5 rounded-2xl shadow-sm">
    <form
      @submit="LoginUserHandler"
      class="flex flex-col items-center justify-start gap-5 w-10/12 mx-auto"
    >
      <CustomInput
        name="email"
        type="email"
        title="email"
        placeholder="email@example.com"
        ref="emailRef"
      />
      <CustomInput
        name="password"
        type="password"
        title="password"
        placeholder="***"
        ref="passwordRef"
      />
      <CustomBtn custom-css="w-full" type="submit">
        Login
        <LogInIcon :size="24" />
      </CustomBtn>
    </form>
  </div>
  <RouterLink
    to="/auth?mode=signup"
    class="text-primary font-medium hover:underline"
  >
    Do you have not any aacount ? signup
  </RouterLink>
</template>

<script setup lang="ts">
import { LogInIcon } from "lucide-vue-next";

const emailRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>(null);
const passwordRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>(null);

const LoginUserHandler = () => {
  event?.preventDefault();
};
</script>
