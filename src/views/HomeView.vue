<template>
  <article class="max-w-5xl mx-auto">
    <MainArticle />
    <MainCarousel class="hidden md:block mb-14 max-w-5xl mx-auto" />
    <div>
      <h3 class="text-4xl mb-8 text-center">유저들의 위시 리스트에요.🧞🧞‍</h3>
      <div class="mb-8 text-center">
        <WishPlaceButton
          v-for="(btn, index) in btnArr"
          :key="index"
          :btnText="btn.text"
          :path="btn.path"
          :index="index"
        />
      </div>

      <!-- Wish Component -->
      <div>
        <div class="flex w-full flex-wrap">
          <WishComponent
            class="sm:w-full md:w-1/2 lg:w-1/3 p-6"
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

      <div class="text-center mt-12 mb-12">
        <a
          href="/WishPlace"
          class="text-white mt-8 mb-20 bg-primary hover:bg-primary_hover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >더 보러가기</a
        >
      </div>
    </div>
  </article>
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
store.updateWishPlace("all", 0, 3);
</script>
