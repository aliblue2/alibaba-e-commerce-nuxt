<template>
  <motion.header
    class="h-16 sticky top-0 left-0 z-20"
    :style="{ backgroundColor: headerColor }"
  >
    <Container>
      <div class="flex items-center justify-between gap-5 w-full h-full">
        <div class="flex items-center justify-start gap-5">
          <CustomBtn btn-type="outline" class="md:hidden block">
            <Menu :size="20" />
          </CustomBtn>
          <img :src="Logo" alt="logo-name" class="max-w-44" />
        </div>
        <NavbarNav class="md:flex hidden" />
        <div class="flex items-center justify-start gap-3">
          <CustomBtn btn-type="outline">
            <ShoppingBag :size="20" />
          </CustomBtn>
          <CustomBtn v-on:click-handler="authBtnClick">
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
import { motion, useScroll, useTransform } from "motion-v";
import Logo from "~/public/logo.png";
import { Menu, ShoppingBag, User2 } from "lucide-vue-next";
const { scrollY } = useScroll();
const headerColor = useTransform(scrollY, [0, 400], ["#0000", "#fff"]);
const router = useRouter();
const { isAuthenticated, loadTokens } = useAuth();
onMounted(() => {
  loadTokens();
});

const authBtnClick = () => {
  isAuthenticated ? router.push("/profile") : router.push("/auth");
};
</script>
