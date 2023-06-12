import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserWish } from "@/services/requestHandler";

export const getWishStore = defineStore("wishStore", () => {
  const result = ref({});
  const prevData = ref({});
  const getUserWishData = async (wishId) => {
    result.value = await getUserWish(localStorage.getItem("id"), wishId);
  };

  return { result, getUserWishData, prevData };
});
