<template>
  <div class="w-1/3 p-6">
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div class="rounded-lg w-full h-64">
        <router-link
          :to="{
            name: 'wishHistory',
            params: { wishId: props.wishId },
          }"
          class="relative w-full overflow-hidden bg-cover bg-no-repeat h-96"
        >
          <img
            class="w-full h-64 object-cover transition duration-300 ease-in-out hover:scale-110"
            :src="image"
            alt="default"
          />
        </router-link>
      </div>
      <div class="px-6 pb-10 pt-12">
        <h5 class="font-bold text-gray-600 text-lg mb-4">
          {{ props.title }}
        </h5>
        <a href="/">
          <h5 class="text-gray-500 text-sm">
            {{ props.productName }}
          </h5>
        </a>
        <p class="text-gray-500 text-sm">
          목표금액 :
          <span class="text-blue-700 font-bold"
            >{{ formatAmount(props.goalAmount) }} 원</span
          >
        </p>
      </div>
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
