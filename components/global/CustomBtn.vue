<template>
  <motion.button
    :while-hover="{
      scale: 1.04,
    }"
    :while-press="{
      scale: 0.98,
    }"
    :transition="{
      type: 'spring',
      duration: 0.5,
      bounce: 0.4,
      stiffness: 300,
    }"
    :class="[customCss, btnClassType]"
    :disabled="loading"
    class="flex items-center justify-center gap-5 font-medium p-2 rounded-xl transition-colors duration-300"
    @click="handleClick"
  >
    <slot v-if="!loading"></slot>
    <span v-else class="flex items-center justify-center gap-5">
      loading
      <Loader2Icon class="animate-spin" :size="20" />
    </span>
  </motion.button>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import { Loader2Icon } from "lucide-vue-next";

interface Props {
  type?: "button" | "reset" | "submit";
  btnType?: "primary" | "outline";
  onClickHandler?: () => void;
  customCss?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  btnType: "primary",
  loading: false,
  disabled: false,
  type: "button",
});

const btnClassType = computed(() => {
  if (props.loading) {
    return "bg-gray-300 text-white font-medium cursor-not-allowed";
  } else
    switch (props.btnType) {
      case "primary":
        return "bg-primary text-white";
      case "outline":
        return "border border-2 borde-primary hover:bg-primary text-primary hover:text-white ";
    }
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  if (!props.loading) {
    emit("click");
  }
};
</script>
