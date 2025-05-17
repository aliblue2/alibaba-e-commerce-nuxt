<template>
  <ul class="flex items-center justify-start gap-3 md:flex-row flex-col">
    <NavbarNavLink target-path="/"> home <Home :size="20" /> </NavbarNavLink>
    <NavbarNavLink target-path="/shop">
      shop
      <Store :size="20" />
    </NavbarNavLink>
    <NavbarNavLink target-path="/shop/categories">
      category
      <Library :size="20" />
    </NavbarNavLink>
    <NavbarNavLink target-path="/about">
      about
      <Users2 :size="20" />
    </NavbarNavLink>
  </ul>
</template>

<script setup lang="ts">
import { Home, Store, Library, Users2, SignalZero } from "lucide-vue-next";
</script>
