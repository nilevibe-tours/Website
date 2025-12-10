<template>
  <div class="w-screen h-screen overflow-x-hidden bg-[#F8F1E5]">
    <NavMenu />
    <router-view class="min-h-screen"></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/UI/Footer.vue";
import NavMenu from "./components/UI/Nav-menu.vue";
</script>

<style></style>
