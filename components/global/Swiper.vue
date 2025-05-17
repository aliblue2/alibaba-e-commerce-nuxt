<template>
  <div class="swiper-container">
    <swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      class="mx-auto w-full max-w-[330px] rounded-xl md:max-w-[500px]"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <swiper-slide v-for="slide in slides" :key="slide">
        <img :src="slide" alt="" class="bg-white object-cover w-full" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import {
  Autoplay as SwiperAutoplay,
  EffectCreative as SwiperEffectCreative,
  Pagination,
} from "swiper/modules";

interface Props {
  slides: string[];
}

defineProps<Props>();
</script>
