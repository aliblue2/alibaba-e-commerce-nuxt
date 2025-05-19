<template>
  <div class="bg-white w-full max-w-[600px] mxa-auto p-5 rounded-2xl shadow-sm">
    <form
      :submit="mutate"
      class="flex flex-col items-center justify-start gap-5 w-10/12 mx-auto"
    >
      <CustomInput
        name="fullname"
        type="text"
        title="fullName"
        placeholder="ali akbari"
        ref="nameRef"
      />
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

      <CustomBtn :loading="loading" custom-css="w-full" type="submit">
        Signup
        <UserPlus2 :size="24" />
      </CustomBtn>
    </form>
  </div>
  <RouterLink
    to="/auth?mode=login"
    class="text-primary font-medium hover:underline"
  >
    Do you have already aacount ? login
  </RouterLink>
</template>

<script setup lang="ts">
import { UserPlus2 } from "lucide-vue-next";
import { signupFcHandler } from "~/requests/auth/signup";
import { useMutation } from "@tanstack/vue-query";

const emailRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>();
const passwordRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>();
const nameRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>();

const loading = ref(false);

const { mutate } = useMutation({
  mutationKey: ["signup-user"],
  mutationFn: () =>
    signupFcHandler(
      nameRef.value!.modelVal,
      emailRef.value!.modelVal,
      passwordRef.value!.modelVal
    ),
});
</script>
