<template>
  <div
    v-if="result.wishHistoryRateDto?.percent == 0"
    class="w-full px-5 py-3 rounded-xl"
  >
    {{ result.msg }}
  </div>
  <div
    id="progressBarBox"
    v-else
    class="w-full clear-both pt-12 px-7 pb-10 shadow rounded-lg"
  >
    {{ data }}
    <div class="flex items-center justify-between mb-3 pr-16">
      <span
        class="text-xl font-bold text-base text-yellow-500 dark:text-yellow-500 mr-4"
        v-text="formattedPercent"
      >
      </span>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
        <div
          class="bg-yellow-500 h-2.5 rounded-full"
          :class="{ 'animate-fill': isAnimated }"
          :style="fillAnimation"
        ></div>
        <!--        <i th:if="|${rate.percent>=100}|" class="fa-solid fa-thumbs-up"></i>-->
      </div>
    </div>
    <div class="bg-yellow-50 px-5 py-3 rounded-xl">
      <p v-html="cheerUpPhrase"></p>
    </div>
  </div>
</template>

<script setup>
import { wishHistoryInfoStore } from "@/store/wishHistoryInfo";
import { ref, computed, defineProps, watchEffect, defineEmits } from "vue";
import { storeToRefs } from "pinia";

const percent = ref("");
const cheerUpPhrase = ref("");

const props = defineProps({
  wishId: { type: Number, default: 122 },
});

const store = wishHistoryInfoStore();
const { result } = storeToRefs(store);

store.$subscribe(() => {
  const storeResult = store.result;
  percent.value = storeResult.wishHistoryRateDto.percent;
  cheerUpPhrase.value = storeResult.wishHistoryRateDto.cheerUpPhrase;
});

const formattedPercent = computed(() => {
  return percent.value > 100 ? "100%" : percent.value + "%";
});

const isAnimated = ref(false);
const fillAnimation = computed(() => {
  return isAnimated.value ? `width: ${formattedPercent.value};` : "";
});

watchEffect(() => {
  if (formattedPercent.value !== "0%") {
    isAnimated.value = true;
    emit("updatePercent", percent.value);
  } else {
    isAnimated.value = false;
  }
});

let emit = defineEmits(["updatePercent"]);
</script>

<style scoped>
@keyframes fill {
  from {
    width: 0%;
  }
  to {
    width: 28%;
  }
}

.animate-fill {
  animation: fill 1s ease-in-out;
}
</style>
