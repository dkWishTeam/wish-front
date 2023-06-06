<template>
  <MainArticle />
  <MainCarousel class="mb-14" />
  <div class="flex flex-col items-center justify-center">
    <h3 class="text-4xl mb-8">유저들의 위시 리스트에요.🧞🧞‍</h3>
    <div class="mb-8">
      <WishPlaceButton
        v-for="(btn, index) in btnArr"
        :key="index"
        :btnText="btn.text"
        :path="btn.path"
        :index="index"
      />
    </div>

    <div class="flex flex-wrap justify-center mx-auto mb-24">
      <WishComponent
        class="mb-5 mr-3"
        v-for="(item, index) in store.wishPlaceList"
        :key="index"
        :wishId="item.id"
        :userId="item.userId"
        :imgSrc="item.imageSrc"
        :nickname="item.nickname"
        :amount="item.ongoingAmountFormat"
        :percentage="item.percentage"
        :targetAmount="item.goalAmountFormat"
        :productName="item.productName"
      />
    </div>
  </div>
</template>

<script setup>
import MainArticle from "@/components/main/MainArticle.vue";
import WishPlaceButton from "@/components/main/WishPlaceButton.vue";
import { wishPlaceStore } from "@/store/wishPlace";
import WishComponent from "@/components/common/WishComponent.vue";
import MainCarousel from "@/components/main/MainCarousel.vue";

const store = wishPlaceStore();

const btnArr = [
  { path: "all", text: "전체" },
  { path: "completion", text: "성공" },
  { path: "ongoing", text: "진행중" },
  { path: "new", text: "최신순" },
];
store.updateWishPlace("all");
</script>
