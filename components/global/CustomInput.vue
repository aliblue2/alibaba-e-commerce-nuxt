<template>
  <div class="flex flex-col items-start justify-start gap-3 w-full">
    <label class="font-medium" :for="name">{{ title }} :</label>
    <input
      class="bg-gray-200 rounded-lg p-2 w-full outline-none border focus:border-primary border-transparent transition-colors duration-300"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      ref="inputRef"
      v-model="modelVal"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  title: string;
  placeholder: string;
  type: "text" | "number" | "email" | "password" | "date" | "time" | "tel";
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
