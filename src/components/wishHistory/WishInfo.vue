<template>
  <div id="wishBox" class="pl-8 pt-6">
    <div id="wishTitleBox" class="flex">
      <h2
        id="wishTitle"
        class="leading-10 ml-8 mr-10 text-xl text-gray-800 mb-6 mt-"
      >
        {{ nickname }}님의 {{ title }}위시입니다.
      </h2>
    </div>
    <div class="flex justify-end">
      <button
        id="updateButton"
        class="bg-blue-600 w-28 py-3 rounded-lg text-sm text-white cursor-pointer mt-5 mb-3 hover:bg-gradient-to-br from-purple-600 to-blue-500"
      >
        위시수정하기
      </button>
      <button
        id="resetButton"
        class="bg-blue-600 w-28 py-3 rounded-lg text-sm text-white cursor-pointer mt-5 mb-3 hover:bg-gradient-to-br from-purple-600 to-blue-500"
      >
        위시삭제하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { wishHistoryInfoStore } from "@/store/wishHistoryInfo";
import { ref, defineProps } from "vue";
const store = wishHistoryInfoStore();

const nickname = ref("");
const title = ref("");

const props = defineProps({
  wishId: Number,
});

const init = async () => {
  await store.fetchData(props.wishId);
  const result = store.result;
  console.log("result: ", result);
  nickname.value = result.wishUserDto.nickname;
  title.value = result.title;
};

init();
</script>

<style></style>
