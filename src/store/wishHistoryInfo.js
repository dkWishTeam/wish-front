import { defineStore } from "pinia";
import { wishHistoryInfo } from "@/services/requestHandler";
import { ref } from "vue";

export const wishHistoryInfoStore = defineStore("wishHistory", () => {
  const result = ref({});
  async function fetchData(wishId) {
    const response = await wishHistoryInfo(wishId);
    result.value = response;
  }
  return { result, fetchData };
});
