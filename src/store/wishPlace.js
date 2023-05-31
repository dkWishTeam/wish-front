import { defineStore } from "pinia";
import { ref } from "vue";
import { getWishPlaceList } from "@/services/requestHandler";

export const wishPlaceStore = defineStore("wishPlace", () => {
  const wishPlaceList = ref([]);
  const selectedBtnIndex = ref(0);

  const updateWishPlace = async (path) => {
    // try {
    //   const response = await getWishPlaceList(path);
    //   wishPlaceList.value = response;
    //   console.log(wishPlaceList);
    // } catch (error) {
    //   console.error(error);
    // }
    const response = await getWishPlaceList(path);
    wishPlaceList.value = response;
    console.log(wishPlaceList);
  };

  return { wishPlaceList, updateWishPlace, selectedBtnIndex };
});
