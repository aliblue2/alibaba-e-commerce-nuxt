<template>
  <div class="flex flex-col items-start gap-2 justify-start w-full">
    <label :for="name">{{ title }}</label>
    <input
      :type="type"
      :placeholder="palceholder"
      class="border rounded-xl p-2 w-full outline-none border-gray-200 focus:border-primary transition-colors duration-300"
      ref="inputRef"
      v-model="modelValue"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?:
    | "text"
    | "email"
    | "password"
    | "date"
    | "tel"
    | "number"
    | "date"
    | "week";
  name: string;
  title: string;
  palceholder: string;
}

withDefaults(defineProps<Props>(), {
  type: "text",
});

const inputRef = ref<HTMLInputElement | null>(null);
const modelValue = ref<string>("");
defineExpose({
  inputRef,
  modelValue,
});
</script>
