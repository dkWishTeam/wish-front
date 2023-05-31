<script setup>
import { wishHistoryList } from "@/services/requestHandler";
import { ref, onMounted } from "vue";

const result = ref({});
onMounted(() => {
  wishHistoryList().then((response) => {
    result.value = response;
    console.log(result);
  });
});
</script>

<template></template>

<style scoped></style>
