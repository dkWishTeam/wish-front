import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getSearchWishPlaceList,
  getWishPlaceList,
  getWishPlaceListCount,
} from "@/services/requestHandler";

export const PAGE_COUNT = 9;

export const wishPlaceStore = defineStore("wishPlace", () => {
  const wishPlaceList = ref([]);
  const wishPlaceListCount = ref(0);
  const wishPlacePageCount = ref(1);

  const selectedBtnIndex = ref(0);

  const updateWishPlace = async (path, start, size) => {
    const response = await getWishPlaceList(path, start, size);
    wishPlaceList.value = response;
  };
  const updateWishPlaceCount = async (path) => {
    const response = await getWishPlaceListCount(path);
    wishPlaceListCount.value = response;
  };

  const updateSearchWishPlace = async (search, start, size) => {
    const response = await getSearchWishPlaceList(search, start, size);
    wishPlaceList.value = response;
  };

  return {
    wishPlaceList,
    wishPlaceListCount,
    wishPlacePageCount,
    updateWishPlace,
    updateSearchWishPlace,
    updateWishPlaceCount,
    selectedBtnIndex,
  };
});
