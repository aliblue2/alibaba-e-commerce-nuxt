<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[600px]">
    <HomeCardContainer
      title="Millions of business offerings"
      description="Explore products and suppliers for your business from millions of offerings worldwide."
    >
      <LucideLayoutGrid
        :size="44"
        class="bg-primary p-1 rounded-full text-white"
      />
    </HomeCardContainer>
    <HomeCardContainer
      title="One-stop trading solution"
      description="Explore products and suppliers for your business from millions of offerings worldwide."
    >
      <ShoppingCart
        :size="44"
        class="bg-primary p-1 rounded-full text-white"
      />
    </HomeCardContainer>
    <HomeCardContainer
      title="Tailored trading experience"
      description="Explore products and suppliers for your business from millions of offerings worldwide."
    >
      <GalleryVerticalEndIcon
        :size="44"
        class="bg-primary p-1 rounded-full text-white"
      />
    </HomeCardContainer>
    <HomeCardContainer
      title="Assured quality and transactions"
      description="Explore products and suppliers for your business from millions of offerings worldwide."
    >
      <Layers2 :size="44" class="bg-primary p-1 rounded-full text-white" />
    </HomeCardContainer>
  </div>
</template>

<script setup>
import {
  LucideLayoutGrid,
  Layers2,
  GalleryVerticalEndIcon,
  ShoppingCart,
} from "lucide-vue-next";
</script>
