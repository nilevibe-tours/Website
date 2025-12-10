<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-dark/60 backdrop-blur-lg transition-all duration-300"
  >
    <div class="flex items-center justify-between px-6 h-16">
      <router-link to="/" class="flex items-center">
        <img src="/icon.png" class="h-12 md:h-14 p-1" />
      </router-link>

      <ul class="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
        <li
          v-for="item in list"
          :key="item.name"
          class="text-light hover:text-[#fa0] transition"
        >
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>

      <button class="md:hidden flex flex-col gap-1" @click="state = !state">
        <span
          class="w-7 h-1 bg-light rounded transition"
          :class="state ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="w-7 h-1 bg-light rounded transition"
          :class="state ? 'opacity-0' : ''"
        />
        <span
          class="w-7 h-1 bg-light rounded transition"
          :class="state ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </div>

    <transition name="slide">
      <ul
        v-if="state"
        class="flex flex-col gap-8 py-10 text-center text-xl font-semibold bg-dark/70 backdrop-blur-xl md:hidden"
      >
        <li
          v-for="item in list"
          :key="item.name"
          class="text-light hover:text-[#fa0] transition cursor-pointer"
          @click="state = false"
        >
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const state = ref(false);

const list = ref(useRouter().options.routes.slice(0, -2));
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
