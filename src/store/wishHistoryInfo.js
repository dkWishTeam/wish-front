import { defineStore } from "pinia";
import { wishHistoryInfo } from "@/services/requestHandler";
import { ref } from "vue";

export const wishHistoryInfoStore = defineStore("wishHistory", () => {
  const result = ref({});
  function fetchData(wishId) {
    wishHistoryInfo(wishId).then((res) => {
      result.value = res;
      console.log(result.value);
    });
    // console.log("뭐야" + result.value);
  }
  return { result, fetchData };
});
