<template>
  <nav
    :class="[
      'absolute w-full z-50 top-0 transition-all duration-500 bg-dark/60 font-mono backdrop-blur-md shadow-md py-2',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="h-14 flex items-center">
        <img src="/icon.png" alt="logo" class="h-12 w-auto" />
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-10 text-lg font-semibold">
        <li><a href="/#about" class="nav-link">About</a></li>
        <li><a href="/#booking" class="nav-link">Booking</a></li>
        <li><a href="/#packages" class="nav-link">Packages</a></li>
      </ul>

      <!-- Mobile Button -->
      <button
        @click="open = !open"
        class="md:hidden focus:outline-none relative z-50"
      >
        <span
          class="block w-7 h-1 bg-white mb-1 transition"
          :class="open ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="block w-7 h-1 bg-white mb-1 transition"
          :class="open ? 'opacity-0' : ''"
        />
        <span
          class="block w-7 h-1 bg-white transition"
          :class="open ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-5"
    >
      <div
        v-if="open"
        class="md:hidden bg-dark/95 backdrop-blur-md text-white px-6 pb-4 flex flex-col gap-4 mt-4 rounded-b-xl"
      >
        <a @click="open = false" href="/#about" class="mobile-link">About</a>
        <a @click="open = false" href="/#booking" class="mobile-link"
          >Booking</a
        >
        <a @click="open = false" href="/#packages" class="mobile-link"
          >Packages</a
        >
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const open = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.nav-link {
  @apply text-white hover:text-golden transition-colors duration-300;
}

.mobile-link {
  @apply block text-lg py-2 font-medium hover:text-golden transition;
}
</style>
