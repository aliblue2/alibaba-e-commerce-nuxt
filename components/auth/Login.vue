<template>
  <div class="bg-white w-full max-w-[600px] mxa-auto p-5 rounded-2xl shadow-sm">
    <form
      v-on:submit="loginUserHandler"
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
      <CustomBtn custom-css="w-full" type="submit" :loading="isPending">
        Login
        <Loader2 v-if="isPending" class="animate-spin" />
        <LogInIcon :size="24" />
      </CustomBtn>
    </form>
    <span
      v-if="isError"
      class="text-red-500 text-center block mt-5 font-medium"
      >{{ error?.message }}</span
    >
  </div>
  <RouterLink
    to="/auth?mode=signup"
    class="text-primary font-medium hover:underline"
  >
    Do you have not any aacount ? signup
  </RouterLink>
</template>

<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { LogInIcon } from "lucide-vue-next";
import { toast } from "vue-sonner";
import { loginFcHandler } from "~/requests/auth/login";
import { Loader2 } from "lucide-vue-next";

const emailRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>(null);
const passwordRef = ref<InstanceType<
  typeof import("~/components/global/CustomInput.vue").default
> | null>(null);

const { mutate, isPending, isError, error } = useMutation({
  mutationKey: ["login-user"],
  mutationFn: ({ email, password }: { email: string; password: string }) =>
    loginFcHandler(email, password),
  onSuccess: () => {
    toast.success("you successfully logedin");
  },
  onError: (error) => {
    toast.error(error.message);
  },
});

const loginUserHandler = () => {
  event?.preventDefault();

  if (!emailRef || !emailRef.value?.modelVal.includes("@")) {
    toast.error("invalid email address");
    return;
  }

  if (!passwordRef || passwordRef.value!.modelVal.length < 8) {
    toast.error("password is short");
    return;
  }

  mutate({
    email: emailRef.value.modelVal.toString(),
    password: passwordRef.value!.modelVal.toString(),
  });
};
</script>
