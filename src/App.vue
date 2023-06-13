<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>
<script setup>
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
</script>
