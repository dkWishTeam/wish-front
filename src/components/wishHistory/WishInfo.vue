<template>
  <div id="wishBox" class="w-full px-4 pt-12">
    <div id="wishTitleBox">
      <p id="wishTitle" class="mt-4 text-lg text-gray-500">
        <span>{{ result.wishUserDto?.nickname }}님의</span>
      </p>
      <h2 class="leading-10 font-medium text-3xl mt-2 mb-2 text-gray-600">
        {{ result.title }}위시입니다.
      </h2>
    </div>
    <div class="flex justify-end">
      <button
        id="updateButton"
        class="bg-blue-600 w-28 py-3 rounded-lg text-sm text-gray-900 cursor-pointer mt-5 mb-3 mr-2 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        @click="updateWish"
      >
        위시수정하기
      </button>
      <button
        id="resetButton"
        class="bg-blue-50 w-28 py-3 rounded-lg text-sm cursor-pointer mt-5 mb-3 hover:bg-blue-100 hover:text-blue-600 text-blue focus:z-10 focus:ring-4 focus:ring-blue-200"
        @click="deleteUserWish"
      >
        위시삭제하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { wishHistoryInfoStore } from "@/store/wishHistoryInfo";
import { getWishStore } from "@/store/wishStore";
import { defineProps } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router";
import { deleteWish } from "@/services/requestHandler";

const store = wishHistoryInfoStore();
const { result } = storeToRefs(store);

const props = defineProps({
  wishId: { type: Number, default: 12 },
});

const wishStore = getWishStore();

function updateWish() {
  wishStore.prevData = wishStore.getUserWishData(props.wishId);
  wishStore.$id = 1;
  router.push({
    name: "wishUpdate",
  });
}

const deleteUserWish = async () => {
  await deleteWish(localStorage.getItem("id"), props.wishId);
  await router.push({
    name: "UserWishMainView",
    params: { id: localStorage.getItem("id") },
  });
};

// const init = async () => {
//   await store.fetchData(props.wishId);
//   const result = store.result;
//   // console.log("result: ", result);
//   nickname.value = result.wishUserDto.nickname;
//   title.value = result.title;
// };
//
// init();

// onMounted(() => {
//   store.fetchData(props.wishId);
// });
</script>

<style></style>
