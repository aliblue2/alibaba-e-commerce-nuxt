<template>
  <div class="bg-white w-full max-w-[600px] mx-auto p-5 rounded-2xl shadow-sm">
    <form
      @submit.prevent="loginSubmitHandler"
      class="flex flex-col items-center justify-start w-10/12 gap-3 mx-auto"
    >
      <CustomInput
        name="email"
        type="email"
        title="Email"
        placeholder="email@example.com"
        v-model="email"
      />
      <span
        class="w-full text-sm font-medium text-red-600"
        v-if="errors.email"
        >{{ errors.email }}</span
      >
      <CustomInput
        name="password"
        type="password"
        title="Password"
        placeholder="••••••••"
        v-model="password"
      />
      <span
        class="w-full text-sm font-medium text-red-600"
        v-if="errors.password"
        >{{ errors.password }}</span
      >

      <CustomBtn
        @click="loginSubmitHandler"
        :loading="isSubmitting"
        custom-css="w-full mt-2"
        type="submit"
      >
        <span class="flex items-center justify-center gap-2">
          <span>Login</span>
          <LogInIcon :size="20" />
        </span>
      </CustomBtn>
    </form>
  </div>

  <div class="mt-4 text-center">
    <RouterLink
      to="/auth?mode=signup"
      class="font-medium text-primary hover:underline"
    >
      Don't have an account? Sign up
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { LogInIcon } from "lucide-vue-next";
import * as yup from "yup";

const validationSchema = toTypedSchema(
  yup.object({
    email: yup
      .string()
      .min(1, "email address is requaired for login ")
      .email("invalid email address"),
    password: yup
      .string()
      .min(8, "password less than 8 char")
      .required("password is required"),
  })
);

const { errors, isSubmitting, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    email: "",
    password: "",
  },
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const loginSubmitHandler = handleSubmit((values) => {
  console.log("submit called");

  console.log(values.email);
});
</script>
