<template>
  <div class="absolute top-0 w-full left-0 heroContainer">
    <div
      class="w-full max-w-[1200px] mx-auto min-h-[600px] flex items-center justify-start h-full"
    >
      <div
        class="p-12 h-full w-full md:max-w-10/12 text-white flex flex-col items-start justify-center gap-8"
      >
        <h5 class="md:text-5xl text-2xl md:leading-14 font-bold">
          The leading B2B ecommerce platform for global trade
        </h5>
        <div
          class="flex md:w-10/12 w-full items-center justify-between gap-5 p-2 rounded-2xl bg-white"
        >
          <input
            type="text"
            name="search"
            class="w-full p-2 outline-none placeholder:text-gray-700 text-black-custom"
            placeholder="search somthings ..."
          />
          <CustomBtn custom-css="px-4 py-2 text-lg rounded-full">
            Search
            <Search :size="24" />
          </CustomBtn>
        </div>
        <div class="flex items-center justify-start gap-5">
          <span class="text-lg font-medium">Frequently searched : </span>
          <span
            class="px-2 py-1 border rounded-full"
            v-for="item in frequentListSearch"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";

const frequentListSearch = ["nike shoese", "iphone 16", "lenovo loq"];
</script>

<style scoped>
.heroContainer {
  background-image: url("../../public/hero-img.avif");
  min-height: 650px;
  background-size: cover;
}
</style>
