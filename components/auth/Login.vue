<template>
  <div class="bg-white w-full max-w-[600px] mxa-auto p-5 rounded-2xl shadow-sm">
    <form
      @submit="readValueOfEmailAdd"
      class="flex flex-col items-center justify-start gap-5 w-8/12 mx-auto"
    >
      <CustomInput
        name="email"
        title="Email :"
        palceholder="example.com"
        type="email"
        ref="emailRef"
      />
      <CustomInput
        name="password"
        title="Password : "
        palceholder="****"
        type="password"
        ref="passworRef"
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
const passworRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>(null);

const readValueOfEmailAdd = () => {
  event?.preventDefault();
  console.log(emailRef.value?.modelValue);
};
</script>
