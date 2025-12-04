<template>
  <nav
    class="w-full px-6 py-3 transition-colors duration-500 bg-dark text-white"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="h-14">
        <img src="/icon.png" alt="logo" class="w-full h-full" />
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 text-lg gap-7 font-bold">
        <li>
          <a href="/#about" class="hover:text-golden transition">About</a>
        </li>
        <li>
          <a href="/#booking" class="hover:text-golden transition">Booking</a>
        </li>

        <li>
          <a href="/#packages" class="hover:text-golden transition">Packages</a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="open = !open"
        class="md:hidden cursor-pointer z-50 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="open"
      class="md:hidden flex mt-2 justify-around border-t items-center"
    >
      <a href="/#about" class="block px-4 py-2 hover:bg-golden/20 rounded"
        >About</a
      >
      <a href="/#booking" class="block px-4 py-2 hover:bg-golden/20 rounded"
        >Booking</a
      >
      <a href="/#packages" class="block px-4 py-2 hover:bg-golden/20 rounded"
        >Packages</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const open = ref(false);
const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 50; // يظهر اللون بعد scroll بسيط
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
