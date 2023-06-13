<template>
  <Carousel :autoplay="4500">
    <slide v-for="slide in 3" :key="slide">
      <div class="carousel__item">
        <a v-bind:href="carousel[slide - 1].target">
          <img v-bind:src="carousel[slide - 1].imgSrc" />
        </a>
      </div>
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
const carousel = [
  { imgSrc: "/images/carousel1.png", target: "/wishCreate" },
  { imgSrc: "/images/carousel2.png", target: "/wishPlace" },
  { imgSrc: "/images/carousel3.png", target: "/wishes/129/wishHistories" },
];

{
  Carousel, Slide, Pagination, Navigation;
}
</script>

<style>
.carousel__item {
  min-height: 280px;
  width: 100%;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  border: 2px solid white;
  border-radius: 20px;
}
</style>
