<template>
  <!--  <p v-text="result.wishUserDto.nickname"></p>-->
  <!--위시 기록 테이블-->
  <!--  <th:block th:if="${wishUserDto.userId == session.id}">-->
  <div class="flex justify-end px-4">
    <button
      id="createButton"
      class="bg-blue-600 w-28 py-3 rounded-lg text-sm text-white cursor-pointer mt-5 mb-3 hover:bg-gradient-to-br from-purple-600 to-blue-500"
      @click="openModal('register')"
    >
      위시기록하기
    </button>
  </div>
  <table
    class="clear-both w-full mt-2 border-t-2 border-b-2 border-gray-300 mb-8"
    v-if="result.wishHistoryList"
  >
    <tr class="w-full border-b border-gray-200">
      <th
        class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
      >
        회차
      </th>
      <th
        class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
      >
        기록날짜
      </th>
      <th
        class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
      >
        임금금액
      </th>
      <th
        class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
      >
        수정
      </th>
    </tr>
    <tr
      v-for="(wishHistoryResponseDto, index) in result.wishHistoryList"
      :key="index"
      class="wishHistoryList w-full border-b border-gray-200"
    >
      <td
        class="px-5 py-3 text-sm font-normal text-gray-800 border-b border-gray-200 wishListCount"
      >
        <!--          삭제할때 wishListCount수정하는 js쿼리 짜야함-->
        {{ index + 1 }}회차
      </td>
      <td class="historyDatetime px-5 py-3 text-sm font-normal text-gray-800">
        {{ wishHistoryResponseDto.historyDatetime.split("T")[0] }}
      </td>
      <td>{{ wishHistoryResponseDto.amount.toLocaleString() }}원</td>
      <td
        class="px-5 py-3 text-sm font-normal text-left text-gray-800"
        style="width: 15%"
      >
        <span
          class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
        >
          <span
            aria-hidden="true"
            class="absolute inset-0 bg-green-200 rounded-full opacity-50"
          ></span>
          <!--                      <template v-if="wishUserDto.userId === session.id">-->
          <button
            @click="openModal('modify', wishHistoryResponseDto.id)"
            id="modifyButton"
            class="relative cursor-pointer"
          >
            수정하기
          </button>
        </span>
      </td>

      <td class="px-5 py-3 text-sm font-normal text-left text-gray-800">
        <!--                  <template v-if="wishUserDto.userId === session.id">-->
        <button
          class="text-indigo-600 hover:text-indigo-900 cursor-pointer"
          @click="removeWishHistory(props.wishId, wishHistoryResponseDto.id)"
        >
          삭제하기
        </button>
      </td>
    </tr>
  </table>

  <div v-if="!result.wishHistoryList" class="text-center text-gray-500">
    <p>{{ msg }}</p>
  </div>

  <!--    <div-->
  <!--      th:unless="${wishHistoryResponseDtoList}"-->
  <!--      class="text-center text-gray-500"-->
  <!--    >-->
  <!--      <p th:text="${msg}"></p>-->
  <!--    </div>-->
</template>

<script setup>
import { wishHistoryInfoStore } from "@/store/wishHistoryInfo";
import { reactive, defineProps } from "vue";
import { modalStore } from "@/store/modal";
import { deleteWishHistory } from "@/services/requestHandler";
// import { deleteWishHistory } from "@/services/requestHandler";
const props = defineProps({
  wishId: Number,
});

const result = reactive({
  wishHistoryList: {},
});

const store = wishHistoryInfoStore();
const storeResult = store.result;

store.$subscribe(() => {
  const storeResult = store.result;
  result.wishHistoryList = storeResult.wishHistoryList;
});

const init = async () => {
  await store.fetchData(props.wishId);
  console.log("result: ", storeResult);
  // result.wishHistoryList = storeResult.wishHistoryList;
  // title.value = result.title;
};

init();

const modal = modalStore();
const openModal = (buttonMode, id) => {
  modal.openModal(buttonMode, id);
};

//삭제
const removeWishHistory = async (wishId, wishHistoryId) => {
  console.log(wishId, wishHistoryId);
  await deleteWishHistory(wishId, wishHistoryId);
  await store.fetchData(props.wishId);
};
</script>
<style></style>
