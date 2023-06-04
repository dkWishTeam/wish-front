<template>
  <div class="flex flex-col max-w-screen-lg mx-auto">
    <WishInfo :wishId="routeWishId" :init="init"></WishInfo>
    <Progress :wishId="routeWishId"></Progress>
    <Records :wishId="routeWishId"></Records>
    <ModalComponent :wishId="routeWishId"></ModalComponent>
  </div>
  <section id="sec1" class="container mx-auto pt-8 pb-20 flex-grow"
           th:style="${rate.percent >= 100} ? 'background-image: url(\'/images/congratulation.gif\');' : ''">
</template>

<script setup>
//컴포넌트 import
import Records from "@/components/wishHistory/Records.vue";
import WishInfo from "@/components/wishHistory/WishInfo.vue";
import Progress from "@/components/wishHistory/Progress.vue";
import ModalComponent from "@/components/common/ModalComponent.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routeWishId = route.params.wishId;

console.log("파람 : " + route.params.wishId);


</script>

<style scoped>


</style>
