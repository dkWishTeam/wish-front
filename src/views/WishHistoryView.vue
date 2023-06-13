<template>
  <div class="w-3/5 mx-auto">
    <div
      class="flex flex-col mx-auto flex-grow"
      :style="
        updatePercent >= 100
          ? `background-image: url('/images/celebration3.gif');`
          : ''
      "
    >
      <WishInfo
        :wishId="routeWishId"
        :init="init"
        class="mt-12 w-full"
      ></WishInfo>
      <Progress :wishId="routeWishId" @update-percent="handlePercent" />
      <Records :wishId="routeWishId"></Records>
      <ModalComponent :wishId="routeWishId"></ModalComponent>

      <!--    <Pagination :pagingUtil="result.pageResponseHistoryListDto?.pagingUtil"/>-->
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
import { onBeforeMount, ref } from "vue";
import { wishHistoryInfoStore } from "@/store/wishHistoryInfo";
import { storeToRefs } from "pinia";

const route = useRoute();
const routeWishId = route.params.wishId;
const updatePercent = ref();
const handlePercent = (percent) => {
  updatePercent.value = percent;
  console.log(percent);
};

const store = wishHistoryInfoStore();
const { result } = storeToRefs(store);

onBeforeMount(() => {
  store.fetchData(routeWishId);
});

store.$subscribe(() => {
  const storeResult = store.result;
  result.wishHistoryList = storeResult.wishHistoryList;
});
</script>

<style scoped></style>
