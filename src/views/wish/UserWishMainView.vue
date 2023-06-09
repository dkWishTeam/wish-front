<template class="max-w-screen-lg">
  <div class="bg-gray-50">
    <div
      class="max-w-screen-lg text-center mx-auto py-14 sm:pt-22 sm:pb-10 sm:py-48 lg:pt-30 lg:pb-10"
    >
      <!--    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">-->
      <!--      OOO 님의 위시 리스트에요.🧞‍♂️-->
      <!--    </h1>-->
    </div>
    <div class="m-auto" style="max-width: 1024px">
      <div class="w-full m-auto flex flex-wrap">
        <UserWishComponent
          v-for="(wish, index) in wishList"
          :key="index"
          :wishId="wish.id"
          :userId="wish.userId"
          :title="wish.title"
          :content="wish.content"
          :imgage="wish.image"
          :productName="wish.productName"
          :goalAmount="wish.goalAmount"
          :isPublic="wish.isPublic"
          :completionStatus="wish.completionStatus"
          :registerDatetime="wish.registerDatetime"
          :modifyDatetime="wish.modifyDatetime"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserWishComponent from "@/components/common/UserWishComponent.vue";
import { ref } from "vue";
import { getUserWishes } from "@/services/requestHandler";

const wishList = ref({});

const getData = async () => {
  return await getUserWishes(localStorage.getItem("id"));
};
getData().then((res) => {
  wishList.value = res;
});
</script>
