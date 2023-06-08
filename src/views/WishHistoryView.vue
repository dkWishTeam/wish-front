<template>
  <div
    class="flex flex-col mx-auto max-w-screen-lg"
    :style="
      updatePercent >= 100
        ? `background-image: url('/images/celebration3.gif');`
        : ''
    "
  >
    <WishInfo :wishId="routeWishId" :init="init"></WishInfo>
    <Progress :wishId="routeWishId" @update-percent="handlePercent" />
    <Records :wishId="routeWishId"></Records>
    <ModalComponent :wishId="routeWishId"></ModalComponent>

    <div class="flex justify-center mb-24">
      <nav aria-label="Page navigation example">
        <ul class="list-style-none flex">
          <li>
            <a
              class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
              >Previous</a
            >
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              >1</a
            >
          </li>
          <li aria-current="page">
            <a
              class="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
              href="#!"
              >2
              <span
                class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                >(current)</span
              >
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              >3</a
            >
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
//컴포넌트 import
import Records from "@/components/wishHistory/Records.vue";
import WishInfo from "@/components/wishHistory/WishInfo.vue";
import Progress from "@/components/wishHistory/Progress.vue";
import ModalComponent from "@/components/common/ModalComponent.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const routeWishId = route.params.wishId;
const updatePercent = ref();

console.log("파람 : " + route.params.wishId);

const handlePercent = (percent) => {
  updatePercent.value = percent;
  console.log(percent);
};
</script>

<style scoped></style>
