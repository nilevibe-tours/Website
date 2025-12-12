<template>
  <section class="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">
    <!-- Images Slider -->
    <div
      class="absolute inset-0 w-full h-full flex transition-transform duration-700"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full h-full flex-shrink-0 relative"
      >
        <img
          :src="image"
          class="absolute inset-0 w-full h-full object-cover"
          alt="Nile Vibe Hero Image"
        />
      </div>
    </div>

    <!-- Text Overlay -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
        Welcome to <span class="text-[#CBA135]">Nile Vibe</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 max-w-2xl">
        Discover Egypt’s most breathtaking destinations with tailored 5-star
        tours.
      </p>
      <router-link
        to="/tours"
        class="mt-6 px-10 py-3 bg-[#CBA135] text-dark rounded-full font-semibold text-lg hover:bg-[#e5b658] transition-transform duration-300 hover:-translate-y-1 shadow-xl"
      >
        Explore Tours
      </router-link>
    </div>

    <!-- Dots Navigation -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="{
          'w-3 h-3 rounded-full cursor-pointer': true,
          'bg-[#CBA135]': currentIndex === index,
          'bg-white/50': currentIndex !== index,
        }"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const images = [
  "/assets/hero.webp",
  "/assets/hero2.webp",
  "/assets/hero3.webp",
  "/assets/hero4.webp",
];
const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {

  interval = setInterval(nextSlide, 2500);
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style></style>
