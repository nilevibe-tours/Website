<template>
  <div class="relative">
    <hero />
    <about />
    <bookingForm />
    <destinations />
    <mainFooter />
    <button
      class="absolute z-50 right-4 top-4 cursor-pointer select-none bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300 hover:bg-white/30 shadow-md"
      @click="store.toggleLang"
    >
      {{ store.current.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import Hero from "../UI/Main/Hero.vue";
import About from "../UI/Main/About.vue";
import BookingForm from "../UI/Main/Booking-form.vue";
import Destinations from "../UI/Main/Packages-list.vue";
import MainFooter from "../UI/Main/Footer.vue";
import { useMainStore } from "../../stores/main";
const store = useMainStore();
</script>
