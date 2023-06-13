import { defineStore } from "pinia";
import {
  wishHistoryInfo,
  findPagedWishHistory,
} from "@/services/requestHandler";
import { ref } from "vue";

export const wishHistoryInfoStore = defineStore("wishHistory", () => {
  const result = ref({});

  const pageInfo = ref({});
  const pagingUtil = ref({});
  function fetchData(wishId) {
    wishHistoryInfo(wishId).then((res) => {
      result.value = res;
      pageInfo.value = res?.pageResponseHistoryListDto;
      pagingUtil.value = res.pageResponseHistoryListDto?.pagingUtil;
      console.log(res);
    });
    // console.log("뭐야" + result.value);
  }

  function getList(wishId, n) {
    findPagedWishHistory(wishId, n).then((res) => {
      pageInfo.value = res;
    });
  }
  function getPage(wishId, n) {
    if (pagingUtil.value.pageNumber != n) {
      pagingUtil.value.pageNumber = n;
      getList(wishId, n);
    }
  }
  return { result, fetchData, pageInfo, getPage, pagingUtil };
});
