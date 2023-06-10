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
    v-if="pageInfo?.wishHistoryList"
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
      v-for="(wishHistoryResponseDto, index) in pageInfo?.wishHistoryList"
      :key="index"
      class="wishHistoryList w-full border-b border-gray-200"
    >
      <td
        class="px-5 py-3 text-sm font-normal text-gray-800 border-b border-gray-200 wishListCount"
      >
        <span v-if="pagingUtil?.pageNumber === 1"> {{ index + 1 }}회차 </span>
        <span v-else>
          {{ (pagingUtil?.pageNumber - 1) * 10 + index + 1 }}회차
        </span>
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
  <p v-else>{{ pageInfo.msg }}</p>

  <div v-if="pagingUtil.totalElements != 0">
    <div class="flex justify-center mb-32 mt-2.5">
      <button
        @click="goToPrevPage(pagingUtil?.pageNumber)"
        class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
      >
        이전
      </button>
      <span v-for="(n, index) in pagingUtil?.totalPages" :key="index">
        <span
          v-if="pagingUtil?.pageNumber == n"
          class="relative block rounded px-3 py-1.5 text-sm text-blue-600 font-bold transition-all duration-300 cursor-pointer bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
          >{{ n }}</span
        >
        <span
          v-else
          class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 cursor-pointer"
          @click="setPage(n)"
          >{{ n }}</span
        >
      </span>
      <button
        class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
        @click="
          goToNextPage(pagingUtil?.totalPages, pagingUtil?.pageNumber + 1)
        "
      >
        다음
      </button>
    </div>
  </div>
</template>

<script setup>
import { wishHistoryInfoStore } from "@/store/wishHistoryInfo";
import { defineProps } from "vue";
import { modalStore } from "@/store/modal";
import { deleteWishHistory } from "@/services/requestHandler";
import { storeToRefs } from "pinia";
const props = defineProps({
  wishId: { type: Number, default: 12 },
});

const store = wishHistoryInfoStore();
const { pageInfo, pagingUtil } = storeToRefs(store);

const setPage = (n) => {
  console.log(n);
  // pagingUtil.value.pageNumber = n;
  store.getPage(props.wishId, n);
};
// console.log(result.pageResponseHistoryListDto?.pagingUtil.totalElements);

const goToPrevPage = (n) => {
  if (n > 1) {
    store.getPage(props.wishId, n - 1);
  }
};
const goToNextPage = (page, n) => {
  if (n <= page) {
    store.getPage(props.wishId, n);
  }
};

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
