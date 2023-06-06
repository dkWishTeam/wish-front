import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getSearchWishPlaceList,
  getWishPlaceList,
} from "@/services/requestHandler";

export const wishPlaceStore = defineStore("wishPlace", () => {
  const wishPlaceList = ref([]);
  const selectedBtnIndex = ref(0);

  const updateWishPlace = async (path, start, size) => {
    const response = await getWishPlaceList(path, start, size);
    wishPlaceList.value = response;
  };

  const updateSearchWishPlace = async (search, start, size) => {
    const response = await getSearchWishPlaceList(search, start, size);
    wishPlaceList.value = response;
  };

  return {
    wishPlaceList,
    updateWishPlace,
    updateSearchWishPlace,
    selectedBtnIndex,
  };
});
