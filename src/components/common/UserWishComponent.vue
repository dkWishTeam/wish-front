<template class="w-full">
  <div class="bg-white shadow border border-gray-300">
    <div class="w-full flex">
      <a href="/wishHistory" class="h-48 overflow-hidden block">
        <img
          class="w-full"
          src="../../../public/images/default.png"
          alt="default"
        />
      </a>
    </div>
    <div class="px-1.5">
      <h5
        class="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ props.title }}
      </h5>
      <a href="/">
        <h5
          class="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ props.productName }}
        </h5>
      </a>

      <p class="mb-1.5 font-normal text-gray-700 dark:text-gray-400">
        목표금액 :
        <span class="text-blue-700 font-bold"
          >{{ formatAmount(props.goalAmount) }} 원</span
        >
      </p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  wishId: Number,
  userId: Number,
  title: String,
  content: String,
  image: String,
  productName: String,
  goalAmount: Number,
});

const formatAmount = (value) => {
  return value.toLocaleString();
};
</script>
