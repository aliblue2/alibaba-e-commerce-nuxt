<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="flex col-span-1 flex-col items-start justify-start gap-5">
      <Swiper :slides="product.images" />
      <h5 class="text-2xl font-medium">{{ product.title }}</h5>
      <span class="text-sm font-medium bg-gray-300 px-2 py-2 rounded-md">{{
        product.brand
      }}</span>
      <div class="flex items-center justify-start gap-2">
        tags :
        <span class="text-xs" v-for="tag in product.tags">{{ tag }}</span>
      </div>
      <h6 class="text-2xl font-medium border-b-2 border-dashed">
        {{ product.title }} Info
      </h6>
      <p>
        {{ product.description }}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, tenetur
        perferendis mollitia, et cumque libero maxime blanditiis impedit tempore
        ratione repellat ullam incidunt dolorum. Ad perspiciatis tempora quod
        maiores blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Distinctio quis sunt nihil, repellendus, commodi totam iusto qui
        fugit inventore reprehenderit reiciendis repellat! Eum, id vitae.
        Repellendus officiis libero commodi a!
      </p>
      <ProductsReviews :reviews="product.reviews" />
    </div>
    <div
      class="flex flex-col items-start justify-start gap-5 bg-white p-5 h-fit md:sticky md:top-20 rounded-xl"
    >
      <span class="text-sm"
        >Minimum Order Quantity : {{ product.minimumOrderQuantity }}</span
      >
      <h5 class="text-2xl font-bold text-primary w-full">
        US$ : {{ product.price }}
      </h5>
      <p>shipping inforamtion : {{ product.shippingInformation }}</p>
      <div>
        avalibility status : {{ product.availabilityStatus }}
        <span class="bg-primary p-2 mx-2 rounded-full text-white font-bold">{{
          product.stock
        }}</span>
      </div>
      <p>retuntion policy : {{ product.returnPolicy }}</p>
      <div class="flex items-center w-full justify-between gap-5">
        <CustomBtn
          @click-handler="addToBasket(product)"
          btn-type="primary"
          custom-css="w-full"
        >
          <ShoppingBagIcon :size="24" />
          Add to basket
        </CustomBtn>
        <CustomBtn btn-type="outline" custom-css="w-full">
          <MessageCircleDashed :size="24" />
          Chat Now!
        </CustomBtn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/products";
import { ShoppingBagIcon, MessageCircleDashed } from "lucide-vue-next";
const props = defineProps<{ product: Product }>();

const { addToBasket } = useBasketStore();
</script>
