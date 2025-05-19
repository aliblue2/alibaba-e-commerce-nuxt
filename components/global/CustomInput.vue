<template>
  <div class="flex flex-col items-start justify-start gap-2 w-full">
    <label :for="name">{{ title }} : </label>
    <input
      :type="type"
      :name="name"
      :id="name"
      :required="required"
      :placeholder="placeholder"
      ref="inputRef"
      class="p-2 w-full bg-gray-100 rounded-lg border outline-none border-transparent focus:border-primary transition-colors duration-300"
      v-model="modelVal"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  title: string;
  type?: "text" | "email" | "password" | "date" | "week" | "number" | "tel";
  placeholder: string;
  required?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: "text",
  required: false,
});

const inputRef = ref<HTMLInputElement | null>(null);
const modelVal = ref<string>("");

defineExpose({
  inputRef,
  modelVal,
});
</script>
