<template>
  <div class="w-screen h-screen overflow-x-hidden scroll-smooth relative">
    <NavBar />
    <router-view :key="$route.fullPath"></router-view>
    <MainFooter />
  </div>
</template>

<script setup>
import "primeicons/primeicons.css";
import NavBar from "./components/UI/nav-bar.vue";
import MainFooter from "./components/UI/Main/Footer.vue";
</script>

<style></style>
