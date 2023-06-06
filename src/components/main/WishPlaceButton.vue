<template>
  <button v-bind:id="path" type="button" @click="handleClick" :class="btnStyle">
    {{ btnText }}
  </button>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { wishPlaceStore } from "@/store/wishPlace";

const props = defineProps({
  path: String,
  btnText: String,
  index: Number,
});

const store = wishPlaceStore();
const handleClick = () => {
  if (store.selectedBtnIndex !== props.index) {
    store.selectedBtnIndex = props.index;
    store.updateWishPlace(props.path, 0, 4);
    console.log(store.wishPlaceList);
  }
};

const btnStyle = computed(() => {
  if (store.selectedBtnIndex === props.index) {
    return "text-blue-700 hover:text-white border-4 border-blue-600 bg-white hover:bg-blue-700 rounded-full font-bold text-lg font-medium px-5 py-1.5 text-center mr-3 mb-3";
  } else {
    return "px-5 py-1.5 text-center mr-3 mb-3 border-2 border-gray-400 bg-white text-base rounded-full";
  }
});
</script>
