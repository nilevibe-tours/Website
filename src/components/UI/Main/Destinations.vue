<template>
  <section id="destinations " class="bg-light py-16 px-6 text-dark">
    <h3 class="text-2xl">Destinations</h3>
    <ul>
      <li v-for="idx in 10" :key="idx">Destination No.{{ idx }}</li>
    </ul>
  </section>
</template>

<script setup>
</script>

<style></style>
