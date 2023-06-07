<template>
  <div class="bg-white">
    <div class="w-full">
      <router-link
        :to="{
          name: 'wishHistory',
          params: { wishId: props.wishId },
        }"
        class="block"
      >
        <img
          class="w-full"
          src="../../../public/images/default.png"
          alt="default"
        />
      </router-link>
    </div>
    <div class="px-1.5">
      <router-link
        :to="{
          name: 'wishHistory',
          params: { wishId: props.wishId },
        }"
      >
        <h5
          class="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ props.productName }}
        </h5>
      </router-link>

      <p class="mb-1.5 font-normal text-gray-400 dark:text-gray-400">
        {{ props.nickname }}
      </p>
      <p class="mb-1.5 font-normal text-gray-700 dark:text-gray-400">
        목표금액 :
        <span class="text-blue-700 font-bold"
          >{{ formatAmount(props.targetAmount) }} 원</span
        >
      </p>
      <p class="mb-1.5 font-normal text-gray-700 dark:text-gray-400">
        달성률 :
        <span class="text-blue-700 font-bold">{{ props.percentage }} %</span>
      </p>
      <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">
        모금액 :
        <span class="text-blue-700 font-bold"
          >{{ formatAmount(props.amount) }} 원</span
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
  nickname: String,
  imgSrc: String,
  productName: String,
  percentage: Number,
  targetAmount: Number,
  amount: Number,
});

const formatAmount = (value) => {
  return value.toLocaleString();
};
</script>
