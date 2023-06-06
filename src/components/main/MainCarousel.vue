<template>
  <Carousel :autoplay="4000">
    <slide v-for="slide in 5" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

{
  Carousel, Slide, Pagination, Navigation;
}
</script>

<style>
.carousel__item {
  min-height: 350px;
  width: 100%;
  background-color: #b4d0fd;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
