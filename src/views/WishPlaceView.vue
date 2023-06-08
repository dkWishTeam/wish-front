<template>
  <article class="flex-grow">
    <div class="max-w-5xl mx-auto">
      <section class="pt-16 min-w-full">
        <div class="flex justify-between my-8">
          <h3 class="text-3xl pl-6 min-w-max">전체 Wish 🧞‍</h3>
          <form>
            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >Search</label
            >
            <div class="relative mr-6">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                v-model="searchWish"
                class="min-w-max block w-64 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-primary"
                placeholder="위시 물건 검색"
                required
              />
              <button
                @click="searchWishSubmit"
                type="button"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                검색
              </button>
            </div>
          </form>
        </div>
        <div class="mb-8 pl-6">
          <select
            class="border-2 focus:primary_select rounded-lg w-24 px-3 py-1 border-gray-400"
            v-model="selectedPath"
            @change="selectPath"
          >
            <option value="all">전체</option>
            <option value="completion">성공</option>
            <option value="ongoing">진행중</option>
            <option value="new">최신순</option>
          </select>
        </div>
      </section>

      <!-- Wish Component -->
      <section class="max-w-5xl mx-auto">
        <div class="flex w-full flex-wrap">
          <WishComponent
            class="sm:w-full md:w-1/2 lg:w-1/3 p-6"
            v-for="(item, index) in wishList"
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
      </section>
      <p v-if="wishList.length === 0" class="text-3xl mt-20">
        위시가 없어요... 😅 다시 검색하세요...👀
      </p>
    </div>
  </article>
</template>

<script setup>
import { PAGE_COUNT, wishPlaceStore } from "@/store/wishPlace";
import WishComponent from "@/components/common/WishComponent.vue";
import { ref, watchEffect } from "vue";

const store = wishPlaceStore();
const wishList = ref([]);
const searchWish = ref("");
const selectedPath = ref("all");

store.updateWishPlace("all", 0, PAGE_COUNT);
store.updateWishPlaceCount("all");

const selectPath = () => {
  store.updateWishPlace(selectedPath.value, 0, PAGE_COUNT);
  store.updateWishPlaceCount(selectedPath.value);
};

const searchWishSubmit = () => {
  store.updateSearchWishPlace(searchWish.value, 0, PAGE_COUNT);
};

watchEffect(() => {
  wishList.value = store.wishPlaceList;
});
</script>
