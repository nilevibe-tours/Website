<template>
  <section class="relative w-screen h-screen overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/hero.mp4" type="video/mp4" />
      <!-- Your browser does not support the video tag. -->
    </video>

    <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

    <div
      class="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center h-full px-4 text-center text-white"
    >
      <h1 class="text-4xl md:text-6xl font-bold line-clamp-3 drop-shadow-lg">
        Discover Egypt with
        <span class="text-golden truncate font-sans">NileVibe Tours</span>
      </h1>
      <p class="text-sm md:text-2xl my-6 drop-shadow-md">
        From the Nubian villages to the magnificent temples of Karnak, embark on
        a journey through Egypt's timeless wonders. Your adventure starts here!
      </p>

      <a
        href="#booking"
        class="px-6 py-3 text-xl bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition"
      >
        Book now!
      </a>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
