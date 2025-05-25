<template>
  <motion.header class="h-16 sticky top-0 left-0 z-20 bg-white">
    <Container>
      <div class="flex items-center justify-between gap-5 w-full h-full">
        <div class="flex items-center justify-start gap-5">
          <CustomBtn btn-type="outline" class="md:hidden block">
            <Menu :size="20" />
          </CustomBtn>
          <RouterLink to="/">
            <img :src="Logo" alt="logo-name" class="max-w-52" />
          </RouterLink>
        </div>
        <NavbarNav class="md:flex hidden" />
        <div class="flex items-center justify-start gap-3">
          <AnimatePresence>
            <CustomBtn
              v-on:click-handler="dropDownToggler"
              btn-type="outline"
              custom-css="md:flex hidden"
            >
              {{ allQunatites }}
              <ShoppingBag :size="20" />
            </CustomBtn>
            <CustomBtn
              btn-type="outline"
              custom-css="md:hidden flex"
              v-on:click-handler="router.push('/shop/cart')"
            >
              {{ allQunatites }}
              <ShoppingBag :size="20" />
            </CustomBtn>

            <HeaderDropDown :items="basketItems" v-if="headerDropDownVis" />
          </AnimatePresence>

          <CustomBtn v-on:click-handler="authToggleBtnClick">
            <span class="md:block hidden" v-if="isAuthenticated">profile </span>
            <span class="md:block hidden" v-else>signup/login </span>
            <User2 :size="20" />
          </CustomBtn>
        </div>
      </div>
    </Container>
  </motion.header>
</template>

<script setup lang="ts">
import { motion, useScroll, useTransform, AnimatePresence } from "motion-v";
import Logo from "~/public/logo.png";
import { Menu, ShoppingBag, User2 } from "lucide-vue-next";
import { useAuth } from "~/stores/useAuth";
const { scrollY } = useScroll();
const headerColor = useTransform(scrollY, [0, 400], ["#0000", "#fff"]);
const router = useRouter();
const { isAuthenticated, loadTokens } = useAuth();
const basketStore = useBasketStore();

const headerDropDownVis = ref(false);

const dropDownToggler = () => {
  headerDropDownVis.value = !headerDropDownVis.value;
};

const basketItems = computed(() => basketStore.getBasketItems);
const allQunatites = computed(() => {
  let qunatity = 0;
  basketItems.value.map((item) => {
    qunatity += item.quantity;
  });

  return qunatity;
});

onMounted(() => {
  loadTokens();
  basketStore.loadBasket();
});

const authToggleBtnClick = () => {
  isAuthenticated ? router.push("/profile") : router.push("/auth");
};
</script>
